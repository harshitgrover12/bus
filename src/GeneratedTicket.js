import React,{Component} from 'react';
class GeneratedTicket extends Component{
    render(){
        return(
            <div>
            <div className="bs-example">
    <table className="table">
        <thead>
            <tr>
                <th>Bus_No</th>
                <th>Name</th>
                <th>Seat No</th>
                <th>Source</th>
                <th>Destination</th>
                <th>Departure_time</th>
                <th>Arrival_time</th>
                <th>Price</th>
                
            </tr>
        </thead>
        <tbody>
        {
            this.props.seatDetails.map((data)=>
              

            <tr>
                <td>{this.props.BusDetails.Bus_No}</td>
                
                <td>{this.props.userDetails.map((data)=>
                data.Name)}</td>
                <td>{data}</td>
                <td>{this.props.BusDetails.Source}</td>
                <td>{this.props.BusDetails.Destination}</td>
                <td>{this.props.BusDetails.Departure_time}</td>
                <td>{this.props.BusDetails.Arrival_time}</td>
                <td>{this.props.BusDetails.Price}</td>
                
                
            </tr>)
        }          
        </tbody>
    </table>
</div>
                           
            
            </div>
        )
    }
}
export default GeneratedTicket;