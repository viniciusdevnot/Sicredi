import Image from "next/image"

import { Card } from "../../Card";
import styles from "./styles.module.scss";
import { Footer } from "../../Footer";
import { FormContato } from "../../FormContato";
import { useEffect } from "react";

export function Conteudo() {
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
      <div className={styles.conteudo}></div>
      <div className={styles.imgtop}></div>
      <div className={styles.text1}></div>
      <div className={styles.cards}>
        <div>
          <br />
          <div className={styles.linha}> </div>
          <h1 className={styles.colortextMobile}>
            Existimos para causar <b>força</b>, <b>melhorias e benefícios</b> em
            empresas, negócios e pessoas
          </h1>
          <br />
          <h1 className={styles.colortext}>
            Existimos para causar <b>força</b>,{" "}
            <b>
              melhorias e <br /> benefícios
            </b>{" "}
            em empresas, negócios e<br /> pessoas
          </h1>
        </div>
        <div className={styles.cardsServices}>
          <div className={styles.cardsWrapperServices}>
            <Image
              src="/images/Logotipo-Instituto.png"
              alt="logo"
              layout="intrinsic"
              width={450}
              height={230}
            />
          </div>
          <div className={styles.cardsWrapperServices}>
            <Image
              src="/images/Logotipo-Instituto.png"
              alt="logo"
              layout="intrinsic"
              width={450}
              height={230}
            />
          </div>
          <div className={styles.cardsWrapperServices}>
            <Image
              src="/images/LadFood-Final.png"
              alt="logo"
              layout="intrinsic"
              width={450}
              height={230}
            />
          </div>
          <div className={styles.cardsWrapperServices}>
            <Image
              src="/images/RR-CONSULTORIA.png"
              alt="logo"
              layout="intrinsic"
              width={450}
              height={230}
            />
          </div>
          <div className={styles.cardsWrapperServices}>
            <Image
              src="/images/RR-JURÍDICA.png"
              alt="logo"
              layout="intrinsic"
              width={450}
              height={230}
            />
          </div>
          <div className={styles.cardsWrapperServices}>
            <Image
              src="/images/RR-Assessoria-Contábil.png"
              alt="logo"
              layout="intrinsic"
              width={450}
              height={230}
            />
          </div>
          <div className={styles.cardsWrapperServices}>
            <Image
              src="/images/RR-TERCEIRIZAÇÃO.png"
              alt="logo"
              layout="intrinsic"
              width={450}
              height={230}
            />
          </div>
          <div className={styles.cardsWrapperServices}>
            <Image
              src="/images/RR-ACESS-ASSESSORIA-BUSINESS-LOGO.png"
              alt="logo"
              layout="intrinsic"
              width={450}
              height={230}
            />
          </div>
          <div className={styles.cardsWrapperServices}>
            <Image
              src="/images/RR-VENDAS.png"
              alt="logo"
              layout="intrinsic"
              width={450}
              height={230}
            />
          </div>
        </div>
        <br />
      </div>

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

          <iframe
            className={styles.iframes}
            src="https://www.youtube.com/embed/AVw5s9DteP0"
          />

          <iframe
            className={styles.iframes}
            src="https://www.youtube.com/embed/OSJcN0W4-0s"
          />
        </div>
      </div>

      <div className={styles.text1}>
        <div>
          <div className={styles.linha}></div>
          <h1>Clientes</h1>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.cardsClients}>
          <div className={styles.cardsWrapperClients}>
            <Image
              src="/images/clients/client/adriana.png"
              alt="logo"
              layout="intrinsic"
              width={354}
              height={276}
            />
          </div>
          <div className={styles.cardsWrapperClients}>
            <Image
              src="/images/clients/client/cafe.png"
              alt="logo"
              layout="intrinsic"
              width={354}
              height={276}
            />
          </div>
          <div className={styles.cardsWrapperClients}>
            <Image
              src="/images/clients/client/devassa.png"
              alt="logo"
              layout="intrinsic"
              width={354}
              height={276}
            />
          </div>
          <div className={styles.cardsWrapperClients}>
            <Image
              src="/images/clients/client/dona.png"
              alt="logo"
              layout="intrinsic"
              width={354}
              height={276}
            />
          </div>
          <div className={styles.cardsWrapperClients}>
            <Image
              src="/images/clients/client/kanpai.png"
              alt="logo"
              layout="intrinsic"
              width={354}
              height={276}
            />
          </div>
          <div className={styles.cardsWrapperClients}>
            <Image
              src="/images/clients/client/madalena.png"
              alt="logo"
              layout="intrinsic"
              width={354}
              height={276}
            />
          </div>
          <div className={styles.cardsWrapperClients}>
            <Image
              src="/images/clients/client/mirante.png"
              alt="logo"
              layout="intrinsic"
              width={354}
              height={276}
            />
          </div>
          <div className={styles.cardsWrapperClients}>
            <Image
              src="/images/clients/client/tucum.png"
              alt="logo"
              layout="intrinsic"
              width={354}
              height={276}
            />
          </div>
        </div>
      </div>

      <div className={styles.text1}>
        <div>
          <div className={styles.linha}></div>
          <h1>Nossas experiências</h1>
        </div>
      </div>

      <div className={styles.cards2}>
        <div className={styles.containercard}>
          <div className={styles.imguser}>
            <img src="images/clients/daniel1.png" alt="logo" />
            <div className={styles.cardtitle}>
              <h2>Daniel Leandro </h2>
              <h3>Proprietário Dona Maria Group</h3>
            </div>
          </div>
          <div>
            <p>
              Nós do Grupo Dona Maria somos gratos e parceiros da RR, eles nos
              acompanham desde a nossa concepção no estado do Pará/Tocantins a
              mais de 4 anos. Durante esse tempo, passamos por várias situações
              difíceis e sempre pudemos contar com a ajuda de nossos
              consultores, sempre à disposição. Hoje, eu Daniel, não faço nenhum
              investimento ou novo negócio se não tiver comigo a segurança e a
              parceria do Grupo RR, seja no operacional, no financeiro ou no
              jurídico. Eu sempre posso contar com eles.
            </p>
          </div>
        </div>
        <div className={styles.containercard}>
          <div className={styles.imguser}>
            <img src="images/clients/fabio1.png" alt="logo" />
            <div className={styles.cardtitle}>
              <h2>Fabio Souza</h2>
              <h3>Proprietário Ermenilde Restaurante</h3>
            </div>
          </div>
          <div className={styles.cardcontent}>
            <p>
              Para começar, existem algumas versões do Ermenilde Restaurante. O
              de antes, durante e depois da Consultoria. O antes era quando eu e
              minha mãe trabalhávamos sozinhos, com muitos sonhos, mas com
              poucas ferramentas para realizá-los. O durante foi quando
              contratamos a consultoria, buscando as ferramentas necessárias
              para realizar nosso sonho de ter um bar e restaurante, com a
              qualidade de sempre, mesmo que com pouca estrutura operacional
              para receber nossos clientes. Durante a pandemia
              <span id="pontos">...</span>
              <span id="mais">
                , passamos junto à consultoria por momentos muito difíceis, mas
                sem parar de sonhar. E sempre buscando junto a RRAcess as
                medidas necessárias para seguir em frente. Juntos somos um
                sistema só. Eu na administração, a cabeça do restaurante. Minha
                mãe na cozinha, no coração. E o corpo e tudo que o estrutura é
                guiado por nossa consultoria e equipe. Todos trabalhamos juntos
                para melhor atender nossos clientes, a alma do nosso negócio. Eu
                e minha mãe, minha grande inspiração, somos muito gratos ao
                Rennan e sua equipe por viver o Ermenilde conosco. Muito
                obrigado!
              </span>
            </p>
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
      <FormContato />
      <Footer />
    </>
  );
}
