import React, { useState, useEffect } from "react";
import {
  fetchStudents,
  Student,
} from "../api/students";

import { StudentList } from "./StudentList";
import { StudentForm } from "./StudentForm";

export function StudentDashboard() {
  const [students, setStudents] = useState<Student[]>([]);
  const [editStu, setEditStu] = useState<Student | undefined>();

  const load = async () => {
    const data = await fetchStudents();
    setStudents(data);
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Student Dashboard</h1>
      <StudentForm current={editStu} onSaved={() => { setEditStu(undefined); load(); }} />
      <StudentList students={students} onEdit={setEditStu} refresh={load} />
    </div>
  );
}
