//import do componente Form
import Formulario from "../../components/FormRegister"

//import de componentes react-boostrap
import FormLogin from "../../components/FormLogin"

//react-router
import { Link } from 'react-router-dom'

//css
import './cadastro.css'


function paginaInicial() {
    return (

<div>
  
    <div className="containerPrincipal">
        <div className="componentCadastro">

            <span className="infoComponentCadastro">
            <h1><strong>Cadastre-se</strong></h1><h3>Para que sua Empresa 
                possa ser um Ponto de Coleta de Recicláveis EletroEletrônicos !</h3>
            </span>{/*infoComponentCadastro*/}

            <Formulario />   
            <h5><strong>Seus Dados estão Protegidos pela Lei LGPD </strong></h5> 
        </div>{/*componentCadastro*/}


        <div class="separacao"></div>
{ /* ------------------------------------------------------------------------------------ */ }

            
               
        <div className="comnponentLogin">

            <span className="infoComponentLogin">
            <h1><strong>Login</strong></h1>
            <h4>Bem vindo de volta!</h4>
            </span> {/*infoComponentLogin*/}

            <FormLogin className="teste"/>

            </div> {/*comnponentLogin*/}   



        </div> {/*containerPrincipal*/}
                
        

        </div> 








        
        
    )
}

export default paginaInicial