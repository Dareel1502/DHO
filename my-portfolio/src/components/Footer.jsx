import { useState } from "react";

export default function Footer({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo: just show success. Replace with API/email sending later.
    console.log("Message Sent:", formData);
    setFormData({ name: "", email: "", message: "" });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <footer
      className={`w-full px-6 md:px-20 py-16 transition-colors duration-500
        ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}
      `}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Info Section */}
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-bold">Get in Touch</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Want to work together or have a question? Send me a message and I’ll respond as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col space-y-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-white transition"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-white transition"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={4}
            className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-white transition resize-none"
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-md transition-colors"
          >
            Send Message
          </button>
          {success && (
            <p className="text-green-500 font-medium mt-2 text-center">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-500 dark:text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} DHO Portfolio. All rights reserved.
      </div>
    </footer>
  );
}
