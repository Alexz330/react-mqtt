import React, { useContext, useEffect } from "react";
import HookMqtt from "./components/Hook/";
import { MainLayout } from "./layout";

import "./App.css";
import { MqttContext } from "./context/mqtt";

import { conf } from "./constans/mqtt";
function App() {
  const { mqttConecct,connectStatus } = useContext(MqttContext);
  useEffect(() => {
    const url = `${conf.protocol}://${conf.host}:${conf.port}/mqtt`;

    mqttConecct(url, {
      clientId: "emqx_react_" + Math.random().toString(16).substring(2, 8),
      username:conf.username,
      password:conf.password,
      clean: true,
      reconnectPeriod: 1000, // ms
      connectTimeout: 30 * 1000, // ms
    });
  }, []);
  return (
    <div className="App">
      <MainLayout><HookMqtt />{connectStatus}</MainLayout>
    </div>
  );
}

export default App;
