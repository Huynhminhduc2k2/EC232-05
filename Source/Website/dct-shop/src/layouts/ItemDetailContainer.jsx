import React from 'react';
import Cart from '../assets/Cart.png';
import FreeShip from '../assets/FreeShippingLogo.png';
import Chosen from '../assets/card/Item6.png';
import Item1 from '../assets/card/Item1.png';
import Item2 from '../assets/card/Item2.png';
import Item3 from '../assets/card/Item3.png';
import Item4 from '../assets/card/Item4.png';
import '../styleSheet/ItemDetailContainer.css';

function ItemDetailContainer() {
  return (
    <>
      <section className="ItemDetail-Container">
        <div className="ItemInfo-Chosen">
          <div className="ItemInfo-Left">
            <div className="ItemInfo-Image">
              <img src={Chosen} alt="Chosen Card" />
            </div>
            <img src={FreeShip} alt="Free Ship Logo" />
          </div>
          <div className="ItemInfo-Right">
            <p className="ItemInfo-Name">Rescue-Ace Turbulance</p>
            <p className="ItemInfo-Price">
              99.000 <sup>đ</sup>
            </p>
            <div className="ItemInfo-Quantity">
              <p className="Quantity-Title">Số lượng</p>
              <p className="Quantity-Remove">-</p>
              <p className="Quantity">1</p>
              <p className="Quantity-Add">+</p>
            </div>
            <button className="AddCart-Btn">
              <img src={Cart} alt="Cart Logo" height={50} width={50}/>
              <p> + Thêm vào giỏ hàng</p>
            </button>
            <div className="ItemInfo-Description" placeholder="Mô tả sản phẩm">
              <p>Mô tả sản phẩm</p>
            </div>
          </div>
        </div>

        <div className="OtherItems">
          <p className="OtherItems-Title">Sản phẩm liên quan</p>
          <div className="OtherItems-Container">
            <div className="Item1">
              <img src={Item1} alt="Item1" />
              <p>
                99.000 <sup>đ</sup>
              </p>
              <p className="ItemName">Tearment Kaleido-Heart</p>
            </div>
            <div className="Item2">
              <img src={Item2} alt="Item2" />
              <p>
                99.000 <sup>đ</sup>
              </p>
              <p className="ItemName">Shaddoll Beast</p>
            </div>
            <div className="Item3">
              <img src={Item3} alt="Item3" />
              <p>
                99.000 <sup>đ</sup>
              </p>
              <p className="ItemName">Tearment Merrli</p>
            </div>
            <div className="Item4">
              <img src={Item4} alt="Item4" />
              <p>
                99.000 <sup>đ</sup>
              </p>
              <p className="ItemName">Chaos Hunter</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ItemDetailContainer;
