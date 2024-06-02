import "./Listaopciones.css"

const ListaOpciones = (props) => {

    const cambio = (e) =>{
        props.actualizarvalor(e.target.value);
    } 

    // Metodo Map -> arreglo.map((Equipo, index)=>{})
    return <div className="lista_opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={cambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {props.Equipos.map((Equipo, index)=><option key={index} value={Equipo}>{Equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones