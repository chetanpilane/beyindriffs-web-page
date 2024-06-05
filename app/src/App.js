import React from 'react';
import './App.css';

function Header() {
  return (
    <header className="header">
      <div>
        <img src="/assets/beyondriffs_logo (1).jpeg" alt="image not found"></img>
      </div>
      <nav className="nav">
        <a href="#courses">Courses</a>
        <a href="#about">About</a>
        <a href="#resources">Resources</a>
        <a href="#programs">Programs</a>
        <a href="#support">Support</a>
        <a href="#teach">Teach With Us</a>
      </nav>
      <div className="buttons">
        <button className="login-button">Login</button>
        <button className="trial-button">Book a free trial</button>
      </div>
    </header>
    
  );
}

function AboutSection() {
  return (
    <section className="about-section" id="about">
  <h1>We Teach Music, Dance, Instruments That People Love</h1>
  <div className="about-description">
    <p>
      <b>Beyondriffs</b> is a pioneering digital platform for online music and dance education. Our mission is to transform the way people learn music and dance by providing a top-notch educational experience through our curated curriculum, certified teachers, and personalized learning journeys tailored to each student's needs.
    </p>
    <p>
      Our comprehensive program is designed to cater to diverse student personas and learning preferences. We offer our courses in three distinct categories:
    </p>
    <div className="journey-types">
      <div className="journey-type">
        <h3>Beginner's Musical Journey</h3>
        <p>Ideal for young learners and beginners, this program introduces the basics of music and dance in a fun and engaging way. It's perfect for those exploring their interests for the first time.</p>
      </div>
      <div className="journey-type">
        <h3>Hobby & Passion Journey</h3>
        <p>Designed for individuals of all age groups who wish to pursue music and dance as a hobby or passion. This program focuses on enjoyment and personal fulfillment, allowing students to progress at their own pace.</p>
      </div>
      <div className="journey-type">
        <h3>Professional Certification Journey</h3>
        <p>For dedicated learners aiming to achieve formal qualifications and professional expertise in music and dance. This rigorous program provides structured learning and comprehensive training to prepare students for certification exams and professional performances.</p>
      </div>
    </div>
  </div>
</section>

  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <AboutSection />
    </div>
  );
}

export default App;

