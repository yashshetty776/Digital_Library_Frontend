import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';

function Admin2() {
  return (
    <Container>
      <Row className="justify-content-around mb-4">
        <Col>
          <Card style={{ width: '18rem', textAlign: 'center' }}>
            <Card.Img variant="top" style={{ width: '50%', margin: '0 auto', display: 'block' }} src="https://cdn-icons-png.flaticon.com/128/2702/2702162.png" />
            <Card.Body>
              <Card.Title>Books Listed</Card.Title>
              <Card.Text>
                985003
              </Card.Text>
              <Button variant="primary">Know more</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem', textAlign: 'center' }}>
            <Card.Img variant="top" style={{ width: '50%', margin: '0 auto', display: 'block' }} src="https://cdn-icons-png.flaticon.com/128/11445/11445733.png" />
            <Card.Body>
              <Card.Title>Books Reported</Card.Title>
              <Card.Text>
                4
              </Card.Text>
              <Button variant="primary">Know more</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem', textAlign: 'center' }}>
            <Card.Img variant="top" style={{ width: '50%', margin: '0 auto', display: 'block' }} src="https://cdn-icons-png.flaticon.com/128/5252/5252452.png" />
            <Card.Body>
              <Card.Title>Library Statistics</Card.Title>
              <Card.Text>
                View stats
              </Card.Text>
              <Button variant="primary">Know more</Button>
            </Card.Body>
          </Card>
        </Col>

        
      </Row>

      <Row className="justify-content-around">
        <Col>
          <Card style={{ width: '18rem', textAlign: 'center' }}>
            <Card.Img variant="top" style={{ width: '50%', margin: '0 auto', display: 'block' }} src="https://cdn-icons-png.flaticon.com/128/16821/16821509.png" />
            <Card.Body>
              <Card.Title>Authors Listed</Card.Title>
              <Card.Text>
                7881
              </Card.Text>
              <Button variant="primary">Know more</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{ width: '18rem', textAlign: 'center' }}>
            <Card.Img variant="top" style={{ width: '50%', margin: '0 auto', display: 'block' }} src="https://cdn-icons-png.flaticon.com/128/9482/9482813.png" />
            <Card.Body>
              <Card.Title>Listed Categories</Card.Title>
              <Card.Text>
                50
              </Card.Text>
              <Button variant="primary">Know more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', textAlign: 'center' }}>
            <Card.Img variant="top" style={{ width: '50%', margin: '0 auto', display: 'block' }} src="https://cdn-icons-png.flaticon.com/128/707/707661.png" />
            <Card.Body>
              <Card.Title>User Feedback</Card.Title>
              <Card.Text>
                Reviews
              </Card.Text>
              <Button variant="primary">Know more</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <br></br>
          <Card style={{ width: '18rem', textAlign: 'center' }}>
            <Card.Img variant="top" style={{ width: '50%', margin: '0 auto', display: 'block' }} src="https://cdn-icons-png.flaticon.com/128/694/694642.png" />
            <Card.Body>
              <Card.Title>Registered Users</Card.Title>
              <Card.Text>
                5136
              </Card.Text>
              <Button variant="primary">Know more</Button>
            </Card.Body>
          </Card>
        </Col>

        
      </Row>
    </Container>
  );
}

export default Admin2;
