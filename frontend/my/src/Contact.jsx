import React, { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
function Contact() {


  const [userData, serUserData] = useState({ firstname: "", email: "", phone: "", message: "" });
  const userContact = async () => {
    try {
      const res = await fetch('/getdata', {
        method: "GET",
        headres: {

          "Content-Type": "application/json"
        },

      });
      const data = await res.json();
      console.log(data);
      serUserData({ ...userData, firstname: data.firstname, email: data.email, phone: data.phone });
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    userContact();
  },
    []);


  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    serUserData({ ...userData, [name]: value });

  }
  const contactForm = async (e) => {
    e.preventDefault();
    const { firstname, email, phone, message } = userData;
    const res = await fetch('/contact', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstname, email, phone, message
      })

    });
    const data = await res.json();
    if (!data) {
      console.log("message send");
    }
    else {
      alert("message send");
      serUserData({ ...userData, message: "" });
    }
  }



  return (
    <>

      <div class="container mt-3">
        <h2>Contact form</h2>
        <form method='POST'>
          <div class="mb-3 mt-3">
            <label for="name">Name:</label>
            <input type="text" class="form-control" id="name" value={userData.firstname} onChange={handleInputs}
              placeholder="Enter name" name="firstname" />

          </div>
          <div class="mb-3">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email"
              value={userData.email} onChange={handleInputs}
              placeholder="Enter email" name="email" />

          </div>
          <div class="mb-3">
            <label for="phone">Phone</label>
            <input type="text" class="form-control"
              value={userData.phone} onChange={handleInputs}

              placeholder="Enter phone" name="phone" />

          </div>
          <div class="mb-3 mt-3">
            <label for="comment">Comments:</label>
            <textarea class="form-control" rows="5" id="comment"
              value={userData.message} onChange={handleInputs} name="message"></textarea>
          </div>

          <input type="submit" name="submit" class="btn btn-primary" onClick={contactForm} />
        </form>
      </div>
    </>
  )
}
export default Contact;