import React, { useEffect } from 'react'
import {user} from "../Join/Join";
import socketIO from "socket.io-client";
import "./Chat.css";
import sendLogo from "../../images/send.png"

const ENDPOINT = "http://localhost:4500/";

const Chat = () => {

    const socket = socketIO(ENDPOINT, {transports:['websocket']});
    
    useEffect(() => {
        socket.on("connect",()=>{
            alert("hiiiiiiiiii");
        })
        socket.emit('joined',{user})
        return () => {
          
        }
    }, [])
    

  return (
    <div className='chatPage'>
        <div className='chatContainer'>
            <div className='header'></div>
            <div className='chatBox'></div>
            <div className='inputBox'>
              <input type="text" name="name" id="chatInput" />
              <button className='sendBtn'><img src={sendLogo} alt="Send" /></button>    
            </div>
        </div>
    </div>
  )
}

export default Chat;