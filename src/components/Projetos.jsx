import {useState} from 'react'
import PetAdopt from "../assets/petadopt.jpeg"
import ReciclaTech from "../assets/reciclatech.jpeg"
import VerdeAcao from "../assets/verdeacao.jpeg"
import GameJam from "../assets/gamejam.jpeg"

function Projetos() {

    const [projetos, setProjetos] = useState( [
        {
            id: 1,
            image: PetAdopt,
            nome: "PetAdopt",
            descricao: "Projeto de adoção de pets desenvolvido com HTML, CSS e Javascript( Array, Objetos e Array de Objetos )."
        },
        {
            id: 2,
            image: ReciclaTech,
            nome: "ReciclaTech",
            descricao: "Plataforma de reciclagem de eletrônicos criada com React e Node.js."
        },
        {
            id: 3,
            image: VerdeAcao,
            nome: "VerdeAção",
            descricao: "Plataforma de ações ambientais desenvolvida com React e Node.js."
        }
        ,{
            id: 4,
            image: GameJam,
            nome: "GameJam",
            descricao: "Plataforma de desenvolvimento voltada para competições de jogos criada com HTML, CSS, JavaScript."
        }
    ])
    return (
        <>
            <h1>Projetos</h1>

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