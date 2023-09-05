import React from 'react';
import '../styleSheet/HeaderLoggedIn.css';
import LogoHeader from '../assets/LogoHeader.png';
import SearchIcon from '../assets/SearchIcon.png';
import Cart from '../assets/Cart.png';
import ProfilePic from '../assets/Profile.png';
import { NavLink } from 'react-bootstrap';
import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';

function HeaderLoggedIn() {
  return (
    <>
      <section className="Header">
        <Nav>
          <Nav.Link href={'/homeloggedin'}>
            <img className="Shop-Logo" src={LogoHeader} alt="logo header" />
          </Nav.Link>
        </Nav>

        <div className="Search_Navigator">
          <div className="Search">
            <input
              className="SearchBox"
              type="text"
              placeholder="Search here"
            />
            <img
              className="SearchIcon"
              src={SearchIcon}
              alt="search icon"
              height={30}
              width={30}
            />
          </div>

          <NavbarBs className="Navigators">
            <Nav>
              <Nav.Link href={'/homeloggedin'}>Trang chủ</Nav.Link>
            </Nav>
            <hr />
            <Nav>
              <Nav.Link to="/" as={NavLink}>
                Cửa hàng
              </Nav.Link>
            </Nav>
            <hr />
            <Nav>
              <Nav.Link to="/" as={NavLink}>
                Giới thiệu
              </Nav.Link>
            </Nav>
          </NavbarBs>
        </div>

        <div className="UserProfile_Cart">
          <div className="UserProfile">
            <img
              src={ProfilePic}
              alt="Profile Picture"
              height={60}
              width={60}
            />
          </div>
          <img
            className="Cart"
            src={Cart}
            alt="cart shopping"
            height={50}
            width={50}
          />
        </div>
      </section>
    </>
  );
}

export default HeaderLoggedIn;
