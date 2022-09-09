import styles from "./styles.module.scss";
import Image from "next/image";

export function Footer() {
  return (
      <div className={styles.container}>
          <Image
            src="/images/RR-CONSULTORIA.png"
            alt="logo"
            layout="intrinsic"
            width={250}
            height={100}
          />
        
      </div>
  );
}