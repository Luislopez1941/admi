import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavLiTag from "../navigation/NavListTag";
import headerNavBar from './HeaderNavbar.css'

class HeaderNavBar extends Component {
  constructor(props) {
    super(props);
    this.userRole = "admin";
    let navbarText = "";
    if (this.userRole == "admin") {
      this.navbarText = "Mi abarrote digital";
    } else {
      this.navbarText = "Mi abarrote digital";
    }
  }

  render() {
    return (
      
      <nav className="navbar">
        <Link className="navbar__title" to="/">
          {this.navbarText}
        </Link>
        <button
          className="navbar__click"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <box-icon name='menu' ></box-icon>
        </button>
        
        <div className="navbars" id="navbarSupportedContent">
          <ul className="main__navbars">
            <NavLiTag
              link="/"
              className="nav__link"
              itemValue="Página principal"
            ></NavLiTag>
            <NavLiTag
              link="/login"
              className="nav__link"
              itemValue="Cerrar sesión"
            ></NavLiTag>
          </ul>
        </div>
      </nav>
    );
  }
}

export default HeaderNavBar;
