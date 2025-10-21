import React from 'react';

export default function Home() {
  return (
    <div
      className="home-container d-flex flex-column justify-content-center align-items-center text-center text-light"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: 'calc(100vh - 120px)', // subtract navbar + footer height
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        className="overlay position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1,
        }}
      ></div>

      <div style={{ zIndex: 2, maxWidth: '700px' }}>
        <h1 className="display-4 fw-bold mb-3">Welcome to Coffee Prime ☕</h1>
        <p className="lead mb-4">Freshly brewed perfection — one cup at a time.</p>
        <a href="/menu" className="btn btn-light btn-lg shadow">
          Explore Menu
        </a>
      </div>
    </div>
  );
}
