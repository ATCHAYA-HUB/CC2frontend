import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Put from "./Put";
import Main from './Main';
import Update from "./Update";
import Delete from './Delete';
import Display from './Display'
function App() { 
return (
    <Router>
        <div>
            <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/Put" element={<Put/>}></Route>
                <Route path="/Update" element={<Update/>}></Route>
                <Route path="/Delete" element={<Delete/>}></Route>
                <Route path="/Display" element={<Display/>}></Route>

            </Routes>
        </div>
    </Router>
);
}
export default App;
