import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'

function Profile() {

    console.log('[Client] Profile.jsp')

    const navigate = useNavigate();

    const location = useLocation();
    //util para verificar a chegada dos dados
    console.log('location', location.state.email);

    //capitação dos valores do formulário
    const [values, setState] = useState('')

    //função utilizada para enviar dados do login e receber informações do banco de dados
    useEffect(() => {
            Axios.post("/profile", {
                email: location.state.email
            }).then( 
                response => setState(response.data)
            )
        }, []);



    //função criadora do elemento html
        const Dados = () => { 
        
        const CNPJ = values.cnpj;
        const email = values.resp_email;
        const nomeDoResponsavel = values.resp_nome;
        const razaoSocial = values.razao_social;
        const senha = values.senha;
        const telefone = values.resp_telefone;
        
        const userInformation = [
            email, CNPJ, nomeDoResponsavel, razaoSocial, senha, telefone
        ]


        function setValues(value, i=0) {
            const createElement = React.createElement('li', {key:i}, value)
            i++
                return createElement
        };   
        return userInformation.map(setValues)        
        };

        //const para exibir nome do usuario
        const Responsavel = () => values.resp_nome

        //func para deletar cadastro
        const DeletarCadastro =  () => {
            Axios.delete("http://localhost:3001/delete", { 
                data:{ id: values.cnpj }
            }).then(navigate("/", {})) 
        };
            








    return (

        <div className="profile">
        <span display="flex">Bem vindo,  <Responsavel/> </span> 
        <br/>
        <br/>
        <Dados/>
        <br/>

        <div>
        Você tem alguma dúvida sobre seu cadastro? 
        Entre em contato conosco através do telefone: (XX) XXXX-XXXX
        Ou utilize o e-mail xxxxxx@gmail.com
        </div>
        <br/>
        <div>
        Gostaria de cancelar seu cadastro? Utilize o botão abaixo.
        <br/>
        Seus dados serão deletados, caso decida voltar terá que se cadastrar
        novamente!
        </div> 
        <button onClick={() => DeletarCadastro()} className="botaoProfile">Retirar Cadastro de EcoPonto</button>
        </div>

        

    )

}

export default Profile;
