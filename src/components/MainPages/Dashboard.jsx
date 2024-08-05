import React, { useEffect } from "react";
import DashboardComponent from "../Dashboard/Dashboard";
import { Col } from "react-bootstrap";
import Sidebar from "../Sidebar/sidebar";
const Dashboard = () => {
  const reloadCount = sessionStorage.getItem(`reloadCount`)
  useEffect(() => {
    if(reloadCount < 1) {
      sessionStorage.setItem('reloadCount', String(reloadCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem('reloadCount');
    }
  }, []);
  return (
    <div>
      
    
      <DashboardComponent />
    </div>
  );
};

export default Dashboard;
