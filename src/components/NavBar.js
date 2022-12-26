import React from "react";


function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Blooma</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-3" href="#">Servicios</a>
            </li>            
            <li className="nav-item">
              <a className="nav-link mx-3" href="#">Productos</a>
            </li>            
            <li className="nav-item">
              <a className="nav-link mx-3" href="#">Sobre mí</a>
            </li>            
            <li className="nav-item">
              <a className="nav-link mx-3" href="#">Contacto</a>
            </li>            
          </ul>
        </div>
      </div>
    </nav>
      
    </>
  );
}

export { NavBar };
