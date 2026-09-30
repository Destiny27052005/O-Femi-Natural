import React, { useState } from "react";
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  User,
  Send,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Pencil
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.fullName}! Your message has been sent.`);
    setFormData({ fullName: "", email: "", subject: "", message: "" });
  };

  const handleWhatsAppChat = () => {
    const message = encodeURIComponent(
      "Hello FreshBites team! I have a question regarding your products/services."
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <main className="max-w-350 mx-auto px-4 md:px-12 py-8 space-y-10">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-[#eaf4ec] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border border-[#d6ebd9]">
        <div className="space-y-4 max-w-xl z-10">
          <span className="inline-block bg-[#d8ecd8] text-[#12773c] text-xs font-semibold px-3 py-1 rounded-full">
            Get in Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#11311b] tracking-tight">
            Contact Us
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We'd love to hear from you! Whether you have a question, feedback, or
            need support, we're just a message away.
          </p>
        </div>

        <div className="relative mt-8 md:mt-0 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=700&q=80"
            alt="Cookies and Snacks"
            className="w-72 md:w-96 h-48 md:h-60 object-cover rounded-3xl shadow-sm"
          />
          <div className="absolute -top-3 -left-4 sm:-left-6 font-serif italic text-xs md:text-sm text-[#12773c] select-none text-left">
            ` Your happiness <br /> is our priority 💚
          </div>
        </div>
      </section>

      {/* 2. Content Grid: Details (Left) & Form (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Contact Details & Map Card */}
        <aside className="lg:col-span-5 bg-white border border-gray-100 rounded-3xl p-6 md:p-8 space-y-6 shadow-xs">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Our Contact Details</h2>
            <p className="text-xs text-gray-500 mt-1">
              Reach out to us through any of the following channels. We're here to help!
            </p>
          </div>

          <div className="space-y-5">
            {/* WhatsApp */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#dcfce7] flex items-center justify-center text-[#12773c] shrink-0">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-900">WhatsApp</h3>
                  <p className="text-[11px] text-gray-500">Chat with us directly</p>
                </div>
              </div>
              <button
                onClick={handleWhatsAppChat}
                className="bg-[#12773c] hover:bg-[#0e5c2e] text-white text-xs font-semibold px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                Chat Now <ArrowRight size={13} />
              </button>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#dcfce7] flex items-center justify-center text-[#12773c] shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-900">Email</h3>
                <a
                  href="mailto:support@freshbites.in"
                  className="text-xs font-medium text-[#12773c] hover:underline"
                >
                  support@freshbites.in
                </a>
                <p className="text-[11px] text-gray-400 mt-0.5">We'll reply within 24 hours.</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#dcfce7] flex items-center justify-center text-[#12773c] shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-900">Phone</h3>
                <a
                  href="tel:+919876543210"
                  className="text-xs font-medium text-gray-800 hover:text-black"
                >
                  +91 98765 43210
                </a>
                <p className="text-[11px] text-gray-400 mt-0.5">Mon – Sat, 9:00 AM – 6:00 PM</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#dcfce7] flex items-center justify-center text-[#12773c] shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="text-xs font-bold text-gray-900">Our Address</h3>
                <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                  123 Green Lane, Food Street, <br />
                  Bengaluru, Karnataka – 560001
                </p>
              </div>
            </div>
          </div>

          {/* Map Preview Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-gray-100 bg-[#e7f0ea] h-36 flex items-center justify-center">
            {/* Map styling mock backdrop */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#12773c_1px,transparent_1px)] bg-size-[16px_16px]"></div>
            
            <div className="relative z-10 bg-white/95 backdrop-blur-xs rounded-xl p-3 shadow-md flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#12773c] flex items-center justify-center text-white">
                <MapPin size={16} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900">FreshBites</h4>
                <p className="text-[10px] text-gray-500">Bengaluru, Karnataka</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] font-semibold text-[#12773c] inline-flex items-center gap-1 mt-0.5 hover:underline"
                >
                  View on Maps <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Column: Send Us a Message Form */}
        <section className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-6 md:p-8 space-y-6 shadow-xs">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Send Us a Message</h2>
            <p className="text-xs text-gray-500 mt-1">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700">Full Name *</label>
                <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3.5 py-2.5 focus-within:border-[#12773c] transition-colors">
                  <User size={15} className="text-gray-400 shrink-0" />
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full text-xs outline-none bg-transparent placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700">Email Address *</label>
                <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-3.5 py-2.5 focus-within:border-[#12773c] transition-colors">
                  <Mail size={15} className="text-gray-400 shrink-0" />
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@example.com"
                    className="w-full text-xs outline-none bg-transparent placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Subject Dropdown */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700">Subject *</label>
              <div className="relative flex items-center border border-gray-200 rounded-xl px-3.5 py-2.5 focus-within:border-[#12773c] transition-colors">
                <Mail size={15} className="text-gray-400 shrink-0 mr-2" />
                <select
                  required
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full text-xs outline-none bg-transparent appearance-none cursor-pointer text-gray-700"
                >
                  <option value="" disabled>Select a topic</option>
                  <option value="order">Order Inquiry</option>
                  <option value="feedback">Product Feedback</option>
                  <option value="business">Bulk / Business Order</option>
                  <option value="support">General Support</option>
                </select>
                <ChevronDown size={14} className="pointer-events-none absolute right-3.5 text-gray-400" />
              </div>
            </div>

            {/* Message Area */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700">Message *</label>
              <div className="flex items-start gap-2 border border-gray-200 rounded-xl px-3.5 py-2.5 focus-within:border-[#12773c] transition-colors">
                <Pencil size={15} className="text-gray-400 shrink-0 mt-0.5" />
                <textarea
                  required
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full text-xs outline-none bg-transparent placeholder-gray-400 resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#12773c] hover:bg-[#0e5c2e] text-white py-3 rounded-2xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
            >
              <Send size={14} /> Send Message
            </button>
          </form>

          {/* Prefer WhatsApp Alternative Banner */}
          <div className="bg-[#eaf5ed] border border-[#d3ebd7] rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#12773c] shrink-0">
                <MessageCircle size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900">Prefer WhatsApp?</h4>
                <p className="text-[11px] text-gray-500">For quicker support, chat with us on WhatsApp.</p>
              </div>
            </div>
            <button
              onClick={handleWhatsAppChat}
              className="border border-[#12773c] text-[#12773c] hover:bg-[#12773c] hover:text-white px-4 py-2 rounded-xl text-xs font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap bg-white"
            >
              <MessageCircle size={13} /> Chat on WhatsApp <ArrowRight size={12} />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}