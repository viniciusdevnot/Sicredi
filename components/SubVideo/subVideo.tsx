import styles from "./styles.module.scss";
import { AiOutlineYoutube } from 'react-icons/ai'


export function SubVideo() {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.titlevideo}>
            <h1 className={styles.h1Desk}>
              <div className={styles.linha}></div>Vídeos e conteúdos de valor
            </h1>
            <h1 className={styles.h1Mobile}>
              <div className={styles.linha}></div>
              Vídeos e<br /> conteúdos <br />
              de valor
            </h1>
          </div>
          <div className={styles.imgtop1}>
            <div className={styles.lista}>
              <iframe
                className={styles.iframes}
                src="https://www.youtube.com/embed/Y3TqZHsB9U8"
              />
            </div>
          </div>
          <button className={styles.botao}>
            <a
              href="https://www.youtube.com/channel/UCuhZe0VDh6MM2LGnQtQZc7w"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineYoutube className={styles.icon}></AiOutlineYoutube>
              Veja mais conteúdos
            </a>
          </button>
        </div>
      </>
    );
}