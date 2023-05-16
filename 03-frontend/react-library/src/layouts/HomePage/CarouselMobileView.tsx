function CarouselMobileView(){


   // reactive mobile view
   return(
      
      <>
      <div className="d-lg-none mt-3">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="text-center">
            <img
              src={require("./../../Images/BooksImages/book-luv2code-1000.png")}
              width="151"
              height="233"
              alt="book"
            />
            <h6 className="mt-2">
              <b>Book</b>
            </h6>
            <p>MDM</p>
            <a className="btn main-color text-white" href="#">
              Reserve!
            </a>
          </div>
        </div>
      </div>
      </>

   )
}

export default CarouselMobileView;