import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name + "- via Portfolio Contact Form",
      email: formData.email,
      company: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSubmitting(false);
          setIsSubmitted(true);

          // Reset form
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });

          // Hide message after 5 seconds
          setTimeout(() => setIsSubmitted(false), 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setIsSubmitting(false);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: "isharawanninayaka26@gmail.com",
      link: "mailto:isharawanninayaka26@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      details: "+94 71 46 98 430",
      link: "tel:+94 71 46 98 430",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      details: "Kurunegala,SriLanka",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      url: "https://github.com/IsharaWanninayaka",
      color: "hover:bg-gray-800",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/ishara-wanninayaka-b05173327",
      color: "hover:bg-blue-700",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      url: "mailto:isharawanninayaka26@gmail.com",
      color: "hover:bg-red-600",
    },
  ];

  return (
    <section id="contact" className="section-container">
      <div className="mb-12 text-center">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm currently seeking internship opportunities for Summer 2024. Let's
          build something amazing together!
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>
            <p className="mb-8 text-gray-600">
              Feel free to reach out if you're looking for a developer, have any
              questions, or just want to connect. I'm always open to discussing
              new opportunities!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="flex items-center p-6 space-x-4 transition-shadow card hover:shadow-xl group"
              >
                <div className="flex items-center justify-center w-12 h-12 text-xl transition-transform rounded-full bg-primary/10 text-primary group-hover:scale-110">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold">{info.title}</h4>
                  <p className="text-gray-600">{info.details}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Availability */}
          <div className="p-6 text-white card bg-gradient-to-r from-primary to-accent">
            <h4 className="mb-3 text-xl font-bold">Internship Availability</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Summer 2026:</span>
                <span className="font-semibold">Available ✓</span>
              </div>
              <div className="flex justify-between">
                <span>Duration:</span>
                <span>6 months</span>
              </div>
              <div className="flex justify-between">
                <span>Type:</span>
                <span>On-site or Remote</span>
              </div>
            </div>
            <div className="p-3 mt-4 rounded-lg bg-white/20">
              <p className="text-sm">Quick response time: Within 24 hours</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Connect with me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-gray-100 ${social.color} rounded-full flex items-center justify-center text-gray-700 hover:text-white transition-all duration-300 transform hover:scale-110`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-8 card">
          <h3 className="mb-6 text-2xl font-bold">Send me a message</h3>

          {isSubmitted && (
            <div className="p-4 mb-6 text-green-700 border border-green-200 rounded-lg bg-green-50">
              Thank you for your message! I'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 transition-colors border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 transition-colors border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 transition-colors border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Internship Opportunity"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 transition-colors border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Tell me about the opportunity..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center w-full btn-primary"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 mr-2 border-b-2 border-white rounded-full animate-spin"></span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message <FaPaperPlane className="ml-2" />
                </>
              )}
            </button>

            <p className="text-sm text-center text-gray-500">
              I'll get back to you within 24 hours. Looking forward to
              connecting!
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
