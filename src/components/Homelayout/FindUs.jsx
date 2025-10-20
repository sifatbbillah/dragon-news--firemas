import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-3'>Find Us On </h2>
            <div className="div">
 <div className="join join-vertical w-full max-w-xs mx-auto sm:max-w-sm md:max-w-md">
      {/* Facebook Button */}
      <button className="btn join-item bg-[#1877F2] hover:bg-[#0d65d9] text-white w-full flex items-center justify-center gap-2">
        <FaFacebookF className="text-lg" />
        <span>Facebook</span>
      </button>

      {/* Twitter Button */}
      <button className="btn join-item bg-[#1DA1F2] hover:bg-[#0d8bd9] text-white w-full flex items-center justify-center gap-2">
        <FaTwitter className="text-lg" />
        <span>Twitter</span>
      </button>

      {/* Instagram Button */}
      <button className="btn join-item bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] hover:opacity-90 text-white w-full flex items-center justify-center gap-2">
        <FaInstagram className="text-lg" />
        <span>Instagram</span>
      </button>
    </div>


            </div>
        </div>
    );
};

export default FindUs;