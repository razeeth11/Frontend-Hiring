import { useEffect, useState } from "react";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export function DataTable() {
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
            <th>
              Title
              <input
                type="text"
                placeholder="Search in title . . ."
                onChange={(e) => handleChangeTitle(e)}
              />
            </th>
            <th>
              Body
              <input
                type="text"
                placeholder="Search in body . . ."
                onChange={(e) => handleChangeBody(e)}
              />
              <Button
                title="Order"
                color="warning"
                variant="contained"
                onClick={buttonClick}
              >
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
