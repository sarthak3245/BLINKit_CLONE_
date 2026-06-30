import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <footer className="contact-section">
      <div className="contact-top">

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: support@blinkitclone.com</p>
          <p>Phone: +91 90000 00000</p>
          <p>Address: India</p>
        </div>

        {/* Social Media */}
        <div className="social-media">
          <h3>Follow Us</h3>

          <div className="social-icons">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
              />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
              />
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                alt="Twitter"
              />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733561.png"
                alt="LinkedIn"
              />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                alt="YouTube"
              />
            </a>
          </div>
        </div>

      </div>

      <p className="footer-note">
        © 2026 Blinkit Clone. All rights reserved.
      </p>
    </footer>
  );
};

export default Contact;
