import * as React from 'react';
import { Create, SimpleForm, TextInput, DataInput, required, NumberInput } from 'react-admin';

export const AuthorCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="author" label="Author Name"/>
            <NumberInput source="author" label="Author ID"/>
        </SimpleForm>
    </Create>
);

/*
// src/components/StudentCreate.jsx
import React from 'react';
import { Create, SimpleForm, TextInput, EmailInput } from 'react-admin';

export const StudentCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <EmailInput source="email" />
      {/* Add other fields as needed }
    </SimpleForm>
  </Create>
);

*/