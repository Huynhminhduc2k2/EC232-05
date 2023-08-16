import React from 'react';
import MainPageContainer from './MainPageContainer';
import HeaderLoggedIn from './HeaderLoggedIn';
import Footer from './Footer';

function MainPageOrigin() {
  return (
    <>
      <section className="MainPageOrigin">
        <HeaderLoggedIn />

        <MainPageContainer />

        <Footer />
      </section>
    </>
  );
}

export default MainPageOrigin;
