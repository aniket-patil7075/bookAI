import React from "react";
import Table from "react-bootstrap/Table";
function APIPricing() {
  return (
    <div className="contain mb-5" >
      <div className="main">
        <h3 id="title">API Pricing</h3>
        <p>
          Our API pricing is based on the model used and the number of tokens
          processed. Here's a breakdown of the costs:
        </p>
        <Table className="table-border" style={{ marginTop: "16px" }}>
          <thead>
            <tr>
              <th>API</th>
              <th>MODEL</th>
              <th>PRICE PER 1K TOKENS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="first-col">openAI</td>
              <td>GPT-3.5</td>
              <td>$0.002</td>
            </tr>
            <tr>
              <td className="first-col">OpenAI</td>
              <td>GPT-4</td>
              <td>
                $0.03
              </td>
            </tr>
            <tr>
              <td className="first-col">Together AI</td>
              <td>Liama-2-70b</td>

              <td>$0.0008</td>
            </tr>
            <tr>
              <td className="first-col">Together AI</td>
              <td>Liama-2-13b</td>
              <td>$0.0006</td>
            </tr>
            
          </tbody>
        </Table>
        <h4 id="title">Token Estimation</h4>
        <p>
        On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
        </p>
        <h4 id="title">Billing</h4>
        <p>
        You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.
        </p>
      </div>
    </div>
  );
}

export default APIPricing;
