import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { insertBook } from "../store/bookSlice";

const Addform = () => {
  const dispatch = useDispatch();

  const title = useRef(null);
  const price = useRef(null);
  const desc = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: title.current.value,
      price: price.current.value,
      desc: desc.current.value,
    };

    dispatch(insertBook(data));

    title.current.value = null;
    price.current.value = null;
    desc.current.value = null;
  };

  return (
    <div className="row">
      <div className="col-12 mt-3">
        <h2>Insert Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              ref={title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              required
              ref={price}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Description">Description</label>
            <textarea
              className="form-control"
              id="Description"
              rows="3"
              required
              ref={desc}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
