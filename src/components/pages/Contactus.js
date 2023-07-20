import React from "react";
import "../../App.css";
import "./Contactus.css";
import Footer from "../Footer";
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <>
      <div className="contactus__container">
        <div>
          <img
            src="https://media.licdn.com/dms/image/C5603AQEiAp82Y0nMYg/profile-displayphoto-shrink_800_800/0/1652908185101?e=1695254400&v=beta&t=h63GbNgcM5SSEWBwlfLaXbKbSJjmNAuESfv5UGjTk0k"
            className="employee_photo"
          />
        </div>
        <h2>Noah Beamon</h2>
        <a href="mailto:noah.beamon648@gmail.com">noah.beamon648@gmail.com</a>
        <a href="tel:(571)-290-1448">(571)-290-1448</a>
        <a href="https://www.linkedin.com/in/noahbeamon/">Linkedin</a>
        <p className="experience_item" align="justify">
          Noah has five years of experience in computer engineering. He attended
          the University of Virginia where he studied computer engineering. His
          experience includes financial model development using Tableau and
          1010data. He also has experience in embedded systems and system
          reliability. He served as a research intern in the Department of Data
          Science at the University of Virginia and worked at the University of
          Virginia Hospital developing software for processing high resolution
          microscopic images.{" "}
        </p>
      </div>

      <Footer />
    </>
  );
}
