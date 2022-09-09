import Image from "next/image";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import styles from "./styles.module.scss";

export function Header() {
  const [classOn, setClassOn] = React.useState(false);
  const [checked, setChecked] = React.useState(false) 

  return (
    <header className={styles.containerr}>
      <div className={styles.container}>
        <Image layout="intrinsic" width={67} height={47}  className="logo-cyan" src="/images/logo/rr.png" alt="logo rr" />

        <div
          className={
            classOn
              ? `${styles.menusection} ${styles.on}`
              : `${styles.menusection}`
          }
          
        >
          <div className={styles.menutoggle} onClick={() => setClassOn(!classOn)}>
            <div className={styles.one}></div>
            <div className={styles.two}></div>
            <div className={styles.three}></div>
          </div>

          <nav className={styles.navzada}>
            <ul>
              <li >
                <a href="home">Home</a>
              </li>
              <li >
                <a href="quem-somos">Quem somos</a>
              </li>
              <li onClick={() => setChecked(!checked)} >
                <a className={styles.aa} >Serviços </a>
                <ul style={checked ? {display: 'block'}: {display: 'none'}}>
                  <li onClick={() => setChecked(!checked)}>
                    <a href="subi">RR Instituto</a>
                  </li>
                  <li onClick={() => setChecked(!checked)}>
                    <a href="vendas">+ Vendas</a>
                  </li>
                  <li onClick={() => setChecked(!checked)}>
                    <a href="consultor">Consultoria</a>
                  </li>
                  <li onClick={() => setChecked(!checked)}>
                    <a href="assesor">Assessoria</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contato">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
