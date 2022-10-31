import React, {useState,setState, Component} from 'react';
import './style.css'
import axios from "axios";

function Login() {

    const baseURL = "http://localhost:3001/api/v1/auth/login";
    const [email, setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");

    const handleEmailChange = event => setEmail(event.target.value);
    const handlePasswordChange = event => setPassword(event.target.value);

    async function sampleFunc(toInput){
        const token = JSON.parse(localStorage.getItem(toInput.email));
        alert("token : "+token);
        await axios.post(baseURL, {
            email:toInput.email,
            password:toInput.password
          }, { headers: {"Authorization" : `Bearer ${token}`} })
          .then((response) => {
            console.log("sucess : "+response.data.token);
            // if(response.data.token)
            // {
            //     localStorage.setItem("user", JSON.stringify(response.data.token));
            // }
            alert("JWT : "+response.data.token);
            alert("Login sucessfully !!!");
            return response.data;
          }).catch(function (error) {
            //alert(firstName+", "+lastName+", "+middleName+", "+phoneNumber+", "+email+", "+address+", "+dateOfBirth+", "+gender+", "+role+", "+password);
            console.log("axios error message"+error);
            alert("Please check your email and password");
          });
    }

    const handleLogin = variables => {
        console.log("inside login ");
        alert("Email"+email);
        const toInput = {email,password};
        sampleFunc(toInput);
    }
    
    return(
        <div className="form">
            <div className="form-body">
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {handleEmailChange} placeholder="Email"/>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {handlePasswordChange} placeholder="Password"/>
                </div>
            </div>
            <div class="footer">
                <button  type="submit" onClick={handleLogin} class="btn">Login</button>
            </div>
        </div>
        </div>
       
    )       
}

export default Login;