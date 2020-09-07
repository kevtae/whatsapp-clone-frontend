import React, {useEffect, useState} from 'react';
import Sidebar from './component/sidebar.component.jsx';
import Chat from './component/chat.component.jsx';
import Pusher from 'pusher-js'
import axios from './axios'
import "./App.css"

function App() {
  const [messages,setMessages] = useState([]);

  useEffect(()=> {
    axios.get("/message/sync")
      .then(response => {
        setMessages(response.data);
      })
  }, []);

  useEffect (()=>{
    const pusher = new Pusher('26b8f7a5668d1c7a2d53', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      setMessages([...messages,data])
    });
    
    //only have one subscriber - constantly adding new listener 
    return ()=> {
      channel.unbind_all();
      channel.unsubscribe()
    }
  },[messages]);

  console.log(messages)

  return (
    <div className="App">
      <div className="App__body">
      <Sidebar/>
      <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
