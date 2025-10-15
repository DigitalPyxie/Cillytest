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