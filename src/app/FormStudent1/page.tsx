"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

interface StudentDashboardProps {}

const StudentDashboard: React.FC<StudentDashboardProps> = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isApplyHovering, setIsApplyHovering] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Students");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex h-screen bg-white">
      <div
        className="w-1/5 p-4"
        style={{
          background:
            "linear-gradient(178.4deg, rgba(78, 116, 249, 0.74) 22.77%, rgba(185, 22, 218, 0.4218) 99%)",
        }}
      >
        <div className="flex items-center justify-center">
          <Image src="/book.png" alt="Book" width={24} height={24} />
          <div className="text-white font-bold text-2xl mr-2">EduHub</div>
        </div>
        <div className="flex flex-col space-y-2 items-center">
          {["Dashboard", "Students", "Teachers", "Courses", "Classes"].map(
            (option) => (
              <button
                key={option}
                className={`bg-transparent text-white hover:bg-black hover:text-white hover:rounded-md px-4 py-2 w-full ${
                  selectedOption === option
                    ? "bg-black text-white rounded-md px-4 py-2 w-full"
                    : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                <Link href={`/${option}`}>
                  <span className="text-lg">{option}</span>
                </Link>
              </button>
            )
          )}
        </div>
      </div>
      <div className={`w-4/5 p-4 ${isModalOpen ? "blur-sm" : ""}`}>
        <div className="flex justify-between items-center">
          <div className="text-gray-700 font-bold text-2xl">Dashboard</div>
          <Image
            src="/exit-gate.png"
            alt="Exit"
            width={32}
            height={32}
            className="mr-4"
          />
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col items-center">
            <div className={`relative ${isHovering ? "scale-105" : ""}`}>
              <Image
                src="/Clip path group.png"
                alt="Document"
                width={100}
                height={100}
              />
            </div>
            <p className="text-gray-500 mt-4">
              You haven't added any student yet
            </p>
            <button
              className={`bg-blue-500 text-white rounded-md px-8 py-2 mt-4 w-[600px] hover:bg-blue-600 ${
                isApplyHovering ? "scale-105" : ""
              }`}
              onMouseEnter={() => setIsApplyHovering(true)}
              onMouseLeave={() => setIsApplyHovering(false)}
              onClick={openModal}
            >
              Apply
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-[600px] z-50 relative">
            <button onClick={closeModal} className="absolute top-4 right-4">
              <Image src="/Icon.png" alt="Close" width={24} height={24} />
            </button>
            <div className="text-center">
              <h2 className="text-2xl font-bold">Add New Student</h2>
              <p className="text-gray-500">
                Fill in the details to create a student
              </p>
            </div>
            <form className="mt-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Student name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter student name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Student ID
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="studentId"
                  type="text"
                  placeholder="Enter student ID"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter password"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Class
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="class"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline hover:size-full border-spacing-3"
                  type="button"
                  style={{
                    background:
                      "linear-gradient(178.4deg, rgba(78, 116, 249, 0.74) 22.77%, rgba(185, 22, 218, 0.4218) 99%)",
                  }}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
