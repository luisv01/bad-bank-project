import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import { Route, HashRouter, Routes, UserContext } from './components/context';
import NavBar from './components/navbar';
import Home from './components/home';
import Login from './components/login';
import CreateAccount from './components/createaccount';
import Withdraw from './components/withdraw';
import Deposit from './components/deposit';
import Balance from './components/balance';
import AllData from './components/alldata';

function App() {
  return (
    <div className="container">
      <HashRouter>
        <NavBar />
        <UserContext.Provider
          value={{
            users: [
              {
                name: 'Abel',
                email: 'abel@mit.edu',
                password: 'secret',
                balance: 0,
              },
            ],
          }}
        >
          <div
            className="container d-flex justify-content-center"
            style={{ padding: '50px' }}
          >
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/createaccount/" element={<CreateAccount />} />
              {/* <Route path="/login/" element={<Login />} /> */}
              <Route path="/withdraw/" element={<Withdraw />} />
              <Route path="/deposit/" element={<Deposit />} />
              <Route path="/balance/" element={<Balance />} />
              <Route path="/alldata/" element={<AllData />} />
            </Routes>
          </div>
        </UserContext.Provider>
      </HashRouter>
    </div>
  );
}

export default App;
