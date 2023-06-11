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
  const [searchValue,setSearchValue] = useState('')

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((res) => setDataTable(res));
  }, []);

  const handleChange = (e)=> {
    setSearchValue(e.target.value)
    if(searchValue == ""){setDataTable(dataTable)}
        const filterBySearch = dataTable.filter((item) => {
            if (item.title.toLowerCase()
                .includes(searchValue.toLowerCase())) { return item.title }
        })
        setDataTable(filterBySearch);
  } 

  return (
    <div className="Data-table">
      <input type="text" placeholder="Search....." onChange={(e)=>handleChange(e)}/> 
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
