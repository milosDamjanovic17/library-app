import {useEffect, useState} from 'react';

import ReturnBook from './ReturnBook';
import BookModel from '../../../models/BookModel';
import SpinnerLoading from '../../Utils/SpinnerLoading';

function Carousel() {

  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState(true); // state for showing loading screen during the component fetching the data from backend API
  const [httpError, setHttpError] = useState(null);


  useEffect(() => {

    async function fetchBooks() {
      // fetch data from backend API path, we want only 9 books to be shown in our Carousel
      const baseUrl: string = 'http://localhost:8080/api/books';

      const url: string = `${baseUrl}?page=0&size=9`;

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

  return (
        /*Wrapping container styling */
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
         <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center align-items-center">
              {books.slice(0,3).map(book => (
                <ReturnBook book={book} key= {book.id} />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex justify-content-center align-items-center">
              {books.slice(3,6).map(book => (
                <ReturnBook book={book} key= {book.id} />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex justify-content-center align-items-center">
              {books.slice(6,9).map(book => (
                <ReturnBook book={book} key= {book.id} />
              ))}
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
      </div>

      {/* Mobile View */}
      <div className="d-lg-none mt-3">
        <div className="row d-flex justify-content-center align-items-center">
          <ReturnBook book={books[7]} key={books[7].id}/>
        </div>
      </div>
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
