import { Navbar as BootstrapNavbar } from "bootstrap";
import { getSessionObject } from "../utils/session";

const Navbar = () => {
  const navbarWrapper = document.querySelector("#navbarWrapper");
  let navbar;
  let user = getSessionObject("user");
  if (!user) {
    navbar = `
  <nav class="navbar navbar-expand-lg navbar-red bg-red">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" data-uri="/">GameReviews</a>
          <button
            class="navbar-toggler"
            type=""
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <a class="nav-link" href="#" data-uri="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/login">Login</a>
              </li>   
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/register">Register</a>
              </li>                       
            </ul>
          </div>
        </div>
      </nav>
  `;
  } else {
    navbar = `
  <nav class="navbar navbar-expand-lg navbar-blue bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">GameReviews</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/">Home</a>
              </li>     
              <li class="nav-item">
                <a class="nav-link " href="#" data-uri="/add">Add game</a>
              </li> 
              <li class="nav-item">
                <a class="nav-link " href="#" data-uri="/video">Videos & clips</a>
              </li> 
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/classement">Classement</a>
              </li>   
              <li class="nav-item">
                <a class="nav-item nav-link " id = "profil" href="#" data-uri="/profil" >${user.username}</a>
              </li>    
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/logout">Logout</a>
              </li> 
              <li class="nav-item">
                <a class="nav-link disabled" href="#" data-uri="/changeusername"></a>
              </li> 
              <li class="nav-item">
                <a class="nav-link disabled" href="#" data-uri="/changepassword"></a>
              </li>       
              <li class="nav-item">
                <a class="nav-link disabled" href="#" data-uri="/jeu"></a>
              </li>      
            </ul>
          </div>
        </div>
      </nav>`;
  }
  navbarWrapper.innerHTML = navbar;
};

export default Navbar;
