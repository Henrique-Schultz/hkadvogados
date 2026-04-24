import emailjs from "@emailjs/browser";
import { useState } from "react";

function EntreEmContato() {
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
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-2xl font-semibold">HK Advogados</h1>

      <div className="flex flex-col gap-2 w-[200px] mt-5">
        {/* Nome */}
        <div className="flex flex-col text-xs w-full">
          <h3 className="mb-1">Nome</h3>
          <input
            name="name"
            value={form.name}
            type="text"
            onChange={handleChange}
            className="w-full h-[30px] px-2 rounded-md bg-[#1f202c] 
                       focus:outline-none focus:ring-2 focus:ring-[#3f415a]"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col text-xs w-full">
          <h3 className="mb-1">Email</h3>
          <input
            name="email"
            value={form.email}
            type="text"
            onChange={handleChange}
            className="w-full h-[30px] px-2 rounded-md bg-[#1f202c] 
                       focus:outline-none focus:ring-2 focus:ring-[#3f415a]"
          />
        </div>

        {/* Mensagem */}
        <div className="flex flex-col text-xs w-full">
          <h3 className="mb-1">Mensagem</h3>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full h-[120px] px-2 py-2 rounded-md bg-[#1f202c] 
                       text-xs resize-none
                       focus:outline-none focus:ring-2 focus:ring-[#3f415a]"
          />
        </div>
      </div>

      {/* Botão */}
      <button
        onClick={handleSend}
        className="mt-5 px-4 py-2 rounded-md 
                   hover:bg-[#2b2c3a] transition cursor-pointer"
      >
        Enviar
      </button>
    </div>
  );
}

export default EntreEmContato;
