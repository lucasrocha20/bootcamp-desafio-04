import React, { Component } from "react";

import "./style.css";

import facebook from "../../assets/facebook-1.png";

class Header extends Component {
  render() {
    return (
      <header class="main-header">
        <img src={facebook} />
        <strong>Meu Perfil</strong>
      </header>
    );
  }
}

export default Header;
