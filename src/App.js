import React, { useState } from 'react';
import AppRoutes from './routes';
// Root component of the Application
const App = () => {
  // useState hook to manage the list of students
  const [students, setStudents] = useState([]);
// Function to add a new student to the list
  const addStudent = (student) => {
    setStudents([...students, student]);
  };
// Function to update an existing student's information
  const updateStudent = (updatedStudent) => {
    setStudents(
      students.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );
  };
// Function to delete a student from the list
  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };
// Function to search a student based on query
  const searchStudents = (query) => {
    if (!query) {
      return students;
    }
    return students.filter(
      (student) =>
        student.id.toLowerCase().includes(query.toLowerCase()) ||
        student.name.toLowerCase().includes(query.toLowerCase()) ||
        student.faculty.toLowerCase().includes(query.toLowerCase()) ||
        student.tell.includes(query)
    );
  };
// Render the AppRoutes component and pass the state and functions as props
  return (
    <div className="App">
      <AppRoutes
        students={students}
        addStudent={addStudent}
        updateStudent={updateStudent}
        deleteStudent={deleteStudent}
        searchStudents={searchStudents}
      />
    </div>
  );
};

export default App;
