import { createChatBotMessage } from "react-chatbot-kit";
import {
  EndOptions,
  LocationOptions,
  PatientOptions,
  ServiceOptions,
  TaskOptions,
  TimeOptions,
} from "./OptionsWidget";

const config = {
  botName: "Asistente Médico",
  initialMessages: [
    createChatBotMessage(
      "¡Hola! Soy tu asistente virtual. Estoy aquí para ayudarte con tus servicios médicos. ¿Qué necesitas hoy?",
      {
        widget: "taskOptions",
      }
    ),
  ],
  state: {
    expectingID: false, // Nueva bandera para controlar la solicitud de cédula
  },
  widgets: [
    {
      widgetName: "taskOptions",
      widgetFunc: (props) => <TaskOptions {...props} />, // Opciones iniciales
    },
    {
      widgetName: "patientOptions",
      widgetFunc: (props) => <PatientOptions {...props} />, // Opciones para quién es la cita
    },
    {
      widgetName: "serviceOptions",
      widgetFunc: (props) => <ServiceOptions {...props} />, // Opciones de servicio médico
    },
    {
      widgetName: "locationOptions",
      widgetFunc: (props) => <LocationOptions {...props} />, // Opciones de ubicación
    },
    {
      widgetName: "timeOptions",
      widgetFunc: (props) => <TimeOptions {...props} />, // Opciones de horarios
    },
    {
      widgetName: "endOptions",
      widgetFunc: (props) => <EndOptions {...props} />, // Opciones para finalizar
    },
  ],
};

export default config;
