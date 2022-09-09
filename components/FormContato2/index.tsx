
import styles from "./styles.module.scss";

export function FormContato2() {
  return (
    <>

      <div className={styles.section}>

        <div className={styles.conteudo}>
          <div className={styles.linha}>
          </div>
          <h1>Baixe o material<br /> Gratuitamente</h1>
        </div>


      </div>
      <form className={styles.form}>
        <div>
          <input type="email" name="email" placeholder="E-mail" />
        </div>
        <div>
          <input type="text" name="telefone" placeholder="Telefone" />
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
      <div className={styles.section}>
      </div>

    </>
  );
}