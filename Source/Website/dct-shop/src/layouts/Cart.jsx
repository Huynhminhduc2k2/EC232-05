import React from 'react';
import '../styleSheet/Cart.css';
import CartLogo from '../assets/CartLogo.png';
import HeaderLoggedIn from './HeaderLoggedIn';
import Footer from './Footer';

function Cart() {
  return (
    <>
      <HeaderLoggedIn />

      <section className="Cart-Container">
        <div className="Logo_Title">
          <img src={CartLogo} alt="Cart Logo" height={50} width={50} />
          <p>Giỏ hàng của bạn đang trống</p>
        </div>
        <p className="Cart_Status">
          Có vẻ bạn chưa thêm gì vào giỏ hàng. Chọn sản phẩm ngay
        </p>
      </section>

      <Footer />
    </>
  );
}

export default Cart;
