"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Student {
  name: string;
  id: string;
  class: string;
  guardianEmail: string;
  guardianMobileNo: string;
}

const students: Student[] = Array.from({ length: 10 }).map((_, index) => ({
  name: "Muhammad Ali Arshad",
  id: `Std-00${index + 1}`,
  class: "5",
  guardianEmail: "md123@gmail.com",
  guardianMobileNo: "032154791",
}));

const Students: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className="w-1/5 p-4 flex flex-col items-center justify-center"
        style={{
          background:
            "linear-gradient(178.4deg, rgba(78, 116, 249, 0.74) 22.77%, rgba(185, 22, 218, 0.4218) 99%)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center justify-center mb-8">
          <Image src="/book.png" alt="Book" width={24} height={24} />
          <div className="text-white font-bold text-2xl ml-2">EduHub</div>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center w-full space-y-4">
          {[
            { name: "Dashboard", active: false },
            { name: "Students", active: true },
            { name: "Teachers", active: false },
            { name: "Courses", active: false },
            { name: "Classes", active: false },
          ].map((option) => (
            <button
              key={option.name}
              className={`px-4 py-2 w-4/5 text-left text-lg text-white ${
                option.active
                  ? "bg-black rounded-md"
                  : "hover:bg-black hover:rounded-md"
              }`}
            >
              <Link href={`/${option.name.toLowerCase()}`}>{option.name}</Link>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="w-4/5 p-6 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          {/* Heading */}
          <h2 className="text-2xl font-bold">Students</h2>
          {/* Add Students Button */}
          <button
            className="bg-purple-500 text-white px-6 py-2 rounded-md shadow hover:bg-purple-600"
            style={{
              background:
                "linear-gradient(178.4deg, rgba(78, 116, 249, 0.74) 22.77%, rgba(185, 22, 218, 0.4218) 99%)",
            }}
          >
            <Link href="/FormStudent1">Add Students +</Link>
          </button>
        </div>

        {/* Students Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex-grow">
          <table className="w-full bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 border-b text-left">Student Name</th>
                <th className="py-3 px-4 border-b text-left">Student ID</th>
                <th className="py-3 px-4 border-b text-left">Class</th>
                <th className="py-3 px-4 border-b text-left">Guardian Email</th>
                <th className="py-3 px-4 border-b text-left">
                  Guardian Mobile No
                </th>
                <th className="py-3 px-4 border-b text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b">{student.name}</td>
                  <td className="py-3 px-4 border-b">{student.id}</td>
                  <td className="py-3 px-4 border-b">{student.class}</td>
                  <td className="py-3 px-4 border-b">
                    {student.guardianEmail}
                  </td>
                  <td className="py-3 px-4 border-b">
                    {student.guardianMobileNo}
                  </td>
                  <td className="py-3 px-4 border-b">
                    <button className="text-blue-500">
                      <Image
                        src="/pencel.png"
                        alt="Edit"
                        width={20}
                        height={20}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-between items-center p-4 bg-gray-50 border-t">
            <div>
              <select className="border rounded px-3 py-2">
                <option>10</option>
                <option>20</option>
                <option>30</option>
              </select>
            </div>
            <div>
              <span className="text-sm text-gray-600">
                Showing 1 to 10 out of 10 records
              </span>
            </div>
            <div className="flex space-x-2">
              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  className={`border rounded px-3 py-2 ${
                    page === 1
                      ? "bg-purple-500 text-white"
                      : "hover:bg-purple-500 hover:text-white"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Students;
