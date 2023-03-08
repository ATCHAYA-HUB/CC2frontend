import "./Main.css";
import { Link } from 'react-router-dom';
import React, { Component } from 'react'


export class Main extends Component {
    render() {
    return ( 
        <><div className='Mainbody'>
        <div className='boxmain' ><center>
        <form>
            <h1>BLue MooN</h1>   
            <h3>HOSPITAL</h3>        
        <div className='box1'>
            <div >
                <a><Link to="/Put"><button className='submit' 
                style={{height :"50px",width:"200px"
                ,marginTop:"15px",fontSize:"20px",borderRadius:"10px"
                ,marginBottom:"10px"}}>Add Patient</button></Link></a>
            </div></div>
            <div className='box2'>
            <div >
            <a><Link to="/Delete"><button className='submit' 
                style={{height :"50px",width:"200px"
                ,marginTop:"15px",fontSize:"20px",borderRadius:"10px"
                ,marginBottom:"10px"}}>Delete Patient</button></Link></a>
            </div></div>
            <div className='box2'>
            <div >
            <a><Link to="/Update">
                <button className='submit' 
                style={{height :"50px",fontSize:"20px",width:"200px"
                ,marginTop:"15px",borderRadius:"10px"
                ,marginBottom:"10px"}}>Update Patient</button></Link></a>
            </div></div>
            <div className='box3'>
            <div >
                <a><Link to="/Display"><button className='mainsubmit' 
                style={{height :"50px",fontSize:"20px", width:"200px"
                ,marginTop:"15px",borderRadius:"10px"
                ,marginBottom:"10px"}}>Display Patient</button></Link></a>
            </div></div>
        </form></center>
        </div></div>
        </>
    );
    }
}
export default Main;