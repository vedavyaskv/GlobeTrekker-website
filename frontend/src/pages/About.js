import React from 'react';

export default function About() {
  return (
    <section className="about-section" style={{ padding: '60px 20px', background: '#f9f9f9', color: '#333', fontFamily: "'Poppins', sans-serif" }}>
      <div className="container" style={{ maxWidth: 1000, margin: 'auto' }}>
        <h1 style={{
          textAlign: 'center',
          color: '#07406e',
          fontSize: '3rem',
          marginBottom: '30px',
          marginTop: '60px',
        }}>
          About GlobeTrekker
        </h1>

        <p style={{
          fontSize: '1.1rem',
          lineHeight: 1.8,
          marginBottom: '20px',
          textAlign: 'justify',
        }}>
          Welcome to <strong>GlobeTrekker</strong> — your personalized gateway to unforgettable adventures. We believe travel is more than just visiting places; it's about creating stories, embracing cultures, and collecting moments that shape who we are. Whether you're a solo explorer or a luxury seeker, we're here to make your travel dreams come true.
        </p>

        <p style={{
          fontSize: '1.1rem',
          lineHeight: 1.8,
          marginBottom: '20px',
          textAlign: 'justify',
        }}>
          Founded with passion and driven by wanderlust, GlobeTrekker combines smart technology with dedicated human touch. We carefully craft our itineraries to balance iconic must-see locations with offbeat gems. From majestic mountain escapes to serene beach retreats, we've got a perfect escape for every traveler. Our all-in-one platform allows you to browse curated packages, pick your dream destination, and personalize your itinerary — all with just a few clicks.
        </p>

        <p style={{
          fontSize: '1.1rem',
          lineHeight: 1.8,
          marginBottom: '20px',
          textAlign: 'justify',
        }}>
          What sets us apart is our commitment to detail. Every package includes thoughtful perks: professional photoshoots, multilingual guides, 24/7 concierge support, and flexible payment options. And because your safety is our top priority, we provide real-time travel alerts, insured tours, and verified accommodations.
        </p>

        <p style={{
          fontSize: '1.1rem',
          lineHeight: 1.8,
          marginBottom: '20px',
          textAlign: 'justify',
        }}>
          GlobeTrekker is not just a service — it's a community. We partner with local guides and businesses to offer authentic experiences and support responsible tourism. By traveling with us, you're also supporting sustainable travel that protects local cultures and environments.
        </p>

        <div className="mission-vision" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 30,
          marginTop: 40,
          justifyContent: 'space-between',
        }}>
          <div className="box" style={{
            flex: '1 1 45%',
            background: 'white',
            borderLeft: '5px solid #07406e',
            padding: 20,
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          }}>
            <h2 style={{ color: '#07406e', marginBottom: 10 }}>Our Mission</h2>
            <p>To make global travel accessible, affordable, and awe-inspiring by delivering unforgettable journeys tailored to every traveler's needs and dreams.</p>
          </div>
          <div className="box" style={{
            flex: '1 1 45%',
            background: 'white',
            borderLeft: '5px solid #07406e',
            padding: 20,
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          }}>
            <h2 style={{ color: '#07406e', marginBottom: 10 }}>Our Vision</h2>
            <p>To be the world's most trusted travel companion, inspiring millions to discover the planet's beauty one journey at a time.</p>
          </div>
        </div>

        <hr className="divider" style={{
          margin: '50px 0',
          border: 'none',
          height: 2,
          background: '#ddd'
        }}/>

        <div className="developer" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          marginTop: 30,
          background: 'white',
          padding: 20,
          borderLeft: '4px solid #07406e',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          borderRadius: 8,
          flexWrap: 'wrap'
        }}>
          <img src="mypic.jpg" alt="Developer Photo" style={{
            width: 100,
            height: 100,
            objectFit: 'cover',
            borderRadius: '50%'
          }}/>
          <div className="info" style={{ flex: 1, minWidth: 200 }}>
            <h3 style={{ marginBottom: 5, color: '#07406e' }}>Site Developed by</h3>
            <p><strong>K Vedavyas Vishal</strong></p>
            <p>Full Stack Developer | Travel Enthusiast</p>
            <div className="footer-socials" style={{
              display: 'flex',
              justifyContent: 'left',
              gap: 20,
              margin: '40px 0 10px',
            }}>
              <a href="#" style={{ color: '#07406e', fontSize: '1.3rem', transition: '0.3s' }}><i className="fab fa-facebook-f"></i></a>
              <a href="#" style={{ color: '#07406e', fontSize: '1.3rem', transition: '0.3s' }}><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/kodandapani-vedavyas-vishal-779644314/" style={{ color: '#07406e', fontSize: '1.3rem', transition: '0.3s' }}><i className="fab fa-linkedin-in"></i></a>
              <a href="https://github.com/vedavyaskv" target="_blank" rel="noopener noreferrer" style={{ color: '#07406e', fontSize: '1.3rem', transition: '0.3s' }}><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
