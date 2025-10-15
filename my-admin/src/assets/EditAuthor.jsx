import * as React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

export const AuthorEdit = () => (
    <Edit>
        <SimpleForm>
            
            {/* need to change this to create for authors*/}
            <TextInput source="name" label="Author Name"/>
            <NumberInput source="author" label="Author ID"/>
        </SimpleForm>
    </Edit>
);

/*
// src/components/StudentEdit.jsx
import React from 'react';
import { Edit, SimpleForm, TextInput, EmailInput } from 'react-admin';

export const StudentEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />  {/* ID should be displayed but not editable }
      <TextInput source="name" />
      <EmailInput source="email" />
      {/* Add other editable fields here }
    </SimpleForm>
  </Edit>
);

*/