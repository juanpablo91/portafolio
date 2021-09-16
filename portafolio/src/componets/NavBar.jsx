import React from 'react';
/*import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
*/
import { slide as Menu } from 'react-burger-menu'
import styles from './NavBarStyles.css';

//nav bar menu 
class NavBar extends React.Component {
  showSettings (event) {
    event.preventDefault();

  }

  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }



  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu  right styles={ styles }  >

        <a id="home" className="menu-item" href="/">Proyectos</a>
        <a id="about" className="menu-item" href="./pages/AboutMe.jsx
        ">Acerca de mi</a>
        <a id="contact" className="menu-item" href="/ContactMe">Contacto</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Es</a>

      </Menu>
    );
  }
}


export default NavBar;