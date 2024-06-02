import "./btn_epandirform.css"

const Btnexpandirform = (props) => {
    // Hooks
    // usestate
    // useState()

    // const [mostrar,updatemostrar] = useState(true);

    // const click = () => {
    //     console.log("mostrar",!mostrar);
    //     updatemostrar(!mostrar)
    // }

    return <section className="orgsection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="añadir" onClick={props.cambiarmostrar}/>
    </section>
}

export default Btnexpandirform;