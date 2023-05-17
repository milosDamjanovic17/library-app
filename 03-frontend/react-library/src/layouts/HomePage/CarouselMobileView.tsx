import { Fragment } from "react";
import ReturnBook from "./ReturnBook";

function CarouselMobileView(){


   // reactive mobile view
   return(
      
      <Fragment>
      <div className="d-lg-none mt-3">
        <div className="row d-flex justify-content-center align-items-center">
          <ReturnBook />
        </div>
      </div>
      </Fragment>

   )
}

export default CarouselMobileView;