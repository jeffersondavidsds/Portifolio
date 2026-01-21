import {useState} from 'react'
import PetAdopt from "../../assets/petadopt.jpeg"
import ReciclaTech from "../../assets/reciclatech.jpeg"
import VerdeAcao from "../../assets/verdeacao.jpeg"
import GameJam from "../../assets/gamejam.jpeg"

function Projetos() {

    const [projetos, setProjetos] = useState( [
        {
            id: 1,
            image: PetAdopt,
            nome: "PetAdopt",
            descricao: "Projeto de adoção de pets desenvolvido com HTML, SCSS e Javascript( Array, Objetos e Array de Objetos )."
        },
        {
            id: 2,
            image: ReciclaTech,
            nome: "ReciclaTech",
            descricao: "Plataforma de reciclagem de eletrônicos criada com React e Node.js.",
            link: "https://recicla-tech-ebon-psi.vercel.app/"
        },
        {
            id: 3,
            image: VerdeAcao,
            nome: "VerdeAção",
            descricao: "Plataforma de ações ambientais desenvolvida com HTML, SCSS, Box-Model, e JavaScript.",
            link: "https://verde-acao-three.vercel.app/"
        }
        ,{
            id: 4,
            image: GameJam,
            nome: "GameJam",
            descricao: "Plataforma de desenvolvimento voltada para competições de jogos criada com HTML, CSS, Box-Model, JavaScript.",
            link: "https://game-jam-ten.vercel.app/"
        }
    ])
    return (
        <>
            <h1>Projetos</h1>
            <p>Github: https://github.com/jeffersondavidsds</p>
            <p>Linkedin: https://www.linkedin.com/in/jeffersonsilvadev/</p>

        <article> 
{projetos.map((item)=>(
<div key={item.id}>
    <img src={item.image} alt="" />
    <h2>{item.nome}</h2>
    <p>{item.descricao}</p>
</div>
))}

</article>


        </>        
    )
}
export default Projetos