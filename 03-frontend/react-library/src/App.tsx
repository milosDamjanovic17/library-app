import React, { Fragment } from 'react';
import './App.css';
import Navbar from './layouts/NavbarAndFooter/Navbar';
import ExploreTopBooks from './layouts/HomePage/ExploreTopBooks';

function App() {
  return (
    <Fragment>
      <Navbar />
      <ExploreTopBooks />
    </Fragment>
  );
}

export default App;
