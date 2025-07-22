"use client";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaw } from "react-icons/fa";

const Contact = () => {
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
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Contact Info */}
          <div className="lg:w-1/2">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A38] mb-4">
                Get in <span className="text-[#7BAE4B]">Touch</span>
              </h2>
              <p className="text-lg text-gray-600">
                Have questions about our services or need to schedule an
                appointment? Our team is ready to assist you and your pet with
                any inquiries.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#7BAE4B] bg-opacity-10 rounded-full my-auto">
                  <FaPhone className="text-xl text-[#7BAE4B]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1E2A38]">
                    Call Us
                  </h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543 (Emergency)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#7BAE4B] bg-opacity-10 rounded-full my-auto">
                  <FaEnvelope className="text-xl text-[#7BAE4B]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1E2A38]">
                    Email Us
                  </h3>
                  <p className="text-gray-600">info@petservice.com</p>
                  <p className="text-gray-600">support@petservice.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#7BAE4B] bg-opacity-10 rounded-full my-auto">
                  <FaMapMarkerAlt className="text-xl text-[#7BAE4B]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1E2A38]">
                    Visit Us
                  </h3>
                  <p className="text-gray-600">123 Pet Care Avenue</p>
                  <p className="text-gray-600">New York, NY 10001</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-[#f8f9fa] rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-[#1E2A38] mb-3">
                Business Hours
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between font-medium text-[#7BAE4B]">
                  <span>Emergency Service</span>
                  <span>24/7 Available</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-[#1E2A38] mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name <span className="text-[#7BAE4B]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#7BAE4B] focus:ring-2 focus:ring-[#7BAE4B] outline-none transition-all duration-200"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email <span className="text-[#7BAE4B]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#7BAE4B] focus:ring-2 focus:ring-[#7BAE4B] outline-none transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#7BAE4B] focus:ring-2 focus:ring-[#7BAE4B] outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#7BAE4B] focus:ring-2 focus:ring-[#7BAE4B] outline-none transition-all duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="petType"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Pet Type
                  </label>
                  <div className="relative">
                    <select
                      id="petType"
                      name="petType"
                      value={formData.petType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#7BAE4B] focus:ring-2 focus:ring-[#7BAE4B] outline-none transition-all duration-200 appearance-none bg-white"
                    >
                      {petOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <FaPaw className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message <span className="text-[#7BAE4B]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="2"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#7BAE4B] focus:ring-2 focus:ring-[#7BAE4B] outline-none transition-all duration-200"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#7BAE4B] hover:bg-[#679640] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="mt-6 p-4 bg-[#7BAE4B] bg-opacity-5 rounded-lg border border-[#7BAE4B] border-opacity-20 text-center">
              <p className="text-sm text-gray-600">
                We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
