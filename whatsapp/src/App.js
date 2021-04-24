import React, { useEffect,useState } from 'react';
import './App.css';
import Sidebar from "./sidebar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {

  const [messages, setMessages] =  useState([]);

  useEffect(() =>{
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data);
    })
     
  },[])

 useEffect(() => {
  const pusher = new Pusher('28304548c54e8228763e', {
    cluster: 'ap2'
  });

  const channel = pusher.subscribe('messages');
  channel.bind('inserted', (data) => {
   // alert(JSON.stringify(data));
    setMessages([...messages,data])
  });

  return () => {
    channel.unbind_all();
    channel.unsubscribe(); 
  };

 }, [messages])

 console.log(messages);

 
  return (
    <div className="app">
      <  div className="app_body" >
        <Sidebar />
        <Chat messages={messages} />

      </div>




    </div>
  );
}

export default App;
