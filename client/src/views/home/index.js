import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_BOOKS } from "api/book/book-list";

export default function Home() {
  const { data, loading, error } = useQuery(GET_BOOKS);

  if (loading || error) return <p>Loading...</p>;

  return (
    <div>
      {data.books.map(book => (
        <div key={book.title}>
          <h1>{book.title}</h1>
          <p>Author: {book.author}</p>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  );
}
