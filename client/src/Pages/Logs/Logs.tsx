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
  // I was having trouble with this part of the application, i was missing passing the id into the function
  async function deleteEntryFromTable(id: number) {
    try {
      await fetch(`/api/logs/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location.reload();
    } catch (error) {
      console.error("Error deleting entry", error);
    }
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>id</th>
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
              <td>{log.id}</td>
              <td>{log.date}</td>
              <td>{log.distance}</td>
              <td>{log.duration}</td>
              <td>{log.pace}</td>
              <td>{log.surface}</td>
              <td>{log.description}</td>
              <td>
                <Button
                  type="submit"
                  onClick={() => deleteEntryFromTable(log.id)}
                >
                  X
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default Logs;
