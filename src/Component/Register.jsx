import { useState } from "react";
import '../css/Register.css'
import { useNavigate } from "react-router-dom";
const Register = () => {
    const navi=useNavigate()

    const [inputUsName, setInputUsName] = useState();
    const [inputName, setInputName] = useState();
    const [inputPhone, setInputPhone] = useState();
    const [inputMail, setInputMail] = useState();
    const [inputPass1, setInputPass1] = useState();

    const handleClick = (e) => {
        e.preventDefault();

        navi(-1)
        const Data = {
            name:inputName,
            userName: inputUsName,
            userPhone:inputPhone,
            userMail:inputMail,
            userPass1: inputPass1,
        }
        localStorage.setItem(`${inputUsName}`,JSON.stringify(Data))

        console.log(Data)
    
    }

    return (
        <div className='form-container'>
            <h1>Create new Account</h1>
            <form>
                <label htmlFor="username2">Username <h5 style={{display:'inline'}}>*</h5></label>
                <input type="text" id='username2' placeholder='Enter Username' required onChange={(e) => setInputUsName(e.target.value)} />
                <label htmlFor="name">Name  <h5 style={{display:'inline'}}>*</h5></label>
                <input type="text" id='name' placeholder='Enter Name' required onChange={(e) => setInputName(e.target.value)} />
                <label htmlFor="phoneno">Phone number  <h5 style={{display:'inline'}}>*</h5></label>
                <input type="number" id='phoneno' placeholder='Enter Phoneno.' required onChange={(e) => setInputPhone(e.target.value)} />
                <label htmlFor="email">Email  <h5 style={{display:'inline'}}>*</h5></label>
                <input type="email" id='email' placeholder='Enter email' required onChange={(e) => setInputMail(e.target.value)} />
                <label htmlFor="pass1">Password  <h5 style={{display:'inline'}}>*</h5></label>
                <input type="password" id='pass1' placeholder='Enter Password' required onChange={(e) => setInputPass1(e.target.value)} />
                <input type="submit" onClick={(e) =>handleClick(e)} className="reg-btn" />
            </form>
        </div>
    )
}

export default Register