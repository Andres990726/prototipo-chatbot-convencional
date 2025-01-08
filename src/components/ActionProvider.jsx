class ActionProvider {
  constructor(createChatbotMessage, setStateFunc) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
  }

  // Mostrar las opciones iniciales
  showInitialOptions = () => {
    const message = this.createChatbotMessage("¿En qué puedo ayudarte?", {
      widget: "optionsWidget",
    });

    const initialOptions = [
      {
        text: "Programar una cita médica",
        action: "handleScheduleAppointment",
      },
      { text: "Consultar citas programadas", action: "handleViewAppointments" },
      { text: "Hablar con un asesor", action: "handleTalkToAgent" },
    ];

    this.updateChatbotState(message, initialOptions);
  };

  // Manejar la programación de una cita
  handleScheduleAppointment = () => {
    const message = this.createChatbotMessage(
      "¿Es para ti o para otra persona?",
      {
        widget: "optionsWidget",
      }
    );

    const options = [
      { text: "Para mí", action: "handlePersonalAppointment" },
      { text: "Para otra persona", action: "handleOtherPersonAppointment" },
    ];

    this.updateChatbotState(message, options);
  };

  handlePersonalAppointment = () => {
    const message = this.createChatbotMessage(
      "Por favor, ingresa tu número de identificación para continuar."
    );
    this.updateChatbotState(message);
  };

  handleOtherPersonAppointment = () => {
    const message = this.createChatbotMessage(
      "Por favor, ingresa el número de identificación de la persona."
    );
    this.updateChatbotState(message);
  };

  handleViewAppointments = () => {
    const message = this.createChatbotMessage(
      "Actualmente no tienes citas programadas. ¿Deseas programar una nueva cita?",
      {
        widget: "optionsWidget",
      }
    );

    const options = [
      { text: "Sí, programar cita", action: "handleScheduleAppointment" },
      { text: "No, gracias", action: "showInitialOptions" },
    ];

    this.updateChatbotState(message, options);
  };

  handleTalkToAgent = () => {
    const message = this.createChatbotMessage(
      "Un asesor estará contigo en breve. ¿Hay algo más en lo que pueda ayudarte?",
      {
        widget: "optionsWidget",
      }
    );

    const options = [
      { text: "Sí, quiero otra cosa", action: "showInitialOptions" },
      { text: "No, gracias", action: "" },
    ];

    this.updateChatbotState(message, options);
  };

  // Método para actualizar el estado del chatbot
  updateChatbotState = (message, options = []) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
      widgets:
        options.length > 0
          ? [{ widgetName: "optionsWidget", props: { options } }]
          : [],
    }));
  };
}

export default ActionProvider;
