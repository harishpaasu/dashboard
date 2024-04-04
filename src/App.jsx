import{ColorModeContext , useMode} from "./theme"
import { CssBaseline , ThemeProvider } from '@mui/material'
import { Routes , Route} from "react-router-dom"
import Topbar from "./Scenes/global/Topbar"
import DashBoard from "./Scenes/dashboard/Index"
import Sidebar from "./Scenes/global/Sidebar"
// import Team from "./Scenes/team"
// import Invoices from "./Scenes/invoices"
// import Contact from "./Scenes/contact"
// import Bar from "./Scenes/bar"
// import Line from "./Scenes/line"
// import Pie from "./Scenes/pie"
// import FAQ from "./Scenes/faq"
// import Geography from "./Scenes/geography"
// import Calendar from "./Scenes/calendar"



function App() {
  const[theme, colorMode]=useMode();
  return (<ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div className='app'>
      <Sidebar/>
    <main className='content'>
      <Topbar/>
      <Routes>
        <Route path="/" element={<DashBoard/>}/>
        {/* <Route path="/team" element={<Team/>}/> */}
        {/* <Route path="/contact" element={<Contact/>}/> */}
        {/* <Route path="/bar" element={<Bar/>}/> */}
        {/* <Route path="/line" element={<Line/>}/> */}
        {/* <Route path="/invoices" element={<Invoices/>}/> */}
        {/* <Route path="/pie" element={<Pie/>}/> */}
        {/* <Route path="/faq" element={<FAQ/>}/> */}
        {/* <Route path="/calendar" element={<Calendar/>}/> */}
        {/* <Route path="/geography" element={<Geography/>}/> */}
      </Routes>
    </main>
    </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  )
} 

export default App
