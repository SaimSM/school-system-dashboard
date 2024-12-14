import React from 'react';
import StudentDashboard from '../components/Navbar';

interface Student {
  name: string;
  id: string;
  class: string;
  guardianEmail: string;
  guardianMobileNo: string;
}

const students: Student[] = Array.from({ length: 10 }).map((_, index) => ({
  name: 'Muhammad Ali Arshad',
  id: `Std-00${index + 1}`,
  class: '5',
  guardianEmail: 'md123@gmail.com',
  guardianMobileNo: '032154791',
}));

const Students: React.FC = () => {
  return (
    <div className="flex">
      <StudentDashboard />
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Students</h2>
          <button className="bg-purple-500 text-white px-4 py-2 rounded">Add Students +</button>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Student Name</th>
                <th className="py-2 px-4 border-b">Student ID</th>
                <th className="py-2 px-4 border-b">Class</th>
                <th className="py-2 px-4 border-b">Guardian Email</th>
                <th className="py-2 px-4 border-b">Guardian Mobile No</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{student.name}</td>
                  <td className="py-2 px-4 border-b">{student.id}</td>
                  <td className="py-2 px-4 border-b">{student.class}</td>
                  <td className="py-2 px-4 border-b">{student.guardianEmail}</td>
                  <td className="py-2 px-4 border-b">{student.guardianMobileNo}</td>
                  <td className="py-2 px-4 border-b">
                    <button className="text-blue-500">✏️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center p-4">
            <div>
              <select className="border rounded p-2">
                <option>10</option>
                <option>20</option>
                <option>30</option>
              </select>
            </div>
            <div>
              <span>Showing 1 to 10 out of 10 records</span>
            </div>
            <div>
              <button className="border rounded px-2 py-1 mx-1">1</button>
              <button className="border rounded px-2 py-1 mx-1">2</button>
              <button className="border rounded px-2 py-1 mx-1">3</button>
              <button className="border rounded px-2 py-1 mx-1">4</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Students;
