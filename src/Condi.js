import React, { Component } from 'react'
export class Class extends Component {
 constructor(){
 super()
 this.state={
 isLoggedIn: true
 } }
 render() {
 if(this.state.isLoggedIn){
 return ( <h1>Welcome !</h1> )}
 else{
 return ( <h1>You are not logged in!!</h1> )
 } }}
export default Class
