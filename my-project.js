import React, { useState } from 'react';
import './App.css';  

function App() {
  const [formData, setFormData] = useState({
    name: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.name} from ${formData.checkIn} to ${formData.checkOut}`);
  };

  return (
    <div className="App">
      <h1>Hotel Booking Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input name="name" type="text" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Check-In Date:
          <input name="checkIn" type="date" value={formData.checkIn} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Check-Out Date:
          <input name="checkOut" type="date" value={formData.checkOut} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Number of Guests:
          <input name="guests" type="number" value={formData.guests} onChange={handleChange} min="1" required />
        </label>
        <br />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default App;



