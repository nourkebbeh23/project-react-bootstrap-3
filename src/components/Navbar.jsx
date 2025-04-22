import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="back">

      <div class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a href="#" class="navbar-brand"><h3>INNOVA
        </h3> </a>
        <button
          type="button"
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbarnav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
            <Link class="nav-link  active text-decoration-underline link-offset-3" to="/">
                        HOME
                      </Link>
        
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/about">
                        ABOUT
                      </Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to="/services">
                        SERVICE
                      </Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link " to="/contact">
                        CONTACT
                      </Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link " to="/PROJECTS">
                        PROJECTS
                      </Link>
            </li>
          </ul>
 
        </div>
      </div>
    </div>
    <div data-aos="fade-up" data-aos-delay="300">
<h1 className=" text-center"> We are innova we create great stuff.</h1>
    </div>
    
    </div>
  );
};

export default Navbar;
