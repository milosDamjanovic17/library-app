import React, { Fragment } from 'react';
import './App.css';
import Navbar from './layouts/NavbarAndFooter/Navbar';
import ExploreTopBooks from './layouts/HomePage/ExploreTopBooks';
import Carousel from './layouts/HomePage/Carousel';
import Heros from './layouts/HomePage/Heros';
import LibraryServices from './layouts/HomePage/LibraryServices';
import Footer from './layouts/NavbarAndFooter/Footer';

function App() {
  return (
    <Fragment>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
      <Footer />
    </Fragment>
  );
}

export default App;
