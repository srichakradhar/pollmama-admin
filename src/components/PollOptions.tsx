import {
    List, Show, SimpleShowLayout, Datagrid, TextField, ReferenceInput, SelectInput, Create, SimpleForm, TextInput,
} from "react-admin";

export const PollOptionList = (props: any) => {
    return (
        <List {...props} title="Poll Mama - Admin">
            <Datagrid rowClick="edit">
                <TextField source="text" />
            </Datagrid>
        </List>
    );
};

export const PollOptionCreate = (props: any) => {
    return (
        < Create {...props}>
            <SimpleForm>
                <TextInput source="text" />
                <ReferenceInput source="poll_id" reference="poll" label="Poll">
                    <SelectInput optionText="question"/>
                </ReferenceInput>
            </SimpleForm>
        </Create>
    );
};

export const PollOptionEdit = (props: any) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="text" />
                <ReferenceInput source="poll_id" reference="poll" label="Poll">
                    <SelectInput optionText="question"/>
                </ReferenceInput>
            </SimpleForm>
        </Create>
    );
};

export const PollOptionShow = (props: any) => {
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source="id" />
                <ReferenceInput source="poll_id" reference="poll" label="Poll">
                    <TextField optionText="question"/>
                </ReferenceInput>
                <TextField source="text" />
            </SimpleShowLayout>
        </Show>
    );
};
