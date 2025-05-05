import React from "react";
import BookCard from "../components/BookCard";
import { mockBooks } from "../data/mockBooks";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-5">
      <h1 className="fs-1 fw-bold mb-5">Bookify Library</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 justify-content-around">
        {mockBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
