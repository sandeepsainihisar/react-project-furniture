import React, { useState } from 'react';
import axios from 'axios';
import Left from './Left';
//import Dashboard from './Dashboard';
// function Items() {





//   return (

//     <div>




//       <div class="container">
//         <div class="row">
//           <div class="col-3">
//             {<Left />}
//           </div>
//           <div class="col-9">

//             <form>
//               <div class="mb-3">
//                 <label for="sno" class="form-label">S.No</label>
//                 <input type="text" class="form-control" id="sno" placeholder="Enter S.No"/>
//               </div>
//               <div class="mb-3">
//                 <label for="id" class="form-label">Id</label>
//                 <input type="text" class="form-control" id="id" placeholder="Enter Id"/>
//               </div>
//               <div class="mb-3">
//                 <label for="name" class="form-label">Name</label>
//                 <input type="text" class="form-control" id="name" placeholder="Enter Name"/>
//               </div>
//               <div class="mb-3">
//                 <label for="category" class="form-label">Category</label>
//                 <input type="text" class="form-control" id="category" placeholder="Enter Category"/>
//               </div>
//               <div class="mb-3">
//                 <label for="price" class="form-label">Price</label>
//                 <input type="text" class="form-control" id="price" placeholder="Enter Price"/>
//               </div>
//               <div class="mb-3">
//                 <label for="brand" class="form-label">Brand</label>
//                 <input type="text" class="form-control" id="brand" placeholder="Enter Brand"/>
//               </div>
//               <button type="submit" class="btn btn-primary">Add Item</button>
//             </form>







function Items() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    category: '',
    price: '',
    brand: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/items', formData);
      // Item added successfully, do something
      console.log('Item added');
    } catch (error) {
      // Error occurred while adding item, handle error
      console.error(error);
    }
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col-3">
          {<Left />}
        </div>
        <div class="col-9">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="id" className="form-label">
                Id
              </label>
              <input
                type="text"
                className="form-control"
                id="id"
                placeholder="Enter Id"
                value={formData.id}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" placeholder="Enter Name"
                value={formData.name}  onChange={handleChange}  />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <input
                type="text"
                className="form-control"
                id="category"
                placeholder="Enter Category"
                value={formData.category}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="text"
                className="form-control"
                id="price"
                placeholder="Enter Price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="brand" className="form-label">
                Brand
              </label>
              <input
                type="text"
                className="form-control"
                id="brand"
                placeholder="Enter Brand"
                value={formData.brand}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Items;

