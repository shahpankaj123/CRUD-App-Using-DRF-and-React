import { adddata_student } from "./service_api";
function Add(){
    const addformhandle = (e) =>{
        console.log(e.target)
        adddata_student(e.target).then(
          res =>{
            console.log(res)
          }
        )
       
      }
    
    return(
        <div className="col-6">
    <form onSubmit={addformhandle}>
<div class="mb-1">
<label class="form-label">Name of student</label>
<input type="text" class="form-control" name="name"/>

</div>
<div class="mb-3">
<label  class="form-label">roll number</label>
<input type="number" class="form-control" name="roll" />
</div>
<div class="mb-3">
<label  class="form-label">Address</label>
<input type="text" class="form-control"  name="address" />
</div>

<button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
    )
}
export default Add;