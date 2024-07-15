import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

// Component for adding and editing student information
const StudentForm = ({ addStudent, updateStudent, students }) => {
  // useState hooks to manage form inputs and error message
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [faculty, setFaculty] = useState('');
  const [tell, setTell] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate(); // Hook for navigation
  const { id: paramId } = useParams(); // Hook to get route parameters

  // useEffect hook to populate form when editing a student
  useEffect(() => {
    if (paramId && students) {
      const student = students.find((student) => student.id === paramId);
      if (student) {
        setId(student.id);
        setName(student.name);
        setFaculty(student.faculty);
        setTell(student.tell);
      }
    }
  }, [paramId, students]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (id && name && faculty && tell) {
      if (paramId) {
        updateStudent({ id, name, faculty, tell }); // Update student if editing
      } else {
        addStudent({ id, name, faculty, tell }); // Add new student if not editing
      }
      navigate('/students'); // Navigate to student list
    } else {
      setErrorMessage('Please fill in all fields'); // Set error message if fields are empty
    }
  };

  // Render the form
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2>{paramId ? 'Update Student' : 'Add Student'}</h2>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicId">
              <Form.Label>Student ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter student ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
                disabled={!!paramId} // Disable ID input when editing
              />
            </Form.Group>

            <Form.Group controlId="formBasicName">
              <Form.Label>Student Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicFaculty">
              <Form.Label>Faculty</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter faculty"
                value={faculty}
                onChange={(e) => setFaculty(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicTell">
              <Form.Label>Tell</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter tell"
                value={tell}
                onChange={(e) => setTell(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" style={{ marginTop: '20px' }}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentForm;
