import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Title } from "./AboutTitle";
import { Fetch } from "./Fetch";
import { DataTable } from "./DataTable";

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

export default App;
