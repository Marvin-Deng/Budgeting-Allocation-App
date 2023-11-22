import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';
import '@/App.css'

function App() {
  return (
    <div className="App">
      <CartValue />
      <ExpenseList />
      <ItemSelected />
      <Location />
    </div>
  );
}

export default App;