import{colorModeContext , useMode} from "./theme"
import { CssBaseline , ThemeProvider } from '@mui/material'
import Topbar from "./Scenes/global/Topbar"

function App() {
  const[theme, colorMode]=useMode();
  return (<colorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div className='app'></div>
    <main className='content'>
      <Topbar/>
    </main>
    </ThemeProvider>
  </colorModeContext.Provider>
  )
} 

export default App
