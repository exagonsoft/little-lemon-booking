import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitted(false), 3000);
      setErrors({});
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gradient-to-br from-primary to-secondary shadow-lg rounded-xl">
      <h1 className="text-4xl font-bold text-backGround mb-6 text-center">
        Contact Us
      </h1>
      {submitted && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-md">
          Your message has been sent successfully!
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-backGround font-semibold mb-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-secondary/50"
            required
          />
          {errors.name && <p className="text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-backGround font-semibold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-secondary/50"
            required
          />
          {errors.email && <p className="text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-backGround font-semibold mb-2"
          >
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-secondary/50"
            required
          />
          {errors.subject && <p className="text-red-600">{errors.subject}</p>}
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-backGround font-semibold mb-2"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-secondary/50"
            required
            rows="5"
          ></textarea>
          {errors.message && <p className="text-red-600">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-secondary text-backGround font-bold rounded-lg shadow-md hover:bg-yellow-300 transition-transform transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
