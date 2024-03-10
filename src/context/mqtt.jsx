import { createContext } from "react";
import { useMqtt } from "../hooks/useMqtt";

const MqttContext = createContext(null);

function MqttProvider({ children }) {
  const mqtt =  useMqtt();
  return(<MqttContext.Provider value={mqtt}>{children}</MqttContext.Provider>);
}

export { MqttProvider,MqttContext}