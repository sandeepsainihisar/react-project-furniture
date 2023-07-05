import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Left from './Left';
// import Dashboard from './Dashboard';
function Category() {

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
      navigate('/Login')
    }
  }

  useEffect(() => {
    callAboutpage();
  },
    []);
  return (

    <div>




      <div class="container">
        <div class="row">
          <div class="col-3">
            {<Left />}
          </div>
          <div class="col-9">

          <table className="table">
      <thead>
        <tr>
          <th scope="col">S.No</th>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <tr>
              <td>{userData.id}</td>
              <td>{userData.name}</td>
              <td>{userData.email}</td>
              <td>{userData.phone}</td>
              <td>{userData.message}</td>
            </tr>
        </tr>
        {/* {Category.map((category, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{category.id}</td>
            <td>{category.name}</td>
          </tr>
        ))} */}
      </tbody>
    </table>

          </div>

        </div>
      </div>

    </div>
  );
}

export default Category;
