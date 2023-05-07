import React from 'react';
import useState from 'react-usestateref';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Card, UserContext } from './context';
import Swal from 'sweetalert2';

function Withdraw() {
  const ctx = React.useContext(UserContext);
  const [balance, setBalance, balanceRef] = useState(
    ctx.users[ctx.users.length - 1].balance
  );
  const [withdrawAmount, setwithdrawAmount, withdrawAmountRef] = useState(0);
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
      bgcolor="warning"
      txtcolor="text-black"
      header="Withdraw"
      title={balanceText}
      body={
        <Formik
          initialValues={{ withdraw: 0 }}
          validationSchema={Yup.object({
            withdraw: Yup.number()
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
              setwithdrawAmount(values.withdraw);
              let total = balanceRef.current - withdrawAmountRef.current;
              if (total < 0) {
                Swal.fire({
                  title: 'Not enough funds!',
                  text: 'Work more and get paid!',
                  icon: 'error',
                  confirmButtonText: 'Return',
                });
                return;
              }
              setBalance(total);
              updateUserBalance();
              Swal.fire({
                title: 'Withdrawl Successful!',
                text: 'You took my money!',
                icon: 'success',
                confirmButtonText: 'Not Cool',
              });
              // <h5>Welcome {JSON.stringify(ctx.users)}!</h5>;
            }, 400);
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="withdraw">Withdraw Amount:</label>
              <br />
              <input
                id="withdraw"
                type="number"
                min="0"
                // step='0.01'
                {...formik.getFieldProps('withdraw')}
              />
              {formik.touched.withdraw && formik.errors.withdraw ? (
                <div>{formik.errors.withdraw}</div>
              ) : null}
              <br />
              <button
                className="btn btn-light"
                disabled={!formik.isValid}
                type="submit"
              >
                WITHDRAW
              </button>
            </form>
          )}
        </Formik>
      }
    />
  );
}

export default Withdraw;
