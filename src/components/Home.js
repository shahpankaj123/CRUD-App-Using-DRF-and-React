import React,{useEffect, useState} from "react";
import { getdata} from "./service_api";
import { Link } from "react-router-dom";

function Home(){

  const [students,setstudents]=useState([])

  useEffect( () => {
       getdata().then( res => {console.log(res)
       setstudents(res)   
     })
  },[])
  
    return(
        <div className="col-6">
          
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Roll</th>
      <th scope="col">Address</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {students.map((student) => (
      <tr key={student.id}>
      <th scope="row">{student.id}</th>
      <td>{student.name}</td>
      <td>{student.roll}</td>
      <td>{student.address}</td>
      <td>
      <Link to={`/modify/${student.id}`}><button type="button" className="btn btn-info">edit</button></Link><span>||</span>
      <Link to={`/delete/${student.id}`}><button type="button" className="btn btn-danger">Delete</button></Link>
      </td>
    </tr>

    ))}
   
    
    
  </tbody>
</table>
        </div>
    )
}
export default Home;