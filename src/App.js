import React,{Component} from 'react';
import Navbar1 from './Navbar/Navbar1';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './signIn/signIn';
import SignUp from './signUp/signUp';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import User from './user';
import Book from './book';
import SearchResults from './SearchResults';
import Seats from './Seats';
import GeneratedTicket from './GeneratedTicket';
import Navbar2 from './Navbar2';



class App extends Component{
  state={
    isSignedIn:false,
    route:'home',
    value:[],
    BusDetails:{},
    userDetails:[],
    seatDetails:[],
    userid:0
  }
  isSignIn=(issign)=>{
    this.setState({
      isSignedIn:issign
    })
  }
  busvalue=(data)=>{
    this.setState({
      value:data
    })
  }
  busData=(busDetails)=>{
    this.setState({
      BusDetails:busDetails
    })
  }
  userData=(userDetails)=>{
    this.setState({
      userDetails:userDetails
    })
    this.state.userDetails.map((data)=>this.setState({
      userid:data.user_id
    }))}
  
  seatsData=(seats)=>{
    this.setState({
      seatDetails:seats
    })
  }
  
  
  render(){
    
     console.log(this.state.userDetails);
        return(
          
          <BrowserRouter>
        <div>
        <Route  exact path='/'component={Navbar1}/>
        <Route   path='/Navbar2'component={Navbar2}/>
          <Route path='/signIn' render={(props)=><SignIn {...props} isSignIn={this.isSignIn} isSignedIn={this.state.isSignedIn}userData={this.userData}/>}/>
          <Route path='/signUp' component={SignUp}/>
          <Route path='/signedin'component={User}/>
          <Route path='/BookNow'render={(props)=><Book {...props} busvalue={this.busvalue}/>}/>
          <Route path='/Navbar2/BookNow'render={(props)=><Book {...props} busvalue={this.busvalue}userDetails={this.state.userDetails}/>}/>
           <Route  path='/searchResults' render={(props)=><SearchResults {...props} value={this.state.value}busData={this.busData}/>}/>
        
          <Route path='/viewSeats' render={(props)=><Seats {...props} seatsData={this.seatsData}userDetails={this.state.userDetails}userid={this.state.userid}BusDetails={this.state.BusDetails}/>}/>
          <Route path='/generatedTicket'render={(props)=><GeneratedTicket {...props} BusDetails={this.state.BusDetails} userDetails={this.state.userDetails}seatDetails={this.state.seatDetails}/>}/>
        </div>
        </BrowserRouter>
        )}    
  
  }


export default App;