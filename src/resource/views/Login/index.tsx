import React, { FunctionComponent, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useMutation } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import { Formik, FormikProps, FormikHelpers } from 'formik';
import { ApolloError } from 'apollo-client';
import { ILoginFormValues, ILoginResponse } from '../../../interfaces';
import { LoginValidationSchema } from '../../validations';
import LoginFormComponent from './LoginFormComponent';
import { AppRoutes } from '../../../config';
import { errorFormatter } from '../../../helpers';
import { LOGIN } from '../../../graphql/mutations';

let toastId: any = null;

export const Login: FunctionComponent = () => {
  let history = useHistory();
  // Login mutation
  const [adminLogin, { loading }] = useMutation<
    {
      adminLogin: ILoginResponse;
    },
    { authInput: ILoginFormValues }
  >(LOGIN, {
    onCompleted({ adminLogin: { token, message, status } }) {
      toast.dismiss();
      if (status === 'failed') {
        toast.error(message);
      } else {
        localStorage.setItem('adminToken', token);
        history.push(AppRoutes.HOME);
      }
    },
    onError: (error: ApolloError) => {
      const message = errorFormatter(error);
      if (!toast.isActive(toastId)) {
        toastId = toast.error(message);
      }
    },
  });
  // If user is already logged In then it will be redirect to dashboard
  useEffect(() => {
    if (localStorage.getItem('adminToken')) {
      history.push(AppRoutes.HOME);
    }
  }, [history]);
  // on login
  const handleSubmit = (
    { userName, password }: ILoginFormValues,
    { setSubmitting }: FormikHelpers<ILoginFormValues>,
  ) => {
    try {
      adminLogin({
        variables: {
          authInput: { userName: userName ? userName.trim() : '', password },
        },
      });
    } catch (error) {
      const message = errorFormatter(error);
      if (!toast.isActive(toastId)) {
        toastId = toast.error(message);
      }
    }
  };

  const values: ILoginFormValues = { userName: '', password: '' };
  return (
    <Formik
      initialValues={values}
      onSubmit={handleSubmit}
      children={(props: FormikProps<ILoginFormValues>) => (
        <LoginFormComponent {...props} loading={loading} />
      )}
      validationSchema={LoginValidationSchema}
    />
  );
};

export default Login;
