import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

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
          <Field name="name" placeholder="Username" />
          <ErrorMessage name="Username" component="div" />
        </label>
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
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
