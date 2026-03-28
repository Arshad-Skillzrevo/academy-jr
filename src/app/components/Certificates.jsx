"use client"
import React, { useState } from 'react';
import { Award, CheckCircle, Calendar, Building2 } from 'lucide-react';
import Image from 'next/image';

export default function PartnershipShowcase() {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 px-4">
      <div className=" mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold bg-gradient-to-b from-[#1d8fff] to-[#015bb6] bg-clip-text text-transparent heading-oswald mb-4 px-4  text-center">
            Official Partnership Recognition
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proud to be a Recognised Skilling Partner of IT-ITeS SSC Nasscom
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          {/* Certificate Display */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg p-4 transform transition-all duration-300 hover:scale-105">
              <div className="relative w-full h-60 lg:h-130 overflow-hidden rounded-xl">
                <Image
                  src="/sspl.jpeg"
                  alt="Partnership Certificate"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`w-full h-full transition-opacity object-contain duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                />
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                )}
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Verified
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">Certificate of Partnership</p>
                <p className="text-lg font-semibold text-gray-900">SkillzRevo Solutions Private Limited</p>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            {/* Key Information Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Partnership Details</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Building2 className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Organization</p>
                    <p className="text-gray-600">SkillzRevo Solutions Private Limited</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Recognition Status</p>
                    <p className="text-gray-600">Recognised Skilling Partner</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Award className="w-6 h-6 text-indigo-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Certifying Authority</p>
                    <p className="text-gray-600">IT-ITeS SSC Nasscom</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="w-6 h-6 text-purple-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Validity Period</p>
                    <p className="text-gray-600">24/11/2025 - 24/11/2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Initiative Badge */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-2">FutureSkills Prime Initiative</h3>
              <p className="text-blue-100 mb-4">
                A MeitY - Nasscom Digital Skilling Initiative empowering professionals with cutting-edge IT skills
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">Active Partnership</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-md p-4 text-center">
                <p className="text-3xl font-bold text-blue-600">10+</p>
                <p className="text-sm text-gray-600">Year Partnership</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-4 text-center">
                <p className="text-3xl font-bold text-green-600">100%</p>
                <p className="text-sm text-gray-600">Certified</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Committed to Excellence in Digital Skilling
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            As a recognized skilling partner, we are dedicated to delivering world-class IT training and development programs aligned with industry standards and government initiatives.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              Skill India
            </span>
            <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
              IT-ITeS Sector
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
              Nasscom Certified
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}