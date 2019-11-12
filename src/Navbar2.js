import React,{Component} from 'react';
import {Navbar,Nav,NavDropdown} from  'react-bootstrap';
class Navbar2 extends Component{
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.history.push('Navbar2/BookNow');
    }
    render()
    {
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="#home">Bookbus.com</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link onClick={this.handleSubmit}>Book Now</Nav.Link>
    
    <NavDropdown title="Manage Booking" id="collasible-nav-dropdown">
      <NavDropdown.Item href="#action/3.1">Cancel</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Reschedule</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Print/Download</NavDropdown.Item>
      
  
    </NavDropdown>
  </Nav>
  <Nav>
  <Nav.Link>Welcome</Nav.Link>
      <Nav.Link  href="/" >
        Sign Out
      </Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>

        )
    }
}
export default Navbar2;