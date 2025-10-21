import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  // State to store the current date
  const [date, setDate] = useState(new Date());

  // Update the date every minute
  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 60000);
    return () => clearInterval(timer); // cleanup
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-3 text-center p-4">
      {/* Logo */}
      <img className="w-[250px] sm:w-[350px] md:w-[400px]" src={logo} alt="Logo" />

      {/* Tagline */}
      <p className="text-accent text-sm sm:text-base">
        Journalism Without Fear or Favour
      </p>

      {/* Date */}
      <p className="font-semibold text-accent text-sm sm:text-lg">
        {format(date, "EEEE, MMMM d, yyyy")}
      </p>
    </div>
  );
};

export default Header;
