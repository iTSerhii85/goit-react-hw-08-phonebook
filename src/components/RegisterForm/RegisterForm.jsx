import { ErrorMessage, Field, Form, Formik } from 'formik';
import { RegisterSchema } from 'components/Utils/ValidateForm';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

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
        <label>
          Username
          <Field name="name" type="text" placeholder="Username" />
          <ErrorMessage name="Username" component="div" />
        </label>
        <label>
          Email
          <Field name="email" placeholder="Email" type="email" />
          <ErrorMessage name="email" component="div" />
        </label>
        <label>
          Password
          <Field name="password" placeholder="Password" type="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
