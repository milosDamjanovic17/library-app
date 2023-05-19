import React from "react";

function LibraryServices(){

   return(

      <div className="container my-5">
         <div className="row p-4 align-items-center border shadow-lg">
            <div className="col-lg-7 p-3">
               <h1 className="display-4 f2-bold">
                  Can't find what you are looking for?
               </h1>
               <p className="lead">
                  If you don't see what you are looking for, send us a message!
               </p>
               <div className="d-grid gap-2 justify-content-md-start mb-4 mb-3">
                  <a className="btn main-color btn-lg text-white" href="#">
                     Sign up
                  </a>
               </div>
            </div>
               <div className="col-lg-4 offset-lg-1 shadow-lg lost-image">
               </div>
         </div>
      </div>
   )
}

export default LibraryServices;