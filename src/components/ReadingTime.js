// ReadingTime.js
import React from 'react';
import { Card } from 'react-bootstrap';

const ReadingTime = ({ hours }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Reading Time</Card.Title>
        <Card.Text>
          You have read <strong>{hours} hours</strong> in total.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReadingTime;
