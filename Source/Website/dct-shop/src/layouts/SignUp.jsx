import React from 'react'
import '../styleSheet/SignUp.css'
import LogoHeader from '../assets/LogoHeader.png'
import logoFooter from '../assets/LogoFooter.png'
import SearchIcon from '../assets/SearchIcon.png'
import Cart from '../assets/Cart.png'

function SignUp() {
  return (
    <>
      <section className="SignUp">
        <div className="Header">
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
        </div>
        <div className="Container">
          <div className="FormSignUp">
            <div className="FormTitle">Tạo tài khoản</div>
            <div className="Form">
              <input
                className="accountName"
                type="text"
                placeholder="Tên tài khoản"
              />
              <hr />
              <input
                className="accountMail"
                type="text"
                placeholder="Địa chỉ email"
              />
              <hr />
              <input
                className="accountPass"
                type="text"
                placeholder="Mật khẩu"
              />
              <hr />
              <input
                className="accountPassCheck"
                type="text"
                placeholder="Xác nhận mật khẩu"
              />
              <hr />
            </div>
            <div className="SignUp-btn">
              <button>ĐĂNG KÝ</button>
            </div>
          </div>
        </div>

        <div className="Footer">
          <div className="line"></div>
          <div className="Footer-container">
            <div className="Footer-description">
              <img className="Shop-Logo" src={logoFooter} alt="logo footer" />
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
        </div>
      </section>
    </>
  )
}

export default SignUp
