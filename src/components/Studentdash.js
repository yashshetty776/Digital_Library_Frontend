
import Profile from "./Profile";
import ReadingTime from "./ReadingTime";
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
function Studentdash() {
    // Sample data for student profile and reading time (replace with actual data)
    const studentProfile = {
      name: 'John Doe',
      Branch: 'Computer Science and Engineering',
    };
  
    const readingTime = {
      hours: 50, // Total hours read by the student
    };
  
    // Calculate the number of books read (for demonstration purposes)
    const numberOfBooksRead = Math.floor(readingTime.hours / 5); // Assuming average 5 hours per book
  
    return (
      <Container className="mt-4">
        <Row>
          <h1>STUDENT DASHBOARD</h1>
          <br></br>
          <Col md={12}>
            <Profile name={studentProfile.name} grade={studentProfile.Branch} />
          </Col>
          <Col><br></br></Col>
          <Col md={12}>
            <ReadingTime hours={readingTime.hours} />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h2>Number of Books Read:</h2>
            <p>Congratulations! You have read {numberOfBooksRead} books so far.</p>
            {/* Additional content for books read can be added here */}
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default Studentdash;
  
