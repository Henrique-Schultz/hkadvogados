function Socios() {
  return (
    <div id="socios" className="flex flex-col w-full items-start justify-center gap-6 py-24 px-12 md:px-16 lg:px-32">
      <h1 className="text-4xl md:text-5xl font-semibold border-b border-white pb-2">
        Sócios
      </h1>

      <div className="flex flex-col w-full gap-16 mt-10">
        {/* Sócio 1 */}
        <div className="w-full overflow-hidden rounded-[32px] bg-gradient-to-r from-[#C9C6C3]/20 to-[#0d1b2a]/20">
          <div className="flex flex-col md:flex-row items-center md:items-stretch">
            <img
              className="w-full md:w-[320px] lg:w-[380px] object-cover"
              src="kras.png"
              alt="José Vitor Krás da Silva"
            />

            <div className="flex flex-col justify-center px-10 py-12 md:p-10">
              <h2 className="text-4xl font-bold">José Vitor Krás da Silva</h2>

              <h3 className="text-3xl font-thin mt-2">OAB/RS 127.047</h3>

              <p className="text-2xl leading-relaxed mt-6">
                Bacharel em Direito pela Universidade do Vale do Rio dos Sinos
                (UNISINOS). Pós-Graduado em Direito Empresarial pela Pontifícia
                Universidade Católica do Rio Grande do Sul (PUCRS). Curso de
                especialização em University of California - BERKELEY. Ampla
                experiência em Direito Tributário e Administrativo, atuando como
                Assessor de Desembargador, nas referidas áreas, no Tribunal de
                Justiça do Estado do Rio Grande do Sul (TJRS).
              </p>
            </div>
          </div>
        </div>

        {/* Sócio 2 */}
        <div className="w-full overflow-hidden rounded-[32px] bg-gradient-to-r from-[#C9C6C3]/20 to-[#0d1b2a]/20">
          <div className="flex flex-col md:flex-row items-center md:items-stretch">
            <img
              className="w-full md:w-[320px] lg:w-[380px] object-cover"
              src="hessel.png"
              alt="Pedro Jungblut Hessel"
            />

            <div className="flex flex-col justify-center px-10 py-12 md:p-10">
              <h2 className="text-4xl font-bold">Pedro Jungblut Hessel</h2>

              <h3 className="text-3xl  font-thin mt-2">OAB/RS 141.590</h3>

              <p className="text-2xl leading-relaxed mt-6">
                Bacharel em direito pela Pontifícia Universidade Católica do Rio
                Grande do Sul (PUCRS). Pós-Graduado em Direito Empresarial pela
                Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS).
                Curso Especialização em Planejamento Tributário para Médicos e
                Clínicas Médicas. Ampla experiência em Direito Tributário e
                Administrativo, atuando como Assessor de Desembargador, nas
                referidas áreas, no Tribunal de Justiça do Estado do Rio Grande
                do Sul (TJRS).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socios;
