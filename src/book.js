import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
class Book extends Component{
    state={
        source:'',
        destination:'',
        startdate:'',
        
    }
    onSourceChange=(e)=>{
        this.setState({
            source:e.target.value
        })
    }
    onDestinationChange=(e)=>{
        this.setState({
            destination:e.target.value
        })
    }
    onStartDateChange=(e)=>{
        this.setState({
            startdate:e.target.value
        })
    }
    
    handleClick=(e)=>{
        e.preventDefault();
        fetch('http://localhost:1337/searchResults',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                source:this.state.source,
                destination:this.state.destination,
                startdate:this.state.startdate
            })

        }).then((response)=>response.json()).then(({data})=>this.props.busvalue(data))
           
        this.props.history.push('/searchResults');
        
    }
    render()
    {
        console.log(this.props.userDetails.data)
return(
    <div>


<div class="input-group" style={{marginTop: 90,marginLeft: 400,marginRight: 90}}>
    <input type="text"  placeholder="Start"style={{width:150,textAlign:"justify"}}onChange={this.onSourceChange}/>
    <span class="input-group-addon">-</span>
    <input type="text"  placeholder="End"style={{width:150,textAlign:"justify"}}onChange={this.onDestinationChange}/>
    <span class="input-group-addon">-</span>
    <input type="text"  placeholder="Start Date"style={{width:150,textAlign:"justify"}}onChange={this.onStartDateChange}/>
    <button type="submit"className="btn btn-primary login-btn btn-block"style={{width:100}}onClick={this.handleClick}>Search</button>
    
</div>
</div>
);
}}
export default withRouter(Book);