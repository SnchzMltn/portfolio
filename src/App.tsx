import Header from './components/header/Header';
import AboutMeContent from './components/AboutMeContent/AboutMeContent';
import ContactFormContent from './components/ContactFormContent/ContactFormContent';
import './App.css';
import { COLORS } from './static/constants';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: COLORS.main,
      },
      secondary: {
        main: COLORS.secondary,
      }
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<AboutMeContent />} />
            <Route path='/contact/*' element={<ContactFormContent />} />
          </Routes>
          <Header />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
