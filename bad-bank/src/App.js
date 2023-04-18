import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import { Route, HashRouter, Routes, UserContext } from './components/context';
import NavBar from './components/navbar';
import Home from './components/home';
import Login from './components/login'
import CreateAccount from './components/createaccount';

function App() {
  return (
    <div className="container">
      <HashRouter>
        <NavBar />
        <UserContext.Provider
          value={{
            users: [
              {
                name: 'abel',
                email: 'abel@mit.edu',
                password: 'secret',
                balance: 100,
              },
            ],
          }}
        >
          <div
            className="container d-flex justify-content-center"
            style={{ padding: '20px' }}
          >
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/createaccount/" element={<CreateAccount />} />
              <Route path="/login/" element={<Login />} />
            </Routes>
          </div>
        </UserContext.Provider>
      </HashRouter>
    </div>
  );
}

export default App;
