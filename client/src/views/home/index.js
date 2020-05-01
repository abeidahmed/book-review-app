import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

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

const GET_BOOKS = gql`
  query bookList {
    books {
      title
      description
      author
    }
  }
`;
