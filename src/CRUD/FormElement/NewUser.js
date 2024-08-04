import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Loading from "../../utils/Loading/Loading";
import Input from "./Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_NUMBER,
  VALIDATOR_MINLENGTH,
} from "../../utils/Validator/validators";
import { useForm } from "../../utils/Hook/useForm";
import "./NewUser.css";

function NewUser() {
  const [isLoading, setIsLoading] = useState(false);
  const [formState, InputHandler] = useForm({
    inputs: {
      name: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      salary: {
        value: null,
        isValid: false,
      },
    },
    isValid: false,
  });
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://crud-operations-vtnz.onrender.com/api/`,
        {
          method: "POST",
          body: JSON.stringify({
            name: formState.inputs.name.value,
            email: formState.inputs.email.value,
            salary: formState.inputs.salary.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to submit form.");
      }
      setIsLoading(false);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <form className="user-form" onSubmit={submitHandler}>
      <h2>Empolye Form</h2>
      <Input
        id="name"
        label="Name:"
        type="text"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid name"
        onInput={InputHandler}
      />
      <Input
        id="email"
        label="email:"
        type="email"
        validators={[VALIDATOR_EMAIL()]}
        errorText="Please enter a valid email"
        onInput={InputHandler}
      />
      <Input
        id="salary"
        label="salary"
        type="number"
        validators={[VALIDATOR_NUMBER(), VALIDATOR_MINLENGTH(4)]}
        errorText="Please enter a valid salary"
        onInput={InputHandler}
      />
      <div className="buttons">
        <button
          type="submit"
          className="form-button"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="form-button"
          disabled={!formState.isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default NewUser;
