import React from 'react'
import './LoginForm.css';
import { FaUserAlt } from "react-icons/fa";
import { CiLock } from "react-icons/ci";

const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className='input-box'>
                <input type="text" placeholder='Username' required/>
                <FaUserAlt className='icon'/>
            </div>
            <div className='input-box'>
                <input type="password" placeholder='Password' required/>
                <CiLock className='icon'/>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>
        </form>
    </div>
  )
}

export default LoginForm