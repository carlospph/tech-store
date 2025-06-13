// Layout.jsx
import React from 'react';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="ptt"/>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;