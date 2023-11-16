function Add(){
    return(
        <div className="col-6">
        <form>
<div class="mb-1">
<label for="exampleInputEmail1" class="form-label">Name of student</label>
<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

</div>
<div class="mb-3">
<label for="exampleInputPassword1" class="form-label">roll number</label>
<input type="number" class="form-control" id="exampleInputPassword1" />
</div>
<div class="mb-3">
<label for="exampleInputPassword1" class="form-label">Address</label>
<input type="text" class="form-control" id="exampleInputPassword1" />
</div>

<button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
    )
}
export default Add;