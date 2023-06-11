import { useEffect, useState } from "react";
import "./App.css";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Button from "@mui/material/Button";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Fetch />} />
        <Route path="/data-table" element={<DataTable />} />
        <Route path="/data-table/:index" element={<Title />} />
      </Routes>
    </div>
  );
}

function Fetch() {
  const navigate = useNavigate();

  return (
    <div className="fetch">
      <button variant="contained" onClick={() => navigate("/data-table")}>
        Fetch
      </  button>
    </div>
  );
}

function DataTable() {
  const [dataTable, setDataTable] = useState([]);
  const [searchValueTitle, setSearchTitle] = useState("");
  const [searchValueBody, setSearchBody] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((res) => setDataTable(res));
  }, []);

  const handleChangeTitle = (e) => {
    setSearchTitle(e.target.value);
    if (searchValueTitle == "") {
      setDataTable(dataTable);
    } else {
      const filterBySearch = dataTable.filter((item) => {
        if (item.title.toLowerCase().includes(searchValueTitle.toLowerCase())) {
          return item.title;
        }
      });
      setDataTable(filterBySearch);
    }
  };

  const handleChangeBody = (e) => {
    setSearchBody(e.target.value);
    if (searchValueBody == "") {
      setDataTable(dataTable);
    }
    const filterBySearch = dataTable.filter((item) => {
      if (item.body.toLowerCase().includes(searchValueBody.toLowerCase())) {
        return item.body;
      }
    });
    setDataTable(filterBySearch);
  };

  const buttonClick = () => {
    const reversed = [...dataTable].reverse();
    console.log(reversed);
    setDataTable(reversed);
  };

  const navigate = useNavigate();

  return (
    <div className="Data-table">
      <table>
        <thead>
          <tr>
            <th>USER_ID</th>
            <th>ID</th>
            <th>Title <input
        type="text"
        placeholder="Search in title . . ."
        onChange={(e) => handleChangeTitle(e)}
      /> </th>
            <th>Body <input
        type="text"
        placeholder="Search in body . . ."
        onChange={(e) => handleChangeBody(e)}
      />
      <Button title="Order" color="warning" variant="contained" onClick={buttonClick}>
        <AutorenewIcon />
      </Button>
      </th>
          </tr>
        </thead>
        {dataTable.map((data, index) => (
          <tbody key={index}>
            <tr onClick={() => navigate(`/data-table/${data.id}`)}>
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

function Title(){

  const { index } = useParams()
  const navigate = useNavigate()

  const [data,setData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((res) => setData(res[index-1]));
  }, []);

  console.log(data)
  return(
    <div className="title">
      <Button onClick={()=>navigate(-1)} variant="contained" color="warning">Back</Button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.body}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App;
