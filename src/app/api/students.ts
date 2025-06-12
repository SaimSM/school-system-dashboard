const API_BASE = "http://localhost/student-dashboard-api";

export interface Student {
  id?: number;
  name: string;
  email: string;
  age: number;
  enrolled_date: string; // YYYY-MM-DD
}

export async function fetchStudents(): Promise<Student[]> {
  const res = await fetch(`${API_BASE}/read.php`);
  return res.json();
}

export async function createStudent(data: Student) {
  const res = await fetch(`${API_BASE}/create.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateStudent(data: Student) {
  const res = await fetch(`${API_BASE}/update.php`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteStudent(id: number) {
  const res = await fetch(`${API_BASE}/delete.php`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  return res.json();
}
