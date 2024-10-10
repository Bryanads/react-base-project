import Cartao from "../components/Cartao/Cartao";
import Base from "./Base";
import ListContainer from "../components/ListContainer/ListContainer";


const dados = [
    {
        titulo: "Um titulo do array",
        texto: "Um texto grande do array"
    },
    {
        titulo: "Um outro título do Array",
        texto: "Um outro texto grande do array"
    }
]

const SobreNos = () => (
    <Base>
        <ListContainer>
            {
                dados.map( (ele, i) => (
                    <Cartao
                        key = {i}
                        titulo = {ele.titulo}
                        texto = {ele.texto}
                    />
                ))
            }

        </ListContainer>
    </Base>
);

export default SobreNos;