import React, { Fragment } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";

import "./book.css";

const PostContainer = () => {
  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col-12">
          <BooksList />
        </div>
        <div className="col-12 side-line mt-5">
          <BookInfo />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
