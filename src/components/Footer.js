import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  const d = new Date();
  var thisYear = d.getFullYear();
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2 style={{ fontFamily: "system-ui" }}>About Us</h2>
            <Link style={{ fontFamily: "system-ui" }} to="/">
              Services
            </Link>
            <Link style={{ fontFamily: "system-ui" }} to="/">
              Technical Support
            </Link>
            <Link style={{ fontFamily: "system-ui" }} to="/">
              Terms of Service
            </Link>
          </div>
          <div class="footer-link-items">
            <h2 style={{ fontFamily: "system-ui" }}>Contact Us</h2>
            <Link style={{ fontFamily: "system-ui" }} to="/">
              Customer Support
            </Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2 style={{ fontFamily: "system-ui" }}>Social Media</h2>
            <a
              style={{ fontFamily: "system-ui" }}
              href="https://www.instagram.com/spellcheck_uva/"
              target="_blank"
            >
              Instagram <i class="fab fa-instagram" />
            </a>

            <Link style={{ fontFamily: "system-ui" }} to="/">
              Twitter <i class="fab fa-twitter" />
            </Link>
            <Link style={{ fontFamily: "system-ui" }} to="/">
              TikTok <i class="fab fa-tiktok" />
            </Link>
            <Link style={{ fontFamily: "system-ui" }} to="/">
              LinkedIn <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Ventrust
              {/* <i class="fab fa-typo3" /> */}
            </Link>
          </div>
          <small style={{ fontFamily: "system-ui" }} class="website-rights">
            &copy; {thisYear} Ventrust
          </small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
