"use client";
import React, { useState } from "react";
import { HiMail } from "react-icons/hi";
import {
  HiAcademicCap, // student
  HiUserGroup, // employee
  HiBookOpen, // LMS
  HiBuildingOffice, // HRMS
  HiPhone, // Sales CRM
  HiCurrencyDollar, // Finance CRM
  HiArrowLeft, // back
} from "react-icons/hi2";

export default function RoleModal({ isOpen, onClose }) {
  const [role, setRole] = useState(null);

  React.useEffect(() => {
    if (!isOpen) setRole(null);
  }, [isOpen]);

  if (!isOpen) return null;

  const backdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      onClick={backdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm"
    >
      <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-2xl relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          {role ? "Choose an Option" : "Select Your Role"}
        </h2>

        {/* Role selection grid */}
        {!role && (
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setRole("student")}
              className="flex flex-col items-center gap-3 p-5 rounded-xl border border-gray-200 hover:bg-[#e8f4ff] transition"
            >
              <HiAcademicCap size={32} className="text-[#1d8fff]" />
              <span className="font-medium text-gray-700">Student</span>
            </button>
            <button
              onClick={() => setRole("employee")}
              className="flex flex-col items-center gap-3 p-5 rounded-xl border border-gray-200 hover:bg-[#fff5eb] transition"
            >
              <HiUserGroup size={32} className="text-[#fda94f]" />
              <span className="font-medium text-gray-700">Employee</span>
            </button>
          </div>
        )}

        {/* Student options grid */}
        {role === "student" && (
          <div className="grid grid-cols-1 gap-4">
            <a
              href="https://tutor.skillzrevo.com/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-5 rounded-xl border border-gray-200 hover:bg-[#e8f4ff] transition"
            >
              <HiBookOpen size={32} className="text-[#1d8fff]" />
              <span className="font-medium text-gray-700">LMS</span>
            </a>
          </div>
        )}

        {/* Employee options grid */}
        {role === "employee" && (
          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://skillzrevo.kredily.com/company/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-5 rounded-xl border border-gray-200 hover:bg-[#fff5eb] transition "
            >
              <HiBuildingOffice size={32} className="text-[#fda94f]" />
              <span className="font-medium text-gray-700">HRMS</span>
            </a>
            <a
              href="https://wh1.webspacekit.com:2096/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-5 rounded-xl border border-gray-200 hover:bg-[#fff5eb] transition"
            >
              <HiMail size={32} className="text-[#1d8fff]" />
              <span className="font-medium text-gray-700">Webmail</span>
            </a>
            <a
              href="https://connect.neodove.com/home"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-5 rounded-xl border border-gray-200 hover:bg-[#e8f4ff] transition"
            >
              <HiPhone size={32} className="text-[#1d8fff]" />
              <span className="font-medium text-gray-700">Sales CRM</span>
            </a>
            <a
              href="https://www.refrens.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-5 rounded-xl border border-gray-200 hover:bg-[#fff5eb] transition "
            >
              <HiCurrencyDollar size={32} className="text-green-500" />
              <span className="font-medium text-gray-700">Finance CRM</span>
            </a>
          </div>
        )}

        {/* Back button */}
        {role && (
          <button
            onClick={() => setRole(null)}
            className="mt-6 flex items-center gap-2 text-gray-600 hover:text-gray-800 transition"
          >
            <HiArrowLeft /> Back
          </button>
        )}
      </div>
    </div>
  );
}
