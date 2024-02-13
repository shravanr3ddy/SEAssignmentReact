import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home">
        <label style={{ backgroundColor: '#6f42c1', borderRadius: 3}}>
          <span style={{ color: 'white', marginRight: 3, marginLeft: 3 }}>B</span>
          </label>
          <span style={{marginLeft: 5}}>Media Library</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
