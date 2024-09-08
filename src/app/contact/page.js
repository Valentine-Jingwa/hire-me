'use client';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhoneAlt, FaCoffee, FaShoppingCart } from 'react-icons/fa';
import { IoArrowBack } from 'react-icons/io5';
import BgManager from '../home/BgManager';
import { useState } from 'react';
import Link from 'next/link';

export default function Contacts() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle email submission (e.g., using a Next.js API route)
  };

  return (
    <BgManager>
      <Link className="fixed top-4 left-4 text-white p-2 rounded" href="/home">
        <IoArrowBack />
      </Link>

      <div className="flex flex-col items-center justify-center h-screen text-white px-4 space-y-8">
        {/* Contact Form */}
        <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-indigo-500 rounded-lg font-semibold hover:bg-indigo-600 transition"
            >
              Send Message
            </button>
          </form>
          {submitted && <p className="mt-4 text-green-400">Thank you! Your message has been sent.</p>}
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a href="mailto:vallyjingwa@gmail.com" className="text-3xl hover:text-gray-400 transition">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/valentine-achalefi-jingwa-12607b252" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-400 transition">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourgithubusername" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-400 transition">
            <FaGithub />
          </a>
          <a href="https://twitter.com/yourtwitterusername" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-400 transition">
            <FaTwitter />
          </a>
        </div>

        {/* Buy Me a Coffee Section */}
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-xl font-bold">Support My Work</h2>
          <a
            href="https://www.buymeacoffee.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-2xl bg-yellow-500 p-3 rounded-lg shadow-lg hover:bg-yellow-600 transition"
          >
            <FaCoffee /> <span>Buy Me a Coffee</span>
          </a>
        </div>

        {/* Store Section */}
        <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg space-y-6">
          <h2 className="text-2xl font-bold mb-4">My Store</h2>

          <div className="space-y-4">
            {/* Store Item 1 */}
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <h3 className="text-xl">Item One</h3>
                <p className="text-gray-400">$10.00</p>
              </div>
              <a
                href="https://yourstorelink.com/item1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-lg bg-green-500 p-2 rounded-lg shadow-lg hover:bg-green-600 transition"
              >
                <FaShoppingCart /> <span>Buy Now</span>
              </a>
            </div>

            {/* Store Item 2 */}
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <h3 className="text-xl">Item Two</h3>
                <p className="text-gray-400">$25.00</p>
              </div>
              <a
                href="https://yourstorelink.com/item2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-lg bg-green-500 p-2 rounded-lg shadow-lg hover:bg-green-600 transition"
              >
                <FaShoppingCart /> <span>Buy Now</span>
              </a>
            </div>

            {/* Add more store items as needed */}
          </div>
        </div>
      </div>
    </BgManager>
  );
}
