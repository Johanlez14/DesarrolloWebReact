import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import FormLogin from './components/FormLogin'
import FormRegister from './components/FormRegister';
import DataForm from './components/DataForm';
import Navegation from './components/Navigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <div className='contenedor-principal'>
        <h1> Registro de actividades de trabajo</h1>
      </div> */}
      < Navegation />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/form_login_view" element={<FormLogin />} />
          <Route path="/form_register_view" element={<FormRegister />} />
          <Route path="/data_form_view" element={<DataForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
