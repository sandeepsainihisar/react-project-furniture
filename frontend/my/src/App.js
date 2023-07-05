import './index.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Service from './Service';
import Registrationform from './Registrationform';
import Loginform from './Loginform';
import Forgetpasswordform from './Forgetpasswordform';

import Sofasets from './Sofasets';
import Beds from './Beds';
import Dinningtable from './Dinningtable';

import Brand from './dashboard/Brand';
import Cart from './dashboard/Cart';
import Cateogry from './dashboard/Category';
import Dashboard from './dashboard/Dashboard';
import Items from './dashboard/Items';
import Left from './dashboard/Left';
import Staff from './dashboard/Staff';

import Userprofile from './Userprofile';

import Category from './dashboard/Category';

//import Contactusform from './Contactusform';
//import IMG from './Images/image-1.jpg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Contact';


function App() {
  return (
    <>

      <BrowserRouter>
        <Header>

        </Header>
        <Routes>


          <Route path='/' element={<Home />}>
          </Route>

          <Route path='/About' element={<About />}>
          </Route>

          <Route path='/Service' element={<Service />}>
          </Route>

          <Route path='/Loginform' element={<Loginform />}>
          </Route>
          <Route path='/Registrationform' element={<Registrationform />}>
          </Route>
          <Route path='/Forgetpasswordform' element={<Forgetpasswordform />}>
          </Route>
          <Route path='/Contact' element={<Contact />}>
          </Route>
          <Route path='/Sofasets' element={<Sofasets />}>
          </Route>
          <Route path='/Beds' element={<Beds />}>
          </Route>
          <Route path='/Dinningtable' element={<Dinningtable/>}>
          </Route>
          <Route path='/userprofile' element={<Userprofile />}>
          </Route>
          <Route path='/Brand' element={<Brand />}>
          </Route>
          <Route path='/cart' element={<Cart />}>
          </Route>
          <Route path='/category' element={<Cateogry />}>
          </Route>
          <Route path='/dashboard' element={<Dashboard />}>
          </Route>
          <Route path='/Left' element={<Left />}>
          </Route>
          <Route path='/Staff' element={<Staff />}>
          </Route>
          <Route path='/items' element={<Items />}>
          </Route>
          <Route path='/Category' element={<Category />}>
          </Route>
          
        </Routes>
        {<Footer />}
      </BrowserRouter>
    </>
  )
}

export default App;
