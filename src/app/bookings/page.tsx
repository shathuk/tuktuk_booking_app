// app/book/page.tsx or any component
'use client';

import { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup_location: '',
    drop_location: '',
    booking_date: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Sending...');

    try {
      const res = await fetch('https://doctorapp.rf.gd/tuktuk/api/bookings.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setMessage(data.message || 'Success');
    } catch (err) {
      setMessage('Error sending booking');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Book a Tuk-Tuk</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input name="pickup_location" placeholder="Pickup Location" value={formData.pickup_location} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input name="drop_location" placeholder="Drop Location" value={formData.drop_location} onChange={handleChange} required className="w-full border p-2 rounded" />
        <input type="datetime-local" name="booking_date" value={formData.booking_date} onChange={handleChange} required className="w-full border p-2 rounded" />
        <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded">Book Now</button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}
