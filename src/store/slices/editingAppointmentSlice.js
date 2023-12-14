import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const editingAppointmentSlice = createSlice({
  name: 'editingAppointment',
  initialState,
  reducers: {
    setEditingAppointment: (state, action) => action.payload,
    clearEditingAppointment: () => null,
  },
});

export const { setEditingAppointment, clearEditingAppointment } = editingAppointmentSlice.actions;

export default editingAppointmentSlice.reducer;



