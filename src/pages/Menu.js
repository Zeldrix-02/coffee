// src/pages/Menu.js
import React, { useState } from 'react';

export default function Menu() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    notes: '',
    quantity: 1,
  });

  const coffees = [
    { name: 'Classic Espresso', price: 250, img: 'https://images.unsplash.com/photo-1511920170033-f8396924c348' },
    { name: 'Velvet Cappuccino', price: 300, img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93' },
    { name: 'Caramel Latte', price: 400, img: 'https://images.unsplash.com/photo-1577805947697-89e18249d767' },
  ];

  const handleBuyNow = (coffee) => {
    setSelectedItem(coffee);
    setShowForm(true);
    setFormData({
      name: '',
      address: '',
      notes: '',
      quantity: 1,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === 'quantity' ? parseInt(value) || 1 : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalPrice = selectedItem.price * formData.quantity;
    alert(
      `☕ Order Placed!\n\nThank you, ${formData.name}!\n\n` +
      `Order: ${formData.quantity} x ${selectedItem.name}\n` +
      `Total: ₱${totalPrice}\nAddress: ${formData.address}`
    );
    setShowForm(false);
  };

  const totalPrice = selectedItem ? selectedItem.price * formData.quantity : 0;

  return (
    <div className="container mt-5 pt-5 text-center">
      <h2 className="display-5 fw-bold mb-4 text-brown">Our Menu</h2>

      <div className="row justify-content-center">
        {coffees.map((coffee, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow-sm border-0 h-100">
              <img src={coffee.img} className="card-img-top" alt={coffee.name} />
              <div className="card-body">
                <h5 className="card-title">{coffee.name}</h5>
                <p className="card-text">₱{coffee.price}</p>
                <button
                  className="btn btn-dark w-100"
                  onClick={() => handleBuyNow(coffee)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order Form Modal */}
      {showForm && (
        <div
          className="order-modal position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
          style={{ zIndex: 1050 }}
        >
          <div className="bg-light p-4 rounded shadow" style={{ width: '400px' }}>
            <h5 className="fw-bold mb-3 text-brown">
              Order: {selectedItem?.name}
            </h5>
            <form onSubmit={handleSubmit}>
              
              {/* Name */}
              <div className="mb-3 text-start">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Address */}
              <div className="mb-3 text-start">
                <label className="form-label">Delivery Address</label>
                <textarea
                  name="address"
                  className="form-control"
                  value={formData.address}
                  onChange={handleChange}
                  rows="2"
                  placeholder="Enter your complete address"
                  required
                ></textarea>
              </div>

              {/* Quantity */}
              <div className="mb-3 text-start">
                <label className="form-label">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  className="form-control"
                  min="1"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Notes */}
              <div className="mb-3 text-start">
                <label className="form-label">Special Instructions</label>
                <textarea
                  name="notes"
                  className="form-control"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="2"
                  placeholder="e.g. less sugar, extra foam"
                ></textarea>
              </div>

              {/* Total */}
              <div className="mb-3 text-center">
                <h6>Total: ₱{totalPrice}</h6>
              </div>

              <div className="d-flex justify-content-between">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-dark">
                  Confirm Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
