import { useState } from "react";
import Axios from 'axios'

//imports Bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//import de css comum a todas as páginas
import '../App.css';

function Formulario() {

//capitação dos valores do formulário
const [values, setValues] = useState()

const handleChangeValues = (value) => {
    setValues((prevValue) => ({
            ...prevValue,
            [value.target.id] : value.target.value
        })
    )
}

//função handle do botão enviar, usando axios como middleware para req e res.
const handleClickButton = () => {
    Axios.post("/register", {
    formCNPJ: values.formCNPJ,
    formCorporateName: values.formCorporateName,    
    formUserName: values.formUserName,
    formEmail: values.formEmail,
    formPassword: values.formPassword,
    formTelefone: values.formTelefone,
    })
}


return (

<Container id="containerFormulario"> 


    <Row>
        <Col>

            <Form> 

            <Form.Group className="mb-3" controlId="formUserName">
            <Form.Label>Nome completo</Form.Label>
            <Form.Control type="text" placeholder="Informe seu nome completo" 
            onChange = {handleChangeValues}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCorporateName">
            <Form.Label>Razão Social</Form.Label>
            <Form.Control type="text" 
            placeholder="Informe a Razão social de sua empresa" 
            onChange = {handleChangeValues}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCNPJ">
            <Form.Label>CNJPJ</Form.Label>
            <Form.Control type="text" placeholder="Informe o CNPJ da Empresa" 
            onChange = {handleChangeValues}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Insira seu endereço de e-mail" 
            onChange = {handleChangeValues}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTelefone">
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="text" placeholder="Insira telefone do resposnável" 
            onChange = {handleChangeValues}
            />
            </Form.Group>            

            <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Senha de Acesso ao portal" 
            onChange = {handleChangeValues}
            />
            </Form.Group>

            
            <Form.Text className="text-muted">
                Você concorda com a disponibilização dos dados de sua empresa para
                que as pessoas possam encontra-la e realizar a entrega dos recicláveis.
            </Form.Text>
            
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Concordo" />
            </Form.Group>
            
            <Button variant="primary" type="submit" 
            onClick = {() => handleClickButton()}>
            Enviar
            </Button>
        </Form>
    </Col>
</Row>

</Container>
)
}

export default Formulario
