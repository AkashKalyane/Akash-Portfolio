import React from "react";
import emailjs from "emailjs-com";

import shakeHand from "../../images/shake.svg";

import "./Contact.css";
import Heading from "../Heading/Heading";

function Contact() {
  return (
    <section className="contact" name="contact">
      <Heading text="Contact" />

      <div className="content">
        <div className="left">
          <img src={shakeHand} alt="shake-hand" />
        </div>
        <div className="right">
          <form>
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
