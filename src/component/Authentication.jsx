import React from "react";
import Button from 'react-bootstrap/Button';

function Authentication() {
  return (
    <div>
      <div className="contain">
        <div className="main">
          <h3 id="title">Authentication</h3>
          <p>
            To use the API, you need to include your API key in the header of
            each request:
          </p>
          <div className="api">
            <div className="api-key">X-API-Key: YOUR_API_KEY</div>
          </div>
          <p>
          To generate an API key, use the button below:
          </p>
          <Button variant="primary">Generate API Key</Button>
          <div className="api-button"></div>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
