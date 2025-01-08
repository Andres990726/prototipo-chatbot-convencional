class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("cita")) {
      this.actionProvider.handleScheduleAppointment();
    } else if (lowerCaseMessage.includes("asesor")) {
      this.actionProvider.handleTalkToAgent();
    } else {
      const defaultMessage = this.actionProvider.createChatbotMessage(
        "Lo siento, no entendí eso. Por favor, selecciona una opción de la lista."
      );
      this.actionProvider.updateChatbotState(defaultMessage);
    }
  }
}

export default MessageParser;
