import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

const ActionProvider = ({
  createChatBotMessage,
  setState,
  children,
  state,
}) => {
  const [data, setData] = useState({
    id: "",
    service: "",
    location: "",
    time: "",
  });

  const handleScheduleAppointment = () => {
    const botMessage = createChatBotMessage(
      "Perfecto, puedo ayudarte a programar una cita. Por favor, dime si es para ti o para otra persona.",
      { widget: "patientOptions" }
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleViewAppointments = () => {
    const message = createChatBotMessage(
      "Aquí están tus citas programadas: [listado de citas]"
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const handleTalkToAdvisor = () => {
    const message = createChatBotMessage("Conectándote con un asesor...");
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const handleAskForID = () => {
    const message = createChatBotMessage(
      "Por favor, ingresa tu número de identificación para continuar."
    );
    setState((prevState) => ({
      ...prevState,
      expectingID: true,
      messages: [...prevState.messages, message],
    }));
  };

  const handleInvalidID = () => {
    const message = createChatBotMessage(
      "El número de identificación ingresado no es válido. Por favor, ingresa solo números."
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const handleIDInput = (id) => {
    setState((prevState) => ({ ...prevState, expectingID: false }));
    setData({ ...data, id });
    const message = createChatBotMessage(
      "Gracias. Ahora selecciona el tipo de servicio médico que necesitas:",
      { widget: "serviceOptions" }
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const handleSelectService = (service) => {
    setData({ ...data, service });
    const message = createChatBotMessage(
      `Seleccionaste ${service}. Por favor, selecciona la ciudad o municipio donde deseas programar tu cita.`,
      { widget: "locationOptions" }
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const handleSelectLocation = (location) => {
    setData({ ...data, location });
    const message = createChatBotMessage(
      `Seleccionaste ${location}. Ahora selecciona el horario que más te convenga.`,
      { widget: "timeOptions" }
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const handleSelectTime = (time) => {
    setData({ ...data, time });
    const message = createChatBotMessage(
      `Cita confirmada: \nServicio: ${data.service} \nLugar: ${data.location} \nHora: ${time}. \n¿Es correcto?`,
      {
        widget: "endOptions",
      }
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const handleConfirmAppointment = () => {
    const message = createChatBotMessage(
      `¡Cita programada con éxito! \nDetalles: \nServicio: ${data.service} \nLugar: ${data.location} \nHora: ${data.time}. ¿Hay algo más en lo que pueda ayudarte?`,
      { widget: "endOptions" }
    );
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  const handleUnknownMessage = () => {
    const message = createChatBotMessage(
      "Lo siento, no entendí tu mensaje. ¿Puedes intentarlo de nuevo?"
    );
    setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

  // Put the handleHello and handleDog function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleScheduleAppointment,
            handleViewAppointments,
            handleTalkToAdvisor,
            handleAskForID,
            handleInvalidID,
            handleIDInput,
            handleSelectService,
            handleSelectLocation,
            handleSelectTime,
            handleConfirmAppointment,
            handleUnknownMessage,
          },
          state,
        });
      })}
    </div>
  );
};
ActionProvider.propTypes = {
  createChatBotMessage: PropTypes.func.isRequired,
  setState: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  state: PropTypes.object,
};

export default ActionProvider;
