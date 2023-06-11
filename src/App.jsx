import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dataTable, setDataTable] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((res) => setDataTable(res));
       setLoading(false);
  }, []);

  // console.log(dataTable);
  return (
    <div className="App">
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
