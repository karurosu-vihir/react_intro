import Colaborador from "../colaborador";
import "./Equipo.css"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    // Destructuracion
    const { fondo, destaque, titulo, eliminar, setdestaque, idequipo, like } = props
    const { colaboradores } = props

    // Otra forma de hacer el estilo
    const estilofondo = { backgroundColor: hexToRgba(destaque,0.4)};


    return <>
        {colaboradores.length !== 0 &&
            <section className="equipo" style={estilofondo}>
                <input
                    type="color"
                    className="input_color"
                    value={destaque}
                    onChange={(evento)=>{setdestaque(evento.target.value,idequipo)}}
                />
                <h3 style={{ borderBottomColor: destaque }}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            key={index}
                            idcolaborador = {index}
                            nombre={colaborador.nombre}
                            puesto={colaborador.puesto}
                            foto={colaborador.foto}
                            equipo={colaborador.equipo}
                            fav = {colaborador.fav}
                            destaque={destaque}
                            eliminar = {eliminar}
                            like = {like}

                        />)}
                </div>
            </section>
        }
    </>
}

export default Equipo;