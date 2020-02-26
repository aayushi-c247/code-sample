import React, { FunctionComponent } from 'react';
import { FormikProps } from 'formik';
import {
  Button,
  FormGroup,
  Card,
  CardBody,
  CardGroup,
  Container,
  Input,
  Col,
  Row,
  Form,
  InputGroup,
} from 'reactstrap';
import { ILoginFormValues } from '../../../interfaces';

const LoginFormComponent: FunctionComponent<FormikProps<ILoginFormValues> & {
  loading: boolean;
}> = (props: FormikProps<ILoginFormValues> & { loading: boolean }) => {
  const {
    values: { userName, password },
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    loading,
  } = props;
  return (
    <div className='app flex-row align-items-center auth-page h-100vh'>
      <div className='auth-bg'></div>
      <Container>
        <Row className='justify-content-center align-items-center h-100vh'>
          <Col md='6'>
            <CardGroup>
              <Card className='login-card p-4'>
                <CardBody className='px-4 py-0'>
                  <Form onSubmit={handleSubmit} className='form-section'>
                    <h1 className='auth-title text-center'>Sign In</h1>
                    <p className='sub-title text-center'>to your account</p>

                    <FormGroup className='position-relative'>
                      <InputGroup>
                        <Input
                          type={'text'}
                          name={'userName'}
                          placeholder={'Ex: john@123'}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={userName}
                          className={
                            errors.userName && touched.userName
                              ? 'text-input error'
                              : 'text-input'
                          }
                          autoComplete='username'
                        />
                      </InputGroup>
                      {errors.userName && touched.userName && (
                        <div className='text-danger'>{errors.userName}</div>
                      )}
                    </FormGroup>

                    <FormGroup className='position-relative'>
                      <InputGroup>
                        <Input
                          id='password'
                          type={'password'}
                          name={'password'}
                          placeholder={'Ex:123456'}
                          value={password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={
                            errors.password && touched.password
                              ? 'text-input error'
                              : 'text-input'
                          }
                          autoComplete='current-password'
                        />
                      </InputGroup>
                      {errors.password && touched.password && (
                        <div className='text-danger'>{errors.password}</div>
                      )}
                    </FormGroup>
                    <Row>
                      <Col md='8' className='mx-auto mb-3'>
                        <Button
                          disabled={loading}
                          type={'submit'}
                          color={'primary'}
                          block
                          className='px-4 login-btn'
                        >
                          {loading ? (
                            <i className='fa fa-spinner fa-spin mr-2' />
                          ) : (
                            ''
                          )}
                          Sign In
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginFormComponent;
