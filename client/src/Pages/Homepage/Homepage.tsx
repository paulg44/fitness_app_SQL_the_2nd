// Homepage Page Component

// Imports

import "./Homepage.css";
import { Button } from "react-bootstrap";

function Homepage() {
  return (
    <div className="homepage container-fluid">
      <h1>Fitness App (name pending)</h1>
      <div>
        <Button href="/enterLogs">Log an activity</Button>
        <Button href="/logs">View Logs</Button>
        <Button>Schedule</Button>
      </div>
    </div>
  );
}

export default Homepage;
