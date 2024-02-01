import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFoundPage">
      <h1>404</h1>
      <Link to="/">Return to Homepage</Link>
    </div>
  );
};

export default NotFound;