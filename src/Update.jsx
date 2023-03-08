import "./Update.css"
import React, { Component } from 'react'
import axios from "axios";

export class Update extends Component {
    constructor(props){
        super(props);
        this.state={
            id:'',
            name:'',
            bill:'',
            age:'',
            doctor:'',
            healthisusue:''
            };
    }
    handleIdChange = (event) => {
        this.setState({ id: event.target.value });
      };
      
      handleNameChange = (event) => {
        this.setState({ name: event.target.value });
      };
      
      handleBillChange = (event) => {
        this.setState({ bill: event.target.value });
      };
      
      handleAgeChange = (event) => {
        this.setState({ age: event.target.value });
      };
      
      handleDoctorChange = (event) => {
        this.setState({doctor: event.target.value });
      };      
      handleHealthissueChange = (event) => {
        this.setState({ healthisusue: event.target.value });
      };
      handleSubmit = (event) => {
        event.preventDefault();
        const data = {
          id: this.state.id,
          name: this.state.name,
          bill: this.state.bill,
          age: this.state.age,
          doctor: this.state.doctor,
          healthissue: this.state.healthisusue,        
        };
        axios.put('http://127.0.0.1:8080/put', data)
    };
    render() {
    return ( 
        <>
          <div className='bg'>
        <body>
        <div className='upbox' ><center>
        <form onSubmit={this.handleSubmit} className="form">
            <h1 style={{fontSize:"30px"}}>UPDATE PATIENT DETAILS</h1>           
            <div className='uprow' >
                <label>CONSULTING DOCTOR : </label>
                <br></br>
                <input  className='row1'  type="text" id='username' placeholder='Doctor Name' value={this.state.doctor}
                onChange={this.handleDoctorChange}required
                style={{ height :"30px",width:"280px",marginTop:"15px",borderRadius:"5px"}}/>
            </div>
            <div className='uprow' >
                <label>PATIENT'S NAME : </label>
                <br></br>
                <input  className='row1'  type="text" id='username' placeholder='Your Name' value={this.state.name}
                onChange={this.handleNameChange}required
                style={{height :"30px",width:"280px",marginTop:"15px",borderRadius:"5px"}}/>
            </div>
            <div className='uprow' >
                <label style={{marginRight:"55px"}}>PATIENT'S ID : </label><label>PATIENT'S AGE : </label>
                <br></br>
                <input  className='row1'  type="text" id='username' placeholder='ID' value={this.state.id}
                onChange={this.handleIdChange}required
                style={{height :"30px",width:"120px",marginTop:"15px",marginRight:"35px" ,borderRadius:"5px"}}/>
                <input  className='row1'  type="text" id='username' placeholder='Age'  value={this.state.age} 
                onChange={this.handleAgeChange}required
                style={{height :"30px",width:"120px",marginTop:"15px",borderRadius:"5px"}}/>
            </div>
            <div className='uprow' >
                <label>PATIENT'S BILL : </label>
                <br></br>
                <input  className='row1'  type="text" id='username' placeholder='Amount'  value={this.state.bill}
                onChange={this.handleBillChange}required
                style={{height :"30px",width:"280px",marginTop:"15px",borderRadius:"5px"}}/>
            </div>
            <div className='uprow' >
                <label >PATIENT'S HEALTH ISSUE : </label>
                <br></br>
                <input  className='row1'  type="text" id='username' placeholder='Health Issue' value={this.state.healthisusue}
                onChange={this.handleHealthissueChange}required
                style={{color:"aliceblue", height :"30px",width:"280px",marginTop:"15px",borderRadius:"5px"}}/>
            </div><br></br>
            <div >
                
                <button className='upsubmit' type="submit"
                style={{height :"30px",width:"120px"
                ,marginTop:"0px",borderRadius:"10px"
                ,marginBottom:"10px"}}>Submit</button>
            </div>
        </form></center>
        </div>
        </body>
        </div>
        </>
    );
}
}
export default Update;