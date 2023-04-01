import './index.css'
import {ColorModeContext, useMode} from './theme'
import {CssBaseline, ThemeProvider} from '@mui/material'
import {Routes, Route} from 'react-router-dom'
import { ProSidebarProvider } from 'react-pro-sidebar';
import TopBar from './screen/global/TopBar'
import MainSidebar from './screen/global/SideBar'
import Dashboard from './screen/dashboard'
import Team from './screen/team/index'
import Contacts from './screen/contacts/index'
import Invoices from './screen/invoices/index'
import Form from './screen/form/index'
import Calendar from './screen/calendar/index'
import FAQ from './screen/faq/index'
import Bar from './screen/bar/index'
import Pie from './screen/pie/index'
import Line from './screen/line/index'
import Geography from './screen/geography/index'

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <ProSidebarProvider>
            <div className="app">
              <MainSidebar/>
              <main className="content">
                <TopBar />
                <Routes>
                  <Route path='/' element={<Dashboard/>}/>
                  <Route path='/team' element={<Team/>}/>
                  <Route path='/contacts' element={<Contacts/>}/>
                  <Route path='/invoices' element={<Invoices/>}/>
                  <Route path='/form' element={<Form/>}/>
                  <Route path='/calendar' element={<Calendar/>}/>
                  <Route path='faq' element={<FAQ/>}/>
                  <Route path='bar' element={<Bar/>}/>
                  <Route path='/pie' element={<Pie/>}/>
                  <Route path='/line' element={<Line/>}/>
                  <Route path='/geography' element={<Geography/>}/>
                </Routes>
              </main>
            </div>
          </ProSidebarProvider>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}

export default App;
