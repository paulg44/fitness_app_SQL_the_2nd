// Logs Page Component

import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";

interface Log {
  id: number;
  date: string;
  distance: number;
  duration: number;
  pace: number;
  surface: string;
  description: string;
}

interface LogsError {
  message: string;
  details?: any;
}

function Logs() {
  // State
  // const [logsData, setLogsData] = useState<Log[]>([]);
  // const [error, setError] = useState<LogsError | null>(null);

  // Retrieve data

  useEffect(() => {
    // readAllData();
  }, []);
  return (
    <Table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Distance</th>
          <th>Duration</th>
          <th>Pace</th>
          <th>Surface</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {/* {logsData.map((log) => (
          <tr key={log.id}>
            <td>{log.date}</td>
            <td>{log.distance}</td>
            <td>{log.duration}</td>
            <td>{log.pace}</td>
            <td>{log.surface}</td>
            <td>{log.description}</td>
          </tr>
        ))} */}
      </tbody>
      {/* If Error */}
      {/* {error && (
        <tfoot>
          <tr>
            <td>Error: {error.message}</td>
          </tr>
        </tfoot>
      )} */}
    </Table>
  );
}

export default Logs;
