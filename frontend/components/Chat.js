import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input) return;
    const newMessage = { text: input };
    setMessages([...messages, newMessage]);
    setInput('');
    // Placeholder: send to backend or AI service
  };

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((m, idx) => (
          <div key={idx} className="message">{m.text}</div>
        ))}
      </div>
      <div className="input-area">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
