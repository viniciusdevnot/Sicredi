import styles from "./styles.module.scss";
import { SubVideo } from "../../SubVideo/subVideo";

export function Assesoria() {
  return (
    <>
      <div className={styles.imgtop}>
        <div>
          <img
            className={styles.logo}
            src="images/c7a3ddb649527b96767f911a7da4b83f.png"
          />
        </div>
      </div>
      <div className={styles.conteudo}>
        <div className={styles.text1}>
          <div>
            <div className={styles.linha}></div>
            <h1>RR Assesoria</h1>
          </div>
        </div>
        <p className={styles.first}>
          Nossa assessoria é um serviço único, diferente de tudo que existe no
          mercado, onde nós auditamos todos os processos implantados em nossas
          consultorias, quinzenalemnte, e sempre que identificado por nossos
          consultores ou gerentes das unidades assessoradas, fazemos novos
          treinamentos para re-implantação de processos para novos colaboradores
          e ainda como se isso não fosse o bastante, você tem o contato direto
          com toda uma equipe de consultores especializados para tirar suas
          dúvidas e assessorar você nas decisões do dia a dia da sua empresa, de
          forma que você possa corrigir erros encontrados ou até mesmo expandir
          a sua marca com o apoio e conhecimento desses consultores.
        </p>
        <div className={styles.ultimotitulo}>
          <h1 className={styles.h1Desk1}>Tipos de Assessoria:</h1>
          <h1 className={styles.h1Mobile1}>Tipos de Assessoria:</h1>
        </div>
        <p className={styles.first1}>
          SMAL - Sem Jurídico R$ 1.700,00 mensal <br></br>
          Plus - Com Jurídico R$ 2.900,00 mensal
        </p>
      </div>
      <SubVideo />
    </>
  );
}
