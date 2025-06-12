import React from "react";
import {
    Student, deleteStudent
} from "../api/students";

type Props = {
  students: Student[];
  onEdit: (s: Student) => void;
  refresh: () => void;
};

export function StudentList({ students, onEdit, refresh }: Props) {
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          {/* headers */}
          <th>Name</th><th>Email</th><th>Age</th><th>Date</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map(s => (
          <tr key={s.id}>
            <td>{s.name}</td>
            <td>{s.email}</td>
            <td>{s.age}</td>
            <td>{s.enrolled_date}</td>
            <td>
              <button onClick={() => onEdit(s)}>Edit</button>
              <button onClick={async () => { await deleteStudent(s.id!); refresh(); }}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
