import { LogInSchema } from 'components/Utils/ValidateForm';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LogInSchema}
      onSubmit={(values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
      }}
    >
      <Form>
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
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};
