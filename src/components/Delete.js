
import { deldata_student} from "./service_api";
import {useEffect} from "react";
import {
  useParams
} from "react-router-dom";


function Delete(){
    
  
    const id = useParams()
    console.log(id)
    
  
  
    useEffect( () => {
       
         deldata_student(id)
          
    })
    

    return(
        <div>
            Data deleted succesfully
        </div>
    )
  
};


export default Delete;