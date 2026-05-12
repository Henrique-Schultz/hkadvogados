import { useGoToExternalLink } from "../../hooks/useGoToExternalLink";

function QuemSomos() {
  const { goToExternalLink } = useGoToExternalLink();
  return (
    <div
      id="quem-somos"
      className=" flex flex-col w-full items-start justify-center gap-12 py-24 md:pb-36 pb-20 px-12 md:px-16 lg:px-32 text-white/85"
    >
      <h1 className="text-4xl md:text-5xl font-semibold border-b border-white pb-2 text-white">
        Quem somos
      </h1>

      <div className="md:mt-10 flex flex-col md:flex-row items-start gap-10 md:gap-36 text-3xl leading-snug">
        <p>
          Somos um escritório de advocacia especializado em Direito Tributário,
          comprometido em oferecer{" "}
          <span className="font-bold text-white">
            soluções estratégicas, seguras e personalizadas para empresas e
            pessoas físicas.
          </span>{" "}
          Atuamos com excelência técnica e visão prática, auxiliando nossos
          clientes a{" "}
          <span className="font-bold text-white">navegar com confiança</span> em
          um sistema tributário complexo e em constante transformação.
        </p>

        <p>
          Nossa equipe é formada por profissionais altamente qualificados, com
          experiência em{" "}
          <span className="font-bold text-white">
            consultoria, planejamento tributário, contencioso administrativo e
            judicial
          </span>
          . Trabalhamos de forma{" "}
          <span className="font-bold text-white">próxima e transparente</span>,
          entendendo as particularidades de cada cliente para desenvolver
          estratégias eficientes que visem a{" "}
          <span className="font-bold text-white">
            redução de riscos e a otimização da carga tributária
          </span>
          , sempre em conformidade com a legislação vigente.
        </p>
      </div>

      <div className="mt-14 md:w-[65%] self-center rounded-[18px] border border-white md:px-12 px-8 py-8 text-3xl leading-relaxed font-normal">
        Nosso compromisso é entregar resultados com{" "}
        <span className="font-bold text-white">
          ética, responsabilidade e excelência
        </span>
        , construindo relações de confiança duradouras com nossos clientes.
      </div>

      <div className="mt-12 flex md:flex-row self-center items-center gap-6 md:gap-12">
        <h2 className="text-3xl font-semibold md:w-fit w-24 text-[var(--gold-hover)]">
          Nossas redes:
        </h2>

        <div className="flex flex-wrap justify-center gap-4 text-2xl md:text-xl  font-semibold text-[var(--dark-blue)]">
          <button
            onClick={() =>
              goToExternalLink("https://www.linkedin.com/company/hessel-krás/")
            }
            className="flex rounded-full bg-[var(--gold)] md:px-6 md:py-3 w-20 h-20 items-center justify-center md:w-fit md:h-fit transition hover:bg-[var(--gold-hover)]"
          >
            <svg
              className="md:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
            >
              <path
                d="M17.8 7.78534C19.7095 7.78534 21.5409 8.50022 22.8911 9.77272C24.2414 11.0452 25 12.7711 25 14.5707V22.4869H20.2V14.5707C20.2 13.9708 19.9471 13.3955 19.497 12.9714C19.0469 12.5472 18.4365 12.3089 17.8 12.3089C17.1635 12.3089 16.553 12.5472 16.1029 12.9714C15.6528 13.3955 15.4 13.9708 15.4 14.5707V22.4869H10.6V14.5707C10.6 12.7711 11.3585 11.0452 12.7088 9.77272C14.0591 8.50022 15.8904 7.78534 17.8 7.78534Z"
                fill="black"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.8 8.91632H1V22.487H5.8V8.91632Z"
                fill="black"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.4 5.52357C4.72548 5.52357 5.8 4.51093 5.8 3.26178C5.8 2.01264 4.72548 1 3.4 1C2.07452 1 1 2.01264 1 3.26178C1 4.51093 2.07452 5.52357 3.4 5.52357Z"
                fill="black"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="hidden md:block">Linkedin</p>
          </button>

          <button
            onClick={() =>
              goToExternalLink("mailto:contato@hkadvogados.com.br")
            }
            className="flex rounded-full bg-[var(--gold)] md:px-6 md:py-3 w-20 h-20 items-center justify-center md:w-fit md:h-fit transition hover:bg-[var(--gold-hover)]"
          >
            <svg
              className="md:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="24"
              viewBox="0 0 29 24"
              fill="none"
            >
              <path
                d="M3.9375 1.3125H24.9375C26.3813 1.3125 27.5625 2.49375 27.5625 3.9375V19.6875C27.5625 21.1313 26.3813 22.3125 24.9375 22.3125H3.9375C2.49375 22.3125 1.3125 21.1313 1.3125 19.6875V3.9375C1.3125 2.49375 2.49375 1.3125 3.9375 1.3125Z"
                stroke="black"
                stroke-width="2.625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M27.5625 3.9375L14.4375 13.125L1.3125 3.9375"
                stroke="black"
                stroke-width="2.625"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="hidden md:block">Email</p>
          </button>

          <button
            onClick={() => goToExternalLink("https://wa.me/5551999041110")}
            className="flex rounded-full bg-[var(--gold)] md:px-6 md:py-3 w-20 h-20 items-center justify-center md:w-fit md:h-fit transition hover:bg-[var(--gold-hover)]"
          >
            <svg
              className="md:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M26.9875 6.95583C25.6885 5.64415 24.1415 4.60411 22.4365 3.89634C20.7315 3.18857 18.9027 2.82721 17.0567 2.83333C9.32167 2.83333 3.01751 9.1375 3.01751 16.8725C3.01751 19.3517 3.66917 21.76 4.88751 23.885L2.90417 31.1667L10.3417 29.2117C12.3958 30.3308 14.705 30.9258 17.0567 30.9258C24.7917 30.9258 31.0958 24.6217 31.0958 16.8867C31.0958 13.1325 29.6367 9.605 26.9875 6.95583ZM17.0567 28.5458C14.96 28.5458 12.9058 27.9792 11.1067 26.9167L10.6817 26.6617L6.26167 27.8233L7.43751 23.5167L7.15418 23.0775C5.98903 21.2175 5.37049 19.0673 5.36917 16.8725C5.36917 10.4408 10.6108 5.19916 17.0425 5.19916C20.1592 5.19916 23.0917 6.4175 25.2875 8.6275C26.375 9.70964 27.2367 10.9969 27.8228 12.4147C28.4089 13.8325 28.7076 15.3525 28.7017 16.8867C28.73 23.3183 23.4883 28.5458 17.0567 28.5458ZM23.46 19.8192C23.1058 19.6492 21.3775 18.7992 21.0658 18.6717C20.74 18.5583 20.5133 18.5017 20.2725 18.8417C20.0317 19.1958 19.3658 19.9892 19.1675 20.2158C18.9692 20.4567 18.7567 20.485 18.4025 20.3008C18.0483 20.1308 16.915 19.7483 15.5833 18.5583C14.535 17.6233 13.8408 16.4758 13.6283 16.1217C13.43 15.7675 13.6 15.5833 13.7842 15.3992C13.94 15.2433 14.1383 14.9883 14.3083 14.79C14.4783 14.5917 14.5492 14.4358 14.6625 14.2092C14.7758 13.9683 14.7192 13.77 14.6342 13.6C14.5492 13.43 13.8408 11.7017 13.5575 10.9933C13.2742 10.3133 12.9767 10.3983 12.7642 10.3842H12.0842C11.8433 10.3842 11.475 10.4692 11.1492 10.8233C10.8375 11.1775 9.93084 12.0275 9.93084 13.7558C9.93084 15.4842 11.1917 17.1558 11.3617 17.3825C11.5317 17.6233 13.8408 21.165 17.3542 22.6808C18.19 23.0492 18.8417 23.2617 19.3517 23.4175C20.1875 23.6867 20.9525 23.6442 21.5617 23.5592C22.2417 23.46 23.6442 22.7092 23.9275 21.8875C24.225 21.0658 24.225 20.3717 24.1258 20.2158C24.0267 20.06 23.8142 19.9892 23.46 19.8192Z"
                fill="black"
              />
            </svg>
            <p className="hidden md:block">Whatsapp</p>
          </button>
          <button
            onClick={() =>
              goToExternalLink(
                "https://www.instagram.com/hk_advogados?igsh=aTZ1YXU5YW05ajhh&utm_source=qr",
              )
            }
            className="flex rounded-full bg-[var(--gold)] md:px-6 md:py-3 w-20 h-20 items-center justify-center md:w-fit md:h-fit transition hover:bg-[var(--gold-hover)]"
          >
            <svg
              className="md:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="31"
              viewBox="0 0 32 31"
              fill="none"
            >
              <path
                d="M23.2 1.45001H8.69995C4.69589 1.45001 1.44995 4.50901 1.44995 8.28249V21.9474C1.44995 25.7209 4.69589 28.7799 8.69995 28.7799H23.2C27.204 28.7799 30.45 25.7209 30.45 21.9474V8.28249C30.45 4.50901 27.204 1.45001 23.2 1.45001Z"
                stroke="black"
                stroke-width="2.9"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.7499 14.2541C21.9289 15.3913 21.7227 16.5528 21.1609 17.5733C20.599 18.5938 19.71 19.4213 18.6203 19.9382C17.5306 20.4551 16.2957 20.635 15.0912 20.4524C13.8867 20.2697 12.7741 19.7338 11.9114 18.9209C11.0488 18.1079 10.4801 17.0593 10.2863 15.9242C10.0925 14.7891 10.2834 13.6253 10.8319 12.5984C11.3804 11.5714 12.2585 10.7336 13.3413 10.2041C14.4242 9.67458 15.6567 9.48033 16.8634 9.64897C18.0944 9.82099 19.234 10.3615 20.1139 11.1908C20.9938 12.02 21.5674 13.094 21.7499 14.2541Z"
                stroke="black"
                stroke-width="2.9"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23.925 7.59924H23.9395"
                stroke="black"
                stroke-width="2.9"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="hidden md:block">Instagram</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuemSomos;
