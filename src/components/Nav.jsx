import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LibrarySvg from '../assets/Library.svg';
import { faBars, faShoppingCart, faXmark, faBolt, faBookOpen, faTags, faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Nav = ({ numberOfItems }) => {
    function openMenu() {
      document.body.classList += " menu--open";
    }

    function closeMenu() {
      document.body.classList.remove("menu--open");
    }
    
    return (
        <nav>
        <div className="nav__container">
          <img className="logo" src={LibrarySvg} alt="Library Logo"></img>
          <ul className="nav__links">
            <li className="nav__list">
             <Link to="/home" className="nav__link">
                Home
              </Link>
            </li>
            <li className="nav__list">
              <Link to="/books" className="nav__link">
                Books
              </Link>
            </li>
            <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon
              icon={faBars}
              style={{ width: "32px", height: "32px" }}
            />
          </button>
          <li className="nav__icon">
            <Link to="/cart" className="nav__link">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            {
              numberOfItems > 0 && <span className='cart__length'>{numberOfItems}</span>
            }
          </li>
          </ul>
  
          <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <ul className="menu__links">
              <li className="menu__list">
               <Link to="/home" className="menu__link">
                  Home
                </Link>
              </li>
              <li className="menu__list">
                <Link to="/books" className="menu__link">
                  Books
                </Link>
              </li>
              <li className="menu__list">
                <Link to="/cart" className="menu__link">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav;