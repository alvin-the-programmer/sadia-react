import { useState, useEffect } from 'react';

const MessageItem = (props) =>{
    console.log(props.message);
    return <div>{props.message.alias} said {props.message.text}</div>

}

const MessageList = () =>{
    const [ messages, setMessages ] = useState([]);
    const [ color, setColor ] = useState('black');

    useEffect(() => {
      fetch('http://localhost:3001/api/messages').then(response => {
        return response.json();
      }).then((fetchedMessages) => {
          setMessages(fetchedMessages)
      });
    }, []);
    
    const messageItems = messages.map((msgObj) => <MessageItem message={msgObj} />);

    const style = {
      color: color
    }
    return <div style={style}>
      <button onClick={() => {setColor('blue')}}>On</button>
      <button onClick={() => {setColor('red')}}>Off</button>
      {messageItems}
    </div>
}

export default MessageList;