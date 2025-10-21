import React, { useState } from 'react';

function Reservation() {
  const [form, setForm] = useState({ name: '', email: '', guests: '', date: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation confirmed for ${form.name} on ${form.date}!`);
    setForm({ name: '', email: '', guests: '', date: '' });
  };

  return (
    <div className="mt-5">
      <h2 className="fw-bold mb-3">Reserve a Table</h2>
      <form onSubmit={handleSubmit} className="p-4 bg-light rounded shadow-sm">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Number of Guests"
            value={form.guests}
            onChange={(e) => setForm({ ...form, guests: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="date"
            className="form-control"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
          />
        </div>
        <button className="btn btn-dark w-100" type="submit">Reserve</button>
      </form>
    </div>
  );
}

export default Reservation;
