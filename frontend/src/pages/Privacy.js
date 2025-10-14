import React from 'react';

export default function PrivacyPolicy() {
  return (
    <section
      className="privacy-section"
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
        className="privacy-container"
        style={{
          maxWidth: 900,
          margin: '0 auto',
          backgroundColor: '#fff',
          borderRadius: 12,
          padding: 20,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.07)',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            color: '#07406e',
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          Privacy Policy
        </h1>

        <p>
          <strong>Effective Date:</strong> July 1, 2025
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: 30, color: '#0c2d48' }}>
          1. Introduction
        </h2>
        <p>
          At GlobeTrekker, we are committed to protecting your personal data and respecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: 30, color: '#0c2d48' }}>
          2. Information We Collect
        </h2>
        <ul style={{ margin: '15px 0 15px 20px' }}>
          <li style={{ marginBottom: 10 }}>
            Your name, email, phone number, and other contact details
          </li>
          <li style={{ marginBottom: 10 }}>
            Travel preferences and booking information
          </li>
          <li style={{ marginBottom: 10 }}>
            Browser type, device data, and IP address
          </li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', marginTop: 30, color: '#0c2d48' }}>
          3. How We Use Your Information
        </h2>
        <ul style={{ margin: '15px 0 15px 20px' }}>
          <li style={{ marginBottom: 10 }}>
            To personalize your travel experience
          </li>
          <li style={{ marginBottom: 10 }}>
            To manage bookings and respond to inquiries
          </li>
          <li style={{ marginBottom: 10 }}>
            To improve our website and services
          </li>
          <li style={{ marginBottom: 10 }}>
            To send promotional offers (if opted in)
          </li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', marginTop: 30, color: '#0c2d48' }}>
          4. Data Security
        </h2>
        <p>
          We take strong precautions to protect your data from unauthorized access, alteration, or disclosure.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: 30, color: '#0c2d48' }}>
          5. Your Rights
        </h2>
        <p>
          You can request access to your data, ask for corrections, or request deletion by contacting us at <strong>privacy@GlobeTrekker.com</strong>.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: 30, color: '#0c2d48' }}>
          6. Policy Updates
        </h2>
        <p>
          We may occasionally update this policy. Changes will be posted here, so please check back regularly.
        </p>

        <p>
          If you have any questions, contact us at <strong>support@GlobeTrekker.com</strong>.
        </p>
      </div>
    </section>
  );
}
