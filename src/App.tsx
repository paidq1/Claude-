import { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello 👋 I am your AI assistant." }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { role: "user", content: input },
      { role: "assistant", content: "This is a demo response 🤖" }
    ];

    setMessages(newMessages);
    setInput("");
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <h2>AI Chat</h2>

      <div style={{ minHeight: 300, border: "1px solid #ccc", padding: 10 }}>
        {messages.map((msg, i) => (
          <p key={i}>
            <b>{msg.role}:</b> {msg.content}
          </p>
        ))}
      </div>

      <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1 }}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
