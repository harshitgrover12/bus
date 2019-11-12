import React,{Component} from 'react';
import './Search.css';

class SearchResult extends Component{
    handleClick=(busDetails)=>{
        
   console.log(busDetails);
    this.props.busData(busDetails);
    this.props.history.push('/viewSeats');
    

}
getData=(bus_no)=>{
    
}
render(){
    return(
        <div>
        <div className="bs-example">
    <table className="table">
        <thead>
            <tr>
                <th>Bus_No</th>
                <th>Bus_Name</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Departure_time</th>
                <th>Arrival_time</th>
                <th>Price</th>
                <th>Seats_available</th>
            </tr>
        </thead>
        <tbody>
        {
            this.props.value.map((data)=>
              
 

            <tr>
                <td>{data.Bus_No}</td>
                <td>{data.Bus_Name}</td>
                <td>{data.Source}</td>
                <td>{data.Destination}</td>
                <td>{data.Departure_time}</td>
                <td>{data.Arrival_time}</td>
                <td>{data.Price}</td>
                <td>{data.Seats_available} <button type="submit"className="btn btn-primary login-btn btn-block"style={{width:100}}onClick={(e)=>{this.handleClick(data);
                e.preventDefault()}}>view seats</button>
                </td>
            </tr>
            )
        }          
        </tbody>
    </table>
</div>
                           
            
        
        </div>
    )}
}
export default SearchResult;