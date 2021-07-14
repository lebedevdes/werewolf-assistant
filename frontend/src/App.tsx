import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function App () {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="ps-3">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/static/img/logo.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{ ' ' }
        </Navbar.Brand>
        <Nav>
          <Nav.Link to="/home" as={Link}>Home</Nav.Link>
          <Nav.Link to="/characters" as={Link}>Characters</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default App;
