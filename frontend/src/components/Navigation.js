import React from "react";
import '../stylesheet/Navigation.css';

function Navigation() {
  function homeView() {
    window.location = '/';
  }
  
  function formLoginView() {
    window.location = '/form_login_view';
  }
  
  function formRegisterView() {
    window.location = '/form_register_view';
  }
  
  function dataFormView() {
    window.location = '/data_form_view';
  }
  return (
    <div>
      <ul className="navigation">
        <li>
          <button onClick={homeView}>Home</button>
        </li>
        <li>
          <button onClick={formLoginView}>Login</button>
        </li>
        <li>
          <button onClick={formRegisterView}>Register Activity</button>
        </li>
        <li>
          <button onClick={dataFormView}>Consult</button>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
