import React from "react";

const BooksList = ({ isLoading, books, isLoggedIn }) => {
  const BookList = books.length
    ? books.map((item) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-center"
          key={item.id}
        >
          <div>{item.title}</div>
          {isLoggedIn && (
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-primary">
                Read
              </button>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          )}
        </li>
      ))
    : "No Books Available";

  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? "Loading..." : <ul className="list-group">{BookList}</ul>}
    </div>
  );
};

export default BooksList;
