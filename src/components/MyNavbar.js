import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import { Nav } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import '../css/Navbar.css';
import Button from 'react-bootstrap/Button';

const MyNavbar = ({ handleSearch }) => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      This feature is not available yet.
    </Tooltip>
  );

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    handleSearch(e.target.value);
  };

  const [modalShow, setModalShow] = useState(false);

  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  const isHomePage = location.pathname === '/';

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">DIGITAL LIBRARY</a>
        <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}> 
              <Nav.Link href="/wishlist">Wishlist</Nav.Link>
            </OverlayTrigger>
            <Nav.Link onClick={handleModalShow}>Review</Nav.Link>
        </Nav>
        { true ? 
        <Button variant="{troutline-danger}" id="logout">Logout</Button> :
        <Button variant="{troutline-success}" id="login">Login</Button>
        }
        {isHomePage && (
          <form className="d-flex ">
            <input
              className="form-control me-2 navbar-search-input" id="search"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleChange}
            />
          </form>
        )}
      </div>
      <Contact show={modalShow} handleClose={handleModalClose} />
    </nav>
  );
};

export default MyNavbar;
