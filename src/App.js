import { useState } from 'react';
import './App.css';
import Btnexpandirform from './componentes/btn_expandirform';
import Formulario from './componentes/formulario';
import Header from './componentes/header';
import Equipo from './componentes/equipo';
import Footer from './componentes/footer';


function App() {

  const [mostrar, updatemostrar] = useState(false);

  const [Equipos, setEquipos] = useState([
    {
      titulo: "Programación",
      fondo: "#D9F7E9",
      destaque: "#57C278"
    },
    {
      titulo: "Front End",
      fondo: "#E8F8FF",
      destaque: "#82CFFA"
    },
    {
      titulo: "Data Science",
      fondo: "#F0F8E2",
      destaque: "#A6D157"
    },
    {
      titulo: "Devops",
      fondo: "#FDE7E8",
      destaque: "#E06B69"
    },
    {
      titulo: "UX y Diseño",
      fondo: "#FAE9F5",
      destaque: "#DB6EBF"
    },
    {
      titulo: "Móvil",
      fondo: "#FFF5D9",
      destaque: "#FFBA05"
    },
    {
      titulo: "Inovación y Gestión",
      fondo: "#FFEEDF",
      destaque: "#FF8A29"
    }
  ])

  const [colaboradores, setcolaboradores] = useState([
    {
      nombre: "Carlos E. Vijil",
      puesto: "Estudiante",
      foto: "https://avatars.githubusercontent.com/u/144982358?v=4",
      equipo: "Front End",
      fav: true
    }
  ]);

  const cambiarmostrar = () => {
    updatemostrar(!mostrar);
  }

  // Registrar colaborador
  const registrar = (colaborador) => {
    // Spread operator
    setcolaboradores([...colaboradores, colaborador]);
  }

  const eliminarcolaborador = (id) => {
    setcolaboradores(colaboradores.filter((colaborador, index) => index !== id))
  }

  // Actualizar fondo de equipo
  const setdestaque = (color, id) => {
    const EquiposActualizados = Equipos.map((equipo, index) => {
      if (index === id) {
        equipo.destaque = color
      }
      return equipo
    })
    setEquipos(EquiposActualizados)
  }

  const crearequipo = (newequipo) => {
    setEquipos([...Equipos, { titulo: newequipo.titulo, destaque: newequipo.color }])
  }

  const like = (fav, id) => {
    const likeactualizado = colaboradores.map((colab, index) => {
      if (index === id) {
        colab.fav = fav
      }
      return colab
    })
    setcolaboradores(likeactualizado);
    console.log("hola")
  }

  return (
    <div>
      {/* {Header()} */}
      {/* <Header></Header> */}
      <Header />
      {/* {(mostrar)?<Formulario/>:<></>} */}
      {mostrar && <Formulario Equipos={Equipos.map(Equipo => Equipo.titulo)} registrar={registrar} crearequipo={crearequipo} />}
      <Btnexpandirform cambiarmostrar={cambiarmostrar} />
      {
        Equipos.map((elemento, index) => <Equipo
          key={index}
          idequipo={index}
          titulo={elemento.titulo}
          fondo={elemento.fondo}
          destaque={elemento.destaque}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === elemento.titulo)}
          eliminar={eliminarcolaborador}
          setdestaque={setdestaque}
          like={like}
        />
        )
      }
      <Footer />
    </div>
  );
}

export default App;
