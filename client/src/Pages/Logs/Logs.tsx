// Logs Page Component

import { Button, Table } from "react-bootstrap";
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

// interface LogsError {
//   message: string;
//   details?: any;
// }

function Logs() {
  // State
  const [logsData, setLogsData] = useState<Log[]>([]);
  // const [error, setError] = useState<LogsError | null>(null);

  // Retrieve data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const logsResponse = await fetch("/api/logs");
        const logsData = await logsResponse.json();
        setLogsData(logsData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  // Delete an entry in logs table
  async function deleteEntryFromTable(e: any) {
    e.preventDefault();

    await fetch("/api/logs", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

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
        {Array.isArray(logsData) &&
          logsData.map((log) => (
            <tr key={log.id}>
              <td>{log.date}</td>
              <td>{log.distance}</td>
              <td>{log.duration}</td>
              <td>{log.pace}</td>
              <td>{log.surface}</td>
              <td>{log.description}</td>
              <Button type="submit" onClick={deleteEntryFromTable}>
                X
              </Button>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default Logs;
