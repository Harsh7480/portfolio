import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Instagram, CheckCircle } from 'lucide-react';
// import toast, { Toaster } from 'react-hot-toast';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    worktype: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (errors[id]) {
      setErrors({ ...errors, [id]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'dabedbbf-de7c-4dc9-8973-978a18ff7d49',
          ...formData,
        }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', number: '', email: '', worktype: '', message: '' });
      } else {
        toast.error('Failed to send message. Please try again.', {
          duration: 4000,
          position: 'top-center',
          style: {
            background: '#EF4444',
            color: '#fff',
            fontWeight: '500',
            borderRadius: '8px',
            padding: '12px',
          },
        });
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#EF4444',
          color: '#fff',
          fontWeight: '500',
          borderRadius: '8px',
          padding: '12px',
        },
      });
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <Header />
      <section
        className="w-full py-16 min-h-screen pt-34 dark:bg-gray-900"
        id="contact"
      >
        {/* <Toaster /> */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-slide-up">
            <span className="inline-block px-4 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-gray-400">
              Contact
            </span>
            <h2 className="mt-4 text-4xl font-bold text-gray-700 dark:text-gray-100">Get in Touch</h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
              Feel free to reach out to me via mail or phone, or simply fill out the form below.
              I’d love to hear from you and will get back to you as soon as possible.
            </p>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4 md:h-full animate-slide-left">
              {/* Email */}
              <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6 rounded-2xl shadow-lg shadow-indigo-500/20 flex items-center md:flex-1 transition duration-300 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-[1.02]">
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-500/10 p-2 rounded-full">
                    <Mail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">jaiswalharsh9625@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6 rounded-2xl shadow-lg shadow-pink-500/20 flex items-center md:flex-1 transition duration-300 hover:shadow-xl hover:shadow-pink-500/40 hover:scale-[1.02]">
                <div className="flex items-center gap-3">
                  <div className="bg-pink-500/10 p-2 rounded-full">
                    <Phone className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300">+91 9625916360</p>
                    <p className="text-gray-600 dark:text-gray-300">+91 7480870953</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6 rounded-2xl shadow-lg shadow-orange-500/20 flex items-center md:flex-1 transition duration-300 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-[1.02]">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-500/10 p-2 rounded-full">
                    <MapPin className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">Noida, Uttar Pradesh</p>
                  </div>
                </div>
              </div>

              {/* Follow Me */}
              <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6 rounded-2xl shadow-lg shadow-purple-500/20 flex items-center justify-between md:flex-1 transition duration-300 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-[1.02]">
                <h4 className="font-semibold text-sm">Follow Me</h4>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/Harsh7480"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 dark:bg-gray-700 p-1.5 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/harsh-jaiswal-294940202/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 dark:bg-gray-700 p-1.5 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:jaiswalharsh9625@gmail.com"
                    className="bg-gray-200 dark:bg-gray-700 p-1.5 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/jaiswal_harsh2004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 dark:bg-gray-700 p-1.5 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 dark:bg-gray-800 dark:border-gray-700 dark:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-indigo-500/20 transition-all duration-300 md:h-full animate-slide-right flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-gray-600 mb-6 border-b border-gray-400 pb-2 dark:text-gray-300 dark:border-gray-600">
                  Send a Message
                </h3>
                {!isSubmitted ? (
                  <form className="space-y-5 flex-1" onSubmit={handleSubmit}>
                    <input
                      type="hidden"
                      name="access_key"
                      value="dabedbbf-de7c-4dc9-8973-978a18ff7d49"
                    />
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`peer border ${errors.name ? 'border-red-400 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg px-4 pt-5 pb-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-indigo-500 placeholder-transparent bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200`}
                          placeholder="Your Name"
                          aria-invalid={errors.name ? 'true' : 'false'}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        <label
                          htmlFor="name"
                          className={`absolute left-4 top-1 text-gray-500 text-sm px-1 transition-all
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-gray-600 dark:peer-focus:text-gray-400
              ${errors.name ? 'text-red-400 dark:text-red-500' : ''}`}
                        >
                          Your Name
                        </label>
                        {errors.name && (
                          <p id="name-error" className="text-red-400 dark:text-red-500 text-xs mt-1">{errors.name}</p>
                        )}
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          id="number"
                          name="number"
                          value={formData.number}
                          onChange={handleInputChange}
                          className="peer border border-gray-300 dark:border-gray-600 rounded-lg px-4 pt-5 pb-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-indigo-500 placeholder-transparent bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                          placeholder="Your Number"
                        />
                        <label
                          htmlFor="number"
                          className="absolute left-4 top-1 text-gray-500 dark:text-gray-400 text-sm px-1 transition-all
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-gray-600 dark:peer-focus:text-gray-400"
                        >
                          Your Number
                        </label>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`peer border ${errors.email ? 'border-red-400 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg px-4 pt-5 pb-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-indigo-500 placeholder-transparent bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200`}
                          placeholder="Enter Your Email"
                          aria-invalid={errors.email ? 'true' : 'false'}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                        <label
                          htmlFor="email"
                          className={`absolute left-4 top-1 text-gray-500 dark:text-gray-400 text-sm px-1 transition-all
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-gray-600 dark:peer-focus:text-gray-400
              ${errors.email ? 'text-red-400 dark:text-red-500' : ''}`}
                        >
                          Enter Your Email
                        </label>
                        {errors.email && (
                          <p id="email-error" className="text-red-400 dark:text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          id="worktype"
                          name="worktype"
                          value={formData.worktype}
                          onChange={handleInputChange}
                          className="peer border border-gray-300 dark:border-gray-600 rounded-lg px-4 pt-5 pb-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-indigo-500 placeholder-transparent bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                          placeholder="Enter Work Type"
                        />
                        <label
                          htmlFor="worktype"
                          className="absolute left-4 top-1 text-gray-500 dark:text-gray-400 text-sm px-1 transition-all
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-gray-600 dark:peer-focus:text-gray-400"
                        >
                          Role
                        </label>
                      </div>
                    </div>
                    <div className="relative flex-1">
                      <textarea
                        id="message"
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`peer border ${errors.message ? 'border-red-400 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg px-4 pt-5 pb-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-indigo-500 placeholder-transparent bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 resize-none`}
                        placeholder="Write a message here"
                        aria-invalid={errors.message ? 'true' : 'false'}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      ></textarea>
                      <label
                        htmlFor="message"
                        className={`absolute left-4 top-1 text-gray-500 dark:text-gray-400 text-sm px-1 transition-all
            peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500
            peer-focus:top-0 peer-focus:text-sm peer-focus:text-gray-600 dark:peer-focus:text-gray-400
            ${errors.message ? 'text-red-400 dark:text-red-500' : ''}`}
                      >
                        Write a message here
                      </label>
                      {errors.message && (
                        <p id="message-error" className="text-red-400 dark:text-red-500 text-xs mt-1">{errors.message}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gray-600 text-white py-3 rounded-full font-medium hover:bg-gray-700 transition duration-300 flex items-center justify-center gap-2 hover:scale-105
          ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send <Mail className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="flex-1 flex flex-col justify-center items-center text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-600 mb-4 dark:text-gray-300">Thank You!</h3>
                    <p className="text-gray-600 dark:text-gray-300 max-w-md">
                      Your message has been sent successfully. I'll get back to you as soon as possible.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
        <style jsx>{`
          .animate-slide-up {
            opacity: 0;
            transform: translateY(20px);
            animation: slideUp 0.6s ease-out forwards;
          }
          .animate-slide-left {
            opacity: 0;
            transform: translateX(-20px);
            animation: slideLeft 0.6s ease-out forwards;
          }
          .animate-slide-right {
            opacity: 0;
            transform: translateX(20px);
            animation: slideRight 0.6s ease-out forwards;
          }
          @keyframes slideUp {
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideLeft {
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideRight {
            to { opacity: 1; transform: translateX(0); }
          }
          .hover-scale {
            transition: transform 0.3s ease;
          }
          .hover-scale:hover {
            transform: scale(1.05);
          }
        `}</style>
      </section>
      <Footer />
    </>
  );
};

export default Contact;