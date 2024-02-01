import React,{ useContext, useState } from "react";
import style from "../style/login.module.css"
import { MainContext } from "../context/MainContext";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar"
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const { login } = useContext(MainContext);
  return (
    <>
    <Navbar></Navbar>
    <h1>Log In</h1>

<div className={style.loginContainer}>
    <div>
        <input type="text"
            required
            id="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            />
        <input   type="password"
            required
            id="password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}/>
    <button
          onClick={() => {
            if (username === "" && password === "") {
              toast.warning("Please enter your username and password", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            } else {
              login(username, password);
            }
          }}
        >
          Login
        </button>
    </div>
</div>
    </>
  )
}

export default Login