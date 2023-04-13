import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const RegisterSchema = Yup.object().shape({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={RegisterSchema}
      onSubmit={(values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Email
          <Field name="email" placeholder="Email" type="tel" />
          <ErrorMessage name="email" component="div" />
        </label>
        <label>
          Password
          <Field name="password" placeholder="Password" type="tel" />
          <ErrorMessage name="password" component="div" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};
