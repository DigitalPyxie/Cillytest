//Test info from chatgpt
//app.jsx
import React from 'react';
import { Admin, Resource } from 'react-admin';
import { StudentList, StudentCreate, StudentEdit } from './students'; // Import the components we’ll define for students

const App = () => {
  return (
    <Admin dataProvider={dataProvider}> {/* Assuming dataProvider is set up to work with Trailbase API */}
      <Resource
        name="students"
        list={StudentList}   // View the list of students
        create={StudentCreate} // Create a new student
        edit={StudentEdit}  // Edit an existing student
      />
      {/* Add other resources (e.g., modules, courses) here */}
    </Admin>
  );
};

export default App;

// src/components/StudentList.jsx
import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

// src/components/StudentList.jsx
import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

//stuentlist
export const StudentList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="email" />
      {/* Add other fields as needed */}
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

//stucreate
// src/components/StudentCreate.jsx
import React from 'react';
import { Create, SimpleForm, TextInput, EmailInput } from 'react-admin';

export const StudentCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <EmailInput source="email" />
      {/* Add other fields as needed */}
    </SimpleForm>
  </Create>
);

// src/components/StudentEdit.jsx
import React from 'react';
import { Edit, SimpleForm, TextInput, EmailInput } from 'react-admin';

export const StudentEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />  {/* ID should be displayed but not editable */}
      <TextInput source="name" />
      <EmailInput source="email" />
      {/* Add other editable fields here */}
    </SimpleForm>
  </Edit>
);


/**
 // src/dataProvider.js
import { fetchUtils } from 'react-admin';

const apiUrl = 'https://your.trailbaseaccount.dev/api'; // Your Trailbase API URL

export const dataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const filter = JSON.stringify(params.filter);

    const url = `${apiUrl}/${resource}?page=${page}&perPage=${perPage}&sort=${field}&order=${order}&filter=${filter}`;
    const response = await fetchUtils.fetchJson(url);
    return {
      data: response.json.data,
      total: response.json.total,
    };
  },

  getOne: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const response = await fetchUtils.fetchJson(url);
    return {
      data: response.json,
    };
  },

  create: async (resource, params) => {
    const url = `${apiUrl}/${resource}`;
    const response = await fetchUtils.fetchJson(url, {
      method: 'POST',
      body: JSON.stringify(params.data),
    });
    return {
      data: response.json,
    };
  },

  update: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const response = await fetchUtils.fetchJson(url, {
      method: 'PUT',
      body: JSON.stringify(params.data),
    });
    return {
      data: response.json,
    };
  },

  delete: async (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    const response = await fetchUtils.fetchJson(url, {
      method: 'DELETE',
    });
    return { data: response.json };
  },

  // Other methods as necessary
};

 */

// src/index.js (renders the application)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the App component

ReactDOM.render(<App />, document.getElementById('root'));
