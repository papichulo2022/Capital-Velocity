// src/Pages/Home.jsx
import React from 'react';

import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import BussinesLocation from '../Components/BussinesLocation';
import BussinesCategories from '../Components/BussinesCategories';
import Section from '../Components/Section';
import Footer from '../Components/Footer';

import { Container } from '@mui/system';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BussinesLocation />
      <BussinesCategories />
      <Section />
      <Footer />
    </>
  );
}

export default Home;
