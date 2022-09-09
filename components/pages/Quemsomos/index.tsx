import styles from "./styles.module.scss";

export function Quem() {
  return (
    <>
      <div className={styles.bg} />

      <div className={styles.conteudo}>
        <div className={styles.linha}></div>
        <h1 className={styles.h1Desk}>Quem Somos</h1>
        <h1 className={styles.h1Mobile}>
          Quem
          <br />
          Somos
        </h1>
        <p className={styles.first}>
          A mais ou menos 20 anos atrás, eu Rennan Ribeiro ainda muito jovem,
          sem saber como seria o meu futuro, resolvi me aventurar no negócio da
          família, um restaurante. Chegando lá eu tinha certeza que iria
          trabalhar no atendimento, direto com o público, no entanto, fui
          surpreendido pelo meu avô Joaquim Ribeiro Filho mais conhecido como
          Sr. Ribeiro, ele me colocou para trabalhar na cozinha, depois no bar,
          depois no caixa e só depois de tudo isso eu finalmente cheguei no
          atendimento. E por que eu estou te contando tudo isso? Por que foi
          nesse momento, na minha juventude, que eu descobri a minha verdadeira
          vocação (missão de vida), sabe qual é? AJUDAR PESSOAS.{" "}
        </p>

        <p>
          Trabalhando nesse ramo desde muito jovem, em 2009 após um fatídico
          infarto sofrido pelo meu pai Joaquim Ribeiro Neto, eu resolvi me
          aventurar no ramo do empreendedorismo, fundando a PhR Consultoria e
          Assessoria Empresarial (www.phamiliaribeiro.com.br) para que meu pai,
          pois após o infarto, ele foi desligado de um grande grupo empresarial
          carioca e se viu sem amparo profissional. Naquele momento eu fiz uma
          pergunta? Por que nós não trabalhamos para nós mesmos? Ele ainda sem
          acreditar e sem saber como concordou comigo e ali iniciamos nossa
          trajetória para ajudar donos de restaurantes a melhorar sua gestão,
          maximizar seus lucros e reduzir seus custos.
        </p>

        <p>
          Após 12 anos, acumulamos mais de 500 empresas (bares e restaurantes)
          atendidas com a PhR, porém meu coração ainda clamava por algo mais,
          ajudar mais pessoas de formas diferentes, foi aí que eu comecei meu
          projeto solo o GRUPO RR ACESS, empresa fundada para ser não somente
          uma consultoria mas um amparo total para os empresários do Brasil,
          aqui nós conseguimos incluir CONSULTORIA, ASSESSORIA, TERCEIRIZAÇÃO,
          CONTABILIDADE, SISTEMA OPERACIONAL, MARKETING E JURÍDICO. Tudo em um
          só lugar, e o melhor, com uma metodologia que eu chamo de GESTÃO
          ANTIFRÁGIL, onde mesmo no caos e no problema, nós conseguimos fazer
          com que nossos clientes cresçam.{" "}
        </p>

        <p>
          Um pouco longa, um pouco dramática, mas essa é a verdadeira história
          de como nasceu o Grupo RR ACESS um empresa em homenagem a ele Joaquim
          Ribeiro Filho meu avô, meu ídolo, meu exemplo de vida que saiu do
          ceará na década de 60 sem ter o que comer e construiu um grande grupo
          empresarial no RJ, mesmo eu não tendo herdado nada dele, ele me deu o
          meu maior patrimônio, meu conhecimento nesse mercado e a vontade de
          ajudar o próximo. OBRIGADO VOVÔ POR TUDO QUE ME ENSINOU, e obrigado a
          cada um dos loucos que escolheu fazer parte desse time RR, time de
          pessoas apaixonadas por resolver problemas e isso é o que faz de nós,
          uma empresa indispensável para nossos clientes.{" "}
        </p>

        <div className={styles.text1}>
          <h1 className={styles.colortext}>
            {" "}
            Existimos para <b>realizar sonhos</b>, sem que eles se tornem
            pesadelos!
          </h1>
        </div>
      </div>
    </>
  );
}
