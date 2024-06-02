// import { useState } from "react";
import "./Campotexto.css"

const Campotexto = (datosexternos) => {

    // const [valor, setvalor] = useState("");

    const {type = "text"} = datosexternos;

    const cambio = (e) => {
        console.log(e.target.value);
        datosexternos.actualizarvalor(e.target.value);
    }

    return <div className={`campo campo-${type}`}>
        <label>{datosexternos.titulo}</label>
        <input type={type} placeholder={datosexternos.placeholder} 
        required={datosexternos.required} value={datosexternos.valor}
        onChange={cambio} />
    </div>
}

export default Campotexto
