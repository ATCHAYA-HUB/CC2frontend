import React, { useState } from 'react'
import Select from 'react-select'
import "./DROPDOWN.css"
function Form() { 
  var colors=[
    {
       value:1,
       label:"LIME"
    },
    {
       value:2,
       label:"LAVENDER"
    },
    {
       value:3,
       label:"CRIMSON"
    },
    {
       value:4,
       label:"DARKBLUE"
    },
    {
      value:5,
      label:"TEAL"
   },
   {
    value:6,
    label:"REBECCA PURPLE"
   },
  
  ];
  var [setbgcolor,ddlvalue]=useState(colors.label);
  var ddlhandle = (e) => {
    ddlvalue(e.label);
  }
  return (
    <>
      <center><h1>COLOR CHANGER</h1></center>
      <div className='h'>
        <Select options={colors} onChange={ddlhandle} >
        </Select>
      </div>
        <div className='drop'>
        
            <style>{'.drop {background-color:'+setbgcolor+';}'}</style> 
          
        </div>
    </>
  )
}
export default Form