import React, { Component } from 'react';
class Info extends Component {
 render() {
 return(
 <div>
 <h1>Person: {this.props.level}</h1>
 <ul style={{listStyle: 'none'}}>
 <li><span>Name: {this.props.name}</span></li>
 <li><span>Age: {this.props.age}</span></li>
 </ul>
 </div>
 )
 }
}
export default Info
