import CarouselDesktopView from "./CarouselDesktopView";
import CarouselMobileView from "./CarouselMobileView";

function Carousel() {
  return (
    <div className="container mt-5" style={{ height: 550 }}>
      <div className="homepage-carousel-title">
        <h3>Find your next favourite book here!</h3>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide mt-5 
        d-none d-lg-block"
        data-bs-interval="false"
      >
         {/* Desktop View */}
         <CarouselDesktopView />
      </div>

      {/* Mobile View */}
      <CarouselMobileView />
      
      {/* View More btn */}
      <div className="homepage-carousel-title mt-3">
        <a className="btn btn-outline-secondary btn-kg" href="#">
          View More
        </a>
      </div>
    </div>
  );
}

export default Carousel;
