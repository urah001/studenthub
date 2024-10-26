"use client";
import { useState } from "react";
import {
  FaPlus,
  FaHome,
  FaUser,
  FaSearch,
  FaCog,
  FaEnvelope,
} from "react-icons/fa";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-center">
      {/* Additional buttons */}
      <div
        className={`flex flex-col items-center space-y-4 mb-4 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button className="p-4 rounded-full bg-blue-500 text-white shadow-lg">
          <FaHome />
        </button>
        <button className="p-4 rounded-full bg-green-500 text-white shadow-lg">
          <FaUser />
        </button>
        <button className="p-4 rounded-full bg-red-500 text-white shadow-lg">
          <FaSearch />
        </button>
        <button className="p-4 rounded-full bg-yellow-500 text-white shadow-lg">
          <FaCog />
        </button>
        <button className="p-4 rounded-full bg-purple-500 text-white shadow-lg">
          <FaEnvelope />
        </button>
      </div>

      {/* FAB button */}
      <button
        onClick={toggleMenu}
        className="p-4 rounded-full bg-blue-600 text-white shadow-lg transform transition-transform duration-300"
        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default FloatingActionButton;
