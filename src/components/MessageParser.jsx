import React from "react";
import PropTypes from "prop-types";

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

MessageParser.propTypes = {
  children: PropTypes.node.isRequired,
  actions: PropTypes.shape({
    handleIDInput: PropTypes.func.isRequired,
    handleInvalidID: PropTypes.func.isRequired,
    handleScheduleAppointment: PropTypes.func.isRequired,
    handleViewAppointments: PropTypes.func.isRequired,
    handleTalkToAdvisor: PropTypes.func.isRequired,
    handleUnknownMessage: PropTypes.func.isRequired,
  }).isRequired,
  state: PropTypes.shape({
    expectingID: PropTypes.bool,
  }).isRequired,
};

export default MessageParser;
