import React,{Component} from 'react';
import Navbar1 from './Navbar/Navbar1';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './signIn/signIn';
import SignUp from './signUp/signUp';
import {BrowserRouter,Route} from 'react-router-dom';
import User from './user';


class App extends Component{
  state={
    isSignedIn:false,
    route:'home'
  }
  isSignIn=(issign)=>{
    this.setState({
      isSignedIn:issign
    })
  }
  
  
  render(){
    
     
        {return(
          <BrowserRouter>
        <div>
        <Navbar1 isSignIn={this.isSignIn}route={this.state.route}onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} />
          <Route path='/signIn' render={(props)=><SignIn {...props} isSignIn={this.isSignIn} isSignedIn={this.state.isSignedIn}/>}/>
          <Route path='/signUp' component={SignUp}/>
          <Route path='/signedin'component={User}/>
        </div>
        </BrowserRouter>
        )}
       
      
      

    
  }

}
export default App;