import React from 'react';

import Left from './Left';
// import Dashboard from './Dashboard';
function Dashboard() {
  return (

     <div>


  

      <div class="container">
        <div class="row">
        <div class="col-3">
           {<Left/>}
        </div>
        <div class="col-9">

        <h2>Welcome You to Admin Dashboard</h2>
          
          </div>

          </div>
      </div>
    
    </div>
  );
}

export default Dashboard;
