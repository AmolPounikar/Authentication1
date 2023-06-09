  import React from "react";
  import { Link } from "react-router-dom";
  export default function Navebar() {
    return (
      <>
        {/* <!-- Navbar --> */}
        <nav
          style={{ borderStyle: "solid" }}
          className="p-4 navbar navbar-expand-lg fw-bolder navbar-dark bg-dark "
        >
          {/* <!-- Container wrapper --> */}
          <div className="container-fluid">
            {/* <!-- Toggle button --> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-2x fas fa-bars"></i>
            </button>

            {/* <!-- Collapsible wrapper --> */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* <!-- Navbar brand --> */}
              <Link className="navbar-brand mt-2 mt-lg-0" to="/">
                <img
                  src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                  height="25"
                  alt="MDB Logo"
                  loading="lazy"
                />
              </Link>
              {/* <!-- Left links --> */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </ul>
              {/* <!-- Left links --> */}
            </div>
            {/* <!-- Collapsible wrapper --> */}

            {/* <!-- Right elements --> */}
            {/* <div className="d-flex align-items-center">
        <!-- Icon -->
        <Link className="text-reset me-3" to="/">
          <i className="fas fa-shopping-cart"></i>
          <i class="fa-2x bi bi-cart-check"></i>
        </Link>

        <!-- Notifications -->
        <div className="dropdown">
          <Link
            className="text-reset me-3 dropdown-toggle hidden-arrow"
            to="/"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-2x fas fa-bell"></i>
            <span className="badge rounded-pill badge-notification bg-danger">1</span>
          </Link>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <Link className="dropdown-item" to="/">Some news</Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/">Another news</Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/">Something else here</Link>
            </li>
          </ul>
        </div>
        <!-- Avatar -->
        <div className="dropdown">
          <Link
            className="dropdown-toggle d-flex align-items-center hidden-arrow"
            to="/"
            id="navbarDropdownMenuAvatar"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-circle"
              height="25"
              alt="Black and White Portrait of Link Man"
              loading="lazy"
            />
          </Link>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuAvatar"
          >
            <li>
              <Link className="dropdown-item" to="/">My profile</Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/">Settings</Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div> */}
            {/* <!-- Right elements --> */}
          </div>
          {/* <!-- Container wrapper --> */}
        </nav>
        {/* <!-- Navbar --> */}
      </>
    );
  }
