import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import GlobalStyle, { Container } from './styles'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'

function App() {
  const [usingDarkTheme, setUsingDarkTheme] = useState(false)

  function toggleTheme() {
    setUsingDarkTheme(!usingDarkTheme)
  }

  return (
    <ThemeProvider theme={usingDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Sidebar toggle={toggleTheme} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
