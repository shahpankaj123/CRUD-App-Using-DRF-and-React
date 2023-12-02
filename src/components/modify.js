import { getdata_student,modifydata_student } from "./service_api";
import React,{useEffect, useState} from "react";
import {
  useParams
} from "react-router-dom";

function Modify(){
  
  const [students,setstudents]=useState([])
  
  const id = useParams()
  console.log(id)
  


  useEffect( () => {
     
       getdata_student(id).then( res => {console.log(res)
       setstudents(res)   
     })
  },[])
  const modifyformhandle = (e) =>{
    console.log(e.target)
    modifydata_student(e.target).then(
      res =>{
        console.log(res)
      }
    )
   
  }
    return(
        <div className="col-6">
                  <form onSubmit={modifyformhandle}>
  <div class="mb-1">
    <input type="hidden" value={students.id} name="id_value"/>
    <label >Name of student</label>
    <input type="text" name="name"  defaultValue={students.name}/>
   
  </div>
  <div class="mb-3">
    <label >roll number</label>
    <input type="number" name="roll"  defaultValue={students.roll}/>
  </div>
  <div class="mb-3">
    <label >Address</label>
    <input type="text" name="password"  defaultValue={students.address}/>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
    )
}
export default Modify;