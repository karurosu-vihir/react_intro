import { useState } from "react";
import Boton from "../boton";
import Campotexto from "../campotexto";
import ListaOpciones from "../listaopciones";
import "./Formulario.css"

const Formulario = (props) => {

    const [nombre, setnombre] = useState("");
    const [puesto, setpuesto] = useState("");
    const [foto, setfoto] = useState("");
    const [equipo, setequipo] = useState("");
    const [titulo, settitulo] = useState("");
    const [color, setupcolor] = useState("");

    const {registrar, Equipos, crearequipo} = props;

    const envio = evento => {
        evento.preventDefault();
        let datosaenviar = {
            nombre,
            puesto,
            foto,
            equipo
        };
        registrar(datosaenviar);
    }

    const envioequipo = (e) =>{
        e.preventDefault();
        let datosaenviar = {
            titulo,
            color
        };
        crearequipo(datosaenviar);
    }

    return <section className="formulario">
        <form onSubmit={envio}>
            <h2 className="h23">Rellena el formulario para crear el colaborador</h2>
            <Campotexto titulo="Nombre" placeholder="Ingresar un nombre" required={true} valor={nombre} actualizarvalor={setnombre}/>
            <Campotexto titulo="Puesto" placeholder="Ingresar un puesto" required valor={puesto} actualizarvalor={setpuesto}/>
            <Campotexto titulo="Foto" placeholder="Ingresar una foto" required valor={foto} actualizarvalor={setfoto}/>
            <ListaOpciones valor={equipo} actualizarvalor={setequipo} Equipos={Equipos}/>
            <Boton texto="crear" />
        </form>
        <form onSubmit={envioequipo}>
            <h2 className="h23">Rellena el formulario para crear el Equipo</h2>
            <Campotexto titulo="Titulo" placeholder="Ingresar un Titulo" required={true} valor={titulo} actualizarvalor={settitulo}/>
            <Campotexto titulo="Color" placeholder="Ingresar un Color Hexadecimal" required valor={color} actualizarvalor={setupcolor} type="color"/>
            <Boton texto="Registrar Equipo" />
        </form>
    </section>
}

export default Formulario;