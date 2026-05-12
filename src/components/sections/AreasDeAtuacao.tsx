import AreaText from "../AreaText";

function AreasDeAtuacao() {
  return (
    <section
      id="areas-de-atuacao"
      className="flex flex-col w-full px-12 md:px-16 lg:px-32 md:py-40 py-20 text-white"
    >
      <h1 className="self-start border-b border-white pb-2 text-4xl md:text-5xl font-semibold">
        Áreas de Atuação
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-16 md:gap-x-16 md:gap-y-20 py-20">
        <AreaText
          title={
            <>
              Planejamento <br />
              Tributário
            </>
          }
          description="Avaliação diagnóstica dos riscos e oportunidades, atentando-se para os impactos da Reforma Tributária."
        />

        <AreaText
          title={
            <>
              Defesa em sede de
              <br />
              execução fiscal
            </>
          }
          description="Defesa do executado em sede de execução fiscal, com análise das nulidades do feito executivo, visando a extinção e a redução do montante devido."
        />
        <AreaText
          title={
            <>
              Recuperação de crédito para
              <br />
              indústrias e prestadores de serviços
            </>
          }
          description="Verificação de oportunidade de recuperação de créditos e redução da carga tributária para empresas."
        />

        <AreaText
          title={
            <>
              Equiparação
              <br />
              hospitalar
            </>
          }
          description="Verificação de oportunidade de redução da base de cálculo para Clínicas Médicas do Lucro Presumido."
        />

        <AreaText
          title={
            <>
              Recuperação de crédito para
              <br />
              bares e restaurantes
            </>
          }
          description="Redução da carga tributária e restituição de crédito tributário para empresas do setor, com base em tese consolidada nos Tribunais Federais."
        />

        <AreaText
          title={
            <>
              Isenção e Restituição de
              <br />
              Imposto de Renda
            </>
          }
          description="Auxílio na isenção e restituição de Imposto de Renda para aposentados e pensionistas portadores de moléstias graves."
        />
      </div>
    </section>
  );
}

export default AreasDeAtuacao;
