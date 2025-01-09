import PropTypes from "prop-types";

export const TaskOptions = ({ actionProvider }) => {
  return (
    <div>
      <button onClick={actionProvider.handleScheduleAppointment}>
        Programar una cita médica
      </button>
      <button onClick={actionProvider.handleViewAppointments}>
        Consultar citas ya programadas
      </button>
      <button onClick={actionProvider.handleTalkToAdvisor}>
        Hablar con un asesor
      </button>
    </div>
  );
};

export const PatientOptions = ({ actionProvider }) => {
  return (
    <div>
      <button onClick={actionProvider.handleAskForID}>Para mí</button>
      <button onClick={actionProvider.handleAskForID}>Para otra persona</button>
    </div>
  );
};

export const ServiceOptions = ({ actionProvider }) => {
  return (
    <div>
      <button
        onClick={() => actionProvider.handleSelectService("Medicina general")}
      >
        Medicina general
      </button>
      <button
        onClick={() => actionProvider.handleSelectService("Especialista")}
      >
        Especialista
      </button>
      <button
        onClick={() => actionProvider.handleSelectService("Exámenes médicos")}
      >
        Exámenes médicos
      </button>
    </div>
  );
};

export const LocationOptions = ({ actionProvider }) => {
  return (
    <div>
      <button onClick={() => actionProvider.handleSelectLocation("Pasto")}>
        Pasto
      </button>
      <button onClick={() => actionProvider.handleSelectLocation("Ipiales")}>
        Ipiales
      </button>
      <button onClick={() => actionProvider.handleSelectLocation("Tumaco")}>
        Tumaco
      </button>
    </div>
  );
};

export const TimeOptions = ({ actionProvider }) => {
  return (
    <div>
      <button onClick={() => actionProvider.handleSelectTime("8:00 a.m.")}>
        8:00 a.m.
      </button>
      <button onClick={() => actionProvider.handleSelectTime("10:00 a.m.")}>
        10:00 a.m.
      </button>
      <button onClick={() => actionProvider.handleSelectTime("2:00 p.m.")}>
        2:00 p.m.
      </button>
      <button onClick={() => actionProvider.handleSelectTime("4:00 p.m.")}>
        4:00 p.m.
      </button>
    </div>
  );
};

export const EndOptions = ({ actionProvider }) => {
  return (
    <div>
      <button onClick={actionProvider.handleScheduleAppointment}>
        Sí, necesito algo más
      </button>
      <button
        onClick={() =>
          alert("Gracias por usar el asistente médico. ¡Hasta luego!")
        }
      >
        No, gracias
      </button>
    </div>
  );
};

TaskOptions.propTypes = {
  actionProvider: PropTypes.shape({
    handleScheduleAppointment: PropTypes.func.isRequired,
    handleViewAppointments: PropTypes.func.isRequired,
    handleTalkToAdvisor: PropTypes.func.isRequired,
  }).isRequired,
};
PatientOptions.propTypes = {
  actionProvider: PropTypes.shape({
    handleAskForID: PropTypes.func.isRequired,
  }).isRequired,
};
ServiceOptions.propTypes = {
  actionProvider: PropTypes.shape({
    handleSelectService: PropTypes.func.isRequired,
  }).isRequired,
};
LocationOptions.propTypes = {
  actionProvider: PropTypes.shape({
    handleSelectLocation: PropTypes.func.isRequired,
  }).isRequired,
};
TimeOptions.propTypes = {
  actionProvider: PropTypes.shape({
    handleSelectTime: PropTypes.func.isRequired,
  }).isRequired,
};

EndOptions.propTypes = {
  actionProvider: PropTypes.shape({
    handleScheduleAppointment: PropTypes.func.isRequired,
  }).isRequired,
};



