import styles from "./styles.module.scss";
import { FormContato2 } from "../../FormContato2";

export function Materiais() {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <div className={styles.imgtop}>
        <div>
          <img className={styles.logo} src="images/RR-CONSULTORIA 2.png" />

          <div className={styles.conteudo}>
            <div className={styles.linha}></div>
            <h1>
            Regimento interno - As leis da sua empresa
            </h1>
            <p>
            Segundo um princípio básico do direito, não existe crime sem lei anterior que o defina. Partindo desse pressuposto foi criado o Regimento Interno, ou seja, um documento com as leis internas da sua empresa. 
            </p>
          </div>
        </div>
      </div>
      <div className={styles.imgtop1}>
        <div className={styles.lista}>
          <div>
            <iframe
              className={styles.iframes}
              src="https://www.youtube.com/embed/Y3TqZHsB9U8"
            />
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.conteudo2}>
          <div className={styles.linha}></div>
          <h1>O que você vai encontrar no Regimento interno?</h1>
          <p>
          Neste documento você vai definir tudo que pode ou não ser feito dentro da sua empresa, desde tolerância para atraso, pré requisitos básicos para contratação, tempo do contrato de experiência, boas práticas e proibições; Sem esquecer das punições aplicadas aos transgressores. Agora use esse modelo para fazer suas próprias edições e implantar em sua empresa.

          </p>
        </div>
      </div>

      <div className={styles.cards2}>
        
        <div className={styles.containercard}>
            <div>
          <img
            className={styles.imguser}
            src="/images/5a62fa28b237a3604464cf8bdd3a8677.png"
          />
          <div>

            <h2>Ivana 
Menezes</h2>
<h6>(Ivana Menezes Store)</h6>
          </div>
            </div>
          <div className={styles.cardContent}>
            <p>
            Antes do regimento interno não havia uma ordem e um controle dentro da minha empresa, depois de implementar ele, hoje temos boas práticas e condutas apropriadas pelas vendedoras e demais colaboradores das nossas lojas. 
            </p>
          </div>
        </div>  
      </div>

      <FormContato2 />
    </div>
  );
}