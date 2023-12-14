import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addAppointment,
  updateAppointment,
} from './store/slices/appointmentsSlice';
import { clearEditingAppointment } from './store/slices/appointmentsSlice';
function generateUniqueId() {
  return Math.random().toString(36).substring(2, 9);
}
function AppointmentForm() {
  const selectedAppointment = useSelector((state) => state.appointments.editingAppointment); 
  const dispatch = useDispatch();
  const initialFormData = {
    patientName: '',
    gender: 'M',
    age: '',
    phone: '',
    date: '',
    time: '',
    doctorName: '',
    appointmentType: 'Consult',
  };

  const [formData, setFormData] = React.useState(initialFormData);

  React.useEffect(() => {
    if (selectedAppointment) {
      setFormData(selectedAppointment);
    } else {
      setFormData(initialFormData);
    }
  }, [selectedAppointment]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      formData.patientName.trim() === '' ||
      formData.age.trim() === '' ||
      formData.phone.trim() === '' ||
      formData.date.trim() === '' ||
      formData.time.trim() === '' ||
      formData.doctorName.trim() === ''
    ) {
      alert('Please fill in all required fields.');
      return;
    }
    const newAppointment = {
      id:  generateUniqueId(),  
      ...formData,
    };

    if (selectedAppointment) {
      dispatch(updateAppointment(newAppointment));
      dispatch(clearEditingAppointment());
    } else {
      dispatch(addAppointment(newAppointment));
      setFormData(initialFormData);
    }
  };

  return (
    <div className="container register-form">
      <br />
      <br />

      <div className="form">
        <div className="note">
          <p>Welcome to Doctor Appointment Booking</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-content">
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="patientName">Patient Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="patientName"
                    name="patientName"
                    required
                    placeholder="Enter patient name"
                    value={formData.patientName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select
                    className="form-control"
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="age"
                    name="age"
                    required
                    placeholder="Enter patient age"
                    value={formData.age}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Enter patient phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="date">Date *</label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    required
                    placeholder="Date"
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Time *</label>
                  <input
                    type="time"
                    className="form-control"
                    id="time"
                    name="time"
                    required
                    placeholder="Time"
                    value={formData.time}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="doctorName">Doctor Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="doctorName"
                    name="doctorName"
                    required
                    placeholder="Enter doctor name"
                    value={formData.doctorName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="appointmentType">Appointment Type</label>
                  <select
                    className="form-control"
                    id="appointmentType"
                    name="appointmentType"
                    value={formData.appointmentType}
                    onChange={handleInputChange}
                  >
                    <option value="Consult">Consult</option>
                    <option value="Revisit">Revisit</option>
                  </select>
                </div>
              </div>

            </div> <br></br>
            <button type="submit" className="btnSubmit">
            {selectedAppointment ? 'Update Changes' : 'Book Appointment'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AppointmentForm;
