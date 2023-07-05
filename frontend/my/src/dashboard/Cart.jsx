import React from 'react';

import Left from './Left';
// import Dashboard from './Dashboard';
function Cart() {





  return (

    <div>




      <div class="container">
        <div class="row">
          <div class="col-3">
            {<Left />}
          </div>
          <div class="col-9">

            <h2>cart</h2>
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
                <label for="itemName" class="form-label">Item Name</label>
                <input type="text" class="form-control" id="itemName" placeholder="Enter Item Name"/>
              </div>
              <div class="mb-3">
                <label for="quantity" class="form-label">Quantity</label>
                <input type="text" class="form-control" id="quantity" placeholder="Enter Quantity"/>
              </div>
              <div class="mb-3">
                <label for="price" class="form-label">Price</label>
                <input type="text" class="form-control" id="price" placeholder="Enter Price"/>
              </div>
              <button type="submit" class="btn btn-primary">Add to Cart</button>
            </form>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Cart;


