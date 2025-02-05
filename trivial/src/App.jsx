

// import React, { useState, useRef, useEffect } from "react";
// import axios from "axios";
// import { FaUser, FaRobot, FaPaperPlane } from "react-icons/fa";


// const API_KEY = "AIzaSyAI0tWfnyHrvidCjEnthr3I4x9Kr8uUz0I"; // 🔴 Reemplaza con tu API Key

// const Chat = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const sendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = { user: "You", text: input, isUser: true };
//     setMessages((prev) => [...prev, userMessage]);

//     try {
//       const response = await axios.post(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
//         {
//           contents: [{ parts: [{ text: input }] }],
//         },
//         {
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       const botText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No tengo respuesta.";
//       setMessages((prev) => [...prev, { user: "Gemini", text: botText, isUser: false }]);
//     } catch (error) {
//       console.error("Error con Gemini:", error);
//       setMessages((prev) => [...prev, { user: "Gemini", text: "Error al conectar con la API.", isUser: false }]);
//     }

//     setInput("");
//   };

//   return (
//     <div style={styles.chatContainer}>
//       <div style={styles.chatBox}>
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             style={{
//               ...styles.messageContainer,
//               flexDirection: msg.isUser ? "row-reverse" : "row",
//             }}
//           >
//             <div style={styles.avatar}>{msg.isUser ? <FaUser /> : <FaRobot />}</div>
//             <div
//               style={{
//                 ...styles.messageBubble,
//                 backgroundColor: msg.isUser ? "#dcf8c6" : "#fff",
//                 alignSelf: msg.isUser ? "flex-end" : "flex-start",
//               }}
//             >
//               <strong>{msg.user}:</strong> {msg.text}
//             </div>
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </div>
//       <div style={styles.inputContainer}>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//           placeholder="Escribe un mensaje..."
//           style={styles.input}
//         />
//         <button onClick={sendMessage} style={styles.sendButton}>
//           <FaPaperPlane />
//         </button>
//       </div>
//     </div>
//   );
// };

// // 🎨 Estilos para el chat estilo WhatsApp
// const styles = {
//   chatContainer: {
//     maxWidth: "400px",
//     margin: "20px auto",
//     fontFamily: "Arial, sans-serif",
//     border: "1px solid #ddd",
//     borderRadius: "10px",
//     overflow: "hidden",
//     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//   },
//   chatBox: {
//     padding: "10px",
//     height: "400px",
//     overflowY: "auto",
//     backgroundColor: "#e5ddd5",
//   },
//   messageContainer: {
//     display: "flex",
//     alignItems: "center",
//     marginBottom: "10px",
//   },
//   avatar: {
//     width: "30px",
//     height: "30px",
//     borderRadius: "50%",
//     backgroundColor: "#075E54",
//     color: "#fff",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     fontSize: "16px",
//     margin: "0 10px",
//   },
//   messageBubble: {
//     padding: "10px",
//     borderRadius: "10px",
//     maxWidth: "70%",
//     boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
//   },
//   inputContainer: {
//     display: "flex",
//     padding: "10px",
//     backgroundColor: "#fff",
//   },
//   input: {
//     flex: 1,
//     padding: "10px",
//     border: "none",
//     borderRadius: "5px",
//     fontSize: "14px",
//     outline: "none",
//   },
//   sendButton: {
//     backgroundColor: "#25D366",
//     color: "white",
//     border: "none",
//     padding: "10px 15px",
//     borderRadius: "5px",
//     cursor: "pointer",
//     marginLeft: "5px",
//     fontSize: "16px",
//   },
// };

// export default Chat;

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FaUser, FaRobot, FaPaperPlane, FaCloudSun, FaTimes } from "react-icons/fa";

const GEMINI_API_KEY = "AIzaSyAI0tWfnyHrvidCjEnthr3I4x9Kr8uUz0I"; // 🔴 Reemplázala con tu API Key de Gemini
const WEATHER_API_KEY = "77a80a63b5c24af0b00a5b32790aeff0de"; // 🔴 API Key de Weatherbit

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const messagesEndRef = useRef(null);

  // 🔄 Scroll automático al nuevo mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 🔍 Detecta si el mensaje es sobre el clima
  const detectWeatherQuery = (text) => {
    const regex = /(clima|tiempo|temperatura|pronóstico) en ([a-zA-Záéíóúñü\s]+)/i;
    const match = text.match(regex);
    return match ? match[2].trim() : null;
  };

  // 🌦️ Llamada a la API de Weatherbit
  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(`https://api.weatherbit.io/v2.0/current`, {
        params: { city, key: WEATHER_API_KEY, lang: "es" },
      });
      setWeatherData(response.data.data[0]);
      setShowModal(true);
    } catch (error) {
      console.error("Error obteniendo el clima:", error);
      setMessages((prev) => [...prev, { user: "Gemini", text: "No pude obtener el clima.", isUser: false }]);
    }
  };

  // 🤖 Llamada a la API de Gemini
  const fetchGeminiResponse = async (text) => {
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
        { contents: [{ parts: [{ text }] }] },
        { headers: { "Content-Type": "application/json" } }
      );

      const botText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No tengo respuesta.";
      setMessages((prev) => [...prev, { user: "Gemini", text: botText, isUser: false }]);
    } catch (error) {
      console.error("Error con Gemini:", error);
      setMessages((prev) => [...prev, { user: "Gemini", text: "Error al conectar con la API.", isUser: false }]);
    }
  };

  // 📨 Enviar mensaje y decidir qué hacer
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { user: "You", text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);

    const city = detectWeatherQuery(input);
    if (city) {
      await fetchWeather(city);
    } else {
      await fetchGeminiResponse(input);
    }

    setInput("");
  };

  return (
    <div style={styles.chatContainer}>
      <div style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.messageContainer,
              flexDirection: msg.isUser ? "row-reverse" : "row",
            }}
          >
            <div style={styles.avatar}>{msg.isUser ? <FaUser /> : <FaRobot />}</div>
            <div
              style={{
                ...styles.messageBubble,
                backgroundColor: msg.isUser ? "#dcf8c6" : "#fff",
                alignSelf: msg.isUser ? "flex-end" : "flex-start",
              }}
            >
              <strong>{msg.user}:</strong> {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Escribe un mensaje..."
          style={styles.input}
        />
        <button onClick={sendMessage} style={styles.sendButton}>
          <FaPaperPlane />
        </button>
      </div>

      {showModal && weatherData && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <button onClick={() => setShowModal(false)} style={styles.closeButton}>
              <FaTimes />
            </button>
            <h2>🌦️ Clima en {weatherData.city_name}</h2>
            <p><strong>🌡️ Temperatura:</strong> {weatherData.temp}°C</p>
            <p><strong>🌬️ Viento:</strong> {weatherData.wind_spd} m/s</p>
            <p><strong>💧 Humedad:</strong> {weatherData.rh}%</p>
            <p><strong>🌤️ Condición:</strong> {weatherData.weather.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

// 🎨 Estilos CSS
const styles = {
  chatContainer: { maxWidth: "400px", margin: "20px auto", fontFamily: "Arial", border: "1px solid #ddd", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" },
  chatBox: { padding: "10px", height: "400px", overflowY: "auto", backgroundColor: "#e5ddd5" },
  messageContainer: { display: "flex", alignItems: "center", marginBottom: "10px" },
  avatar: { width: "30px", height: "30px", borderRadius: "50%", backgroundColor: "#075E54", color: "#fff", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "16px", margin: "0 10px" },
  messageBubble: { padding: "10px", borderRadius: "10px", maxWidth: "70%", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)" },
  inputContainer: { display: "flex", padding: "10px", backgroundColor: "#fff" },
  input: { flex: 1, padding: "10px", border: "none", borderRadius: "5px", fontSize: "14px", outline: "none" },
  sendButton: { backgroundColor: "#25D366", color: "white", border: "none", padding: "10px 15px", borderRadius: "5px", cursor: "pointer", marginLeft: "5px", fontSize: "16px" },
  modalOverlay: { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", alignItems: "center", justifyContent: "center" },
  modalContent: { background: "#fff", padding: "20px", borderRadius: "10px", textAlign: "center" },
  closeButton: { position: "absolute", top: "10px", right: "10px", background: "transparent", border: "none", cursor: "pointer" },
};

export default Chat;
