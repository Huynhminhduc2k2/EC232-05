import React from 'react'
import '../styleSheet/SignIn.css'
import HeaderOrigin from './HeaderOrigin'
import Footer from './Footer'

function SignIn() {
    return (
      <>
        <section className="SignUp">
          <HeaderOrigin />
  
          <div className="Container">
            <div className="FormSignIn">
              <div className="FormTitle">ĐĂNG NHẬP</div>
              <div className="Form">
                <input
                  className="accountName"
                  type="text"
                  placeholder="Tên tài khoản"
                />
                <hr />
               
                <input
                  className="accountPass"
                  type="text"
                  placeholder="Mật khẩu"
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
  
  export default SignIn