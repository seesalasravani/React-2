import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about-section">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          Write a brief introduction about yourself, your skills, and interests. Highlight your passions and what makes you unique.
        </p>
      </div>
    );
  }
}

export default About;
