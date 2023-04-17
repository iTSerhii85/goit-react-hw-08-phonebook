import { Formik } from 'formik';
import { RegisterSchema } from 'Utils/ValidateForm';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { BottomText, ErrorMessage, Field, Form, FormField, StyledLink, SubmitButton } from './RegisterForm.style';

import { IconContext } from "react-icons";
import { FcAddressBook } from "react-icons/fc";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={RegisterSchema}
      onSubmit={(values, actions) => {
        dispatch(register(values));
        actions.resetForm();
      }}
    >
      <Form>
      <IconContext.Provider value={{ size: "150px", style: { marginTop: '-80px', marginRight: "auto", marginLeft: "auto" } }}>
        <FcAddressBook/>
      </IconContext.Provider>
        <FormField>
          Username
          <Field name="name" type="text" placeholder="Username" />
          <ErrorMessage name="Username" component="div" />
        </FormField>
        <FormField>
          Email
          <Field name="email" placeholder="Email" type="email" />
          <ErrorMessage name="email" component="div" />
        </FormField>
        <FormField>
          Password
          <Field name="password" placeholder="Password" type="password" />
          <ErrorMessage name="password" component="div" />
        </FormField>
        <SubmitButton type="submit">Register</SubmitButton>
        <BottomText>
          Already have an account?{' '}
          <StyledLink to="/login">Log in</StyledLink>
        </BottomText>
      </Form>
    </Formik>
  );
};
