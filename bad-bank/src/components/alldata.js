import React from 'react';
import useState from 'react-usestateref';
import { Card, UserContext } from './context';

function AllData() {
  const ctx = React.useContext(UserContext);
  const dataArray = ctx.users;
  const [balance, setBalance, balanceRef] = useState(
    ctx.users[ctx.users.length - 1].balance
  );
  let balanceText = `${ctx.users[ctx.users.length - 1].name}'s Balance is: $${
    ctx.users[ctx.users.length - 1].balance
  }.`;

  return (
    <Card
      bgcolor="info"
      txtcolor="text-black"
      header="All Data"
    //   style='46rem'
      body={
        <div>
          <ul className="list-group list-group-flush">
            {dataArray.map((item, key) => {
              return (
                <div key={key}>
                  <li className="list-group-item">
                    User: {item.name} - Email: {item.email} - Balance: $
                    {item.balance}
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      }
    ></Card>
  );
}

export default AllData;
