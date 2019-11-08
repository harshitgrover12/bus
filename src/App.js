import React,{Component} from 'react';
import Navbar1 from './Navbar/Navbar1';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route} from 'react-router-dom';
import signIn from './signIn/signIn';
import signUp from './signUp/signUp';


class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div>
        <Navbar1/>
        <Route path='/signIn' component={signIn}/>
        <Route path='/signUp'component={signUp}/>
      </div>
      </BrowserRouter>

    )
  }

}
export default App;