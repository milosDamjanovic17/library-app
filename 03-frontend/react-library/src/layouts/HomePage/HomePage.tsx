import React from "react";
import ExploreTopBooks from "./components/ExploreTopBooks";
import Carousel from "./components/Carousel";
import Heros from "./components/Heros";
import LibraryServices from "./components/LibraryServices";

function HomePage() {
  return (
    <>
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
    </>
  );
}

export default HomePage;
