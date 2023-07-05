import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
// import userpic from './user_pic.png';
// import userpic2 from './user.pic2.png';


function Userprofile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const callAboutpage = async () => {
    try {
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);
      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate('/Loginform')
    }
  }

  useEffect(() => {
    callAboutpage();
  },
    []);
  return (
    <>
      <div class="container mt-3">
        <h2>{userData.firstname}</h2>
        <br />
        {/* <img src={userData.name==="jiya"?  userpic:userpic2 }></img> */}

        <table class="table table-dark">

          <tbody>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Message</td>
            </tr>
            <tr>
              <td>{userData.firstname}</td>
              <td>{userData.lastname}</td>
              <td>{userData.email}</td>
              <td>{userData.phone}</td>
              <td>{userData.message}</td>
            </tr>

          </tbody>
        </table>
      </div>

    </>
  )
}
export default Userprofile;