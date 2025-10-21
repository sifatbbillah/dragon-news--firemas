import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  const socialLinks = [
    {
      icon: <FaFacebook />,
      label: "Facebook",
      gradient:
        "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-800",
    },
    {
      icon: <FaTwitter />,
      label: "Twitter",
      gradient:
        "bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 hover:from-sky-500 hover:to-sky-700",
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      gradient:
        "bg-gradient-to-r from-pink-400 via-pink-500 to-rose-500 hover:from-pink-500 hover:to-rose-600",
    },
  ];

  return (
    <div className="w-full max-w-sm mx-auto p-4 sm:p-6">
      {/* Header */}
      <h2 className="font-bold text-2xl mb-6 text-center text-gray-700">
        Find Us On
      </h2>

      {/* Social Buttons */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-4">
        {socialLinks.map((social, index) => (
          <button
            key={index}
            className={`flex items-center gap-3 justify-center w-full sm:w-[180px] py-3 text-white font-semibold rounded-xl shadow-md transition-all duration-300 transform hover:scale-105 ${social.gradient}`}
          >
            <span className="text-xl">{social.icon}</span>
            <span>{social.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FindUs;
