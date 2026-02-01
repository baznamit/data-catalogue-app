import { useState } from "react";
import rbiData from "../data/response1.json";
import imfData from "../data/response2.json";
import CategoryTree from "./CategoryTree";
import MainPanel from "./MainPanel";

function Dashboard() {
  const [dataset, setDataset] = useState("RBI");
  const [page, setPage] = useState(1);

  const data = dataset === "RBI" ? rbiData : imfData;
  const { categories, frequent } = data;

  const handleDatasetChange = (e) => {
    setDataset(e.target.value);
    setPage(1);
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div
        style={{
          height: 56,
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e2e6ee",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <h3 style={{ margin: 0, flex: 1 }}>Data Catalogue</h3>

        <select value={dataset} onChange={handleDatasetChange}>
          <option value="RBI">RBI Dataset</option>
          <option value="IMF">IMF Dataset</option>
        </select>
      </div>

      {/* Body */}
      <div style={{ flex: 1, display: "flex" }}>
        {/* Sidebar */}
        <div
          style={{
            width: 280,
            backgroundColor: "#f8f9fb",
            borderRight: "1px solid #e2e6ee",
            padding: 16,
            overflowY: "auto",
          }}
        >
          <h4 style={{ marginTop: 0 }}>Categories</h4>
          <CategoryTree data={categories} />
        </div>

        {/* Main Content */}
        <MainPanel frequent={frequent} page={page} setPage={setPage} />
      </div>
    </div>
  );
}

export default Dashboard;
