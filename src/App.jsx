import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "./components/Config";
import MessageParser from "./components/MessageParser";
import ActionProvider from "./components/ActionProvider";

function App() {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default App;
