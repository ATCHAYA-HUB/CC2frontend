import Button from '@mui/material/Button';
import "./put.css"
import React, { Component } from 'react'
import axios from 'axios';
export class Put extends Component {
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
        axios.post('http://127.0.0.1:8080/post', data)
    };
    render() {
    return ( 
        <>
        <body className='putbody'> 
          
        <div className='putbox' ><center>
        <form onSubmit={this.handleSubmit} className="form">
            <h1 style={{fontSize:"30px"}}>PATIENT DETAILS</h1>           
            <div className='putrow' >
                <label>CONSULTING DOCTOR : </label>
                <br></br>
                <input type="text"placeholder='Doctor Name' value={this.state.doctor}
                onChange={this.handleDoctorChange}required
                style={{ height :"30px",width:"280px",marginTop:"15px",borderRadius:"5px",color:"black"}}/>
            </div>
            <div className='putrow' >
                <label>PATIENT'S NAME : </label>
                <br></br>
                <input type="text" id='username' placeholder='Your Name'value={this.state.name}
                onChange={this.handleNameChange}required
                style={{height :"30px",width:"280px",marginTop:"15px",borderRadius:"5px",color:"black"}}/>
            </div>
            <div className='putrow' >
                <label style={{marginRight:"55px"}}>PATIENT'S ID : </label><label>PATIENT'S AGE : </label>
                <br></br>
                <input type="text" id='username' placeholder='ID' value={this.state.id}
                onChange={this.handleIdChange}required
                style={{height :"30px",width:"120px",marginTop:"15px",marginRight:"35px" ,borderRadius:"5px"}}/>
                <input  type="text" id='username' placeholder='Age' value={this.state.age} 
                onChange={this.handleAgeChange}required
                style={{height :"30px",width:"120px",marginTop:"15px",borderRadius:"5px",color:"black"}}/>
            </div>
            <div className='putrow' >
                <label>PATIENT'S BILL : </label>
                <br></br>
                <input  type="text" placeholder='Amount' value={this.state.bill}
                onChange={this.handleBillChange}required
                style={{height :"30px",width:"280px",marginTop:"15px",borderRadius:"5px",color:"black"}}/>
            </div>
            <div className='putrow' >
                <label >PATIENT'S HEALTH ISSUE : </label>
                <br></br>
                <input  type="text"  placeholder='Health Issue' value={this.state.healthisusue}
                onChange={this.handleHealthissueChange}required
                style={{color:"black", height :"30px",width:"280px",marginTop:"15px",borderRadius:"5px"}}/>
            </div><br></br>
            <div >
                <Button className='putsubmit' type='sumit'
                style={{height :"30px",width:"120px",backgroundColor:"black",borderColor:"black",color:"white"
                ,marginTop:"0px",borderRadius:"10px"
                ,marginBottom:"10px"}}>Submit</Button>
            </div>
        </form></center>
        </div>
        </body>
        </>
    );
}
}
export default Put;
