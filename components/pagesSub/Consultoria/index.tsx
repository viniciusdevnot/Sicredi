import styles from "./styles.module.scss";
import { SubVideo } from "../../SubVideo/subVideo";
import { useEffect } from "react";


export function Consultoria() {



  useEffect(() => {
    leiaMais();
  }, []);
  const leiaMais = () => {
    var pontos: any = document.getElementById("pontos");
    var maisTexto: any = document.getElementById("mais");
    var btnLeiaMais: any = document.getElementById("btnLeiaMais");

    if (pontos.style.display === "none") {
      pontos.style.display = "inline";
      maisTexto.style.display = "none";
      btnLeiaMais.innerHTML = "Leia Mais";
    } else {
      pontos.style.display = "none";
      maisTexto.style.display = "inline";
      btnLeiaMais.innerHTML = "Leia Menos";
    }
  };


  return (
    <>

      <div className={styles.imgtop}>
        <div>
          <img className={styles.logo} src="images/5466eb3e36054a7b81c321c2d14a8c49.png" />


        </div>
      </div>
      <div className={styles.conteudo}>
        <div className={styles.text1}>
          <div>
            <div className={styles.linha}></div>
            <h1>RR Consultoria</h1>
          </div>
        </div>
        <p className={styles.first}>
          Nossa consultoria é um serviço personalizado, onde enxergamos cada um de nossos clientes
          como sonhadores, estes com um único desejo, realizar seus sonhos de empreender e ter seu
          próprio negócio. E para que esse sonho não se torne um pesadelo, existe a RR CONSULTORIA,
          um serviço realizado por profissionais especializados com a finalidade levantar as necessidades
          do cliente, por meio de diagnósticos e processos, identificar as soluções, e então, propor ações
          de concepção ou de melhoria.
        </p>
        <div className={styles.lista}>
          <li>Consultoria novo negócio do ZERO a Operação</li>
          <li>Consultoria gastronômica
          </li>
          <li>Consultoria Financeira e Administrativa
          </li>
          <li>Consultoria Financeira e Administrativa
          </li>
          <li>Consultoria de Planejamento Estratégico
          </li>
          <li>Consultoria de Marketing e Vendas
          </li>

        </div>
      </div>
      <div className={styles.cards2}>
        <div className={styles.containercard}>
          <div className={styles.imguser}>
            <img src="images/iconesSub/CHAVE NA MA╠âO (1).png" alt="logo" />

          </div>
          <div className={styles.cardtitle}>
            <h2>RR chave na mão </h2>

          </div>

          <p>
            Nesse modelo de consultoria nós cuidamos de você desde
            a concepção da ideia, branding da marca, escolha do público
            alvo e dos produtos de venda, ponto comercial, projeto de arquitetura,
            construção do cardápio, layout da cozinha e salão, lista de equipamentos,
            lista de fornecedores e muito mais…
          </p>

        </div>
        <div className={styles.containercard}>
          <div className={styles.imguser}>
            <img src="images/iconesSub/Gestao administrativa.png" alt="logo" />

          </div>
          <div className={styles.cardtitle}>
            <h2>RR Gestão Administrativa </h2>

          </div>

          <p>
            Nessa consultoria nós vamos te ensinar como administrar o seu negócio,
            desde a simples apuração de resultados financeiros do negócio até a análise de KPIs ,
            indicadores de gestão e prevenção de problemas. Aqui você vai aprender se seu negócio
            é realmente lucrativo, e como acompanhar isso diariamente.
          </p>

        </div>
        <div className={styles.containercard}>
          <div className={styles.imguser}>
            <img src="images/iconesSub/Gesta╠âo Operacional.png" alt="logo" />

          </div>
          <div className={styles.cardtitle}>
            <h2>RR Gestão Operacional </h2>

          </div>

          <p>
            Nesta consultoria nós vamos te ensinar a operar seu negócio,
            desde os simples processos iniciais de abertura, recebimento
            de mercadorias, atendimento aos clientes, até o complexo processo
            de compras e gestão de estoques. Não importa qual seja o seu pesadelo,
            nós vamos destruí-lo.
          </p>

        </div>
        <div className={styles.containercard}>
          <div className={styles.imguser}>
            <img src="images/iconesSub/RR Gastronomia.png" alt="logo" />

          </div>
          <div className={styles.cardtitle}>
            <h2>RR Gastronomia</h2>

          </div>

          <p>
            Nessa consultoria nós vamos resolver todos os seus problemas relacionados
            ao mercado da gastronomia, desde a criação de produtos, fichas técnicas
            para precificação, treinamento de equipe de produção, redução de custos
            e desperdícios, prazos de validade, MANUAL DE BOAS PRÁTICAS, layout de
            cozinha e muito mais. Não importa qual seja o seu pesadelo, nós vamos
            destruí-lo.
          </p>

        </div>
        <div className={styles.containercard}>
          <div className={styles.imguser}>
            <img src="images/iconesSub/Franchising.png" alt="logo" />

          </div>
          <div className={styles.cardtitle}>
            <h2>RR Franchising </h2>

          </div>

          <p>
            Nessa consultoria nós vamos modelar e padronizar o seu negócio para que ele
            se torne uma Franquia, e você possa deixar de ser um operador de lojas para
            ser um FRANQUEADOR, onde seu negócio e controle de qualidade, controle de
            atendimento e expansão comercial da sua marca, e a operação será responsabilidade
            dos seus franqueados. Aqui você começa a sair do amadorismo e entrar no jogo de
            gente grande onde o profissionalismo é uma obrigação e não uma meta a longo prazo.
          </p>

        </div>
        <div className={styles.containercard}>
          <div className={styles.imguser}>
            <img src="images/iconesSub/Acessoria.png" alt="logo" />

          </div>
          <div className={styles.cardtitle}>
            <h2>RR Acessoria</h2>

          </div>
          <div className={styles.cardcontent}>
            <span>
              <p>
              Nossa assessoria é um serviço único, diferente de tudo que existe no mercado,
              onde nós auditamos todos os processos implantados em nossas consultorias,
              quinzenalemnte, e sempre que identificado por nossos consultores ou gerentes
              das unidades assessoradas, fazemos novos treinamentos para re-implantação de
              processos para novos colaboradores e ainda como se isso não fosse o bastante,
              você tem o contato direto
              </p>
              <span id="pontos">...</span>
              <span id="mais">   
              <p>
              
              
               com toda uma equipe de consultores especializados
              para tirar suas dúvidas
            
                e assessorar você nas decisões do dia a dia da sua empresa,
                de forma que você possa corrigir erros encontrados ou até mesmo expandir a sua marca
                com o apoio e conhecimento desses consultores.
                <b> Tipos de Assessoria:</b>
                SMAL - Sem Jurídico R$ 1.700,00 mensal
                Plus - Com Jurídico R$ 2.900,00 mensal

              </p>

              </span>
            </span>
            <button
              style={{
                fontFamily: "Poppins",
                borderWidth: 0,
                textDecoration: "underline",
              }}
              onClick={() => leiaMais()}
              id="btnLeiaMais"
            ></button>
          </div>
        </div>
      </div>
      <SubVideo />
    </>

  );
}