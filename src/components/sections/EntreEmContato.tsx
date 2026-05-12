import emailjs from "@emailjs/browser";
import { useState } from "react";

function EntreEmContato() {
  const [toast, setToast] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    date: "",
    website: "",
  });

  const EMAIL_CONFIG = {
    service: "service_77ktvf8",
    template: "template_ablm3pf",
    key: "NmXQHU6G7U8xU_ceO",
  };

  const handleSend = () => {
    const attempts = Number(localStorage.getItem("contactAttempts")) || 0;

    const currentForm = {
      ...form,
      date: new Date().toLocaleString("pt-BR"),
    };

    // honeypot
    if (currentForm.website) {
      return;
    }

    // campos vazios
    if (!currentForm.name || !currentForm.email || !currentForm.message) {
      setToast("Por favor, preencha todos os campos.");

      setTimeout(() => {
        setToast("");
      }, 3000);
      return;
    }

    // limite
    if (attempts >= 3) {
      setToast("Limite de mensagens atingido.");
      setTimeout(() => {
        setToast("");
      }, 3000);
      return;
    }

    // email inválido
    if (!emailRegex.test(currentForm.email)) {
      setToast("Email inválido.");
      setTimeout(() => {
        setToast("");
      }, 3000);
      return;
    }

    emailjs
      .send(
        EMAIL_CONFIG.service,
        EMAIL_CONFIG.template,
        currentForm,
        EMAIL_CONFIG.key,
      )
      .then(() => {
        localStorage.setItem("contactAttempts", String(attempts + 1));

        setToast("Email enviado!");

        setTimeout(() => {
          setToast("");
        }, 3000);

        setForm({
          name: "",
          email: "",
          message: "",
          date: "",
          website: "",
        });
      })
      .catch(() => {
        alert("Erro ao enviar email");
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
      {toast && (
        <div
          className="
        fixed top-2 
        bg-[var(--cream)]
        text-[var(--dark-blue)]
        px-6 py-4
        rounded-2xl
        shadow-2xl
        border border-[var(--gold)]
        text-[1.4rem]
        z-50
        animate-fade-in
      "
        >
          {toast}
        </div>
      )}

      <div
        id="contato"
        className="w-full flex items-center flex-col bg-[var(--cream)]  py-20 px-12 md:px-16 lg:px-32"
      >
        {/* Título */}
        <div className="w-full flex flex-col md:w-[80%] items-center">
          <h2
            className="w-fit md:self-start self-center border-b border-[var(--dark-blue)] pb-6
                   text-4xl md:text-5xl  font-bold text-[var(--dark-blue)]"
          >
            Entre em contato conosco
          </h2>

          {/* GRID */}
          <div
            className="mt-12 grid grid-cols-1 gap-8
                   md:grid-cols-2 w-full px-6"
          >
            {/* COLUNA ESQUERDA */}
            <div className="flex flex-col gap-6">
              {/* Nome */}
              <div className="flex flex-col">
                <input
                  type="text"
                  name="website"
                  className="hidden"
                  value={form.website}
                  onChange={handleChange}
                />
                <label className="text-2xl font-medium text-[var(--dark-blue)]">
                  Nome
                </label>

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Digite seu nome aqui..."
                  className="mt-3 w-full rounded-3xl bg-[var(--cream)]
                         px-8 py-7 text-2xl
                         text-[var(--dark-blue)]
                         placeholder:text-gray-500
                         shadow-[inset_0_0px_8px_1px_rgba(0,0,0,0.15)]
                         focus:outline-none"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="text-2xl font-medium text-[var(--dark-blue)]">
                  Email
                </label>

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="nome@email.com.br"
                  className="mt-3 w-full rounded-3xl bg-[var(--cream)]
                         px-8 py-7 text-2xl
                         text-[var(--dark-blue)]
                         placeholder:text-gray-500
                         shadow-[inset_0_0px_8px_1px_rgba(0,0,0,0.15)]
                         focus:outline-none"
                />
              </div>
            </div>

            {/* COLUNA DIREITA */}
            <div className="flex flex-col">
              <label className="text-2xl font-medium text-[var(--dark-blue)]">
                Mensagem
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Deixe sua mensagem aqui..."
                className="mt-3 min-h-[220px] w-full resize-none rounded-3xl
                       bg-[var(--cream)] px-8 py-7
                       text-2xl
                       text-[var(--dark-blue)]
                       placeholder:text-gray-500
                       shadow-[inset_0_0px_8px_1px_rgba(0,0,0,0.15)]
                       focus:outline-none"
              />
            </div>
          </div>

          {/* BOTÃO */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleSend}
              className="rounded-full bg-[var(--gold)]
                     px-8 py-4
                     text-2xl
                     font-bold text-white
                     transition hover:opacity-90"
            >
              Enviar mensagem
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EntreEmContato;
