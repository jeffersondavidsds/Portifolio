import {useState} from 'react'
import PetAdopt from "../../assets/petadopt.jpeg"
import ReciclaTech from "../../assets/reciclatech.jpeg"
import VerdeAcao from "../../assets/verdeacao.jpeg"
import GameJam from "../../assets/gamejam.jpeg"

import styles from "./Projetos.module.scss"

function Projetos() {

    const [projetos, setProjetos] = useState( [
        {
            id: 1,
            imagem: PetAdopt,
            nome: "PetAdopt",
            descricao: "Projeto de adoção de pets desenvolvido com HTML, SCSS e Javascript( Array, Objetos e Array de Objetos )."
        },
        {
            id: 2,
            imagem: ReciclaTech,
            nome: "ReciclaTech",
            descricao: "Plataforma de reciclagem de eletrônicos criada com React e Node.js.",
            link: "https://recicla-tech-ebon-psi.vercel.app/"
        },
        {
            id: 3,
            imagem: VerdeAcao,
            nome: "VerdeAção",
            descricao: "Plataforma de ações ambientais desenvolvida com HTML, SCSS, Box-Model, e JavaScript.",
            link: "https://verde-acao-three.vercel.app/"
        }
        ,{
            id: 4,
            imagem: GameJam,
            nome: "GameJam",
            descricao: "Plataforma de desenvolvimento voltada para competições de jogos criada com HTML, CSS, Box-Model, JavaScript.",
            link: "https://game-jam-ten.vercel.app/"
        }
    ])
return (
  
      <section className={styles.sectionProjetos} >
        {projetos.map((item) => (
          <article key={item.id} className={styles.cardProjetos}>
            <img src={item.imagem} alt="" />
            <h2> {item.nome} </h2>
            <p> {item.descricao} </p>
          </article>
        ))}
      </section>
    
  );


                
}

export default Projetos