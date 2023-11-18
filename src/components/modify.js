import { getdata_student } from "./service_api";
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
    return(
        <div className="col-6">
                  <form>
  <div class="mb-1">
    <label for="exampleInputEmail1" class="form-label">Name of student</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={students.name}/>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">roll number</label>
    <input type="number" class="form-control" id="exampleInputPassword1" value={students.roll}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Address</label>
    <input type="text" class="form-control" id="exampleInputPassword1" value={students.address}/>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
    )
}
export default Modify;