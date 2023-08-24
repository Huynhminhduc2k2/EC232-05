import React from 'react';
import '../styleSheet/HeaderOrigin.css';
import LogoHeader from '../assets/LogoHeader.png';
import SearchIcon from '../assets/SearchIcon.png';
import Cart from '../assets/Cart.png';

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
          <nav className="Navigators">
            <div>Trang chủ</div>
            <hr />
            <div>Sản phẩm</div>
            <hr />
            <div>Cửa hàng</div>
            <hr />
            <div>Giới thiệu</div>
          </nav>
        </div>
        <div className="SignUp_LogIn_Cart">
          <div className="SignUp_LogIn_Navigator">
            <div>Đăng ký</div>
            <hr />
            <div>Đăng nhập</div>
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
