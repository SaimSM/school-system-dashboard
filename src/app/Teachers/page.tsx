"use client";
import Layout from "../components/Navbar";
import Image from "next/image";
import { PencilIcon } from '@heroicons/react/20/solid';
import { useState, useEffect } from "react";

const Teacher: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

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
      <div className="flex justify-between items-center -mt-4">
        <div className="text-gray-700 font-bold text-2xl">All Teachers</div>
      </div>
      <p className="item-start text-gray-500 -mt-2">200+ student</p>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        {!isFormOpen && (
          <div className="flex justify-end -mt-1">
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded-md shadow hover:bg-purple-600"
              onClick={() => setIsFormOpen(true)}
            >
              Add Teachers +
            </button>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow mt-1">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="">
              <th className="px-4 py-2 text-left text-custom-gray">Teacher Name</th>
              <th className="px-4 py-2 text-left text-custom-gray">Teacher ID</th>
              <th className="px-4 py-2 text-left text-custom-gray">Destination</th>
              <th className="px-4 py-2 text-left text-custom-gray">Guardian Email</th>
              <th className="px-4 py-2 text-left text-custom-gray">Guardian Mobile No</th>
              <th className="px-4 py-2 text-center text-custom-gray">Action</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">Muhammad Ali Arshad</td>
                <td className="px-4 py-2">Std-{index + 1}</td>
                <td className="px-4 py-2">5</td>
                <td className="px-4 py-2">mail123@gmail.com</td>
                <td className="px-4 py-2">0321547891</td>
                <td className="px-4 py-2 text-center">
                <button className="text-blue-500 hover:text-blue-700">
                 <PencilIcon className="w-5 h-5 inline-block" />
                </button>
               </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <span className="ml-4" >Showing 1 to 10 of 20 records</span>
          <div className="flex space-x-2">
            <button className="px-2 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">
              1
            </button>
            <button className="px-2 py-1 bg-purple-500 text-white rounded hover:bg-purple-600">
              2
            </button>
            <button className="px-2 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">
              3
            </button>
            <button className="px-2 py-1 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">
              4
            </button>
          </div>
        </div>
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
            <div className="bg-white rounded-xl shadow-2xl w-[90%] max-w-md h-[90%] p-8 relative overflow-hidden">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
                onClick={() => setIsFormOpen(false)}
              >
                ✕
              </button>

              {/* Form Heading */}
              <h2 className="text-2xl font-bold text-center mb-2">Add New Teacher</h2>
              <p className="text-gray-500 text-center mb-6">
                Fill this detail to create a teacher
              </p>

              {/* Scrollable Form Content */}
              <div className="overflow-y-auto h-[80%]">
                <form>
                  {/* Student Name */}
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Teacher Name</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter student name"
                    />
                  </div>

                  {/* Student ID */}
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Teacher ID</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter student ID"
                    />
                  </div>

                     {/*  Email */}
                     <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter guardian email"
                    />
                  </div>

                     {/*  Mobile Number */}
                     <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1"> Mobile No.</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter guardian mobile number"
                    />
                  </div>

                  {/* Courses */}
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Courses</label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="" disabled selected>
                        Select Courses
                      </option>
                      <option value="1">Physics</option>
                      <option value="2">chemistry</option>
                      <option value="4">Math</option>
                      <option value="5">Science</option>
                      <option value="6">Social Studies</option>
                      <option value="7">Computer</option>
                      <option value="8"></option>
                    </select>
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