import React from 'react';
import '../styleSheet/Footer.css';
import logoFooter from '../assets/LogoFooter.png';
import { NavLink } from 'react-bootstrap';
import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';

function Footer() {
  return (
    <>
      <section className="Footer">
        <div className="line"></div>
        <div className="Footer-container">
          <div className="Footer-description">
            <Nav>
              <Nav.Link href={'/home'}>
                <img className="Shop-Logo" src={logoFooter} alt="logo footer" />
              </Nav.Link>
            </Nav>

            <p className="Description">
              Cung cấp những dòng sản phẩm chất lượng nhất cho người dùng.
            </p>
          </div>
          <div className="grid-container-contact">
            <div className="grid-title">Discovery</div>
            <div className="grid-title">New season</div>
            <div className="grid-title">More searched</div>
            <div>Most selled</div>
            <div>About</div>
            <div>Help</div>
            <div>Shipping</div>
            <div>Affiliate</div>
            <div>Info</div>
            <div>Contact us</div>
            <div>Privacy Policies</div>
            <div>Terms & Conditions</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
