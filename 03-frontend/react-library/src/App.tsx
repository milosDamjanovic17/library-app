import React from 'react';
import './App.css';
import Navbar from './layouts/NavbarAndFooter/Navbar';
import HomePage from './layouts/HomePage/HomePage';
import Footer from './layouts/NavbarAndFooter/Footer';
import SearchBooksPage from './layouts/SearchBooksPage/SearchBooksPage';

export function App() {
  return (
    <>
      <Navbar />
        {/* <HomePage /> */}
        <SearchBooksPage />
      <Footer />
    </>
  );
}
