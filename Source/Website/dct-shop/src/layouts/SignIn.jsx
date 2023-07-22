import React from 'react'
import '../styleSheet/SignIn.css'
import logo from '../assets/Logo.png'
import ShopName from '../assets/ShopName.png'
import SearchIcon from '../assets/SearchIcon.png'
import Cart from '../assets/Cart.png'

function SignIn() {
  return (
    <>
      <section className="SignIn">
        <div className="Header">
          <div className="Trademark">
            <img className="Shop-Logo" src={logo} alt="logo" />
            <img className="Shop-Name" src={ShopName} alt="shop name" />
          </div>
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
            <div className="Navigators">
              <div>Trang chủ</div>
              <hr />
              <div>Sản phẩm</div>
              <hr />
              <div>Cửa hàng</div>
              <hr />
              <div>Giới thiệu</div>
            </div>
          </div>
          <div className="SignIn_LogIn_Cart">
            <div className="SignIn_LogIn_Navigator">
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
        </div>
        <div className="Container"></div>
        <div className="Footer"></div>
      </section>
    </>
  )
}

export default SignIn
