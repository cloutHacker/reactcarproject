import { Link } from "react-router-dom";
const Nav = ({ notifications, wishlist_class, wishlist }) => {
  return (
    <>

      <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-dark mb-0">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"> <span className="fa fa-car"></span>Cars</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item" key='1'>
                <div className="d-flex"><Link to={`/`}>Home<span className="fa fa-home"></span></Link></div>
              </li>


              <li className="nav-item" key='4'>
                <a className="nav-link" href="#">

                  <div className="d-flex">notifications<span className="fa fa-bell"></span><i className="fa fa-envelope-o">
                    <span className="badge badge-danger bg-outline-danger">{notifications}</span>
                  </i></div>
                </a>
              </li>
              <li className="nav-item" key='5'>
                <a className="nav-link" href="#">
                  <div className="d-flex">wishlist<span className={`fa fa-heart` + wishlist_class}></span>
                    <span className="badge badge-danger bg-danger ">{wishlist}</span>
                  </div>
                </a>
              </li>
              {/* dropdown */}
              <li className="nav-item dropdown-toggler" key='6'>
                <div classname="d-flex"><Link to={`#`}>Account<span className="fa fa-user"></span></Link></div>
                <span className="arrow-down"></span>
                <ul class='dropdown-menu'>
                  <li className="nav-item" key='2'>
                    <div className="d-flex"><Link to={`/register`}>Register<span className="fa fa-user"></span></Link></div>
                  </li>
                  <li className="nav-item" key='3'>
                    <div className="d-flex"><Link to={`/login`}>Login<span className="fa fa-user-circle"></span></Link></div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}
export default Nav;