class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, stateRef) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.stateRef = stateRef; // Referencia al estado global
    this.appointmentDetails = {};
  }

  handleScheduleAppointment = () => {
    const message = this.createChatBotMessage(
      "Perfecto, puedo ayudarte a programar una cita. Por favor, dime si es para ti o para otra persona.",
      { widget: "patientOptions" }
    );
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  handleViewAppointments = () => {
    const message = this.createChatBotMessage(
      "Aquí están tus citas programadas: [listado de citas]"
    );
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  handleTalkToAdvisor = () => {
    const message = this.createChatBotMessage("Conectándote con un asesor...");
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  handleAskForID = () => {
    const message = this.createChatBotMessage(
      "Por favor, ingresa tu número de identificación para continuar."
    );
    this.setState((prevState) => ({
      ...prevState,
      expectingID: true,
      messages: [...prevState.messages, message],
    }));
  };

  handleInvalidID = () => {
    const message = this.createChatBotMessage(
      "El número de identificación ingresado no es válido. Por favor, ingresa solo números."
    );
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  handleIDInput = (id) => {
    this.setState((prevState) => ({ ...prevState, expectingID: false }));
    this.appointmentDetails.id = id;
    const message = this.createChatBotMessage(
      "Gracias. Ahora selecciona el tipo de servicio médico que necesitas:",
      { widget: "serviceOptions" }
    );
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  handleSelectService = (service) => {
    this.appointmentDetails.service = service;
    const message = this.createChatBotMessage(
      `Seleccionaste ${service}. Por favor, selecciona la ciudad o municipio donde deseas programar tu cita.`,
      { widget: "locationOptions" }
    );
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  handleSelectLocation = (location) => {
    this.appointmentDetails.location = location;
    const message = this.createChatBotMessage(
      `Seleccionaste ${location}. Ahora selecciona el horario que más te convenga.`,
      { widget: "timeOptions" }
    );
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  handleSelectTime = (time) => {
    this.appointmentDetails.time = time;
    const message = this.createChatBotMessage(
      `Cita confirmada: \nServicio: ${this.appointmentDetails.service} \nLugar: ${this.appointmentDetails.location} \nHora: ${time}. \n¿Es correcto?`,
      {
        widget: "endOptions",
      }
    );
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  handleConfirmAppointment = () => {
    const details = this.appointmentDetails;
    const message = this.createChatBotMessage(
      `¡Cita programada con éxito! \nDetalles: \nServicio: ${details.service} \nLugar: ${details.location} \nHora: ${details.time}. ¿Hay algo más en lo que pueda ayudarte?`,
      { widget: "endOptions" }
    );
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  handleUnknownMessage = () => {
    const message = this.createChatBotMessage(
      "Lo siento, no entendí tu mensaje. ¿Puedes intentarlo de nuevo?"
    );
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
