import React from 'react';
import { useEffect } from 'react';
import './Homepage.css';

const HomePage = () => {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = document.querySelectorAll('.section');
  //     sections.forEach(section => {
  //       if (isInViewport(section)) {
  //         section.classList.add('left-slide');
  //       } else {
  //         section.classList.remove('right-slide');
  //       }
  //     });
  //   };

  //   const isInViewport = (element) => {
  //     const rect = element.getBoundingClientRect();
  //     return (
  //       rect.top >= 0 &&
  //       rect.left >= 0 &&
  //       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  //       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //     );
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div className="home-container">
      
      <section className="section1">

        <div className="section1-title-box">
          <h1 className="section1-title">Chroma Banking</h1>
        </div>

        <div className="section1-button-box">
          <button className="section1-button">Get Started</button>
        </div>
    
      </section>

      {/* Second Section */}
      <section className="section2">

        <div class="section2-title">
          <h2>Welcome to Chroma Banking</h2>
        </div>

        <div class="section2-text">

          <p>Chroma Banking redefines the banking experience through innovation and customer empowerment. Our AI-driven mobile app and web platform deliver personalized financial guidance in real-time. We prioritize transparency with clear explanations and robust security measures, ensuring every transaction is protected.</p>

          <p>Innovation is core to Chroma Banking. From digital payments to predictive analytics, we adapt swiftly to industry changes. Whether you're an investor or saver, our tools empower you to thrive.</p>

          <p>Experience banking reimagined with Chroma Banking. Join us where convenience meets reliability, and your financial well-being is our priority.</p>
        
        </div>

      </section>

      {/* Third Section */}
      <section className="section3">

        <div class="section2-title">
          <h2>Some of Our Services</h2>
        </div>

        <div class="service-box">
          <h3>Tax Free Savings Accounts</h3>
          <p>Description of service 1.</p>
        </div>

        <div class="service-box">
          <h3>Business Accounts</h3>
          <p>Description of service 2.</p>
        </div>

        <div class="service-box">
          <h3>Cash-Back Credit Cards</h3>
          <p>Description of service 3.</p>
        </div>

      </section>
    </div>
  );
}

export default HomePage;