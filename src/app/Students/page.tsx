"use client";
import Layout from "../components/Navbar";
import { PencilIcon } from '@heroicons/react/20/solid';
import { useState, useEffect } from "react";

// Define Student type
interface Student {
  id: number;
  name: string;
  studentId: string;
  password?: string;
  class: string;
  guardianEmail: string;
  guardianMobile: string;
}

const API_BASE = "http://localhost/student-dashboard-api";

const Students: React.FC = () => {
  // 1) students is always an array
  const [students, setStudents] = useState<Student[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Simplify formData typing
  type FormData = Omit<Student, 'id'> & { id?: number | '' };
  const [formData, setFormData] = useState<FormData>({
    id: '',
    name: '',
    studentId: '',
    password: '',
    class: '',
    guardianEmail: '',
    guardianMobile: '',
  });

  // Fetch students on mount
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await fetch(`${API_BASE}/read.php`);
      const data = await res.json();
      setStudents(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = formData.id ? "PUT" : "POST";
      const url = formData.id ? `${API_BASE}${formData.id}/` : API_BASE;
      const payload = { ...formData };
      if (!formData.id) delete (payload as any).id;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        fetchStudents();
        setIsFormOpen(false);
        setFormData({ id: '', name: '', studentId: '', password: '', class: '', guardianEmail: '', guardianMobile: '' });
      } else {
        console.error("Submit error:", await res.text());
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  const handleEdit = (stu: Student) => {
    setFormData({
      id: stu.id,
      name: stu.name,
      studentId: stu.studentId,
      password: '',
      class: stu.class,
      guardianEmail: stu.guardianEmail,
      guardianMobile: stu.guardianMobile,
    });
    setIsFormOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this student?")) return;
    try {
      const res = await fetch(`${API_BASE}${id}/`, { method: "DELETE" });
      if (res.ok) fetchStudents();
      else console.error("Delete error:", await res.text());
    } catch (err) {
      console.error("Error deleting student:", err);
    }
  };

  return (
    <Layout>
      <div className="flex justify-between items-center -mt-2">
        <h2 className="text-gray-700 font-bold text-2xl">Students</h2>
      </div>

      {/* Add button */}
      {!isFormOpen && (
        <div className="flex justify-end -mt-2 mb-2">
          <button
            className="bg-purple-500 text-white px-4 py-2 rounded-md shadow hover:bg-purple-600"
            onClick={() => setIsFormOpen(true)}
          >
            Add Student +
          </button>
        </div>
      )}

      {/* Student Table */}
      <div className="bg-white rounded shadow mt-1">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Student ID</th>
              <th className="px-4 py-2 text-left">Class</th>
              <th className="px-4 py-2 text-left">Guardian Email</th>
              <th className="px-4 py-2 text-left">Guardian Mobile</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((stu) => (
              <tr key={stu.id} className="border-t">
                <td className="px-4 py-2">{stu.name}</td>
                <td className="px-4 py-2">{stu.studentId}</td>
                <td className="px-4 py-2">{stu.class}</td>
                <td className="px-4 py-2">{stu.guardianEmail}</td>
                <td className="px-4 py-2">{stu.guardianMobile}</td>
                <td className="px-4 py-2 text-center space-x-2">
                  <button onClick={() => handleEdit(stu)}>
                    <PencilIcon className="w-5 h-5 text-blue-500 hover:text-blue-700" />
                  </button>
                  <button onClick={() => handleDelete(stu.id)}>
                    <span className="text-red-500 hover:text-red-700">✕</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Form */}
      {isFormOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-70 z-10 backdrop-blur-sm"
            onClick={() => setIsFormOpen(false)}
          />
          <div className="fixed inset-0 flex items-center justify-center z-20">
            <div className="bg-white rounded-xl shadow-2xl w-[90%] max-w-md p-8 relative">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={() => setIsFormOpen(false)}
              >
                ✕
              </button>
              <h3 className="text-2xl font-bold text-center mb-2">
                {formData.id ? "Edit Student" : "Add New Student"}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto">
                <div>
                  <label className="block mb-1">Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">Student ID</label>
                  <input
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleInputChange}
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">Password</label>
                  <input
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full border rounded px-3 py-2"
                    {...(formData.id ? {} : { required: true })}
                  />
                </div>
                <div>
                  <label className="block mb-1">Class</label>
                  <select
                    name="class"
                    value={formData.class}
                    onChange={handleInputChange}
                    className="w-full border rounded px-3 py-2"
                    required
                  >
                    <option value="" disabled>Select Class</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1">Guardian Email</label>
                  <input
                    name="guardianEmail"
                    type="email"
                    value={formData.guardianEmail}
                    onChange={handleInputChange}
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1">Guardian Mobile</label>
                  <input
                    name="guardianMobile"
                    value={formData.guardianMobile}
                    onChange={handleInputChange}
                    className="w-full border rounded px-3 py-2"
                    required
                  />
                </div>
                <button className="w-full py-2 rounded bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                  {formData.id ? "Update" : "Add"}
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Students;
