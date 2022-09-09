import styles from "./styles.module.scss";
import { SubVideo } from "../../SubVideo/subVideo";

import { FcApproval } from 'react-icons/fc'

export function Vendas() {

  return (
    <>

      <div className={styles.imgtop}>
        <div>
          <img className={styles.logo} src="images/a38e7fbc66474ab5cd71c49b141f741c.png" />


        </div>
      </div>
      <div className={styles.conteudo}>
        <div className={styles.text1}>
          <div>
            <div className={styles.linha}></div>
            <h1>RR + Vendas</h1>
          </div>
        </div>
        <p className={styles.first}>
          RR + Vendas, nosso negócio é vender o seu. Aqui você tem uma consultoria completa no multiverso das vendas,
          nós vamos mapear o seu negócio, entender o seu publico alvo, as melhores formas de atingi-los e te entregar
          o mapa do sucesso.
        </p>



        <div className={styles.titlevideo}>
          <h1 className={styles.h1Desk}>
            <div className={styles.linha}></div>RR + Visibilidade
          </h1>
          <h1 className={styles.h1Mobile}>
            <div className={styles.linha}></div>
            <li>RR + Visibilidade</li>
          </h1>
        </div>
        <p className={styles.first}>
          Conheça o poder absoluto do tráfego pago. Aqui nós faremos UM conjunto
          de anúncios (campanha ADS) na plataforma onde seu negócio melhor se encaixa.
          Dessa forma você consegue ver com seus próprios olhos o número de clientes,
          VISIBILIDADE e alcance que conseguimos te dar perante um público segmentado.
        </p>

        <div className={styles.titlevideo}>
          <h1 className={styles.h1Desk}>
            <div className={styles.linha}></div>RR + Vendas
          </h1>
          <h1 className={styles.h1Mobile}>
            <div className={styles.linha}></div>
            <li>RR + Vendas</li>
          </h1>
        </div>
        <p className={styles.first}>
          Aqui a parada fica séria! <br></br>
          <br></br>Nós vamos te entregar toda uma assessoria em vendas e acompanhamento
          com seu time de vendas interno, nós vamos te posicionar nas plataformas mais
          relevantes da internet, com anúncios de alta conversão. Nesse pacote, além de
          um funil vendas, nós vamos gerenciar todos os anúncios do seu negócio, utilizando
          as duas maiores redes da Internet: A Meta (Face/Insta) e o Google(Youtube). Se alguém
          procurar pelo seu nicho de negócios na internet, nós vamos fazer você ser encontrado.

        </p>

        <div className={styles.titlevideo}>
          <h1 className={styles.h1Desk}>
            <div className={styles.linha}></div>RR + Multiverso
          </h1>
          <h1 className={styles.h1Mobile}>
            <div className={styles.linha}></div>
            <li>RR + Multiverso</li>
          </h1>
        </div>
        <span className={styles.first}>
          Nesse pacote você não precisa fazer mais nada além de nos contratar!  <br></br>
          <br></br>Como assim?<br></br><br></br>

          É isso mesmo! Você só precisa fazer o que você já faz muito bem, e nós vamos vender
          o seu negócio para o mundo. Qualquer coisa que seu negócio precisar para que sejam
          feitas muitas vendas, nós vamos fazer, por exemplo:
          <div className={styles.espaco}></div>
          <h2><span><FcApproval className={styles.icon}></FcApproval></span>Gestão de Redes - NÓS VAMOS FAZER </h2>
          <h2><span><FcApproval className={styles.icon}></FcApproval></span>Site personalizado - NÓS VAMOS FAZER </h2>
          <h2><span><FcApproval className={styles.icon}></FcApproval></span>Landing pages (site de vendas) - NÓS VAMOS FAZER </h2>
          <h2><span><FcApproval className={styles.icon}></FcApproval></span>Sessão de fotos - NÓS VAMOS FAZER </h2>
          <h2><span><FcApproval className={styles.icon}></FcApproval></span>Produção de Vídeo - NÓS VAMOS FAZER </h2>
          <h2><span><FcApproval className={styles.icon}></FcApproval></span>Treinamento de vendas para sua equipe -NÓS VAMOS FAZER </h2>
        </span>

        <div className={styles.ultimotitulo}>
          <h1 className={styles.h1Desk1}>
            Enfim, o que seu negócio precisar para vender, nós vamos fazer!
          </h1>
          <div className={styles.h1Mobile1}>
            <h1>Enfim, o que seu negócio precisar para vender, nós vamos fazer! </h1>
          </div>
        </div>
        <p className={styles.first1}>
          
         Pacotes personalizados de acordo com a realidade de cada cliente. Seu negócio precisa ser avaliado para contratar esse pacote.vvv 


        </p>

      </div>
      <SubVideo />
    </>

  );
}