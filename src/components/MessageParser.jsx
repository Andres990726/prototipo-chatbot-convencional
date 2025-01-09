class MessageParser {
  constructor(actionProvider, stateRef) {
    this.actionProvider = actionProvider;
    this.stateRef = stateRef;
  }

  parse(message) {
    const trimmedMessage = message.trim();
    const { expectingID } = this.stateRef.current;

    if (expectingID) {
      if (/^\d+$/.test(trimmedMessage)) {
        this.actionProvider.handleIDInput(trimmedMessage);
      } else {
        this.actionProvider.handleInvalidID();
      }
      return;
    }

    if (
      trimmedMessage.toLowerCase().includes("cita") ||
      trimmedMessage.toLowerCase().includes("programar")
    ) {
      this.actionProvider.handleScheduleAppointment();
    } else if (trimmedMessage.toLowerCase().includes("consultar")) {
      this.actionProvider.handleViewAppointments();
    } else if (trimmedMessage.toLowerCase().includes("asesor")) {
      this.actionProvider.handleTalkToAdvisor();
    } else {
      this.actionProvider.handleUnknownMessage();
    }
  }
}

export default MessageParser;


