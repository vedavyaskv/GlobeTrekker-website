import React from 'react';

export default function Terms() {
  return (
    <section
      className="terms-section"
      style={{
        padding: '80px 20px',
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: '#f9fbfd',
        color: '#333',
        lineHeight: 1.7,
        minHeight: '100vh'
      }}
    >
      <div
        className="terms-container"
        style={{
          maxWidth: 900,
          margin: '0 auto',
          backgroundColor: '#fff',
          borderRadius: 12,
          padding: 40,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.07)'
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            color: '#07406e',
            marginBottom: 20,
            textAlign: 'center'
          }}
        >
          Terms & Conditions
        </h1>

        <p>Welcome to GlobeTrekker! By using our services, you agree to the following terms and conditions. Please read them carefully.</p>

        <h2 style={{ fontSize: '1.5rem', marginTop: 30, color: '#0c2d48' }}>1. Booking & Payment</h2>
        <ul style={{ margin: '15px 0 15px 20px' }}>
          <li style={{ marginBottom: 10 }}>All bookings are subject to availability and confirmation.</li>
          <li style={{ marginBottom: 10 }}>Full payment must be made prior to departure to confirm your reservation.</li>
          <li style={{ marginBottom: 10 }}>Prices are subject to change until booking is confirmed.</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', marginTop: 30, color: '#0c2d48' }}>2. Cancellations & Refunds</h2>
        <ul style={{ margin: '15px 0 15px 20px' }}>
          <li style={{ marginBottom: 10 }}>Cancellations must be made at least 7 days prior to departure for a full refund.</li>
          <li style={{ marginBottom: 10 }}>No refunds will be given for no-shows or late arrivals.</li>
          <li style={{ marginBottom: 10 }}>Refunds will be processed within 10 business days.</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', marginTop: 30, color: '#0c2d48' }}>3. Traveler Responsibilities</h2>
        <ul style={{ margin: '15px 0 15px 20px' }}>
          <li style={{ marginBottom: 10 }}>Travelers must carry valid documents such as passports and visas.</li>
          <li style={{ marginBottom: 10 }}>It is the responsibility of the traveler to comply with local laws and regulations.</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', marginTop: 30, color: '#0c2d48' }}>4. Liability</h2>
        <ul style={{ margin: '15px 0 15px 20px' }}>
          <li style={{ marginBottom: 10 }}>GlobeTrekker is not liable for delays, cancellations, or unforeseen circumstances beyond our control.</li>
          <li style={{ marginBottom: 10 }}>Travel insurance is strongly recommended for all travelers.</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', marginTop: 30, color: '#0c2d48' }}>5. Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Changes will be posted on this page.</p>

        <h2 style={{ fontSize: '1.5rem', marginTop: 30, color: '#0c2d48' }}>Contact Us</h2>
        <p>If you have any questions about these Terms & Conditions, feel free to <a href="/contact" style={{ color: '#07406e' }}>contact us</a>.</p>
      </div>
    </section>
  );
}
