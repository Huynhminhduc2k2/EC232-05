import React from 'react';
import MainPageContainer from './MainPageContainer';
import HeaderOrigin from './HeaderOrigin';
import Footer from './Footer';

function MainPageOrigin() {
  return (
    <>
      <section className="MainPageOrigin">
        <HeaderOrigin />

        <MainPageContainer />

        <Footer />
      </section>
    </>
  );
}

export default MainPageOrigin;
