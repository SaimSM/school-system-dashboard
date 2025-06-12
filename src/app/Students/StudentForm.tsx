import React, { useState, useEffect } from "react";
import {
    Student, createStudent, updateStudent
} from "../api/students";


type Props = {
  current?: Student;
  onSaved: () => void;
};

export function StudentForm({ current, onSaved }: Props) {
  const [student, setStudent] = useState<Student>({
    name: "", email: "", age: 0, enrolled_date: ""
  });

  useEffect(() => {
    if (current) setStudent(current);
  }, [current]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (student.id) await updateStudent(student);
    else await createStudent(student);
    setStudent({ name: "", email: "", age: 0, enrolled_date: "" });
    onSaved();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        value={student.name}
        onChange={e => setStudent({ ...student, name: e.target.value })}
        placeholder="Name" required
      />
      <input
        type="email"
        value={student.email}
        onChange={e => setStudent({ ...student, email: e.target.value })}
        placeholder="Email" required
      />
      <input
        type="number"
        value={student.age}
        onChange={e => setStudent({ ...student, age: +e.target.value })}
        placeholder="Age"
      />
      <input
        type="date"
        value={student.enrolled_date}
        onChange={e => setStudent({ ...student, enrolled_date: e.target.value })}
      />
      <button type="submit">
        {student.id ? "Update" : "Add"} Student
      </button>
    </form>
  );
}
