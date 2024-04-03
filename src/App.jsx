import{ColorModeContext , useMode} from "./theme"
import { CssBaseline , ThemeProvider } from '@mui/material'
import { Routes , Route} from "react-router-dom"
import Topbar from "./Scenes/global/Topbar"
import DashBoard from "./Scenes/dashboard/Index"
import Sidebar from "./Scenes/global/Sidebar"

function App() {
  const[theme, colorMode]=useMode();
  return (<ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div className='app'></div>
    <main className='content'>
      <Topbar/>
      <Routes>
        <Route path="/" element={<DashBoard/>}/>
      </Routes>
    </main>
    </ThemeProvider>
  </ColorModeContext.Provider>
  )
} 

export default App
