import styles from "./styles.module.scss";
import { SubVideo } from "../../SubVideo/subVideo";

export function Instituto() {
  return (
    <>

      <div className={styles.imgtop}>
        <div>
          <img className={styles.logo} src="images/0d26e55336d63baabdeb80ba7763a588.png" />


        </div>
      </div>
      <div className={styles.conteudo}>
      <div className={styles.text1}>
        <div>
          <div className={styles.linha}></div>
          <h1>RR Instituto</h1>
        </div>
      </div>
        <p className={styles.first}>
          Em nossa sociedade existe grande preconceito com o mercado de alimentação fora do lar, se olhar com cautela, é possível perceber que para a maioria das pessoas esses empregos são considerados transitórios e ou temporários, e com isso, os trabalhadores desse mercado não investem em estudos e conhecimento, criando assim uma roda sem fim de mal atendimento e falta de qualidade de serviços.
        </p>
        <p>
          Com o Instituto poderemos entregar de forma gratuita uma formação básica para trabalhar nesse mercado, e ainda, com a parceria público-privada unindo algumas empresas desse mercado, conseguimos ofertar oportunidades de emprego para nossos alunos de forma que além da formação social, podemos também contribuir para redução do desemprego em nossa região conectando empreendedores arrojados a uma mão de obra qualificada..{" "}
        </p>
      </div>
      <SubVideo />
    </>

  );
}