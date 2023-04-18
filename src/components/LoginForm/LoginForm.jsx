import { LogInSchema } from 'Utils/ValidateForm';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { IconContext } from 'react-icons';
import { FcAddressBook } from 'react-icons/fc';
import { Formik } from 'formik';
import {
  BottomText,
  ErrorMessage,
  Field,
  Form,
  FormField,
  StyledLink,
  SubmitButton,
} from './LoginForm.style';

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
        <IconContext.Provider
          value={{
            size: '150px',
            style: {
              marginTop: '-80px',
              marginRight: 'auto',
              marginLeft: 'auto',
            },
          }}
        >
          <FcAddressBook />
        </IconContext.Provider>
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
        <SubmitButton type="submit">Log In</SubmitButton>
        <BottomText>
          Don’t have an account yet?{' '}
          <StyledLink to="/register">Sign up</StyledLink>
        </BottomText>
      </Form>
    </Formik>
  );
};
