// 17. Aplicar efectos condicionales con map
// Muestra una lista de mensajes con un useEffect que actualice el color de fondo cuando cambie el usuario que está hablando.

import  { useState, useEffect } from 'react';


const Ejercicio17 = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hola, ¿cómo estás?', sender: 'Usuario 1' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [currentUser, setCurrentUser] = useState('Usuario 2'); 
  const [backgroundColor, setBackgroundColor] = useState('#f3f2f1'); 


  useEffect(() => {
    if (currentUser === 'Usuario 1') {
      setBackgroundColor('#0078d4'); 
    } else {
      setBackgroundColor('#f3f2f1'); 
    }
  }, [currentUser]);


  const handleAddMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: newMessage,
          sender: currentUser,
        },
      ]);
      setNewMessage('');
      setCurrentUser(currentUser === 'Usuario 1' ? 'Usuario 2' : 'Usuario 1');
    }
  };

  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  return (
    <div style={{
      backgroundColor,
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '20px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        height: '80vh',
        overflowY: 'auto',
      }}>
        <div style={{
          marginBottom: '20px',
          padding: '10px',
          fontSize: '24px',
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#333',
        }}>
          Chat de equipo
        </div>

        <div style={{
          maxHeight: 'calc(100% - 120px)',
          overflowY: 'scroll',
        }}>
          {messages.map((message) => (
            <div
              key={message.id}
              style={{
                display: 'flex',
                justifyContent: message.sender === 'Usuario 1' ? 'flex-start' : 'flex-end',
                marginBottom: '10px',
                animation: 'fadeIn 0.5s ease',
              }}
            >
              <div
                style={{
                  padding: '12px',
                  borderRadius: '20px',
                  backgroundColor: message.sender === 'Usuario 1' ? '#0078d4' : '#f3f2f1',
                  color: message.sender === 'Usuario 1' ? '#fff' : '#000',
                  maxWidth: '60%',
                  wordBreak: 'break-word',
                  fontSize: '16px',
                  fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
                  boxShadow: message.sender === 'Usuario 1' ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
                }}
              >
                <strong>{message.sender}: </strong>
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', marginTop: '20px' }}>
          <input
            type="text"
            value={newMessage}
            onChange={handleInputChange}
            style={{
              width: '80%',
              padding: '10px',
              borderRadius: '20px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
            placeholder="Escribe un mensaje..."
          />
          <button
            onClick={handleAddMessage}
            style={{
              width: '18%',
              marginLeft: '10px',
              padding: '10px',
              backgroundColor: '#0078d4',
              color: '#fff',
              borderRadius: '20px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ejercicio17;
