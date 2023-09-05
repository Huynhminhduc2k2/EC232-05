import React from 'react'
import '../styleSheet/SignUp.css'
import HeaderOrigin from './HeaderOrigin'
import Footer from './Footer'

function SignUp() {
  return (
    <>
      <section className="SignUp">
        <HeaderOrigin />

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

        <Footer />
      </section>
    </>
  )
}

export default SignUp
