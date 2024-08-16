import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function EndPoints() {
  const response = `{
    "message": "Book generation started",
    "status": "processing",
    "job_id": "unique-job-identifier"
}`;
  return (
    <div className="contain">
      <div className="main">
        <h3 id="title">Endpoints</h3>
        <h4 id="title">Generate Book</h4>
        <Button
          variant="primary"
          style={{
            marginRight: "10px",
            padding: "6px 12px",
            backgroundColor: "#22d3ee",
          }}
        >
          POST
        </Button>
        <Button variant="primary">/api/generate-book</Button>
        <h5 id="title">Request Body</h5>
        <Table className="table-border"  style={{marginTop:"16px"}} >
          <thead>
            <tr>
              <th>PARAMETER</th>
              <th>TYPE</th>
              <th>DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="first-col">api</td>
              <td>string</td>
              <td>The API provider to use. Options: "openai" or "together"</td>
            </tr>
            <tr>
              <td className="first-col">model</td>
              <td>string</td>
              <td>The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4", "llama-2-70b")</td>
            </tr>
            <tr>
              <td className="first-col">topic</td>
              <td>string</td>
              <td>The main topic or theme of the book</td>
            </tr>
            <tr>
              <td className="first-col">language</td>
              <td>string</td>
              <td>The language in which the book should be generated</td>
            </tr>
            <tr>
              <td className="first-col">word_count</td>
              <td>integer</td>
              <td>The approximate number of words for the generated book</td>
            </tr>
          </tbody>
        </Table>
        <h5 id="title">Response</h5>
        <div className="api">
            <div className="api-key"><pre>{response}</pre></div>
          </div>
      </div>
    </div>
  );
}

export default EndPoints;
