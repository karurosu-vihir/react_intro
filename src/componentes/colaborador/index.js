import "./Colaborador.css"
import { AiFillCloseCircle } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Colaborador = (props) => {

    const {nombre, puesto, foto, destaque, eliminar, idcolaborador, fav, like} = props;

    const estilodestaque = {
        backgroundColor: destaque
    };

    return <div className="colaborador">
        <div className="encabezado" style={estilodestaque}> 
            <AiFillCloseCircle className="eliminar" onClick={()=>{eliminar(idcolaborador)}}/>
            <img src={foto} alt="Imagen del colaborador"/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ?<FaHeart color="red" onClick={()=>like(false,idcolaborador)}/>:<FaRegHeart onClick={()=>like(true,idcolaborador)}/>}
        </div>
    </div>
}

export default Colaborador;