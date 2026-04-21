import { useState } from "react";
import "./App.css";
import emailjs from "@emailjs/browser";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    date: "",
  });

  const EMAIL_CONFIG = {
    service: "service_77ktvf8",
    template: "template_ablm3pf",
    key: "NmXQHU6G7U8xU_ceO",
  };

  const handleSend = () => {
    const currentForm = {
      ...form,
      date: new Date().toLocaleString("pt-BR"),
    };
    emailjs
      .send(
        EMAIL_CONFIG.service,
        EMAIL_CONFIG.template,
        currentForm,
        EMAIL_CONFIG.key,
      )
      .then(() => {
        alert("Email Enviado");
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div id="app">
        <h1>HK Advogados</h1>
        <div id="inputs">
          <div id="input-container">
            <h3>Nome</h3>
            <input
              name="name"
              value={form.name}
              type="text"
              onChange={handleChange}
            />
          </div>
          <div id="input-container">
            <h3>Email</h3>
            <input
              name="email"
              value={form.email}
              type="text"
              onChange={handleChange}
            />
          </div>
          <div id="input-container">
            <h3>Mensagem</h3>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </div>
        </div>
        <code id="link" onClick={handleSend}>
          Enviar
        </code>
      </div>
    </>
  );
}

export default App;
