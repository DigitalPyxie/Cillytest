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