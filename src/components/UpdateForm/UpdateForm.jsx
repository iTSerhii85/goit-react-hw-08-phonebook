import React from 'react';
import { Formik } from 'formik';
import { BookSchema } from 'Utils/ValidateForm';
import { useDispatch } from 'react-redux';
import { useContacts } from 'hooks';
import { fetchContacts, updateContact } from 'redux/contacts/operations';
import {
  Field,
  Form,
  FormField,
  SubmitButton,
  ErrorMessage,
} from './UpdateForm.stile';

export const UpdateForm = ({ user, updateUser }) => {
  const dispatch = useDispatch();
  const contacts = useContacts();

  return (
    <Formik
      initialValues={{
        id: user.id,
        name: user.name,
        number: user.number,
      }}
      validationSchema={BookSchema}
      onSubmit={(values, actions) => {
        if (
          contacts.find(contact =>
            contact.name.toLowerCase().includes(values.name.toLowerCase())
          )
        ) {
          window.alert(`${values.name} is already in contacts!`);
          updateUser();
        } else {
          dispatch(updateContact(values));
          actions.resetForm();
          dispatch(fetchContacts());
          updateUser();
        }
      }}
    >
      <Form>
        <FormField>
          Name
          <Field name="name" type="text" placeholder="Contact name" />
          <ErrorMessage name="name" component="div" />
        </FormField>
        <FormField>
          Number
          <Field name="number" type="tel" placeholder="+3 80XX XX XX XXX" />
          <ErrorMessage name="number" component="div" />
        </FormField>
        <SubmitButton type="submit">OK</SubmitButton>
      </Form>
    </Formik>
  );
};
