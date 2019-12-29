import Input from "./Input";
import Alert from './Alert';
import { setProviders, useLogin, useAuthError, useResetPass } from '../utils/hooks';
import { useEffect, useState } from 'react';

let email, name, pass;

const Forms = () => {
  let [account, setAccount] = useState({ switchC: false, alert: false });
  let regText = !account.switchC ? "Crear Cuenta" : "Iniciar Sesión";
  setProviders();

  const value = data => {
    if (data.name === "email") email = data.text;
    else if (data.name === "name") name = data.text;
    else if (data.name === "pass") pass = data.text;
  }

  const showAlert = data => setAccount({ switchC: account.switchC, alert: data?{ title: data.title, input:false || data.input, onConfirm:false || data.onConfirm, type: data.type, body:data.body?useAuthError(data.body.code):data.text }:false});

  const forgotPass = () => {
    showAlert({
      title:"Recuperar",
      text:"Escribe el correo al que quieres que enviemos el link de recuperacion.",
      type:"input",
      input:{
        type:"text",
        label:"Correo electronico",
        name:"remail",
        helper:"Correo de recuperacion",
        icon:"mail"
      }, 
      onConfirm: data => {
        if(data) useResetPass(data.text, body => showAlert({ title: "Ocurrio un error", body, type: "error" }))
        else showAlert({title: "Ocurrio un error", text: "Todos los campos son obligatorios", type:"error"})
      }
    })
  }

  const logs = () => {
    if(account.switchC && ( email.length*name.length*pass.length !== 0) && name.length <= 15 ) useLogin({ type: account.switchC, name, email, pass, err: body => showAlert({ title: "Ocurrio un error", body, type: "error" }) })
    else if(!account.switchC && ( email.length*pass.length !== 0)) useLogin({ type: account.switchC, email, pass, err: body => showAlert({ title: "Ocurrio un error", body, type: "error" }) }) 
    else showAlert({title: "Ocurrio un error", text: "Un campo tiene un error o faltan datos.", type:"error"})
  }
  const fblog = () => useLogin({ type: "fb", err: body => showAlert({ title: "Ocurrio un error", body, type: "error" }) })
  const glog = () => useLogin({ type: "g", err: body => showAlert({ title: "Ocurrio un error", body, type: "error" }) })
  const regSwitch = () => setAccount({ switchC: !account.switchC, alert: account.alert });

  return (
    <>
      {account.alert && <Alert {...account.alert} hideAlert={showAlert}/>}

      <div id="form">
        <h2>Conectate <i className="material-icons">cached</i></h2>
        <p>Registrate de forma gratuita, puedes utilizar el método que prefieras para conectarte, tener cuenta tiene muchos beneficios. 👌</p>
        <p>¿{account.switchC ? "ya" : "no"} tienes una cuenta? <button onClick={regSwitch}>{regText}</button></p>

        <div id="credentials">
          <Input type="email" label="Email o teléfono" name="email" value={value} helper="Usuario de la cuenta" icon="mail" />
          {account.switchC ? <Input type="text" label="Nombre de usuario" name="name" value={value} helper="Maximo 15 caracteres" icon="person" /> : ""}
          <Input type="password" label="Contraseña" name="pass" value={value} helper="Clave secreta" icon="lock" />
        </div>

        {account.switchC ? "" : <p>¿Olvidaste tu contraseña? <button className="waves waves-dark" onClick={forgotPass}>Recuperar</button></p>}

        <button onClick={logs} className="blue waves"><i className="material-icons">{account.switchC ? "person_add" : "person"}</i>{account.switchC ? "Crear Cuenta" : "Iniciar Sesión"}</button>
        <button onClick={fblog} className="waves fblog"><i className="icon-facebook"></i> Iniciar con Facebook</button>
        <button onClick={glog} className="waves glog"><i className="icon-google"></i> Iniciar con Google</button>

      </div>

      <a href="./privacidad.pdf" target="_blank" title="Privacidad" className="btn amber privacy waves waves-dark"><i className="material-icons">account_balance</i> Políticas de <br />privacidad</a>

      <style jsx>{`
	        .privacy{
             position:absolute;
             right:0;
             margin-top:-100px;
             z-index:2;
             font-size:13px;
             color:var(--backgrounds);
           }
           #form > p { color:var(--parraf); }
           #form > p:nth-child(5) {
             text-align:center;
           }
           p > button{
             display:inline-block;
             color:var(--parraf);
           }
           h2{
             color:var(--parraf);
           }
           #form{
             width:calc(100% - 40px);
             background:var(--backgrounds);
             box-shadow:0 0 10px rgba(0,0,0,.2);
             padding:20px;
             border-radius:10px;
             position:relative;
             top:-50px;
             left:50%;
             transform:translate(-50%, 0%);
             margin-bottom:60px;
           }
           #form > button{
             color:var(--backgrounds);
             width:100%;
             justify-content:center;
             margin-top:10px;
           }
           #credentials{
             margin-top:-10px;
           }
           button svg{
             margin:30px;
           }
           .fblog{
             background:#3b5998;
             margin:0;
           }
           .glog{
             background:#D44638;
             margin:0;
           }
         `}</style>

    </>
  )
}

export default Forms;
