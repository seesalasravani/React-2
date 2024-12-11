import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact-section">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-info">
          Email: <a href="seesalasravani@gmail.com" className="contact-link">seesalasravani@gmail.com</a>
        </p>
        <p className="contact-info">
          LinkedIn: <a href="https://www.linkedin.com/in/sravani-seesala-568531253/" target="_blank" rel="noopener noreferrer" className="contact-link">seesalasravani</a>
        </p>
      </div>
    );
  }
}

export default Contact;
