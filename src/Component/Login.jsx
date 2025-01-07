import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const [inputUsName, setInputUsName] = useState();
    const [inputPass1, setInputPass1] = useState();
    const [inputMsg, setInputMsg] = useState();

    const navi = useNavigate()

    const nav=()=>{
        navi('./dash')
    }

    const handleClick = (e) => {
        e.preventDefault();

        const Data = {
            userName: inputUsName,
            userPass1: inputPass1,
        }
        const check = JSON.parse(localStorage.getItem(`${inputUsName}`))

        if (check.userName == inputUsName && check.userPass1 == inputPass1) {
            nav()
        } else {
            setInputMsg('invalid username or password')
        }
    }

    return (
        <div className='form-container'>
            <h1>Login</h1>
            <form>
                <label htmlFor="username">Username  <g>*</g></label>
                <input type="text" id='username' placeholder='Enter Name' required onChange={(e) => setInputUsName(e.target.value)} />
                <label htmlFor="pass">Password  <g>*</g></label>
                <input type="password" id='pass' placeholder='Enter Password' required onChange={(e) => setInputPass1(e.target.value)} />
                <input type="submit" onClick={(e) => handleClick(e)} className='reg-btn' />
                <p>You don't have an account create a account</p>
                <p>{inputMsg}</p>
                <NavLink onClick={() => navi('./Register')}><p>create a new Account</p></NavLink>
            </form>
        </div>
    )
}

export default Login