"use client";

import React, { useState } from "react";
import "./Contact.css";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const api_key = process.env.NEXT_PUBLIC_EMAILJS_API_KEY;
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    affair: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.fullname ||
      !formData.email ||
      !formData.phone ||
      !formData.affair ||
      !formData.message
    ) {
      alert("Please fill in all fields.");
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, e.target as HTMLFormElement, api_key)
      .then(() => {
        toast.success("Email sent");
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          affair: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Failed to send email. Please try again later.");
      });
  };

  return (
    <div className="contact-container">
      <h1 className="logo">
        Contact <span>Me</span>
      </h1>

      <div className="contact-wrapper animated bounceInUp">
        <div className="contact-form">
          <h3 className="contact-form-name">Contact Form</h3>
          <form action="" onSubmit={sendEmail}>
            <p>
              <label>Name</label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
              ></input>
            </p>
            <p>
              <label>Email Adress</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              ></input>
            </p>
            <p>
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              ></input>
            </p>
            <p>
              <label>Affair</label>
              <input
                type="text"
                name="affair"
                value={formData.affair}
                onChange={handleChange}
              ></input>
            </p>
            <p className="block">
              <label>Message</label>
              <textarea
                name="message"
                rows={1}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </p>
            <p className="block">
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
        <div className="contact-info">
          <h3 className="contact-info-name">
            Or you can contact me at this E-mail:
          </h3>
          <p>
            <strong>jonathan04franco@gmail.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
