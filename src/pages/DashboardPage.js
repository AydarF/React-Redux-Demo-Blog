import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <section>
      <div className="main">
        <h1>Dashboard</h1>
        <p>This is the Dashboard</p>
        <Link to="/posts" className="button">
          View Posts
        </Link>
      </div>
    </section>
  );
};

export default DashboardPage;
