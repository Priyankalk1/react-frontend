import React, {useState,setState, Component} from 'react';
import './style.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { render } from '@testing-library/react';

const AddUserComponent = (props) => {
    // const navigate = useNavigate();
    const baseURL = "http://localhost:3001/api/v1/auth/signup";
    const URL = 'api/v1/auth/signup';

    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [middleName, setMiddleName] = React.useState("");
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [dateOfBirth, setDateOfBirth] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [role,setRole] = React.useState("");
    const [password,setPassword] = React.useState("");

    const handleFirstNameChange = event => setFirstName(event.target.value);
    const handleLastNameChange = event => setLastName(event.target.value);
    const handleMiddleNameChange = event => setMiddleName(event.target.value);
    const handlePhoneNumberChange = event => setPhoneNumber(event.target.value);
    const handleEmailChange = event => setEmail(event.target.value);
    const handleAddressChange = event => setAddress(event.target.value);
    const handleDOBChange = event => setDateOfBirth(event.target.value);
    const handleGenderChange = event => setGender(event.target.value);
    const handleRoleChange = event => setRole(event.target.value);
    const handlePasswordChange = event => setPassword(event.target.value);

     async function sampleFunc(toInput){
        alert(toInput.firstName+", "+toInput.lastName+", "+toInput.middleName+", "+toInput.phoneNumber+", "+toInput.email+", "+toInput.address+", "+toInput.dateOfBirth+", "+toInput.gender+", "+toInput.role+", "+toInput.password);
        //await axios.post(baseURL, toInput);

      //working cocde
    //   await axios.post(baseURL, {
    //     firstName: toInput.firstName,
    //     lastName: toInput.lastName,
    //     middleName:toInput.middleName,
    //     phoneNumber:toInput.phoneNumber,
    //     email:toInput.email,
    //     address:toInput.address,
    //     dateOfBirth:toInput.dateOfBirth,
    //     gender:toInput.gender,
    //     role:toInput.role,
    //     password:toInput.password
    //   })
    //   .then((response) => {
    //     console.log("sucess : "+response.data);
    //     alert("Registered sucessfully !!!");
    //   }).catch(function (error) {

    //     alert(firstName+", "+lastName+", "+middleName+", "+phoneNumber+", "+email+", "+address+", "+dateOfBirth+", "+gender+", "+role+", "+password);
    //     console.log("axios error message"+error);
    //   });

    //trying
    await axios.post(baseURL, {
        firstName: toInput.firstName,
        lastName: toInput.lastName,
        middleName:toInput.middleName,
        phoneNumber:toInput.phoneNumber,
        email:toInput.email,
        address:toInput.address,
        dateOfBirth:toInput.dateOfBirth,
        gender:toInput.gender,
        role:toInput.role,
        password:toInput.password
      })
      .then((response) => {
        console.log("sucess : "+response.data.token);
        if(response.data.token)
        {
            localStorage.setItem(email, JSON.stringify(response.data.token));
        }
        alert("JWT : "+response.data.token);
        alert("Registered sucessfully !!!");
        return response.data;
      }).catch(function (error) {

        alert(firstName+", "+lastName+", "+middleName+", "+phoneNumber+", "+email+", "+address+", "+dateOfBirth+", "+gender+", "+role+", "+password);
        console.log("axios error message"+error);
      });
    	
    }

    const handleSubmit = variables => {
        console.log("inside handle submit");
        alert("Firstname"+firstName);
        const toInput = {firstName,lastName,middleName,phoneNumber,email,address,dateOfBirth,gender,role,password};
        sampleFunc(toInput);
        setFirstName("");
        setLastName("");
        setMiddleName("");
        setPhoneNumber("");
        setEmail("");
        setAddress("");
        setDateOfBirth("");
        setGender("");
        setRole("");
        setPassword("");
    };


 const routeChange=()=> {
    window.open('/login');
  }

    return(
        <div className="form">
            <div className="form-body">
            
                <div className="firstName">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName}  id="firstName" onChange ={handleFirstNameChange} placeholder="First Name"/>
                </div>
                <div className="lastName">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {handleLastNameChange} placeholder="LastName"/>
                </div>
                <div className="middleName">
                    <label className="form__label" for="middleName">Middle Name </label>
                    <input  type="text" name="" id="middleName" value={middleName}  className="form__input" onChange = {handleMiddleNameChange} placeholder="Middle Name"/>
                </div>
                <div className="phoneNumber">
                    <label className="form__label" for="phoneNumber">Phone Number </label>
                    <input  type="text" id="phoneNumber" className="form__input" value={phoneNumber} onChange = {handlePhoneNumberChange} placeholder="Phone Number"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {handleEmailChange} placeholder="Email"/>
                </div>
                <div className="address">
                    <label className="form__label" for="address">Address </label>
                    <input  type="text" id="address" className="form__input" value={address} onChange = {handleAddressChange} placeholder="Address"/>
                </div>
                <div className="dateOfBirth">
                    <label className="form__label" for="dateOfBirth">Date Of Birth </label>
                    <input  type="text" id="dateOfBirth" className="form__input" value={dateOfBirth} onChange = {handleDOBChange} placeholder="Date Of Birth"/>
                </div>
                <div className="gender">
                    <label className="form__label" for="gender">Gender</label>
                    <input  type="text" id="gender" className="form__input" value={gender} onChange = {handleGenderChange} placeholder="Gender"/>
                </div>
                <div className="role">
                    <label className="form__label" for="role">Role </label>
                    <input className="form__input" type="text" id="role" value={role} onChange = {handleRoleChange} placeholder="Role"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" value={password} onChange = {handlePasswordChange} placeholder="Password"/>
                </div>
            </div>
            <div class="footer">
                <button  type="submit" onClick={handleSubmit} class="btn">Register</button>
                <button  type="submit" onClick={routeChange} class="btn">Login</button>
            </div>
        </div>
       
    )
}

export default AddUserComponent;