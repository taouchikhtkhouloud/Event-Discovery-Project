import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.scss'

 const Contact = () => {
  const form = useRef();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");;
  const [email, setEmail] = useState("");
  const [message, setComment] = useState("");
 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9079pwk', 'template_t8h9hrq', form.current, 'vikUhk0IAJZYNt-VT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
     <div className="container contact">
        <div className="row">
          <div className="col-md-3">
            <div className="contact-info">
              
              <h2>Contact Us</h2>
              <h4>We would love to hear from you !</h4>
            </div>
          </div>
          <div className="col-md-9">
            <div className="contact-form">
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="fname">First Name:</label>
                <div className="col-sm-10">          
                  <input type="text" className="form-control" id="fname"  placeholder="Enter First Name" name="fname" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="lname">Last Name:</label>
                <div className="col-sm-10">          
                  <input type="text" className="form-control" id="lname"  placeholder="Enter Last Name" name="lname" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" htmlFor="message">Comment:</label>
                <div className="col-sm-10">
                  <textarea className="form-control" rows={5} id="message" defaultValue={""} name="message" />
                </div>
              </div>
              <div className="form-group">        
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" value="Send" className="btn btn-default"  >Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </form>
  );
};
export default Contact