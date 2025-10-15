// import React from ' react';
import { Admin, Resource, List, Datagrid, TextField, ListGuesser } from "react-admin";
import { createTrailbaseProvider } from "../ra-trailbase.js"; //where it's saved
import { AuthorCreate } from './assets/CreateAuthor.jsx';
import { AuthorEdit } from './assets/EditAuthor.jsx';
import { AuthorList } from './assets/ViewAuthor.jsx';
// import { AuthorCreate, AuthorEdit, AuthorList } from './assets';


//might have to move somewhere else (confirm)
const trailbase_url = "https://special-halibut-7qv47r9rppqc7qp-4000.app.github.dev/";
const providers = createTrailbaseProvider(trailbase_url);
const { dataProvider, authProvider } = providers;

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="Authors" 
    list={AuthorList} 
    create={AuthorCreate} 
    edit={AuthorEdit}/>
    
    <Resource name="BookPile" list={ListGuesser} /> 
  </Admin>
);

export default App;
