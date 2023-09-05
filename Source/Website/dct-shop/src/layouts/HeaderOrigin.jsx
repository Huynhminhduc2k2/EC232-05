import React from 'react';
import '../styleSheet/HeaderOrigin.css';
import LogoHeader from '../assets/LogoHeader.png';
import SearchIcon from '../assets/SearchIcon.png';
import Cart from '../assets/Cart.png';
import { NavLink } from 'react-bootstrap';
import { Button,Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';

function HeaderOrigin() {
  return (
    <>
      <section className="Header">
        <Nav>
          <Nav.Link href={'/home'}>
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
              <Nav.Link  href={'/home'}style={{color:"white", textDecorationLine: 'none'}}>Trang chủ</Nav.Link>
            </Nav>
            <hr />
            <Nav>
              <Nav.Link to="/" as={NavLink}style={{color:"white", textDecorationLine: 'none'}}>
                Cửa hàng
              </Nav.Link>
            </Nav>
            <hr />
            <Nav>
              <Nav.Link to="/" as={NavLink}style={{color:"white", textDecorationLine: 'none'}}>
                Giới thiệu
              </Nav.Link>
            </Nav>
          </NavbarBs>
        </div>

        <div className="SignUp_LogIn_Cart">
          <div className="SignUp_LogIn_Navigator">
            <Nav>
              <Nav.Link href={'/signup'}style={{color:"white", textDecorationLine: 'none'}}>Đăng ký</Nav.Link>
            </Nav>
            <hr />
            <Nav>
              <Nav.Link href={'/signin'}style={{color:"white", textDecorationLine: 'none'}}>Đăng nhập</Nav.Link>
            </Nav>
            
          </div>
          
          <Button className="button"
            
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant="outline-primary"
            
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>
        
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "red",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              3
            </div>
            
          </Button>
      
        </div>
        
      </section>
      
    </>
  );
}

export default HeaderOrigin;
