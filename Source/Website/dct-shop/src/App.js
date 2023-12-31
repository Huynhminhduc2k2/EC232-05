import React from 'react';
import { userState, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { ReactDOM } from 'react';
import SignUp from './layouts/SignUp';
import MainPageOrigin from './layouts/MainPageOrigin';
import MainPageLoggedIn from './layouts/MainPageLoggedIn';
import Cart from './layouts/Cart';
import SignIn from './layouts/SignIn';
import HeaderOrigin from './layouts/HeaderOrigin';
import ItemDetail from './layouts/ItemDetail';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<MainPageOrigin />} default />
          <Route path="/homeloggedin" element={<MainPageLoggedIn />} default />
          <Route path="/itemdetail" element={<ItemDetail />} default />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
