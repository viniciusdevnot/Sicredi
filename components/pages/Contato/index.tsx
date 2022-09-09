import styles from "./styles.module.scss";

export function Contatos() {
  return (
    <>

      <div className={styles.info}>
        

      <div className={styles.linha1}> </div>
        <h1 className={styles.h1Desk}>Se preferir fale conosco</h1>
        <h1 className={styles.h1Mobile}>Entre em contato<br />com a gente</h1>
      </div>


      <form className={styles.form}>
        <div>
          <input type="email" name="email" placeholder="E-mail" />
        </div>
        <div>
          <input type="text" name="telefone" placeholder="Telefone" />
        </div>
        <div>
          <textarea placeholder="Digite seu texto"></textarea>
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>


      <div className={styles.info2}>
        <div className={styles.linha2}> </div>
          <h1 className={styles.h2Desk}>Onde Estamos</h1>
          <h1 className={styles.h2Mobile}>Onde estamos</h1>
        </div>
      <div className={styles.section2}>
        <img
          src="/images/MAPA_SITE_RR_page-0001-removebg-preview.png"
        />
      </div>
      <div className={styles.section3}>
        <div className={styles.cards}>
          <div className={styles.divs}>
            <div className={styles.image}>
              <img
                src="images/Rectangle 37.png"
              />
            </div>
            <div className={styles.textos}>
              <h1>Com Consultores</h1>
              <p>Goiás, Tocantins, Pará, São Paulo, Rio de Janeiro</p>
            </div>
          </div>



          <div className={styles.divs}>

            <div className={styles.image}>
              <img
                src="images/Rectangle 39 (1).png"

              />
            </div>
            <div className={styles.textos}>
              <h1>Com deslocamento</h1>
              <p>Todos os estados do Brasil;</p>

              <h1>Atendimento tele presencial</h1>
              <p>Todos os estados do Brasil</p>
            </div>

          </div>

        </div>


      </div>


    </>
  );
}