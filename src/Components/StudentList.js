import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button, Form, Container, Row, Col } from 'react-bootstrap';
// Component to display a list of students with search, edit, and delete functionality
const StudentList = ({ students, deleteStudent, searchStudents }) => {
  const [query, setQuery] = useState(''); // State to manage search query
// Function to handle search input changes
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

// Filter students based on search query  
  const filteredStudents = searchStudents(query);
// Render the student list
  return (
    <Container>
      <Row>
        <Col>
          <h2>Student List</h2>
          <Form>
            <Form.Group controlId="formBasicSearch">
              <Form.Control
                type="text"
                placeholder="Search by ID, name, faculty or tell"
                value={query}
                onChange={handleSearch}
              />
            </Form.Group>
          </Form>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>StudentID</th>
                <th>StudentName</th>
                <th>Faculty</th>
                <th>Tell</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.faculty}</td>
                  <td>{student.tell}</td>
                  <td>
                    <Link to={`/edit-student/${student.id}`}>
                      <Button variant="warning" style={{ marginRight: '10px' }}>
                        Update
                      </Button>
                    </Link>
                    <Button
                      variant="danger"
                      onClick={() => deleteStudent(student.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to="/add-student">
            <Button variant="primary">Add Student</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentList;
