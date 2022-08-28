import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Email.css";

const SendEmail = () => {
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();

      emailjs
         .sendForm("service_tcisj8c", "template_1hj0eeg", form.current, "kqEeL6RxIkRkFdojn")
         .then(
            result => console.log(result.text),
            error => console.log(error.text)
         );

      e.target.reset();
   };

   return <form ref={ form } onSubmit={ sendEmail }>
      <div className="mb-3">
         <label form="name" className="form-label">Name</label>
         <input type="text" className="form-control" id="name" name="name" />
      </div>
      <div className="mb-3">
         <label form="email" className="form-label">Email address</label>
         <input type="email" className="form-control" id="email" name="email" />
      </div>
      <div className="mb-3">
         <label form="subject" className="form-label">Subject</label>
         <input type="text" className="form-control" id="subject" name="subject" />
      </div>
      <div className="mb-3">
         <label form="message" className="form-label">Message</label>
         <textarea className="form-control" id="message" rows="3" name="message" ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
   </form>
};

export default SendEmail;

