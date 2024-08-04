import React, { useEffect, useState } from "react";

import TableList from "./TableList";
import Loading from "../../utils/Loading/Loading";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const [loadedData, setLoadedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://crud-operations-vtnz.onrender.com/api/`
        );
        const responseData = await response.json();
        setLoadedData(responseData.users);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);

  const handleDelete = (id) => {
    setLoadedData((prevData) => prevData.filter((user) => user.id !== id));
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="app">
          <div className="add-button">
            <button className="edit-button" onClick={() => navigate("/add")}>
              {" "}
              Add Employee
            </button>
          </div>
          <table className="centered-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Email</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {loadedData.length === 0 ? (
                <tr>
                  <td colSpan="6">
                    There is no data,{" "}
                    <span
                      onClick={() => {
                        navigate("/adduser");
                      }}
                    >
                      Click here{" "}
                    </span>{" "}
                    to add
                  </td>
                </tr>
              ) : (
                loadedData.map((user) => (
                  <TableList
                    id={user.id}
                    id_to_display={loadedData.indexOf(user) + 1}
                    name={user.name}
                    salary={user.salary}
                    email={user.email}
                    onDelete={handleDelete}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default HomePage;
