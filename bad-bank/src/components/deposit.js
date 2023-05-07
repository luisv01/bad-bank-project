import React from 'react';
import useState from 'react-usestateref';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Card, UserContext } from './context';
import Swal from 'sweetalert2';

function Deposit() {
  const ctx = React.useContext(UserContext);
  const [balance, setBalance, balanceRef] = useState(
    ctx.users[ctx.users.length - 1].balance
  );
  const [depositAmount, setDepositAmount, depositAmountRef] = useState(0);
  // const ctx = React.useContext(UserContext);
  let balanceText = `${
    ctx.users[ctx.users.length - 1].name
  }'s Balance: $${JSON.stringify(ctx.users[ctx.users.length - 1].balance)}`
  // ${JSON.stringify(ctx.users)}`;

  function updateUserBalance() {
    ctx.users.push({
      ...ctx.users[ctx.users.length - 1],
      balance: balanceRef.current,
    });
  }

  return (
    <Card
      // className="text-center"
      bgcolor="success"
      header="Deposit"
      title={balanceText}
      body={
        <Formik
          initialValues={{ deposit: 0 }}
          validationSchema={Yup.object({
            deposit: Yup.number()
              .required(
                'What you entered is not a number!\nOnly enter numbers!'
              )
              .positive()
              // .round(),
              .integer()
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              setDepositAmount(values.deposit);
              let total = balanceRef.current + depositAmountRef.current;
              setBalance(total);
              updateUserBalance();
              Swal.fire({
                title: 'Success!',
                text: "Gimme Mo'Money",
                icon: 'success',
                confirmButtonText: 'Cool',
              });
              // <h5>Welcome {JSON.stringify(ctx.users)}!</h5>;
            }, 400);
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="deposit">Deposit Amount:</label>
              <br />
              <input
                id="deposit"
                type="number"
                min="0"
                // step='0.01'
                {...formik.getFieldProps('deposit')}
              />
              {formik.touched.deposit && formik.errors.deposit ? (
                <div>{formik.errors.deposit}</div>
              ) : null}
              <br />
              <button
                className="btn btn-light"
                disabled={!formik.isValid}
                type="submit"
              >
                DEPOSIT
              </button>
            </form>
          )}
        </Formik>
      }
    />
  );
}

export default Deposit;
