// Profile.js
import React from 'react';
import { Card } from 'react-bootstrap';

const Profile = ({ name, grade }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Student Profile:</Card.Title>
        <Card.Text>
          <strong>Name:</strong> {name}
        </Card.Text>
        <Card.Text>
          <strong>Branch:</strong> {grade}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Profile;
