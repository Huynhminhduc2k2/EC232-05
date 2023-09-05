import React from 'react';
import HeaderOrigin from './HeaderOrigin';
import Footer from './Footer';
import ItemDetailContainer from './ItemDetailContainer';

function ItemDetail() {
  return (
    <>
      <section className="ItemDetail">
        <HeaderOrigin />

        <ItemDetailContainer />

        <Footer />
      </section>
    </>
  );
}

export default ItemDetail;
