function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="alert alert-success">
          <p className="text-dark">INFORMATION DISCLOSURE</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <form>
            <div>

              <label className="form-label" htmlFor="name">Name:</label>
              <input className="form-control" type="name" id="name" value="input your name" />
            </div>
            <div>
              <label htmlFor="quan">Teaching quality: </label>
              <select id="quan" className="form-select">
                <option value="">Very good</option>
                <option value="">Good</option>
                <option value="">Normal</option>
                <option value="">Bad</option>
              </select>
            </div>
            
            <div className="mt-4">
              <input className="btn btn-outline-primary" type="submit" value="Send"/>
            </div>

          </form>
        </div>
        <div className="col-6">
          <form>
            <div>
              <label className="form-label" htmlFor="birthdate">Birthdate:</label>
              <input className="form-control" type="birthdate" id="birthdate" value="input your birthdate" />
            </div>
            <div>
              <div class="checkbox" role="group">Courses:
                <div><input type="checkbox" id="java" name="java" />
                  <label for="java">Java</label>
                  </div>
                  
                
                <div><input type="checkbox" id="english" name="english"
                   checked />
                  <label for="english">English</label></div>
                  
                
                <div>
                  <input type="checkbox" id="reactjs" name="reactjs" />
                  <label for="reactjs">ReactJs</label>
                
                </div>
                  

              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row mt-4">
        <h3 className="text-dark">List of informations:</h3>
        <table className="table table-hover">
          <thead className="table-danger">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Birthdate</th>
              <th>Teaching quality</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody className="table-success">
            <tr>
              <th>1</th>
              <th>Nguyen Van A</th>
              <th>12/01/2000</th>
              <th>Very good</th>
              <th>Java</th>
            </tr>
            <tr>
              <th>2</th>
              <th>Nguyen Van B</th>
              <th>10/01/2001</th>
              <th>Good</th>
              <th>English</th>
            </tr>
            <tr>
              <th>3</th>
              <th>Nguyen Van C</th>
              <th>15/03/2003</th>
              <th>Normal</th>
              <th>ReactJs</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
