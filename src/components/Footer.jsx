import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-200 text-base-content p-10">
        <div>
          <h6 className="footer-title">You are Most Welcome</h6>
          <Link
            to="/"
            className=" bg-white p-3 text-green-600 text-4xl font-bold rounded-full"
          >
            Fund_Raiser
          </Link>
        </div>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to="/about-us" className="link link-hover">
            About Us
          </Link>
          <Link to="/contact-us" className="link link-hover">
            Contact Us
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link to="/terms-of-use" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/privacy-policy" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/cookie-policy" className="link link-hover">
            Cookie policy
          </Link>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
