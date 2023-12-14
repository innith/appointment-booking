import { configureStore } from '@reduxjs/toolkit';
import appointmentsReducer from './store/slices/appointmentsSlice';
const store = configureStore({
  reducer: {
    appointments: appointmentsReducer,
  },

});

export default store;
