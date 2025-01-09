import React from "react";

const MessageParser = ({ children, actions, state }) => {
  const parse = (message) => {
    const trimmedMessage = message.trim();
    if (state.expectingID) {
      if (/^\d+$/.test(trimmedMessage)) {
        actions.handleIDInput(trimmedMessage);
      } else {
        actions.handleInvalidID();
      }
      return;
    }
    if (
      trimmedMessage.toLowerCase().includes("cita") ||
      trimmedMessage.toLowerCase().includes("programar")
    ) {
      actions.handleScheduleAppointment();
    } else if (trimmedMessage.toLowerCase().includes("consultar")) {
      actions.handleViewAppointments();
    } else if (trimmedMessage.toLowerCase().includes("asesor")) {
      actions.handleTalkToAdvisor();
    } else {
      actions.handleUnknownMessage();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
