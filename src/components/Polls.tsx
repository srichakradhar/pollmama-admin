import React from "react";
import {
    List, Show, SimpleShowLayout, Datagrid, TextField, DateField, Create, SimpleForm, TextInput,
} from "react-admin";

export const PollList = (props: any) => {
    return (
        <List {...props}>
            <Datagrid rowClick="edit">
                <TextField source="question" />
                <DateField source="created_at" />
                <DateField source="updated_at" />
            </Datagrid>
        </List>
    );
};

export const PollCreate = (props: any) => {
    return (
        < Create {...props}>
            <SimpleForm>
                <TextInput source="question" />
            </SimpleForm>
        </Create>
    );
};

export const PollEdit = (props: any) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="question" />
            </SimpleForm>
        </Create>
    );
};

export const PollShow = (props: any) => {
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source="id" />
                <TextField source="question" />
                <DateField source="created_at" />
                <DateField source="updated_at" />
            </SimpleShowLayout>
        </Show>
    );
};
