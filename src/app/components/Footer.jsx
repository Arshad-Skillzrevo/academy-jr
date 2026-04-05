import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0e457b] text-white">
      {/* Newsletter Section */}
      <div className="bg-[#1d8fff] py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white heading-oswald uppercase">
            Follow Us on Social Media
          </h2>
          {/* <div className="flex flex-col sm:flex-row w-full md:w-auto">
            <input
              type="email"
              placeholder="Email address"
              className="w-full sm:w-64 p-3 rounded text-slate-900 border-2 border-r-0  border-white bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="w-full sm:w-auto bg-[#ff5e14] text-white font-bold py-3 px-6 rounded hover:bg-[#e65211] transition-colors duration-200">
              Submit
            </button>
          </div> */}
          <div className="flex space-x-2 text-white">
            <a
              href="https://www.facebook.com/skillzrevo/"
              className="hover:bg-[#ff5e14] p-2 rounded-md transition-colors duration-200"
            >
              <FaFacebookF className="size-6" />
            </a>
            <a
              href="https://x.com/skillzrevo89393"
              className="hover:bg-[#ff5e14] p-2 rounded-md transition-colors duration-200"
            >
              <FaTwitter className="size-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/skillzrevo/"
              className="hover:bg-[#ff5e14] p-2 rounded-md transition-colors duration-200"
            >
              <FaLinkedinIn className="size-6" />
            </a>
            <a
              href="https://www.instagram.com/skillzrevo"
              className="hover:bg-[#ff5e14] p-2 rounded-md transition-colors duration-200"
            >
              <FaInstagram className="size-6" />
            </a>
            <a
              href="https://www.youtube.com/@SkillzRevo"
              className="hover:bg-[#ff5e14] p-2 rounded-md transition-colors duration-200"
            >
              <FaYoutube className="size-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto max-md:px-4">
        <div className="flex max-md:flex-col justify-between w-[100%] gap-6 md:gap-8">
          {/* Logo and Description */}
          <div className="bg-[#ff5e14] py-6 px-2 lg:col-span-1 flex flex-col justify-between md:min-w-[220px] md:max-w-[250px]">
            <img
              src="/SkillzRevo_White.webp"
              alt="SkillzRevo Logo"
              className="w-[80%] mb-5 self-center object-cover"
            />

            <p className="text-sm font-light text-center text-white leading-relaxed">
              SkillzRevo Academy Platform offers global access, connecting
              experienced trainers in emerging technologies with young graduates
              and working professionals who seek to upskill and enhance their
              impact within their organizations.
            </p>
          </div>

          {/* Links Columns */}
          <div className="flex max-md:flex-col justify-between w-[100%] gap-5 py-12">
            {/* Explore */}
            <div>
              <h4 className="text-lg font-bold mb-4">Explore</h4>
              <ul className="text-sm space-y-2 custom-bullet">
                <li>
                  <a href="/about-skillzrevo" className="hover:underline">
                    About SkillzRevo
                  </a>
                </li>
                <li>
                  <a href="/explore-courses" className="hover:underline">
                    Explore Courses
                  </a>
                </li>
                <li>
                  <a href="/contact-us" className="hover:underline">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="/our-services" className="hover:underline">
                    Our Services
                  </a>
                </li>
                {/* <li><a href="#" className="hover:underline">Meet Our Trainers</a></li> */}
                {/* <li>
                  <a href="/blog" className="hover:underline">
                    News & Blogs
                  </a>
                </li> */}
                <li>
                  <a href="/certificate-verification" className="hover:underline">
                    Certificate Verification
                  </a>
                </li>
                <li>
                  <a href="/work-with-us" className="hover:underline">
                    Work with Us
                  </a>
                </li>
                <li>
                  <a href="/meet-our-trainers" className="hover:underline">
                    Meet Our Trainers
                  </a>
                </li>
              </ul>
            </div>

            {/* For Businesses */}
            <div>
              <h4 className="text-lg font-bold mb-4">For Businesses</h4>
              <ul className="text-sm space-y-2 custom-bullet">
                <li>
                  <a href="/corporate-training" className="hover:underline">
                    Corporate Training
                  </a>
                </li>
                <li>
                  <a
                    href="https://talent.skillzrevo.com/"
                    className="hover:underline"
                  >
                    Staffing
                  </a>
                </li>
                <li>
                  <a
                    href="https://consulting.skillzrevo.com/"
                    className="hover:underline"
                  >
                    Consulting
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-4">Partner with Us</h4>
              <ul className="text-sm space-y-2 custom-bullet">
                <li>
                  <a href="channel-partner" className="hover:underline">
                    Training Channel Partner
                  </a>
                </li>
                <li>
                  <a
                    href="https://talent.skillzrevo.com/channel-partner/"
                    className="hover:underline"
                  >
                    Staffing Channel Partner
                  </a>
                </li>
                <li>
                  <a
                    href="https://consulting.skillzrevo.com/channel-partner/"
                    className="hover:underline"
                  >
                    Consulting Channel Partner
                  </a>
                </li>
              </ul>
            </div>
            {/* Courses */}
            <div>
              <h4 className="text-lg font-bold mb-4">Courses</h4>
              <ul className="text-sm space-y-2 custom-bullet">
                <li>
                  <a
                    href="/courses/advanced-ai-and-generative-ai-program"
                    className="hover:underline"
                  >
                    Advanced AI and Generative AI
                  </a>
                </li>
                <li>
                  <a
                    href="/courses/applied-data-science-with-ai"
                    className="hover:underline"
                  >
                    Applied Data Science with AI
                  </a>
                </li>
                <li>
                  <a
                    href="/courses/applied-data-science-with-python"
                    className="hover:underline"
                  >
                    Applied Data Science with Python
                  </a>
                </li>
                <li>
                  <a
                    href="/courses/mastering-in-business-intelligence-program"
                    className="hover:underline"
                  >
                    Mastering in Business Intelligence
                  </a>
                </li>
                <li>
                  <a
                    href="/courses/big-data-with-hadoop-spark-program/"
                    className="hover:underline"
                  >
                    Big Data with Hadoop & Spark Program
                  </a>
                </li>
                <li>
                  <a
                    href="/courses/certified-network-security-and-ethical-hacking-specialist-cnsehs"
                    className="hover:underline"
                  >
                    Certified Network Security and Ethical Hacking Specialist
                  </a>
                </li>
                <li>
                  <a
                    href="/courses/mastering-in-cyber-security-forensics"
                    className="hover:underline"
                  >
                    Mastering in Cyber Security & Forensics
                  </a>
                </li>

                <li className="mt-4">
                  <a
                    href="/explore-courses"
                    className="inline-block text-white font-bold hover:underline"
                  >
                    View all courses &rarr;
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-3 lg:col-span-4 gap-2 md:gap-8 content-center items-center justify-center mx-auto max-md:px-4  text-center border-t border-gray-700">
        <div className="flex md:flex-col justify-center md:justify-end text-xs max-md:mx-auto max-md:bg-transparent text-gray-400 md:text-white bg-[#ff5e14] py-4 gap-2 mt-2 md:mt-0 w-[250px]">
          <a
            href="/ShippingandDelivery"
            className="text-xs  block hover:underline"
          >
            Shipping and Delivery
          </a>
          <a
            href="/cancellation-refund-policy"
            className=" text-xs  block hover:underline"
          >
            Refund Policy
          </a>
        </div>
        <p className="text-xs text-gray-400">
          Copyright © 2026 SKILLZREVO. All Rights Reserved
        </p>
        <div className="flex justify-center md:justify-end text-xs text-gray-400 gap-4 mt-2 md:mt-0 max-md:pb-4">
          <a href="/TermsandConditions" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="/PrivacyPolicy" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
