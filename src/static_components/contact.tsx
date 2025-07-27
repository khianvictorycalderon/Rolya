// Reused from previous project "Coffee Vup"
import { useState, type FormEvent } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const validate = () => {
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9\-+()\s]{7,20}$/;

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = "Invalid phone number.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);

    return Object.values(newErrors).every((val) => val === "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    alert("Form submitted successfully!");
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    setErrors({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <div id="contact" className="bg-slate-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold text-white sm:text-5xl">Let’s Talk</h2>
        <p className="mt-4 text-lg text-gray-400">
          Have questions? We're here to help with anything related to buying, selling, or investing.
        </p>
      </div>

      <form onSubmit={handleSubmit} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">

          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold text-white">First name</label>
            <input
              id="first-name"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className={`mt-2 block w-full rounded-md bg-slate-800 px-4 py-2 text-white placeholder-gray-400 focus:outline focus:outline-indigo-500 ${
                errors.firstName ? "outline-red-500" : "outline-none"
              }`}
              placeholder="John"
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
          </div>

          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold text-white">Last name</label>
            <input
              id="last-name"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              className={`mt-2 block w-full rounded-md bg-slate-800 px-4 py-2 text-white placeholder-gray-400 focus:outline focus:outline-indigo-500 ${
                errors.lastName ? "outline-red-500" : "outline-none"
              }`}
              placeholder="Doe"
            />
            {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-white">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-2 block w-full rounded-md bg-slate-800 px-4 py-2 text-white placeholder-gray-400 focus:outline focus:outline-indigo-500 ${
                errors.email ? "outline-red-500" : "outline-none"
              }`}
              placeholder="john.doe@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phone" className="block text-sm font-semibold text-white">Phone number</label>
            <div className="mt-2 flex gap-2">
              <select
                id="country"
                name="country"
                className="w-20 rounded-md bg-slate-800 px-2 py-2 text-sm text-white border border-gray-700"
              >
                <option>+63</option>
                <option>+1</option>
                <option>+44</option>
              </select>
              <input
                id="phone"
                name="phone"
                type="text"
                placeholder="912-345-6789"
                value={formData.phone}
                onChange={handleChange}
                className={`flex-1 rounded-md bg-slate-800 px-4 py-2 text-white placeholder-gray-400 focus:outline focus:outline-indigo-500 ${
                  errors.phone ? "outline-red-500" : "outline-none"
                }`}
              />
            </div>
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-white">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              className={`mt-2 block w-full rounded-md bg-slate-800 px-4 py-2 text-white placeholder-gray-400 focus:outline focus:outline-indigo-500 ${
                errors.message ? "outline-red-500" : "outline-none"
              }`}
            />
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-offset-2 focus:outline-indigo-500 transition hover:cursor-pointer"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}