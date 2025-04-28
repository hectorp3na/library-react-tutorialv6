import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

const Book = ({ book }) => {
  return (
    <div className="book">
      <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img className="book__img" src={book.url} alt="" />
        </figure>
      </Link>
      <div className="book__title">
        <Link className="book__title--link" to={`/books/${book.id}`}>
          {" "}
          {book.title}
        </Link>
      </div>
     <Rating rating={book.rating}/>
     <Price salePrice={book.salePrice} originalPrice={book.originalPrice}/>
    </div>
  );
};

export default Book;
