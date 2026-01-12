"use client";

import React, { useState } from "react";
import "./Contact.css";
import { toast } from "sonner";
import { useLanguage } from "@/context/LanguageContext";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const api_key = process.env.NEXT_PUBLIC_EMAILJS_API_KEY;
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;

  const { t } = useLanguage();

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
      alert(t.contact.fillAllFields);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, e.target as HTMLFormElement, api_key)
      .then(() => {
        toast.success(t.contact.success);
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
        toast.error(t.contact.error);
      });
  };

  return (
    <div className="contact-container">
      <h1 className="logo">
        {t.contact.title} <span>{t.contact.span}</span>
      </h1>

      <div className="contact-wrapper animated bounceInUp">
        <div className="contact-form">
          <h3 className="contact-form-name">{t.contact.formTitle}</h3>
          <form action="" onSubmit={sendEmail}>
            <p>
              <label>{t.contact.name}</label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
              ></input>
            </p>
            <p>
              <label>{t.contact.email}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              ></input>
            </p>
            <p>
              <label>{t.contact.phone}</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              ></input>
            </p>
            <p>
              <label>{t.contact.affair}</label>
              <input
                type="text"
                name="affair"
                value={formData.affair}
                onChange={handleChange}
              ></input>
            </p>
            <p className="block">
              <label>{t.contact.message}</label>
              <textarea
                name="message"
                rows={1}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </p>
            <p className="block">
              <button type="submit">{t.contact.send}</button>
            </p>
          </form>
        </div>
        <div className="contact-info">
          <h3 className="contact-info-name">{t.contact.or}</h3>
          <p>
            <strong>jonathan04franco@gmail.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
