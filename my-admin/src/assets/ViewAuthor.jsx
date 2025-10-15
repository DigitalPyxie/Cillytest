import * as React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const AuthorList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name"/>
        </Datagrid>
    </List>
);

/* src/components/StudentList.jsx
import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

export const StudentList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="email" />
      {/* Add other fields as needed }
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
); */
