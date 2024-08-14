import React from 'react'

function Tutorial() {
  return (
    <div className="contain">
      <div className="main">
        <h3 id="title">Tutorial</h3>
        <h4 id="title">Step 1: Obtain an API Key</h4>
        <p>Generate an API key using the button in the Authentication section above.</p>
        <h4 id="title">Step 2: Make a Request</h4>
        <p>Use your preferred programming language or tool to make a POST request to the /api/generate-book endpoint. Include your API key in the header and the required parameters in the request body.</p>
        <h4 id="title">Step 3: Handle the Response</h4>
        <p>The API will return a response with a job ID. You can use this ID to check the status of your book generation job.</p>
        <h4 id="title">Step 4: Retrieve the Generated Book</h4>
        <p>Once the job is complete, you can retrieve the generated book using the job ID (endpoint to be implemented).</p>
        </div>
    </div>
  )
}

export default Tutorial