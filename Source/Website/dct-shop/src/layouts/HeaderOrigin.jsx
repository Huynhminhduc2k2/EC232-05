import React from 'react';
import '../styleSheet/HeaderOrigin.css';
import LogoHeader from '../assets/LogoHeader.png';
import SearchIcon from '../assets/SearchIcon.png';
import Cart from '../assets/Cart.png';
import {NavLink} from 'react-bootstrap';
import {Container,Nav,Navbar as NavbarBs} from "react-bootstrap"
function HeaderOrigin() {
  return (
    <>
      <section className="Header">
        <img className="Shop-Logo" src={LogoHeader} alt="logo header" />
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
           <Nav.Link href={"/home"}>Trang Chủ</Nav.Link> 
          </Nav>
          <hr />
          <Nav> 
           <Nav.Link to="/" as={NavLink}>Cửa hàng</Nav.Link> 
          </Nav>
          <hr />
          <Nav> 
           <Nav.Link to="/" as={NavLink}>Giới thieu</Nav.Link> 
          </Nav>
           
          
          
           
          </NavbarBs>
        </div>
        <div className="SignUp_LogIn_Cart">
          <div className="SignUp_LogIn_Navigator">
          <Nav> 
           <Nav.Link href={"/signup"} >Đăng ký</Nav.Link> 
          </Nav>
            <hr />
            <Nav> 
           <Nav.Link href={"/signin"} >Đăng nhập</Nav.Link> 
          </Nav>
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

export default HeaderOrigin;
