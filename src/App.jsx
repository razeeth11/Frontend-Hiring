import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DataTable />
    </div>
  );
}

function DataTable() {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((res) => setDataTable(res));
  }, []);

  // console.log(dataTable);
  return (
    <div className="Data-table">
      <input type="text" placeholder="Search....." /> 
      <table>
        <thead>
          <tr>
            <th>USER_ID</th>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        {dataTable.map((data, index) => (
          <tbody key={index}>
            <tr>
              <td>{data.userId}</td>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.body}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default App;
