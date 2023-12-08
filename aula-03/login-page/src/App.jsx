import styled from 'styled-components'
import GlobalStyle from './componentes/EstilosGlobais/EstilosGlobais'
import SubTitulo from './componentes/SubTitulo/SubTitulo'
import FormLogin from './componentes/FormLogin/FormLogin'

const Logo = styled.img``

function App() {

  return (
    <>
      <GlobalStyle />
      <Logo src='/logo.png'/>
      <SubTitulo>
        Nós Transformamos Ideias em Inovação
      </SubTitulo>
      <FormLogin />
    </>
  )
}

export default App
