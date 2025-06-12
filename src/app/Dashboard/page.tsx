"use client";
import Layout from "../components/Navbar";
import Image from "next/image";
import { PencilIcon } from '@heroicons/react/20/solid';
import { useState, useEffect } from "react";

const Teacher: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const stats = [
    { value: 500, label: 'Total Students' },
    { value: 80, label: 'Total Teachers', isActive: true },
    { value: 30, label: 'Total Courses' },
    { value: 30, label: 'Total Courses' },
  ];

  // Add/remove `overflow-hidden` to the <body> when the form is open
  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset on component unmount
    };
  }, [isFormOpen]);

  return (
    <Layout>
      <div className="flex justify-between items-center -mt-2">
        <div className="text-gray-700 font-bold text-2xl">Dashboard</div>
      </div>


      <Image 
           src="/Frame.png" 
           alt="Description of the image"
           width={1000} 
           height={400} 
           className="-ml-7"
       />


      <div className="flex space-x-4 p-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className= "w-40 h-40 bg-white shadow-md rounded-md flex flex-col items-center justify-center hover:border-2 hover:border-purple-500 " 
          >
          <p className="text-xl font-bold">{stat.value}</p>
          <p className="text-gray-600">{stat.label}</p>
        </div>
      ))}
    </div>




      {/* Modal Form */}
      {isFormOpen && (
        <>
          {/* Background overlay with blur effect */}
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-10 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsFormOpen(false)} // Close form on background click
          ></div>

          {/* Form Container */}
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <div className="bg-white rounded-xl shadow-2xl w-[40%] max-w-md h-[50%] p-8 relative overflow-hidden">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
                onClick={() => setIsFormOpen(false)}
              >
                ✕
              </button>

              {/* Form Heading */}
              <h2 className="text-2xl font-bold text-center mb-2">Add New Course</h2>
              <p className="text-gray-500 text-center mb-6">
                Fill this detail to create a course
              </p>

              {/* Scrollable Form Content */}
              <div className="overflow-y-auto h-[80%]">
                <form>
                  {/* Student Name */}
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Course Name</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter Course name"
                    />
                  </div>

                
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all"
                  >
                    Add
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Teacher;