import React from "react";
import { ShoppingCart } from "lucide-react";
import { useBasket } from "../context/BasketContext";

const BookCard = ({ book }) => {
  const { addToBasket } = useBasket();
  
  return (
    <div className="d-flex flex-column bg-white rounded-3 shadow-lg overflow-hidden mx-3 bg-tertiary p-3 my-4">
      <img src={book.coverUrl} alt={`Cover of ${book.title}`}className="img-fluid"/>
      <div className="p-4 d-flex flex-column flex-grow-1">
        <h3 className="fw-bold fs-5 mb-1">{book.title}</h3>
        <p className="text-secondary mb-2">{book.author}</p>
        <p className="text-dark fw-medium mt-auto">${book.price.toFixed(2)}</p>
        <button type="button" onClick={() => addToBasket(book)}className="mt-3 btn btn-primary text-white py-2 rounded-3 align-items-center d-flex justify-content-center gap-2">
          <ShoppingCart />Add to Basket</button>
      </div>
    </div>
  );
};

export default BookCard;