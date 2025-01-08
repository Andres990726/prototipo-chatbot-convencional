import { createChatBotMessage } from "react-chatbot-kit";
import OptionsWidget from "./OptionsWidget";

const config = {
  botName: "Asistente Médico",
  initialMessages: [
    createChatBotMessage(
      "¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte?"
    ),
  ],
  widgets: [
    {
      widgetName: "optionsWidget",
      widgetFunc: (props) => <OptionsWidget {...props} />,
    },
  ],
};

export default config;
