import React, { Component } from 'react';
import {Navbar,Nav,NavDropdown} from  'react-bootstrap';
import {withRouter} from 'react-router-dom';




class Navbar1 extends Component {
  
 handleSubmit=(e)=>
 {
   e.preventDefault();
   this.props.history.push('/BookNow')
 }
 handleHistory=(e)=>{
   e.preventDefault();
   fetch('http://localhost:1337/purchaseHistory',{
     method:'post',
     headers:{'Content-Type':'application/json'},
     body:JSON.stringify({
       userid:this.props.userid
     })
    

   }).then((response)=>response.json()).then(({data})=>this.props.historyData(data))
   this.props.history.push('/manageBooking/purchaseHistory')
 }
  render() {
    console.log(this.props);
      
      
       
return(
 
    this.props.isSignedIn===true?(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="#home">Bookbus.com</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link onClick={this.handleSubmit}>Book Now</Nav.Link>
    
    <NavDropdown title="Manage Booking" id="collasible-nav-dropdown">
      <NavDropdown.Item onClick={this.handleHistory}>Purchase History</NavDropdown.Item>
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

        ):(
          <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Bookbus.com</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/BookNow">Book Now</Nav.Link>
          
          <NavDropdown title="Manage Booking" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Cancel</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Reschedule</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Print/Download</NavDropdown.Item>
            
        
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/signIn" >Sign In</Nav.Link>
          <Nav.Link  href="/signUp">
            Sign Up
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
    
    </div>))
              
            
    
      
    }
    
    }

export default withRouter(Navbar1);