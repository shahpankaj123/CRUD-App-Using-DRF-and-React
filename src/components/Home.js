function Home(){
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
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>
      <button type="button" class="btn btn-info">edit</button><span>||</span>
      <button type="button" class="btn btn-danger">Delete</button>
      </td>
    </tr>
    
    
  </tbody>
</table>
        </div>
    )
}
export default Home;