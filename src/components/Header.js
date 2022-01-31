import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInOut } from "../store/authSlice";

const Header = () => {
  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.books);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const handleClick = () => {
    dispatch(logInOut());
    console.log("test");
  };

  return (
    <>
      {error && (
        <div className="alert alert-danger mb-0" role="alert">
          {error}
        </div>
      )}

      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">My Books</span>

        <button
          onClick={handleClick}
          className={`btn ${
            isLoggedIn ? "btn-outline-primary" : "btn-primary"
          }`}
          type="submit"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </nav>
    </>
  );
};

export default Header;
