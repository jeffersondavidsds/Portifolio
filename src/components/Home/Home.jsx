import Logo from "../../assets/logobedevpreta.png"
import Foto from "../../assets/fotoperfil.png"
import {useState} from 'react'

import styles from "./Home.module.scss"

function Home() {

    const [foto, setLogo] = useState( [
        {
            id: 1,
            imagem: Foto,
            nome: "Jefferson David",
            descricao: "Seja bem-vindo ao meu portfólio! Sou Jefferson David, um desenvolvedor apaixonado por criar soluções inovadoras e eficientes. Aqui você encontrará uma seleção dos meus projetos mais recentes, que refletem minhas habilidades em desenvolvimento web, design responsivo e experiência do usuário. Explore meu trabalho e sinta-se à vontade para entrar em contato comigo para discutir possíveis colaborações ou oportunidades profissionais. Vamos construir algo incrível juntos!"
        }
    ])
return (
  
      <section className={styles.sectionHome} >
        {foto.map((item) => (
          <article key={item.id} className={styles.cardFoto}>
            <img src={item.imagem} alt="" />
            <p> {item.descricao} </p>
          </article>
        ))}
      </section>
  );


                
}

export default Home;


