# API-ROUTES
Next.js API Route : fetch external data
A simple Next.js API route to fetch and return data from an external API.

Overview
Fetches data from: https://jsonplaceholder.typicode.com/posts
Handles success and error cases gracefully.
Returns JSON responses.

Setup
Add this code to your Next.js project in /app/api/external/route.ts.

Start your development server:

npm run dev

Access the API at: http://localhost:3000/api/external

Response Examples
Success
Status: 200


Body:

{"success": true,
  
  "data": [
  
    { "userId": 1, "id": 1, "title": "Post Title", "body": "Post Body" },
    
    ...
  ]
  }


Failure (API Error)
Status: Matches the external API's error code
Body:

{
  "success": false,
  "message": "fetch the data from API"
}


Failure (Unexpected Error)
Status: 500
Body:

{
  "success": false,
  
  "message": "get the error",
  
  "error": "Detailed error message"
  
}


Notes
Replace the External_API_URL with your desired API if needed.
The API is ready to integrate into any Next.js project.


FetchPostsPage Component
A React component that fetches and displays a list of posts from an external API.

Features
Fetches posts from the endpoint /api/external.
Handles loading and error states.
Displays a list of posts dynamically.

Installation
Clone the repository or copy the component code.
Ensure you have a React project set up (e.g., using Next.js, Create React App, etc.).
Add the FetchPostsPage component to your project.

Usage
Place the FetchPostsPage component in your project:


import FetchPostsPage from "./FetchPostsPage";

function App() {
  return (
    <div>
      <FetchPostsPage />
    </div>
  );
}

export default App;


Ensure the API endpoint /api/external is properly set up and returns the following JSON structure:

{
  "success": true,
  
  "data": [
  
    { "id": 1, "title": "Post 1" },
    
    { "id": 2, "title": "Post 2" }
    
  ]
}


Run your app, and the component will display the posts.

API Details
Endpoint: /api/external

Method: GET
Response:
Success: { success: true, data: [{ id, title }] }

Failure: { success: false, message: "Error message" }

Error Handling
Displays a red error message if fetching posts fails.

Shows a Loading... message while the data is being fetched.

License
This component is free to use and modify in your own projects. 😊  





