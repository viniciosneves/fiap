import styled from "styled-components"
import Titulo from "../Titulo/Titulo"

const FormEstilizado = styled.form`
    border-radius: 20px;
    background: #EAEAEA;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 86px;
`

const LegendaEstilizada = styled.h3`
    color: #8C8C8C;
    text-align: center;
    font-family: 'Lato';
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

const InputEstilizado = styled.input`
    &:placeholder {
        color: rgba(198, 198, 198, 0.50);
    }
    font-family: 'Lato';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 60px;
    background: #FFF;
    width: 450px;
    padding: 22px 40px;
    display: block;
    margin-bottom: 40px;
`

const FormLogin = () => {
    return (<FormEstilizado>
        <Titulo>Olá, mundo!</Titulo>
        <LegendaEstilizada>Faça login com seus dados</LegendaEstilizada>
        <InputEstilizado placeholder="Usuário ou e-mail"/>
        <InputEstilizado placeholder="Senha"/>
    </FormEstilizado>)
}

export default FormLogin