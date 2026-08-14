import React from 'react';
import './Footer.css';

/**
 * Cube icon SVG for Footer
 */
function FooterCubeIcon({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0, display: 'block' }}
    >
      <polygon points="18,2 33,10 18,18 3,10" fill="#FF1F1F" stroke="#F5F0E8" strokeWidth="1.5" strokeLinejoin="round" />
      <polygon points="3,10 18,18 18,34 3,26" fill="#F5F0E8" stroke="#F5F0E8" strokeWidth="1.5" strokeLinejoin="round" />
      <polygon points="18,18 33,10 33,26 18,34" fill="#c41818" stroke="#F5F0E8" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Footer Component
 * Section 07: Creative neo-brutalist landing page footer with banner, columns, and brand attribution.
 */
export default function Footer() {
  return (
    <footer id="footer" className="footer-frame">
      {/* Top Banner CTA */}
      <div className="footer-top-banner">
        <div>
          <h3 className="footer-top-heading">BUILD SOMETHING WORTH REMEMBERING.</h3>
          <p className="footer-top-subtext">
            Find the right people. Build together. Create something that stands out.
          </p>
        </div>
        <a href="/get-started" className="footer-top-btn">
          <span>GET STARTED</span>
          <span style={{ fontSize: '18px' }}>→</span>
        </a>
      </div>

      {/* Footer Links Columns */}
      <div className="footer-links-grid">
        {/* Navigation */}
        <div>
          <h4 className="footer-column-title">HACKSAATHI</h4>
          <ul className="footer-link-list">
            <li><a href="/" className="footer-link">Home</a></li>
            <li><a href="#features" className="footer-link">Features</a></li>
            <li><a href="#how-it-works" className="footer-link">How It Works</a></li>
            <li><a href="#audience" className="footer-link">Who It's For</a></li>
            <li><a href="#capabilities" className="footer-link">Capabilities</a></li>
            <li><a href="#faq" className="footer-link">FAQ</a></li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="footer-column-title">COMMUNITY</h4>
          <ul className="footer-link-list">
            <li><a href="https://discord.gg" target="_blank" rel="noreferrer" className="footer-link">Discord Community</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-link">Instagram</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a></li>
            <li><a href="https://github.com" target="_blank" rel="noreferrer" className="footer-link">GitHub</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="footer-column-title">RESOURCES</h4>
          <ul className="footer-link-list">
            <li><a href="#hackathons" className="footer-link">Hackathons</a></li>
            <li><a href="#opportunities" className="footer-link">Opportunities</a></li>
            <li><a href="#blog" className="footer-link">Blog & Stories</a></li>
            <li><a href="#contact" className="footer-link">Contact Us</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="footer-column-title">LEGAL</h4>
          <ul className="footer-link-list">
            <li><a href="#privacy" className="footer-link">Privacy Policy</a></li>
            <li><a href="#terms" className="footer-link">Terms of Service</a></li>
            <li><a href="#cookies" className="footer-link">Cookie Settings</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-brand">
          <span style={{ color: '#FFFFFF' }}>Hack</span>
          <span style={{ color: '#FF1F1F' }}>Saathi</span>
          <FooterCubeIcon size={24} />
        </div>

        <div className="footer-copy">
          © 2026 HackSaathi. All rights reserved.
        </div>

        <div className="footer-tagline">
          <span>MADE FOR BUILDERS.</span>
          <span style={{ color: '#FF1F1F', fontSize: '16px' }}>✦</span>
        </div>
      </div>
    </footer>
  );
}
