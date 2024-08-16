import React from 'react'

function CodeExamples() {
    const python=`import requests

API_KEY = "your_api_key_here"
API_ENDPOINT = "https://tryBookAI.com/api/generate-book"

headers = {
    "Content-Type": "application/json",
    "X-API-Key": API_KEY
}

data = {
    "api": "openai",
    "model": "gpt-3.5-turbo",
    "topic": "The Future of Artificial Intelligence",
    "language": "English",
    "word_count": 5000
}

response = requests.post(API_ENDPOINT, json=data, headers=headers)

if response.status_code == 200:
    result = response.json()
    print(f"Book generation started. Job ID: {result['job_id']}")
else:
    print(f"Error: {response.status_code} - {response.text}")`;

    const javascript=`const axios = require('axios');

const API_KEY = 'your_api_key_here';
const API_ENDPOINT = 'https://tryBookAI.com/api/generate-book';

const headers = {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY
};

const data = {
    api: 'openai',
    model: 'gpt-3.5-turbo',
    topic: 'The Future of Artificial Intelligence',
    language: 'English',
    word_count: 5000
};

axios.post(API_ENDPOINT, data, { headers })
    .then(response => {
        console.log(Book generation started. Job ID: "{response.data.job_id}");
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    });`
  return (
    <div className="contain">
      <div className="main">
        <h3 id="title">Code Examples</h3>
        <h4 id="title">Python</h4>
        <div className="api">
            <div className="api-key"><pre>{python}</pre></div>
          </div>

          <h4 id="title">Javascript Node.js</h4>
        <div className="api">
            <div className="api-key"><pre>{javascript}</pre></div>
          </div>
        </div>
    </div>
  )
}

export default CodeExamples