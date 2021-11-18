import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://137.194.157.53:4000";

function Socket() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("init", data => {
      setResponse(data.message);
    });
  }, []);

  return (
    <p>
      {response}
    </p>
  );
}

export default Socket;