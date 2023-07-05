import React from 'react';

import Left from './Left';
// import Dashboard from './Dashboard';
function Staff() {





  return (

    <div>




      <div class="container">
        <div class="row">
          <div class="col-3">
            {<Left />}
          </div>
          <div class="col-9">

            <h2>Staff</h2>
            <h1>Staff Table</h1>
            
            <form>
      <div class="mb-3">
        <label for="sno" class="form-label">S.No</label>
        <input type="text" class="form-control" id="sno" placeholder="Enter S.No"/>
      </div>
      <div class="mb-3">
        <label for="id" class="form-label">Id</label>
        <input type="text" class="form-control" id="id" placeholder="Enter Id"/>
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter Name"/>
      </div>
      <div class="mb-3">
        <label for="contact" class="form-label">Contact No</label>
        <input type="text" class="form-control" id="contact" placeholder="Enter Contact No"/>
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">Address</label>
        <input type="text" class="form-control" id="address" placeholder="Enter Address"/>
      </div>
      <div class="mb-3">
        <label for="region" class="form-label">Region</label>
        <input type="text" class="form-control" id="region" placeholder="Enter Region"/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>

        </div>
      </div>

    </div>
  );
}

export default Staff;
