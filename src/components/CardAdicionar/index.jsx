import { useState } from "react"


function CardAdicionar () {

    const [textoTarefa, setTextoTarefa] = useState("")

    return (
        <div>
            <h1>Texto da tarefa: {textoTarefa}</h1>
            <input type="text"
             value={textoTarefa}
             onChange={(e) => setTextoTarefa(e.target.value)}
             placeholder="Digite sua tarefa"/>
            <button onClick={() => {}}>Adicionar</button>
        </div>
    )
}

export default CardAdicionar