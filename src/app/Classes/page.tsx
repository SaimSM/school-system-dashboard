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
      <div className="flex justify-between items-center -mt-2">
        <div className="text-gray-700 font-bold text-2xl">All Classes</div>
      </div>
      <p className="item-start text-gray-500 -mt-2">4 courses</p>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        {!isFormOpen && (
          <div className="flex justify-end">
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded-md shadow hover:bg-purple-600"
              onClick={() => setIsFormOpen(true)}
            >
              Add Classes +
            </button>
          </div>
        )}
      </div>

      <div className="flex space-x-4 p-4">
      <div className= "w-40 h-40 bg-white shadow-md rounded-md flex flex-col items-center justify-center hover:border-2 hover:border-purple-500 " >
          <p className="text-xl font-bold">1</p>
          <p className="text-gray-600">class</p>
        </div>
       

        
     
      <div className= "w-40 h-40 bg-white shadow-md rounded-md flex flex-col items-center justify-center hover:border-2 hover:border-purple-500 " >
          <p className="text-xl font-bold">2</p>
          <p className="text-gray-600">class</p>
        </div>
        

        
   
      <div className= "w-40 h-40 bg-white shadow-md rounded-md flex flex-col items-center justify-center hover:border-2 hover:border-purple-500 " >
          <p className="text-xl font-bold">3</p>
          <p className="text-gray-600">class</p>
        </div>
      

        
     
      <div className= "w-40 h-40 bg-white shadow-md rounded-md flex flex-col items-center justify-center hover:border-2 hover:border-purple-500 " >
          <p className="text-xl font-bold">4</p>
          <p className="text-gray-600">class</p>
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
            <div className="bg-white rounded-xl shadow-2xl w-[40%] max-w-md h-[50%] p-8 relative overflow-hidden">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
                onClick={() => setIsFormOpen(false)}
              >
                ✕
              </button>

              {/* Form Heading */}
              <h2 className="text-2xl font-bold text-center mb-2">Add New Class</h2>
              <p className="text-gray-500 text-center mb-6">
                Fill this detail to create a class
              </p>

              {/* Scrollable Form Content */}
              <div className="overflow-y-auto h-[80%]">
                <form>
                  {/* Student Name */}
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Class Name</label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter class Number"
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