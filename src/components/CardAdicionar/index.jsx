import { useState } from "react"


function CardAdicionar (props) {

    const [textoTarefa, setTextoTarefa] = useState("")

    return (
        <div>
            <input type="text"
             value={textoTarefa}
             onChange={(e) => setTextoTarefa(e.target.value)}
             placeholder="Digite sua tarefa"/>
            <button onClick={() => props.adicionarTarefa(textoTarefa)}>Adicionar</button>
        </div>
    )
}

export default CardAdicionar