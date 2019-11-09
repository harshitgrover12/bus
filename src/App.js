import React,{Component} from 'react';
import Navbar1 from './Navbar/Navbar1';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './signIn/signIn';
import SignUp from './signUp/signUp';


class App extends Component{
  state={
    isSignedIn:false,
    route:'home'
  }
  
  isSignIn=(issign)=>{
    this.setState({
      isSignedIn:issign
    });
    if(issign===true){
      this.setState({
        route:'signedIn'
      })}
      else
      {
        this.setState({
          route:'home'
        })
      }
    }
    onRouteChange=(route)=>{
      console.log(route);
      this.setState({
        route:route
      })
    }
  
  render(){
    
     
      
        if(this.state.route==='signin')
        {return(
        <div>
        <Navbar1 isSignIn={this.isSignIn}route={this.state.route}onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} />
        <SignIn isSignIn={this.isSignIn}route={this.state.route}/>
        </div>
        )}
       else if(this.state.route==='signup')
       {
         return(<div>
          <Navbar1 isSignIn={this.isSignIn}route={this.state.route}onRouteChange={this.onRouteChange} />
        <SignUp/>
        </div>)
       }
       else if(this.state.route==='home')
       {
         return(<div>
          <Navbar1 isSignIn={this.isSignIn}route={this.state.route}onRouteChange={this.onRouteChange} />
        </div>)
       }
      
      

    
  }

}
export default App;