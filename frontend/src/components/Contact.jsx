import React from 'react';
import "../form.css"
import { twitter , linkedin, facebook, instagram, mail, call, location} from '../assets';
const Contact = () => {
  return (
    <section>
      <div className="container1">
        <div className="contactInfo">
          <div>
            <h2>Contact Info</h2>
            <ul className="info">
              <li>
                <span><img src={location} alt="Location" /></span>
                <span>
                  184 Ippokratous Street<br />
                  Athens, GR<br />
                  11472
                </span>
              </li>
              <li>
                <span><img src={mail} alt="Mail" /></span>
                <span><a href="mailto:nassosanagn@gmail.com">nassosanagn@gmail.com</a></span>
              </li>
              <li>
                <span><img src={call} alt="Call" /></span>
                <span>702-279-3488</span>
              </li>
            </ul>
          </div>
          <ul className="sci">
            <li><a href="/"><img src={facebook} alt="Facebook" /></a></li>
            <li><a href="/"><img src={instagram} alt="Instagram" /></a></li>
            <li><a href="/"><img src={twitter} alt="Twitter" /></a></li>
            <li><a href="/"><img src={linkedin} alt="LinkedIn" /></a></li>
          </ul>
        </div>
        <div className="contactForm">
          <h2>Send a Message</h2>
          <div className="formBox">
            <div className="inputBox w50">
              <input type="text" name="firstName" required />
              <span>First Name</span>
            </div>
            <div className="inputBox w50">
              <input type="text" name="lastName" required />
              <span>Last Name</span>
            </div>
            <div className="inputBox w50">
              <input type="email" name="email" required />
              <span>Email Address</span>
            </div>
            <div className="inputBox w50">
              <input type="text" name="mobileNumber" required />
              <span>Mobile Number</span>
            </div>
            <div className="inputBox w100">
              <textarea name="message" required></textarea>
              <span>Write your message here...</span>
            </div>
            <div className="inputBox w100">
              <input type="submit" value="Send" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
