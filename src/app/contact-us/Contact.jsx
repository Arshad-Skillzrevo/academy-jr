"use client";
import { useState } from "react";

import {
  BuildingOfficeIcon,
  DocumentTextIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ArrowUturnLeftIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  PhoneIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import MainSegments from "./MainSegments";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    altMobile: "",
    email: "",
    country: "",
    experience: "",
    qualification: "",
    role: "",
  });
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const countries = [
    "India",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "United Arab Emirates",
    "Singapore",
    "Germany",
    "Other",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    const payload = {
      name: formData.name,
      mobile: formData.mobile,
      email: formData.email,
      AltMobile: formData.altMobile, 
      Country: formData.country,
      Experience: formData.experience,
      Qualification: formData.qualification,
      Role: formData.role,
    };

    try {
      const response = await fetch(
        "https://4606bd36-c5fd-4702-b793-059cd091a766.neodove.com/integration/custom/9c9b17fd-f2e6-46fe-a926-21a8c9ea4f00/leads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setStatus("success");
        setMessage("✅ Your enquiry has been sent successfully!");

        setFormData({

          name: "",
          mobile: "",
          altMobile: "",
          email: "",
          country: "",
          experience: "",
          qualification: "",
          role: "",
        });

        // Reset to idle after a few seconds
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 4000);
      } else {
        const errMsg = await response.text();
        console.error("NeoDove error response:", errMsg);
        setStatus("error");
        setMessage("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setMessage("❌ An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-w-full min-h-screen bg-white">
      {/* HERO SECTION - unchanged */}
      <div className="relative flex justify-center items-center py-20 bg-gradient-to-t from-[#1d8fff] via-gray-900 to-gray-900">
        {/* <div className="absolute inset-0 bg-[url('/bg-grid.png')] bg-contain opacity-20 z-1 invert"></div> */}
        <div className="absolute inset-0 bg-[url('/BG-GRID.svg')] bg-contain  opacity-20  z-1"></div>
        

        <h1 className="text-4xl md:text-6xl lg:text-8xl text-center bg-gradient-to-b from-white via-gray-50 to-gray-500 bg-clip-text text-transparent   font-bold my-20 z-2">
          We are here to Help!
        </h1>
      </div>

      {/* Heading */}
      <div className="bg-gray-50 p-2">
        <div className="text-center text-3xl md:text-5xl font-bold my-10 text-[#1d8fff] heading-oswald uppercase">
          Contact SkillzRevo
        </div>

        {/* Contact Info + Form */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 py-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <p className="text-gray-600 text-lg">
              For any questions, concerns, or assistance related to our
              services, policies, or the delivery of your certificate, please
              reach out to us using the following contact information:
            </p>

            <div className="flex items-start gap-4">
              <EnvelopeIcon className="text-[#1d8fff] h-6 w-6" />
              <div>
                <h4 className="font-bold text-gray-800">
                  Customer Support Email
                </h4>
                <p className="font-bold text-gray-600">enquire@skillzrevo.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <PhoneIcon className="text-[#1d8fff] h-6 w-6" />
              <div>
                <h4 className="font-bold text-gray-800">
                  Customer Support Phone
                </h4>
                <p className="font-bold text-gray-600">+919971030291</p>
                <p className="font-bold text-gray-600">+916295477674</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <PaperAirplaneIcon className="text-[#1d8fff] h-6 w-6" />
              <div>
                <h4 className="font-bold text-gray-800">Whatsapp</h4>
                <p className="font-bold text-gray-600" >+916295477674</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <BuildingOfficeIcon className="text-[#1d8fff] h-6 w-6" />
              <div>
                <h4 className="font-bold text-gray-800">Corporate Office</h4>
                <p className="font-bold text-gray-600">
                 Skillzrevo Solutions Pvt Ltd<br/>A-166, Suite no-304, 3rd Floor, A Block, Sector 63, Noida, UP 201301, India
                </p>
                <p className="mt-2 text-base text-gray-600">
                  Landline : +01204934917
                </p>
                
              </div>
            </div>

            <div className="flex items-start gap-4">
              <BuildingOfficeIcon className="text-[#1d8fff] h-6 w-6" />
              <div>
                <h4 className="font-bold text-gray-800">Registered Office</h4>
                <p className="font-bold text-gray-600">
                  SkillzRevo Solutions Pvt Ltd <br />
                 Plot no.- GH01A, Sector -16C, T-11, Suite No-1901, Greater Noida West, Gautam Buddha Nagar, Greater Noida, Uttar Pradesh-201308, India
                </p>

                
                <p className="mt-2 text-sm text-gray-600">
                  Landline : +01204335788
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  CIN: U80301UP2022PTC149041
                </p>
              </div>
            </div>

            <div className="text-gray-600 text-sm">
              <strong>Business Hours:</strong> 10:00 AM to 7:30 PM IST
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="p-8 rounded-lg shadow-lg border border-gray-200 bg-gray-50">
            <h2 className="text-2xl font-bold text-center text-[#1d8fff] mb-4">
              Send Us Any Question, Suggestion, or Enquiry.
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name *"
                className="border border-gray-300 p-3 rounded-md w-full text-gray-500"
                required
              />

              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number *"
                className="border border-gray-300 p-3 rounded-md w-full text-gray-500"
                required
              />

              <input
                type="text"
                name="altMobile"
                value={formData.altMobile}
                onChange={handleChange}
                placeholder="Alternate Mobile No."
                className="border border-gray-300 p-3 rounded-md w-full text-gray-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email *"
                className="border border-gray-300 p-3 rounded-md w-full text-gray-500"
                required
              />

              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="border border-gray-300 p-3 rounded-md w-full text-gray-500"
                required
              >
                <option value="">Select Country *</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>

              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Years of Experience"
                className="border border-gray-300 p-3 rounded-md w-full text-gray-500"
              />

              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                placeholder="Highest Qualification"
                className="border border-gray-300 p-3 rounded-md w-full text-gray-500"
              />

              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Current Role"
                className="border border-gray-300 p-3 rounded-md w-full text-gray-500"
              />

              <div className="flex items-center md:col-span-2">
                <input type="checkbox" className="mr-2" id="terms" required />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  By providing your contact details, you agree to our{" "}
                  <a
                    href="/TermsandConditions"
                    className="text-[#1d8fff] underline"
                  >
                    Terms of Use
                  </a>{" "}
                  &{" "}
                  <a href="/PrivacyPolicy" className="text-[#1d8fff] underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="bg-[#1d8fff] text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition md:col-span-2"
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 text-white mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : status === "success" ? (
                  "Sent!"
                ) : (
                  "Send"
                )}
              </button>

              {message && (
                <div
                  className={`mt-4 text-center text-sm font-semibold ${
                    status === "success" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

              <MainSegments />

      {/* Enquiries Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-5xl heading-oswald uppercase font-bold text-center text-orange-500 mb-10">
          Enquiries
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: "Corporate Training",
              icon: BriefcaseIcon,
              link: "/corporate-training",
            },
            {
              title: "Terms & Conditions",
              icon: DocumentTextIcon,
              link: "/TermsandConditions",
            },
            {
              title: "Become our Partner",
              icon: UserGroupIcon,
              link: "/channel-partner",
            },
            {
              title: "Become our Instructor",
              icon: AcademicCapIcon,
              link: "#",
            },
            {
              title: "Refund Policy",
              icon: ArrowUturnLeftIcon,
              link: "/cancellation-refund-policy",
            },
            {
              title: "Careers",
              icon: BuildingOfficeIcon,
              link: "https://tutor.skillzrevo.com/Careers",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center bg-orange-500"
            >
              <item.icon className="h-15 w-15 text-white mb-4" />
              <h3 className="font-semibold text-white text-lg mb-2">{item.title}</h3>
              <a
                href={item.link}
                className="mt-2 text-white font-semibold hover:underline"
              >
                Know More
              </a>
            </div>
          ))}
        </div>
      </div>

{/* Office Locations */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-16">
        {[
          {
            country: "Corporate Office: Noida",
            company: "SkillzRevo Solutions Pvt Ltd",
            address:
              "A-166, Suite no-304, 3rd Floor, A Block, Sector 63, Noida, UP 201301, India",
            phone: "+916295477674",
            phone2: "+919971030291",
            email: "enquire@skillzrevo.com",
          },
          {
            country: "Registered Office: Greater Noida",
            company: "SkillzRevo Solutions Pvt Ltd",
            address:
              "Plot no.- GH01A, Sector -16C, T-11, Suite No-1901, Greater Noida West, Gautam Buddha Nagar, Greater Noida, Uttar Pradesh-201308, India",
            phone: "+919632347896",
            email: "enquire@skillzrevo.com",
          },
          {
            country: "Bangalore Office",
            company: "SkillzRevo Solutions Pvt Ltd",
            address:
              "9th Main Rd, Sector 7, HSR Layout, Bengaluru, Karnataka - 560102, India",
            phone: "+919632347896",
            email: "enquire@skillzrevo.com",
          },
          {
            country: "USA",
            company: "SkillzRevo Solutions Pvt Ltd",
            address:
              "26 Broadway, Suite 934-962, New York, NY 10004, United States",
            phone: "+1 (646) 777 4299",
            phone2: "+1 (301) 485 4865",
            email: "enquire@skillzrevo.com",
          },
          {
            country: "UAE",
            company: "SkillzRevo Solutions Pvt Ltd",
            address:
              "Alta Corp Innovation Hub, Business Hub, AI Furjan Business Tower, 2nd Floor, Jumeirah Beach Residence, Dubai - 50001, UAE",
            phone: "+6563130933",
            email: "enquire@skillzrevo.com",
          },

        ].map((office, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition bg-white"
          >
            <h3 className="text-xl font-bold text-[#1d8fff] mb-2">
              {office.country}
            </h3>
            <p className="text-gray-700 font-semibold">{office.company}</p>
            <p className="text-gray-600">{office.address}</p>
            <p className="text-gray-600 mt-2">
              <span className="font-semibold">Phone:</span> {office.phone}
            </p>
            {office.phone2 && (
              <p className="text-gray-600">
                <span className="font-semibold">Phone 2:</span> {office.phone2}
              </p>
            )}
            <p className="text-gray-600">
              <span className="font-semibold">Email:</span>{" "}
              <a
                href={`mailto:${office.email}`}
                className="text-[#1d8fff] hover:underline"
              >
                {office.email}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
