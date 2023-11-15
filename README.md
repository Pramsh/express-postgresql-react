
# Some util info:


## Very first steps:

#### init express application

- npm i express pg cors


- in index: 
```
const express = require("express")
const app = express();


app.listen(5000,() => {
    console.log("Server started on port 5000");
})
```

- nodemone index 


#### Connect to PostgreSQL

- psql -U {userName} --> psql -u postgres

- *\l* to look at all databases

- *\c {db name}* --> \c perntodo CONNECT TO DB

- *\dt* to look at the tables present in the db which we're connected

#### Troubleshooting

- If HEADERS are not visible try to run *\t*. It should remove the tuples only mode

### Integrating Backend and Frontend:
CORS Setup: Configure CORS on the Express server to allow requests from your React app.
Proxy Setup (optional): If using create-react-app, you might set up a proxy in the package.json to direct API requests to the Express server during development.
Connectivity Testing: Ensure that your React app can communicate with the Express server by testing API calls from the frontend.