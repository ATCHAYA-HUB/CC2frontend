import React from 'react';
import axios from 'axios';
import { useState} from 'react';
import './Delete.css'
function Delete() {
    const [id, setId] = useState();
    const [error, setError] = useState(''); 
    function del() {
        // useEffect(() => {
        axios
            .delete('http://localhost:8080/delete/' + id)
            .then((response) => {
                console.log(response.data);
                
            })
            .catch((error) => setError(error.message));
        alert("User Deleted");
    }
    return (
        <> <div className='qw'> <center><div className=''>
            <h2>ENTER YOUR ID TO DELETE PATIENT</h2>
    

                <input style={{height:"22px"}} type="number" placeholder='Enter User ID' className="form-control1" value={id} onChange={(e) => setId(e.target.value)}>

                </input>
            

            <button type="submit" className="bud" style={{height:"30px",width:"100px",backgroundColor:"rgb(238, 90, 100)",marginTop:"-200px",marginLeft:"20px",borderWidth:"1px"}} onClick
                ={del}>Submit</button>
                </div>
                </center>
          
            <h2>
                {error}
            </h2>
            </div>
        </>
    );
}

export default Delete;