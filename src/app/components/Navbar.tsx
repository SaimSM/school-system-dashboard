"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

interface StudentDashboardProps {}

const StudentDashboard: React.FC<StudentDashboardProps> = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isApplyHovering, setIsApplyHovering] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Students");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
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
        {" "}
        {/* Applied the provided gradient */}
        <div className="flex items-center justify-center">
          <Image src="/book.png" alt="Book" width={24} height={24} />
          <div className="text-white font-bold text-2xl mr-2">EduHub</div>
        </div>
        <div className="flex flex-col space-y-2 items-center">
          <button
            className={`bg-transparent text-white hover:bg-black hover:text-white hover:rounded-md px-4 py-2 w-full ${
              selectedOption === "Dashboard"
                ? "bg-black text-white rounded-md px-4 py-2 w-full"
                : ""
            }`}
            onMouseEnter={() => setIsApplyHovering(true)}
            onMouseLeave={() => setIsApplyHovering(false)}
            onClick={() => handleOptionClick("Dashboard")}
          >
            <Link href="/">
              {" "}
              <span className="text-lg">Dashboard</span>{" "}
            </Link>
          </button>
          <button
            className={`bg-transparent text-white hover:bg-black hover:text-white hover:rounded-md px-4 py-2 w-full ${
              selectedOption === "Students"
                ? "bg-black text-white rounded-md px-4 py-2 w-full"
                : ""
            }`}
            onClick={() => handleOptionClick("Students")}
          >
            <Link href="/Students">
              {" "}
              <span className="text-lg">Students</span>{" "}
            </Link>
          </button>
          <button
            className={`bg-transparent text-white hover:bg-black hover:text-white hover:rounded-md px-4 py-2 w-full ${
              selectedOption === "Teachers"
                ? "bg-black text-white rounded-md px-4 py-2 w-full"
                : ""
            }`}
            onClick={() => handleOptionClick("Teachers")}
          >
            <Link href="/Teachers">
              {" "}
              <span className="text-lg">Teachers</span>{" "}
            </Link>
          </button>
          <button
            className={`bg-transparent text-white hover:bg-black hover:text-white hover:rounded-md px-4 py-2 w-full ${
              selectedOption === "Courses"
                ? "bg-black text-white rounded-md px-4 py-2 w-full"
                : ""
            }`}
            onClick={() => handleOptionClick("Courses")}
          >
            <Link href="/Courses">
              {" "}
              <span className="text-lg">Courses</span>{" "}
            </Link>
          </button>
          <button
            className={`bg-transparent text-white hover:bg-black hover:text-white hover:rounded-md px-4 py-2 w-full ${
              selectedOption === "Classes"
                ? "bg-black text-white rounded-md px-4 py-2 w-full"
                : ""
            }`}
            onClick={() => handleOptionClick("Classes")}
          >
            <Link href="/Classes">
              {" "}
              <span className="text-lg">Classes</span>{" "}
            </Link>
          </button>
        </div>
      </div>
      <div className="w-4/5 p-4">
        <div className="flex justify-between items-center">
          <div className="text-gray-700 font-bold text-2xl">Students</div>
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
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
