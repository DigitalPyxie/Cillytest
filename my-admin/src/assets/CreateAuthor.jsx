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