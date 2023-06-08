import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUserAlt } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const notify = () => {
    toast.success("Thank you for contacting saata. We will respond to your message within 3 working days.😊", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  function handleEmailChange(event) {
    const inputEmail = event.target.value;
    setEmail(inputEmail);

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    setIsValidEmail(emailRegex.test(inputEmail));
  }

  function NameinputChange(e) {
    const inputText = e.target.value;
    setName(inputText);
  }

  function MessageInputChange(e) {
    const inputText = e.target.value;
    setMessage(inputText);
  }
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (isValidEmail) {
      emailjs
        .sendForm(
         process.env.EMAILJS_SERVICEID,
         process.env.EMAILJS_TEMPLATEID,
          form.current,
         "SwlA8d9ZfDUsg9zTg",
        )
        .then(
          (result) => {
            notify();
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      //   toast.error("Please enter a correct email value");
      console.log("Email is invalid.");
    }
  };
  return (
    <>
      <section className="contact" id="contact">
        <div className="contact_wrapper">
          <form ref={form} className="contact_form" onSubmit={sendEmail}>
            <h2>Contact Us</h2>
            <p>
              Rationally encounter consequences that are extremely painful or
              again is there anyone.
            </p>
            <div className="input_wrapper">
              <div className="input_field">
                <input
                  type="text"
                  className="inner-input"
                  placeholder="Your Name"
                  name="user_name"
                  required
                  value={name}
                  onChange={NameinputChange}
                  onFocus={() => setIsNameFocused(true)}
                  onBlur={() => setIsNameFocused(false)}
                />
                {!isNameFocused && (
                  <a href="/" className="input-icons">
                    <FaUserAlt />
                  </a>
                )}
              </div>
              <div className="input_field">
                <input
                  type="email"
                  className="inner-input"
                  placeholder="Email Address"
                  name="user_email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                  onFocus={() => setIsEmailFocused(true)}
                  onBlur={() => setIsEmailFocused(false)}
                />
                {!isEmailFocused && (
                  <a href="/" className="input-icons">
                    <MdEmail />
                  </a>
                )}
              </div>
            </div>
            <textarea
              rows="10"
              cols="30"
              className="inner-Massege"
              placeholder="Your Message..."
              name="message"
              required
              value={message}
              onChange={MessageInputChange}
            ></textarea>          
                <input type="submit" className="submit-btn" value="Send" />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </form>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5183433954835!2d77.0082269142886!3d10.99968215804207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8576277c3f175%3A0x149ab1a4e986e87b!2sKrishna%20Colony%20Main%20Rd%2C%20Krishna%20Colony%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1677652885046!5m2!1sen!2sin"
              width="800"
              height="545"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
