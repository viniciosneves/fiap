import styled from 'styled-components'
import GlobalStyle from './componentes/EstilosGlobais/EstilosGlobais'
import SubTitulo from './componentes/SubTitulo/SubTitulo'
import FormLogin from './componentes/FormLogin/FormLogin'

const Logo = styled.img``

const ContainerEstilizado = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  flex-wrap: wrap;
  padding: 40px;
  box-sizing: border-box;
`

function App() {

  return (
    <>
      <GlobalStyle />
      <ContainerEstilizado>
        <div>
          <Logo src='/logo.png'/>
          <SubTitulo>
            Nós Transformamos Ideias em Inovação
          </SubTitulo>
        </div>
        <FormLogin />
      </ContainerEstilizado>
    </>
  )
}

export default App
