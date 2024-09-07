import { useNavigate } from "react-router-dom";
import logo from "../../../assets/Image/logo.png";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className=" py-12 ">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Contact Info Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="bg-secondary p-3 rounded-full">
              <svg
                className="w-6 h-6 text-gray-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 2H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-10 16a1 1 0 0 1-1 1H4v-2.275a1 1 0 0 1 1.4-.916c.675.337 1.675 1.023 3.35 2.196 1.675-1.173 2.675-1.86 3.35-2.197a1 1 0 0 1 1.4.916V18zm7-2a1 1 0 0 1-1 1h-3v-2.275a1 1 0 0 1 1.4-.916c.675.337 1.675 1.023 3.35 2.196 1.675-1.173 2.675-1.86 3.35-2.197a1 1 0 0 1 1.4.916V16z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold">Call us</h3>
              <p className="text-gray-400">+971 52-333-4444</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-secondary p-3 rounded-full">
              <svg
                className="w-6 h-6 text-gray-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-2 6l-7 4.5-7-4.5V6l7 4.5 7-4.5v4z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold">Write to us</h3>
              <p className="text-gray-400">info@renax.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-secondary p-3 rounded-full">
              <svg
                className="w-6 h-6 text-gray-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v7.07l5.07-5.07c.39.39.39 1.02 0 1.41l-5.07 5.07V19.93z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold">Address</h3>
              <p className="text-gray-400">Dubai, Water Tower, Office 123</p>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Cars
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Car Types
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Subscribe</h3>
          <p className="text-gray-400 text-sm mb-6">
            Want to be notified about our services? Just sign up and we'll send
            you a notification by email.
          </p>
          <div>
            <img
              onClick={() => navigate("/")}
              src={logo}
              alt="logo"
              className="w-fit h-6 cursor-pointer"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-3 rounded-full bg-gray-800 text-white focus:outline-none"
            />
            <button
              className="absolute right-0 top-0 bottom-0 
            bg-secondary p-3 rounded-full text-gray-900"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15l-5-5h3V9h4v3h3l-5 5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
