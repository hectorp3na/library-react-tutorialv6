import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LibrarySvg from '../assets/Library.svg';
import { faBars, faShoppingCart, faXmark, faBolt, faBookOpen, faTags, faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
    const openMenu = () => {
        document.querySelector('.menu__backdrop').classList.add('open');
    } 
    const closeMenu = () => {
        document.querySelector('.menu__backdrop').classList.remove('open');
    }
    return (
        <nav>
        <div className="nav__container">
          <img className="logo" src={LibrarySvg} alt="Library Logo"></img>
          <ul className="nav__links">
            <li className="nav__list">
              <a href="/home" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__list">
              <a href="/books" className="nav__link">
                Books
              </a>
            </li>
            <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon
              icon={faBars}
              style={{ width: "32px", height: "32px" }}
            />
          </button>
          <li className="nav__icon">
            <a  href="/cart" className="nav__link">
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
          </li>
          </ul>
  
          <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <ul className="menu__links">
              <li className="menu__list">
                <a href="/home" className="menu__link">
                  Home
                </a>
              </li>
              <li className="menu__list">
                <a href="/books" className="menu__link">
                  Books
                </a>
              </li>
              <li className="menu__list">
                <a className="menu__link" href="/cart">
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav;