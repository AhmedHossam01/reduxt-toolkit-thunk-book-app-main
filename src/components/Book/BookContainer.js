import React, { Fragment, useEffect } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";
import "./book.css";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../store/bookSlice";

const PostContainer = () => {
  const dispatch = useDispatch();
  const { books, isLoading } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col-12">
          <BooksList books={books} isLoading={isLoading} />
        </div>
        <div className="col-12 side-line mt-5">
          <BookInfo />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
