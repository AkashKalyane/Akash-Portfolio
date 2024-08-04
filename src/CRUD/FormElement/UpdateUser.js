import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_NUMBER,
  VALIDATOR_MINLENGTH,
} from "../../utils/Validator/validators";
import Loading from "../../utils/Loading/Loading";
import Input from "./Input";
import { useForm } from "../../utils/Hook/useForm";
import "./NewUser.css";

function UpdateUser() {
  const navigate = useNavigate();
  const userId = useParams().userId;
  const [isLoading, setIsLoading] = useState(true);
  const [loadedUser, setLoadedUser] = useState();

  const [formState, InputHandler, setFormData] = useForm({
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
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(
          `https://crud-operations-vtnz.onrender.com/api/user/${userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }
        const responseData = await response.json();
        setLoadedUser(responseData.user);
        setFormData(
          {
            name: {
              value: responseData.user.name,
              isValid: true,
            },
            email: {
              value: responseData.user.email,
              isValid: true,
            },
            salary: {
              value: responseData.user.salary,
              isValid: true,
            },
          },
          true
        );
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUser();
  }, [userId, setFormData]);

  async function updateHandler(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://crud-operations-vtnz.onrender.com/api/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formState.inputs.name.value,
            email: formState.inputs.email.value,
            salary: formState.inputs.salary.value,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update user");
      }

      navigate(-1);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <form className="user-form" onSubmit={updateHandler}>
          <h2>Update Details</h2>
          <Input
            id="name"
            label="Name:"
            type="text"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid name"
            onInput={InputHandler}
            initialValue={loadedUser.name}
            initialValid={true}
          />
          <Input
            id="email"
            label="Email:"
            type="email"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email"
            onInput={InputHandler}
            initialValue={loadedUser.email}
            initialValid={true}
          />
          <Input
            id="salary"
            label="Salary:"
            type="number"
            validators={[VALIDATOR_NUMBER(), VALIDATOR_MINLENGTH(4)]}
            errorText="Please enter a valid salary"
            onInput={InputHandler}
            initialValue={loadedUser.salary}
            initialValid={true}
          />
          <div className="buttons">
            <button
              className="form-button"
              onClick={() => {
                navigate(-1);
              }}
            >
              Cancel
            </button>
            <button
              className="form-button"
              type="submit"
              disabled={!formState.isValid}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default UpdateUser;
