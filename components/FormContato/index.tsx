import Image from "next/image";
import styles from "./styles.module.scss";
import {BsWhatsapp} from 'react-icons/bs'
export function FormContato() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logoDiv}>
          <Image
            src="/images/logo/logocontato2.png"
            alt="logo"
            layout="intrinsic"
            width={218}
            height={167}
          />
          <br />
          <Image
            className={styles.line}
            src="/images/line.png"
            alt="logo"
            layout="intrinsic"
            width={185}
            height={14.5}
          />
          <br />
          <h1>
            Formulário
            <br /> de contato
          </h1>
        </div>

        <br />

        <form className={styles.form}>
          <div>
            <input type="text" name="nome" placeholder="Nome" />
          </div>
          <div>
            <input type="email" name="email" placeholder="E-mail" />
          </div>
          <div>
            <input type="text" name="telefone" placeholder="Telefone" />
          </div>
          <div>
            <textarea placeholder="Digite seu texto" />
          </div>
          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
        <div className={styles.info}>
          <h1 className={styles.h1Desk}>Se preferir fale conosco</h1>
          <h1 className={styles.h1Mobile}>
            Se preferir fale conosco
          </h1>
          <br />
          <h3>
            <span>
              <BsWhatsapp></BsWhatsapp>
            </span>
            62 99917-8787
          </h3>
          <br />
        </div>
      </div>
    </>
  );
}