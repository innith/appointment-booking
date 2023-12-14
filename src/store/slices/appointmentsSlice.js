import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appointments: [],

  editingAppointment: null,
};

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    addAppointment: (state, action) => {
      state.appointments.push(action.payload);
    },

    updateAppointment: (state, action) => {
      const updatedAppointment = action.payload;
      const index = state.appointments.findIndex((appointment) => appointment.id === updatedAppointment.id);
      if (index !== -1) {
        state.appointments[index] = updatedAppointment;
      }
    },
    deleteAppointment: (state, action) => {
      const appointmentId = action.payload;
      console.log('Deleting appointment with id:', appointmentId);
      state.appointments = state.appointments.filter((appointment) => appointment.id !== appointmentId);
    },
    
    setEditingAppointment: (state, action) => {
      state.editingAppointment = action.payload;
    },
    clearEditingAppointment: (state) => {
      state.editingAppointment = null;
    },
  },
});

export const {
  addAppointment,
  updateAppointment,
  deleteAppointment,
  setEditingAppointment,
  clearEditingAppointment
} = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
