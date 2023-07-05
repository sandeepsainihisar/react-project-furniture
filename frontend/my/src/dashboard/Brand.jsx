import React from 'react';

import Left from './Left';
// import Dashboard from './Dashboard';
function Brand() {





  return (

    <div>




      <div class="container">
        <div class="row">
          <div class="col-3">
            {<Left />}
          </div>
          <div class="col-9">

            <h2>brand</h2>
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
                <label for="contract" class="form-label">Contract years</label>
                <input type="text" class="form-control" id="contract" placeholder="Enter Contract years"/>
              </div>
              <button type="submit" class="btn btn-primary">Add Brand</button>
            </form>

          </div>

        </div>
      </div>

    </div>
  );
}

export default Brand;
