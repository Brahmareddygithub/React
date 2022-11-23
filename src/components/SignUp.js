import { useState } from "react";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

function SignUp() {
  const [registerData, setRegisterData] = useState({
    name: "",
    password: "",
    email: "",
    nameError: "",
  });

  let navigate = useNavigate();

  const { name, email, password, nameError } = registerData;

  const handleChangeValue = (event) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
      nameError: "",
    }));
  };

  const handleSubmit = async () => {
    try {
      if (name.length <= 0 || password.length <= 0 || email.length <= 0) {
        setRegisterData((prevState) => ({
          ...prevState,
          nameError: "Please Enter Valid Values and Should not be empty",
        }));
      } else {
        const result = await axios.post(
          "http://localhost:3030/api/accounts/signup",
          {
            email: email,
            name: name,
            password: password,
          }
        );
        if (result.data.success) {
          console.log("sample");
          return navigate("/home");
        } else {
          setRegisterData((prevState) => ({
            ...prevState,
            nameError: result.data.message,
          }));
        }
      }
    } catch (error) {
      setRegisterData((prevState) => ({
        ...prevState,
        nameError: "Something Went Wrong Please try again !!",
      }));
    }
  };

  return (
    <div className="textCenter">
      <h1>Welcome to SignUp Page</h1>
      <div className="textCenter1">
        <input
          className="textBox"
          type="text"
          placeholder="Enter the name"
          value={name}
          name="name"
          onChange={handleChangeValue}
        />
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
          Register
        </button>
      </div>
    </div>
  );
}

export default SignUp;