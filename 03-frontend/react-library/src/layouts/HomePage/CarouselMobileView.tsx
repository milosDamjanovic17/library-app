import ReturnBook from "./ReturnBook";

function CarouselMobileView(){


   // reactive mobile view
   return(
      
      <>
      <div className="d-lg-none mt-3">
        <div className="row d-flex justify-content-center align-items-center">
          <ReturnBook />
        </div>
      </div>
      </>

   )
}

export default CarouselMobileView;