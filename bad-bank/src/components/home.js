import React from 'react';
import { Card } from './context';
import bankImage from './bank.png';

function Home() {
  return (
    <Card
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={<img src={bankImage} className="img-fluid" alt="Bank image" />}
    />
  );
}
export default Home;
