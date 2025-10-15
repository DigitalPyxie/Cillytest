import { Admin, Resource, ListGuesser } from "react-admin";
// import jsonServerProvider from "ra-data-json-server";
import { createTrailbaseProvider } from "../ra-trailbase.js"; //where it's saved


//const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const main_url = createTrailbaseProvider("https://special-halibut-7qv47r9rppqc7qp-4000.app.github.dev/");

//dataProvider={dataProvider}
const App = () => (
  <Admin  main_url = {main_url}> 
    <Resource name="posts" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />
  </Admin>
);

export default App;

/*
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the App component

ReactDOM.render(<App />, document.getElementById('root'));

 */