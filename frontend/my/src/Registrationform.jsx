// import React from "react";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from 'axios';



function Registrationform() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        firstname: "", lastname: "", email: "", phone: "", password: "", confirmpassword: ""

    });
    let name, value;
    const handleInput = (e) => {
        console.log(e);
        name = e.target.name; //name
        value = e.target.value;
        setUser({ ...user, [name]: value });//name

    }

    const postData = async (e) => {
        e.preventDefault();
        const { firstname, lastname, email, phone, password, confirmpassword } = user;

        const res = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstname, lastname, email, phone, password, confirmpassword
            })
        });
        const data = await res.json();
        if (data.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid registartion");
        } else {
            window.alert("Valid Registrations");
            navigate("/Loginform");
        }
    }



    //function Registrationform() {
    return (
        <>


            <div class="container mt-5">
                <h2>Registration Form</h2>
                <form method="post" enctype="multipart/form-data"> 
                    <div class="form-group">
                        <label for="firstName">First Name:</label>
                        <input type="text" class="form-control" id="firstNameReg" placeholder="Enter your first name" name="firstname" value={user.firstname} onChange={handleInput}  />
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name:</label>
                        <input type="text" class="form-control" id="lastNameReg" placeholder="Enter your last name" name="lastname" value={user.lastname} onChange={handleInput}  />
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" id="emailReg" placeholder="Enter your email" name="email" value={user.email} onChange={handleInput}  />
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone:</label>
                        <input type="text" class="form-control" id="phoneReg" placeholder="Enter your phone number" name="phone" value={user.phone} onChange={handleInput}  />
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" class="form-control" id="passwordReg" placeholder="Enter your password" name="password" value={user.password} onChange={handleInput}  />
                    </div>
                    <div class="form-group">
                        <label for="confirmPassword">Confirm Password:</label>
                        <input type="password" class="form-control" id="confirmPasswordReg" placeholder="Confirm your password" name="confirmpassword" value={user.confirmpassword} onChange={handleInput} required />
                    </div>
                    <button type="submit" onClick={postData} class="btn btn-primary">Submit</button>
                </form>
            </div>

        </>
    )
}

export default Registrationform;