import { useNavigate } from "react-router-dom";

export function Fetch() {
  const navigate = useNavigate();

  return (
    <div className="fetch">
      <button onClick={() => navigate("/data-table")}>
        Fetch
      </button>
    </div>
  );
}
