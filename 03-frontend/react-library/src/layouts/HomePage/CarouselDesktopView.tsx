
function CarouselDesktopView() {

   return(
      <>
         {/* Desktop */}
         <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                <div className="text-center">
                  <img
                    src={require("./../../Images/BooksImages/book-luv2code-1000.png")}
                    width="151"
                    height="233"
                    alt="book"
                  />
                  <h6 className="mt-2">Book</h6>
                  <p>MDM</p>
                  <a className="btn main-color text-white" href="#">
                    Reserve!
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                <div className="text-center">
                  <img
                    src={require("./../../Images/BooksImages/book-luv2code-1000.png")}
                    width="151"
                    height="233"
                    alt="book"
                  />
                  <h6 className="mt-2">Book</h6>
                  <p>MDM</p>
                  <a className="btn main-color text-white" href="#">
                    Reserve!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </>
   )
}

export default CarouselDesktopView;