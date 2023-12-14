import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import AppointmentForm from './AppointmentForm';
import AppointmentList from './AppointmentList';

function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
        <AppointmentForm />
        <AppointmentList />
      </div>
    </Provider>
  );
}

export default App;
