import axios from "axios";
import React, { Component } from "react";

class Display extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/get')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        
      <table border={1}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Bill</th>
          <th>Age</th>
          <th>Doctor</th>
          <th>Healthissue</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.bill}</td>
            <td>{user.age}</td>
            <td>{user.doctor}</td>
            <td>{user.healthissue}</td>
          </tr>
        ))}
      </tbody>
    </table>
    );
  }}
  
export default Display;