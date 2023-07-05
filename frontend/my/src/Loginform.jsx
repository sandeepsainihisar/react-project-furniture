import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';

function Loginform() {
    const navigate = useNavigate();
    const [user,setUser]=useState({
        email:'', password:''
    });
    let name,value;
    const handleInputs=(e)=>{
    console.log(e);
    name= e.target.name;
    value= e.target.value;
    setUser({...user,[name]:value});
    }

    
    const postData=async(e) =>{
      e.preventDefault();
      const {email, password}=user;

      const res=await  fetch("/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email,password,
        }),
      });
      const data=await res.json();
      //parse the response as JSON
      if(data.status === 422 || !data ){
        window.alert("invalid register");
        console.log("invalid register");
      }
      else{
        window.alert("valid register");
        console.log("valid register");
        //https://v5.reactrouter.com/web/api/Hooks
        navigate("/userprofile");
      }
    // if(res.status === 400 || !data.success ){
    //     window.alert("invalid credentials");
    //     console.log("invalid credentials");
    //   }
    //   else{
    //     window.alert("Login Succesfully");
    //     console.log("valid credentials");
    //     //https://v5.reactrouter.com/web/api/Hooks
    //     navigate("/userprofile");
    //   }
    }
    return (
        
        <>
            <center>
                <form method="post">

                    <h3>Ready to Login</h3>

                    <div class="form-group">
                        <input type="email" name="email" placeholder="Email" class="form-input"  value={user.email} onChange={handleInputs}/>
                        <div class="input-icon">
                            <i class="fas fa-user"></i>
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="password" name="password" placeholder="Password" class="form-input" value={user.password} onChange={handleInputs}/>
                        <div class="input-icon">
                            <i class="fas fa-user-lock"></i>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-success mt-3" onClick={postData}>Login</button>
                </form>
            
           
            <a href="/Registrationform" class="btn btn-info me-1 mt-2">Creat an account</a>
           
            <a href="/Forgetpasswordform" class="btn btn-danger mt-2">Forgot Password</a>
            </center>



        </>
    )
}

export default Loginform;