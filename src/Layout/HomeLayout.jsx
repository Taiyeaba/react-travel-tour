import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import TopOfferBar from '../components/topOfferBar';

const HomeLayout = () => {
  return (
    <div>
      <TopOfferBar/>
      <Header/>
      <Outlet/>
      <Footer/>
      
    </div>
  );
};

export default HomeLayout;