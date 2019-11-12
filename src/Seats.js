import React,{Component} from 'react';
import './main.css';
class Seats extends Component{
  state={
    selectedSeats:[]
  }
  handleClick=(seat)=>{
  
    let seats=[...this.state.selectedSeats,seat];
    this.setState({
      selectedSeats:seats
    })
    console.log(this.state);
  }
  handleSubmit=(e)=>{
    e.preventDefault()
    this.props.seatsData(this.state.selectedSeats);
    this.props.history.push('/generatedTicket');
  }
    render(){
      console.log(this.props.userDetails);
        return(
        <div>
            <div className="plane">
  <h2 style={{textAlign:'center'}}>Please select seats</h2>
  <ol className="cabin fuselage">
    <li className="row row--1">
      <ol className="seats" type="A">
        <li className="seat">
          <input type="checkbox" id="1A" />
          <label for="1A"onClick={()=>{this.handleClick("1A")}}>1A</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="1B" />
          <label for="1B"onClick={()=>{this.handleClick("1B")}}>1B</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="1C" />
          <label for="1C"onClick={()=>{this.handleClick("1C")}}>1C</label>
        </li>
        <li className="seat">
          <input type="checkbox" disabled id="1D" />
          <label for="1D">Occupied</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="1E" />
          <label for="1E"onClick={()=>{this.handleClick("1E")}}>1E</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="1F" />
          <label for="1F"onClick={()=>{this.handleClick("1F")}}>1F</label>
        </li>
      </ol>
    </li>
    <li className="row row--2">
      <ol className="seats" type="A">
        <li className="seat">
          <input type="checkbox" id="2A" />
          <label for="2A"onClick={()=>{this.handleClick("2A")}}>2A</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="2B" />
          <label for="2B"onClick={()=>{this.handleClick("2B")}}>2B</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="2C" />
          <label for="2C"onClick={()=>{this.handleClick("2C")}}>2C</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="2D" />
          <label for="2D"onClick={()=>{this.handleClick("2D")}}>2D</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="2E" />
          <label for="2E"onClick={()=>{this.handleClick("2E")}}>2E</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="2F" />
          <label for="2F"onClick={()=>{this.handleClick("2F")}}>2F</label>
        </li>
      </ol>
    </li>
    <li className="row row--3">
      <ol className="seats" type="A">
        <li className="seat">
          <input type="checkbox" id="3A" />
          <label for="3A"onClick={()=>{this.handleClick("3A")}}>3A</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="3B" />
          <label for="3B"onClick={()=>{this.handleClick("3B")}}>3B</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="3C" />
          <label for="3C"onClick={()=>{this.handleClick("3C")}}>3C</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="3D" />
          <label for="3D"onClick={()=>{this.handleClick("3D")}}>3D</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="3E" />
          <label for="3E"onClick={()=>{this.handleClick("3E")}}>3E</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="3F" />
          <label for="3F"onClick={()=>{this.handleClick("3F")}}>3F</label>
        </li>
      </ol>
    </li>
    <li className="row row--4">
      <ol className="seats" type="A">
        <li className="seat">
          <input type="checkbox" id="4A" />
          <label for="4A"onClick={()=>{this.handleClick("4A")}}>4A</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="4B" />
          <label for="4B"onClick={()=>{this.handleClick("4B")}}>4B</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="4C" />
          <label for="4C"onClick={()=>{this.handleClick("4C")}}>4C</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="4D" />
          <label for="4D"onClick={()=>{this.handleClick("4D")}}>4D</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="4E" />
          <label for="4E"onClick={()=>{this.handleClick("4E")}}>4E</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="4F" />
          <label for="4F"onClick={()=>{this.handleClick("4F")}}>4F</label>
        </li>
      </ol>
    </li>
    <li className="row row--5">
      <ol className="seats" type="A">
        <li className="seat">
          <input type="checkbox" id="5A" />
          <label for="5A"onClick={()=>{this.handleClick("5A")}}>5A</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="5B" />
          <label for="5B"onClick={()=>{this.handleClick("5B")}}>5B</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="5C" />
          <label for="5C"onClick={()=>{this.handleClick("5C")}}>5C</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="5D" />
          <label for="5D"onClick={()=>{this.handleClick("5D")}}>5D</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="5E" />
          <label for="5E"onClick={()=>{this.handleClick("5E")}}>5E</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="5F" />
          <label for="5F"onClick={()=>{this.handleClick("5F")}}>5F</label>
        </li>
      </ol>
    </li>
    <li className="row row--6">
      <ol className="seats" type="A">
        <li className="seat">
          <input type="checkbox" id="6A" />
          <label for="6A"onClick={()=>{this.handleClick("6A")}}>6A</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="6B" />
          <label for="6B"onClick={()=>{this.handleClick("6B")}}>6B</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="6C" />
          <label for="6C"onClick={()=>{this.handleClick("6C")}}>6C</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="6D" />
          <label for="6D"onClick={()=>{this.handleClick("6D")}}>6D</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="6E" />
          <label for="6E"onClick={()=>{this.handleClick("6E")}}>6E</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="6F" />
          <label for="6F"onClick={()=>{this.handleClick("6F")}}>6F</label>
        </li>
      </ol>
    </li>
    <li className="row row--7">
      <ol className="seats" type="A">
        <li className="seat">
          <input type="checkbox" id="7A" />
          <label for="7A"onClick={()=>{this.handleClick("7A")}}>7A</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="7B" />
          <label for="7B"onClick={()=>{this.handleClick("7B")}}>7B</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="7C" />
          <label for="7C"onClick={()=>{this.handleClick("7C")}}>7C</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="7D" />
          <label for="7D"onClick={()=>{this.handleClick("7D")}}>7D</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="7E" />
          <label for="7E"onClick={()=>{this.handleClick("7E")}}>7E</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="7F" />
          <label for="7F"onClick={()=>{this.handleClick("7F")}}>7F</label>
        </li>
      </ol>
    </li>
    <li className="row row--8">
      <ol className="seats" type="A">
        <li className="seat">
          <input type="checkbox" id="8A" />
          <label for="8A"onClick={()=>{this.handleClick("8A")}}>8A</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="8B" />
          <label for="8B"onClick={()=>{this.handleClick("8B")}}>8B</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="8C" />
          <label for="8C"onClick={()=>{this.handleClick("8C")}}>8C</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="8D" />
          <label for="8D"onClick={()=>{this.handleClick("8D")}}>8D</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="8E" />
          <label for="8E"onClick={()=>{this.handleClick("8E")}}>8E</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="8F" />
          <label for="8F"onClick={()=>{this.handleClick("8F")}}>8F</label>
        </li>
      </ol>
    </li>
    <li className="row row--9">
      <ol className="seats" type="A">
        <li className="seat">
          <input type="checkbox" id="9A" />
          <label for="9A"onClick={()=>{this.handleClick("9A")}}>9A</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="9B" />
          <label for="9B"onClick={()=>{this.handleClick("9B")}}>9B</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="9C" />
          <label for="9C"onClick={()=>{this.handleClick("9C")}}>9C</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="9D" />
          <label for="9D"onClick={()=>{this.handleClick("9D")}}>9D</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="9E" />
          <label for="9E"onClick={()=>{this.handleClick("9E")}}>9E</label>
        </li>
        <li className="seat">
          <input type="checkbox" id="9F" />
          <label for="9F"onClick={()=>{this.handleClick("9F")}}>9F</label>
        </li>
      </ol>
    </li>
    
  </ol>
  
</div>

<button type="submit"className="btn btn-primary login-btn btn-block"style={{width:100,marginLeft:820}}onClick={this.handleSubmit}>Pay Now</button>

        </div>
    )}
}
export default Seats;