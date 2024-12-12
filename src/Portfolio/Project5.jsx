import React, { Component } from 'react';
import './Project.css';

class Project5 extends Component {
  render() {
    return (
      <div className="project-card">
        <h3 className="project-title">Project</h3>
        <p className="project-description">A Birthday Reminder App with Countdown built using JavaScript is a tool that helps users keep track of upcoming birthdays by displaying a countdown to the next one. It allows users to input multiple birthdays, and the app calculates the time left until each birthday arrives, showing the remaining days, hours, minutes, and seconds. The countdown updates in real-time, ensuring users are always aware of how much time is left. This app can be extended to send reminders or notifications as birthdays approach. It is typically built with HTML, CSS for the frontend, and JavaScript for handling the logic, such as date calculations and real-time countdown updates.</p>
        <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
      </div>
    );
  }
}

export default Project5;
