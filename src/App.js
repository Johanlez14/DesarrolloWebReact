import logo from './logo.svg';
import './App.css';
import FormularioLogin from './componentes/FormularioLogin'
import FormularioRegistroActividades from './componentes/FormularioRegistroActividades';
import DatosActividades from './componentes/DatosActividades';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1> Registro de actividades de trabajo</h1>
      </div>
      < FormularioLogin />
      < FormularioRegistroActividades/>
      < DatosActividades/>
    </div>
  );
}

export default App;
