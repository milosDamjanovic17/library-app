import React, { useState, useEffect } from "react";
import BookModel from "../../models/BookModel";
import SearchBook from "./components/SearchBook";
import SpinnerLoading from "../Utils/SpinnerLoading";


const SearchBooksPage = () => {

   const [books, setBooks] = useState<BookModel[]>([]);
   const [isLoading, setIsLoading] = useState(true); // state for showing loading screen during the component fetching the data from backend API
   const [httpError, setHttpError] = useState(null);

   useEffect(() => {

      async function fetchBooks() {
        // fetch data from backend API path, we want only 5 books to be shown in our Search Books page
        const baseUrl: string = 'http://localhost:8080/api/books';
  
        const url: string = `${baseUrl}?page=0&size=5`;
  
        const response = await fetch(url);
  
        if(!response.ok){
          throw new Error('Something went wrong!');
        }
  
        const responseJson = await response.json(); // convert response to json file
  
        const responseData = responseJson._embedded.books;
  
        const loadedBooks: BookModel[] = []; // instance of BookModel array
  
        // populate loadedBooks collection
        for(const key in responseData){
          loadedBooks.push({
            id: responseData[key].id,
            title: responseData[key].title,
            author: responseData[key].author,
            description: responseData[key].description,
            copies: responseData[key].copies,
            copiesAvailable: responseData[key].copiesAvailable,
            category: responseData[key].category,
            img: responseData[key].img,
          })
        }
  
        setBooks(loadedBooks);
        setIsLoading(false);
      };
  
      // catch any errors during data fetch
      fetchBooks().catch((error: any) => {
        setIsLoading(false);
        setHttpError(error.message)
      })
    }, [])

   // render util Spinner Loading component if the state is still fetching data from our backend API
   if(isLoading){
   return(
     <SpinnerLoading/>
   )
 }

   // create error component if there are any http errors during data fetch 
   if(httpError){
   return(
     <div className='container m-5'>
       <p>{httpError}</p>
     </div>
   )
 }

 return(

   <>
      <div className="container">
         <div>
            <div className="row mt-5">
               <div className="col-6">
                  <div className="d-flex">
                     <input className="form-control me-2" type="search" placeholder="Search" aria-labelledby="Search"/>
                     <button className="btn btn-outline-success">
                        Search
                     </button>
                  </div>
               </div>
               <div className="col-4">
                  <div className="dropdown">
                     <button className="btn btn-secondary dropdown-toggle" type="button" id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'>
                        Category
                     </button>
                     <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li>
                           <a className="dropdown-item" href="#">
                              All
                           </a>
                        </li>
                        <li>
                           <a className="dropdown-item" href="#">
                              Frontend
                           </a>
                        </li>
                        <li>
                           <a className="dropdown-item" href="#">
                              Backend
                           </a>
                        </li>
                        <li>
                           <a className="dropdown-item" href="#">
                              Data
                           </a>
                        </li>
                        <li>
                           <a className="dropdown-item" href="#">
                              DevOps
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="mt-3">
                  <h5>Number of results: (22)</h5>
               </div>
               <p>
                  1 to 5 of 22 items:
               </p>
               {books.map(book => (
                  <SearchBook book={book} key={book.id} />
               ))}
            </div>
         </div>
      </div>
   </>

 );
}

export default SearchBooksPage;