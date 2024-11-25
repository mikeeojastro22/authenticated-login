import React from "react";

function Dashboard(props) {
  const { onLogout } = props;
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Dashboard</h2>
      <p>This is my slack app. Loading of users here...</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
