"use client";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaw, FaClock } from "react-icons/fa";

const Contact_Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    petType: "",
    message: "",
  });

  const petOptions = [
    { value: "", label: "Select pet type" },
    { value: "dog", label: "Dog" },
    { value: "cat", label: "Cat" },
    { value: "bird", label: "Bird" },
    { value: "rabbit", label: "Rabbit" },
    { value: "other", label: "Other" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      petType: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-16 px-4 bg-[#f9f9f9]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Side - Contact Info */}
          <div className="lg:w-1/2">
            <div className="mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1E2A38] mb-4">
                Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-[#7BAE4B]">Touch</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Have questions about our services or need to schedule an
                appointment? Our team is ready to assist you and your pet with
                any inquiries.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-5 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-3 rounded-lg text-[#7BAE4B] group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 bg-green-100 my-auto">
                  <FaPhone className="text-xl hover:scale-110 transition-transform duration-200" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    Call Us
                  </h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600 text-sm">(Emergency: +1 (555) 987-6543)</p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-3 text-[#7BAE4B] group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 bg-green-100 rounded-lg my-auto">
                  <FaEnvelope className="text-xl hover:scale-110 transition-transform duration-200" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    Email Us
                  </h3>
                  <p className="text-gray-600">info@petservice.com</p>
                  <p className="text-gray-600 text-sm">support@petservice.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="p-3 text-[#7BAE4B] group-hover:bg-green-600 group-hover:text-white transition-all duration-300 bg-green-100 rounded-lg my-auto">
  <FaMapMarkerAlt className="text-xl hover:scale-110 transition-transform duration-200" />
</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    Visit Us
                  </h3>
                  <p className="text-gray-600">123 Pet Care Avenue</p>
                  <p className="text-gray-600">New York, NY 10001</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 text-[#7BAE4B] group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 bg-green-100 rounded-lg">
                  <FaClock className="text-lg hover:scale-110 transition-transform duration-200" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Business Hours
                </h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium">Monday - Friday</span>
                  <span>8:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium">Saturday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium">Sunday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between py-2 text-[#7BAE4B] font-semibold">
                  <span>Emergency Service</span>
                  <span>24/7 Available</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-green-500 mb-2">
                Send Us a  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-[#7BAE4B]">Message</span>
              </h3>
              <p className="text-gray-500 mb-6">We'll get back to you within 24 hours</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name <span className="text-green-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-green-200 focus:border-[#7BAE4B] focus:ring-2 focus:ring-green-100 outline-none transition-all duration-200 placeholder-gray-400"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email <span className="text-green-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-green-200 focus:border-[#7BAE4B] focus:ring-2 focus:ring-green-100 outline-none transition-all duration-200 placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-green-200 focus:border-[#7BAE4B] focus:ring-2 focus:ring-green-100 outline-none transition-all duration-200 placeholder-gray-400"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-green-200 focus:border-[#7BAE4B] focus:ring-2 focus:ring-green-100 outline-none transition-all duration-200 placeholder-gray-400"
                    placeholder="123 Main St"
                  />
                </div>

                <div>
                  <label
                    htmlFor="petType"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Pet Type
                  </label>
                  <div className="relative">
                    <select
                      id="petType"
                      name="petType"
                      value={formData.petType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-green-200 focus:border-[#7BAE4B] focus:ring-2 focus:ring-green-100 outline-none transition-all duration-200 appearance-none bg-white text-gray-700"
                    >
                      {petOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <FaPaw className="h-5 w-5 text-green-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Message <span className="text-green-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-green-200 focus:border-[#7BAE4B] focus:ring-2 focus:ring-green-100 outline-none transition-all duration-200 placeholder-gray-400"
                    placeholder="Tell us about your pet's needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-gradient-to-r from-green-600 to-[#7BAE4B] text-white rounded-xl shadow-lg hover:shadow-xl hover:bg-green-500 transition-all duration-300 font-semibold flex items-center justify-center gap-2"
                >
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </form>
            </div>

            <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-100 text-center">
              <p className="text-sm text-gray-800">
                <span className="font-medium text-[#7BAE4B]">Quick response:</span> We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact_Form;