// import React, { useState } from 'react';
// import '../styleSheet/SignIn.css';
// import HeaderOrigin from './HeaderOrigin';
// import Footer from './Footer';
// import axios from '../AxiosConfig'; // Sử dụng cấu hình đã đặt

// function SignIn() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('/login', {
//         // Sử dụng cổng 5000
//         TenTaiKhoan: username,
//         MatKhau: password,
//       });

//       if (response.status === 200) {
//         // Đăng nhập thành công, hiển thị thông báo thành công
//         setMessage('Đăng nhập thành công.');
//       } else {
//         // Xử lý lỗi đăng nhập, hiển thị thông báo lỗi
//         setMessage(
//           'Đăng nhập thất bại. Vui lòng kiểm tra lại tên tài khoản và mật khẩu.'
//         );
//       }
//     } catch (error) {
//       console.error(error);
//       // Xử lý lỗi mạng hoặc lỗi server
//       setMessage('Đã có lỗi xảy ra. Vui lòng thử lại sau.');
//     }
//   };

//   return (
//     <>
//       <section className="SignIn">
//         <HeaderOrigin />

//         <div className="Container">
//           <div className="FormSignIn">
//             <div className="FormTitle">ĐĂNG NHẬP</div>
//             <div className="Form">
//               <input
//                 className="accountName"
//                 type="text"
//                 placeholder="Tên tài khoản"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               <hr />

//               <input
//                 className="accountPass"
//                 type="password"
//                 placeholder="Mật khẩu"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <hr />
//             </div>
//             <div className="SignIn-btn">
//               <button onClick={handleLogin}>ĐĂNG NHẬP</button>
//             </div>
//             <div className="Message">{message}</div>
//           </div>
//         </div>

//         <Footer />
//       </section>
//     </>
//   );
// }

// export default SignIn;

import React, { useState } from 'react';
import '../styleSheet/SignIn.css';
import HeaderOrigin from './HeaderOrigin';
import Footer from './Footer';
import axios from '../AxiosConfig'; // Sử dụng cấu hình đã đặt

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [redirectToMainPage, setRedirectToMainPage] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('/login', {
        TenTaiKhoan: username,
        MatKhau: password,
      });

      if (response.status === 200) {
        setRedirectToMainPage(true);
      } else {
        setMessage(
          'Đăng nhập thất bại. Vui lòng kiểm tra lại tên tài khoản và mật khẩu.'
        );
      }
    } catch (error) {
      console.error(error);
      setMessage('Đã có lỗi xảy ra. Vui lòng thử lại sau.');
    }
  };

  if (redirectToMainPage) {
    window.location.href = '/homeloggedin';
    return null; // Tránh hiển thị nội dung SignIn sau khi chuyển hướng
  }

  return (
    <>
      <section className="SignIn">
        <HeaderOrigin />

        <div className="Container">
          <div className="FormSignIn">
            <div className="FormTitle">ĐĂNG NHẬP</div>
            <div className="Form">
              <input
                className="accountName"
                type="text"
                placeholder="Tên tài khoản"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <hr />

              <input
                className="accountPass"
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <hr />
            </div>
            <div className="SignIn-btn">
              <button onClick={handleLogin}>ĐĂNG NHẬP</button>
            </div>
            <div className="Message">{message}</div>
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
}

export default SignIn;
