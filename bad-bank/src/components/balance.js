import React from 'react';
import useState from 'react-usestateref';
import { UserContext } from './context';

function Balance() {
  const ctx = React.useContext(UserContext);
  const [balance, setBalance, balanceRef] = useState(
    ctx.users[ctx.users.length - 1].balance
  );
  let balanceText = `${ctx.users[ctx.users.length - 1].name}'s Balance is: $${
    ctx.users[ctx.users.length - 1].balance
  }.`;
  return (
    <div className="p-5 mb-4 text-white bg-info rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold text-black">{balanceText}</h1>
      </div>
    </div>
  );
}

export default Balance;
