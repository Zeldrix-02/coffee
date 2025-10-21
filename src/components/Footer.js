import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-auto shadow">
      <div className="container">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Coffee Prime | Fuel Your Day ☕
        </p>
      </div>
    </footer>
  );
}

export default Footer;
