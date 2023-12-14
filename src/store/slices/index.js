// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import appointmentsReducer from './slices/appointmentsSlice';
import editingAppointmentReducer from './slices/editingAppointmentSlice';

const store = configureStore({
  reducer: {
    appointments: appointmentsReducer,
    editingAppointment: editingAppointmentReducer,
  },

});

export default store;
