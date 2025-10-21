import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="text-center mt-5">
      <h1 className="fw-bold display-4">404</h1>
      <p className="lead">Oops! Page Not Found.</p>
      <Link to="/" className="btn btn-dark mt-3">Go Home</Link>
    </div>
  );
}

export default NotFound;
