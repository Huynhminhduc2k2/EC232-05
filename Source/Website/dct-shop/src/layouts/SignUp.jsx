import React, { useState } from 'react';
import '../styleSheet/SignUp.css';
import HeaderOrigin from './HeaderOrigin';
import Footer from './Footer';
import axios from '../AxiosConfig';

function SignUp() {
  const [accountInfo, setAccountInfo] = useState({
    TenTaiKhoan: '',
    MatKhau: '',
    HoTen: '',
    GioiTinh: '',
    NamSinh: '',
    SDT: '',
    Email: '',
  });

  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAccountInfo({
      ...accountInfo,
      [name]: value,
    });
  };

  const handleRegistration = async () => {
    try {
      const response = await axios.post('/register', accountInfo);

      if (response.status === 201) {
        // Đăng ký thành công, hiển thị thông báo thành công
        setMessage('Tài khoản đã được đăng ký thành công.');
      } else {
        // Xử lý lỗi đăng ký, hiển thị thông báo lỗi
        setMessage('Đã có lỗi xảy ra khi đăng ký tài khoản.');
      }
    } catch (error) {
      console.error(error);
      // Xử lý lỗi mạng hoặc lỗi máy chủ
      setMessage('Đã có lỗi xảy ra khi đăng ký tài khoản.');
    }
  };

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
                name="TenTaiKhoan"
                placeholder="Tên tài khoản"
                value={accountInfo.TenTaiKhoan}
                onChange={handleInputChange}
              />
              <hr />
              <input
                className="accountPass-SignUp"
                type="password"
                name="MatKhau"
                placeholder="Mật khẩu"
                value={accountInfo.MatKhau}
                onChange={handleInputChange}
              />
              <hr />
              <input
                className="accountName-SignUp"
                type="text"
                name="HoTen"
                placeholder="Họ tên"
                value={accountInfo.HoTen}
                onChange={handleInputChange}
              />
              <hr />
              <input
                className="accountGender"
                type="text"
                name="GioiTinh"
                placeholder="Giới tính"
                value={accountInfo.GioiTinh}
                onChange={handleInputChange}
              />
              <hr />
              <input
                className="accountDoB"
                type="text"
                name="NamSinh"
                placeholder="Năm sinh"
                value={accountInfo.NamSinh}
                onChange={handleInputChange}
              />
              <hr />
              <input
                className="accountPhone"
                type="text"
                name="SDT"
                placeholder="Số điện thoại"
                value={accountInfo.SDT}
                onChange={handleInputChange}
              />
              <hr />
              <input
                className="accountMail"
                type="text"
                name="Email"
                placeholder="Địa chỉ email"
                value={accountInfo.Email}
                onChange={handleInputChange}
              />
              <hr />
            </div>
            <div className="SignUp-btn">
              <button onClick={handleRegistration}>ĐĂNG KÝ</button>
            </div>
            <div className="Message">{message}</div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default SignUp;
