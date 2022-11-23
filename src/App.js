import "./App.css";
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
