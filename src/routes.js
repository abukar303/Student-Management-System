import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import Dashboard from './Components/Dashboard';
import StudentList from './Components/StudentList';
import StudentForm from './Components/StudentForm';
// Component to define the application routes
const AppRoutes = ({
  students,
  addStudent,
  updateStudent,
  deleteStudent,
  searchStudents,
}) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/students"
          element={
            <StudentList
              students={students}
              deleteStudent={deleteStudent}
              searchStudents={searchStudents}
            />
          }
        />
        <Route
          path="/add-student"
          element={<StudentForm addStudent={addStudent} />}
        />
        <Route
          path="/edit-student/:id"
          element={
            <StudentForm students={students} updateStudent={updateStudent} />
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
