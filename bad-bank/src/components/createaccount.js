import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Card, UserContext } from './context';

function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  //   const [name, setName] = React.useState('');
  //   const [email, setEmail] = React.useState('');
  //   const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);

  function clearForm() {
    // setName('');
    // setEmail('');
    // setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={
        show ? (
          <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={Yup.object({
              name: Yup.string().required('Name is Required'),
              email: Yup.string()
                .email('Invalid email address')
                .required('Email is Required'),
              password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .required('Password is Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                ctx.users.push({ ...values, balance: 0 });
                setShow(false);
              }, 400);
            }}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <br />
                <input
                  id="name"
                  type="text"
                  {...formik.getFieldProps('name')}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div>{formik.errors.name}</div>
                ) : null}
                <br />
                <label htmlFor="email">Email:</label>
                <br />
                <input
                  id="email"
                  type="text"
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
                <br />
                <label htmlFor="password">Password:</label>
                <br />
                <input
                  id="password"
                  type="password"
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}
                <br />
                <button
                  className="btn btn-light"
                  disabled={!formik.isValid}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
        ) : (
          <>
            <h5>Success!</h5>
            <h5>
              Welcome {ctx.users[ctx.users.length - 1].name}!
            </h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Add another account
            </button>
          </>
        )
      }
    />
  );
}

export default CreateAccount;
