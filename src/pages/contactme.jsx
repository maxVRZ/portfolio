import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./contactme.css";

const Contactme = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_RESEND_API_KEY}` 
        },
        body: JSON.stringify({
          from: 'Portfolio <onboarding@resend.dev>', 
          to: ['mvrkxc@gmail.com'], 
          subject: `New message from portfolio from: - ${form.name}`,
          html: `
            <h3>New message:</h3>
            <p><strong>Name:</strong> ${form.name}</p>
            <p><strong>Email:</strong> ${form.email}</p>
            <p><strong>Message:</strong> ${form.message}</p>
          `,
        }),
      });

      if (response.ok) {
        setStatus('Sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        console.error("Error de Resend:", errorData);
        setStatus('Error');
      }
    } catch (error) {
      console.error("Error", error);
      setStatus('Error');
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p style={{ color: '#9ca3af' }}>Something in mind? Contact me</p>

      <form className="contact-form" onSubmit={handleSendEmail}>
        
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleOnchange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleOnchange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            value={form.message}
            onChange={handleOnchange}
          />
        </div>

        <button type="submit" className="submit-btn">Send</button>
        
        {status && (
          <p className={`status-message ${status.includes("success") ? "status-success" : "status-error"}`}>
            {status}
          </p>
        )}
      </form>

      <Link to="/">Home</Link>
    </div>
  );
};

export default Contactme;