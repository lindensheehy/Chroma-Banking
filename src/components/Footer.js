import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer class="footer">
        <div class="social-icons">
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
        </div>
        <div class="footer-lists">
            <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Data Usage</a></li>
            </ul>
            <ul>
                <li><a href="#">(123) 456-7890</a></li>
                <li><a href="#">info@chromabanking.com</a></li>
                <li><a href="#">1234 Crome St, Chroma City, A1B2C3</a></li>
            </ul>
        </div>
    </footer>
  );
}

export default Footer;