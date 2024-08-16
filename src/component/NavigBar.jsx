import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavigBar() {
  return (
    <div className='navigbar'>
        <Navbar className='navbar' > 
        <Container>
          <Nav className="me-auto navbar">
            <Nav.Link className='abc' id='abc' href="#overview">OVERVIEW</Nav.Link>
            <Nav.Link className='abc' href="#authentication">AUTHENTICATION</Nav.Link>
            <Nav.Link className='abc' href="#endpoints">ENDPOINTS</Nav.Link>
            <Nav.Link className='abc' href="#tutorial">TUTORIAL</Nav.Link>
            <Nav.Link className='abc' href="#code">CODE EXAMPLES</Nav.Link>
            <Nav.Link className='abc' href="#pricing">PRICING</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigBar