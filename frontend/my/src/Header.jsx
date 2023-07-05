import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light text-sucess">
        <NavLink className="navbar-brand" to="/">WOOD</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/About">About </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/Service">Service
              </NavLink>
            </li>
           
            <li className="nav-item active">
              <NavLink className="nav-link" to="/userprofile">Userprofile
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" to="/Contact">Contact Us
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">

            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" name="login" >
              <NavLink className="nav-link" to="/Loginform">Login
              </NavLink>
            </button>
          </form>
        </div>
      </nav>
    </>
  )
}

export default Header;