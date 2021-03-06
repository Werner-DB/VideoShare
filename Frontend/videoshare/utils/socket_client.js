import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import Ext_Message from "../components/extmessage";
import Int_Message from "../components/intmessage";
const ENDPOINT = "http://localhost:4000";

function MsgList() {
  const [messages, setMessages]=useState();
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("init", data => {
      console.log(data.body);
      setMessages(prevId=> prevId=data.body.map((elt)=>{
        if (elt.sender=="Mac McMaggan") {
          return(Int_Message(elt));
          
        } else {
          return (Ext_Message(elt))
          
        }
        
        }));
    });
  }, []);

  return (
    <div>
      
      <ul>{messages}</ul>
      
    </div>
  );
}

export default MsgList;