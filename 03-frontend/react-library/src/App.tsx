import React, { Fragment } from 'react';
import './App.css';
import Navbar from './layouts/NavbarAndFooter/Navbar';
import ExploreTopBooks from './layouts/HomePage/ExploreTopBooks';
import Carousel from './layouts/HomePage/Carousel';

function App() {
  return (
    <Fragment>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
    </Fragment>
  );
}

export default App;
