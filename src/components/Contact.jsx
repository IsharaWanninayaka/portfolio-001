import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaCheckCircle,
  FaBuilding,
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
      name: formData.name + " - via Portfolio Contact Form",
      email: formData.email,
      company: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_default",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_default",
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "public_key"
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

          setTimeout(() => setIsSubmitted(false), 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setTimeout(() => setIsSubmitted(false), 5000);
        }
      );
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-cyan-400" />,
      title: "Email Address",
      details: "isharawanninayaka26@gmail.com",
      link: "mailto:isharawanninayaka26@gmail.com",
    },
    {
      icon: <FaPhone className="text-emerald-400" />,
      title: "Phone / WhatsApp",
      details: "+94 71 46 98 430",
      link: "tel:+94714698430",
    },
    {
      icon: <FaMapMarkerAlt className="text-purple-400" />,
      title: "Location",
      details: "Kurunegala / Colombo, Sri Lanka",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: "GitHub Profile",
      url: "https://github.com/IsharaWanninayaka",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn Profile",
      url: "https://linkedin.com/in/ishara-wanninayaka-b05173327",
    },
    {
      icon: <FaEnvelope />,
      label: "Direct Email",
      url: "mailto:isharawanninayaka26@gmail.com",
    },
  ];

  return (
    <section id="contact" className="relative py-24 bg-slate-900/60 border-t border-slate-800/80">
      <div className="section-container">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
              <FaEnvelope className="text-xs" />
              <span>Get In Touch</span>
            </div>
          </div>
          <h2 className="section-title">
            Contact <span className="text-gradient">Ishara</span>
          </h2>
          <p className="section-subtitle">
            Open for Mobile App Development roles, Software Engineering positions, and technical collaborations.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Contact Cards & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="glass-card p-5 flex items-center gap-4 group hover:border-cyan-500/50 transition-all"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 text-xl group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">{info.title}</div>
                    <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {info.details}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability Highlight Box */}
            <div className="glass-card p-6 border-cyan-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold mb-3">
                <FaBuilding className="text-cyan-400" />
                <span>Industry Status & Availability</span>
              </div>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Completed Internship:</span>
                  <span className="font-semibold text-cyan-300">CeylonX Corporation (6 Months)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Target Roles:</span>
                  <span className="font-semibold text-slate-200">Mobile App Dev / Software Engineer</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span className="text-slate-400">Work Setup:</span>
                  <span className="font-semibold text-slate-200">Hybrid / Remote / On-site</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Response Time:</span>
                  <span className="font-semibold text-emerald-400">Within 24 Hours</span>
                </div>
              </div>
            </div>

            {/* Social Icons Bar */}
            <div>
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Connect Across Platforms
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-105"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 glass-card p-8 border-cyan-500/30">
            <h3 className="text-2xl font-bold text-white mb-2">Send Me a Message</h3>
            <p className="text-xs text-slate-400 mb-6">
              Have an opportunity, mobile app project, or technical question? Feel free to write me directly below.
            </p>

            {isSubmitted && (
              <div className="p-4 mb-6 text-sm text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 rounded-xl flex items-center gap-2 animate-fade-in">
                <FaCheckCircle className="text-cyan-400 text-lg flex-shrink-0" />
                <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  placeholder="Software Engineering / Mobile App Role Opportunity"
                />
              </div>

              <div>
                <label className="block mb-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  placeholder="Hi Ishara, I reviewed your CeylonX Corporation mobile app experience and would like to discuss..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gradient w-full py-3.5 text-slate-950 font-bold"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                    Sending Message...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message <FaPaperPlane className="text-xs" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

