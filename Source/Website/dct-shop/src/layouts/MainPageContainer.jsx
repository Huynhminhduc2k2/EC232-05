import React from 'react';
import '../styleSheet/MainPageContainer.css';
import introductionImage from '../assets/YGO-Lightining-Overdrive.png';
import Item1 from '../assets/card/Item1.png';
import Item2 from '../assets/card/Item2.png';
import Item3 from '../assets/card/Item3.png';
import Item4 from '../assets/card/Item4.png';
import Item5 from '../assets/card/Item5.png';
import Item6 from '../assets/card/Item6.png';
import Item7 from '../assets/card/Item7.png';
import Item8 from '../assets/card/Item8.png';

function MainPageContainer() {
  return (
    <>
      <section className="MainPage-Container">
        <img
          className="IntroductionImage"
          src={introductionImage}
          alt="store introduction image"
        />
        <div className="ListCard">
          <p className="ListCard-Title">Sản phẩm nổi bật</p>
          <div className="ListCard-Container">
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
            <div className="Item5">
              <img src={Item5} alt="Item5" />
              <p>
                99.000 <sup>đ</sup>
              </p>
              <p className="ItemName">Diviner Of The Herald</p>
            </div>
            <div className="Item6">
              <img src={Item6} alt="Item6" />
              <p>
                99.000 <sup>đ</sup>
              </p>
              <p className="ItemName">Rescue-Ace Turbulance</p>
            </div>
            <div className="Item7">
              <img src={Item7} alt="Item7" />
              <p>
                99.000 <sup>đ</sup>
              </p>
              <p className="ItemName">Crystal Wing Synchro Dragon</p>
            </div>
            <div className="Item8">
              <img src={Item8} alt="Item8" />
              <p>
                99.000 <sup>đ</sup>
              </p>
              <p className="ItemName">Dual Avatar - Empowered Kon-Gyo</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainPageContainer;
