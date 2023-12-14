import React from 'react';
import './index.css';
import mProfile from './img/prof.png';
import wProfile from './img/profile.png';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteAppointment,
  setEditingAppointment,
} from './store/slices/appointmentsSlice';


function AppointmentList() {
  const appointments = useSelector((state) => state.appointments.appointments);
  const dispatch = useDispatch();

  
  const handleEditClick = (appointment) => {
    dispatch(setEditingAppointment(appointment));
  };
  const handleDeleteClick = (appointmentId) => {
    console.log('Clicked delete for appointment with id:', appointmentId);
    dispatch(deleteAppointment(appointmentId));
  };
  
  return (
    <section className="main-content">
      <div className="container">
        <div className="container">
          <hr></hr>
          <table className="table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Status</th>
                <th>Appointment</th>
                <th>Phone</th>
                <th>Doctor</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>
                    <div className="user-info">
                      <div className="user-info__img">
                        <img
                          src={appointment.gender === 'M' ? mProfile : wProfile}
                          alt="User Img"
                        />
                      </div>

                      <div className="user-info__basic">
                        <h5 className="mb-0">{appointment.patientName}</h5>
                        <p className="text-muted mb-0">
                          {appointment.age} yrs, {appointment.gender}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span
                      className={`btn ${appointment.appointmentType === 'Consult'
                          ? 'btn-success'
                          : 'btn-primary'
                        }`}
                    >
                      {appointment.appointmentType}
                    </span>
                  </td>
                  <td>
                    <h6 className="mb-0">{appointment.time}</h6>
                    <small>{appointment.date}</small>
                  </td>
                  <td>
                    <h6 className="mb-0">{appointment.phone}</h6>
                    <a href="#!">
                      <small>Contact</small>
                    </a>
                  </td>
                  <td>
                    <h6 className="mb-0">{appointment.doctorName}</h6>
                  </td>
                  <td>
                    <div className="btn-group">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleEditClick(appointment)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteClick(appointment.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>      </div>
    </section>
  );
}

export default AppointmentList;
