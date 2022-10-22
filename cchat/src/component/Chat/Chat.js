import React, { useEffect, useState } from 'react'
import {user} from "../Join/Join";
import socketIO from "socket.io-client";
import "./Chat.css";
import sendLogo from "../../images/send.png"
import Message from '../Message/Message';

const ENDPOINT = "http://localhost:4500/";
let socket;
const Chat = () => {

    const [id, setId] = useState("");
    const [messages, setMessages] = useState([1,2,3,4])

    const send = ()=>{
      const message = document.getElementById('chatInput').value;
      socket.emit('message',{message,id});
      document.getElementById('chatInput').value = "";
    }
   
    useEffect(() => {
        socket = socketIO(ENDPOINT, {transports:['websocket']});

        socket.on("connect",()=>{
          alert("sss");
          setId(socket.id);
        })
        socket.emit('joined',{user});
        socket.on('welcome',(data)=>{
          console.log(data.user,data.message);
        });
        socket.on("userJoined",(data)=>{
          console.log(data.user, data.message);
        });
        socket.on('leave', (data)=>{
          console.log(data.user, data.message);
        })
        return () => {
          socket.disconnect();
          socket.off();
        }
    }, []);

    useEffect(() => {
      
      socket.on('sendMessage',(data)=>{
        console.log(data.user,data.message,data.id);
      })
    
      return () => {
       
      }
    }, [])
    
    

  return (
    <div className='chatPage'>
        <div className='chatContainer'>
            <div className='header'></div>
            <div className='chatBox'>
              <Message message={messages} />
            </div>
            <div className='inputBox'>
              <input type="text" name="name" id="chatInput" />
              <button onClick={send} className='sendBtn'><img src={sendLogo} alt="Send" /></button>    
            </div>
        </div>
    </div>
  )
}

export default Chat;