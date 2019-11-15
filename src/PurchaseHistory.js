import React,{Component} from 'react';
class PurchaseHistory extends Component{
    handleCancel=(data)=>{
        fetch('http://localhost:1337/cancel',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                seat_no:data.seats_booked,
                userid:this.props.userid,
                busno:data.Bus_No
            })
        }).then(response=>response.json()).then(({data})=>this.props.historyData(data))
       
    }
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
                <th>Date</th>
                
            </tr>
        </thead>
        <tbody>
        {
            this.props.historyDetails.map((data)=>
              

            <tr>
                <td>{data.Bus_No}</td>
                
                <td>{data.Name}</td>
                <td>{data.seats_booked}</td>
                <td>{data.Source}</td>
                <td>{data.Destination}</td>
                <td>{data.Departure_time}</td>
                <td>{data.Arrival_time}</td>
                <td>{data.Price}</td>
                <td>{data.Date}</td>
                <button type="submit"className="btn btn-primary login-btn btn-block"style={{width:100,marginRight:820}}onClick={(e)=>{ e.preventDefault()
                this.handleCancel(data)
               }}>Cancel</button>

                
            </tr>)
            
        }          
        </tbody>
    </table>
</div>
                           
            
            </div>
        )
    }
}
export default PurchaseHistory;