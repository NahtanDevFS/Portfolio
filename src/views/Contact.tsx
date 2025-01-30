"use client";

import React, {useState} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import dotenv from 'dotenv';

dotenv.config();

//console.log(process.env); //to show the enviroment variables

export default function Contact() {

  const api_key = process.env.NEXT_PUBLIC_EMAILJS_API_KEY;

  console.log(process.env);

    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        affair: '',
        message: ''
      });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        // Check if all fields are filled
        if (!formData.fullname || !formData.email || !formData.phone || !formData.affair || !formData.message) {
          alert('Please fill in all fields.');
          return;
        }
    
        emailjs.sendForm('service_08cre3t', 'template_u2k28r8', e.target as HTMLFormElement, api_key)
          .then(() => {
            alert('Email sent');
            // Clear the form
            setFormData({
              fullname: '',
              email: '',
              phone: '',
              affair: '',
              message: ''
            });
          })
          .catch((error) => {
            console.error('Error sending email:', error);
            alert('Failed to send email. Please try again later.');
          });
      };

  return (
    <div className='contact-container'>
       <h1 className="logo">Contact <span>Me</span></h1>

      <div className="contact-wrapper animated bounceInUp">
          <div className="contact-form">
              <h3 className='contact-form-name'>Contact Form</h3>
              <form action="" onSubmit={sendEmail}>
                  <p>
                      <label>Name</label>
                      <input type="text" name="fullname" value={formData.fullname} onChange={handleChange}></input>
                  </p>
                  <p>
                      <label>Email Adress</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange}></input>
                  </p>
                  <p>
                      <label>Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange}></input>
                  </p>
                  <p>
                      <label>Affair</label>
                      <input type="text" name="affair" value={formData.affair} onChange={handleChange}></input>
                  </p>
                  <p className="block">
                    <label>Message</label> 
                      <textarea name="message" rows={3} value={formData.message} onChange={handleChange} ></textarea>
                  </p>
                  <p className="block">
                      <button type='submit'>
                          Send
                      </button>
                  </p>
              </form>
          </div>
          <div className="contact-info">
              <h3 className='contact-info-name'>Or you can contact me at this E-mail:</h3>
              <p>
                <strong>jonathan04franco@gmail.com</strong>
              </p>
            </div>
      </div>
    </div>
  )
}
