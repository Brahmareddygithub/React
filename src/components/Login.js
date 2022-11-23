import { useState } from "react";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

function Login() {
  const [loginData, setLoginData] = useState({
    password: "",
    email: "",
    nameError: "",
  });

  let navigate = useNavigate();

  const { email, password, nameError } = loginData;

  const handleChangeValue = (event) => {
    setLoginData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
      nameError: "",
    }));
  };

  const handleSubmit = async () => {
    try {
      if (password.length <= 0 || email.length <= 0) {
        setLoginData((prevState) => ({
          ...prevState,
          nameError: "Please Enter Valid Values and Should not be empty",
        }));
      } else {
        const result = await axios.post(
        "http://localhost:3030/api/accounts/login",
          {
            email: email,
            password: password,
          }
        );
        if (result.data.success) {
          return navigate("/home");
        }
        else{
            setLoginData((prevState) => ({
                ...prevState,
                nameError: result.data.message,
              })); 
        }
      }
    } catch (error) {
        setLoginData((prevState) => ({
        ...prevState,
        nameError: "Something Went Wrong Please try again !!",
      }));
    }
  };

  return (
    <div className="textCenter">
      <h1>Welcome to Login Page</h1>
      <div className="textCenter1">
        <input
          className="textBox"
          type="email"
          placeholder="Enter the email"
          value={email}
          name="email"
          onChange={handleChangeValue}
        />
        <input
          className="textBox"
          type="password"
          placeholder="Enter the password"
          value={password}
          name="password"
          onChange={handleChangeValue}
        />
        {nameError.length > 0 && <div className="textError">{nameError}</div>}
        <button className="textButton" onClick={handleSubmit}>
          LogIn
        </button>
      </div>
    </div>
  );
}

export default Login