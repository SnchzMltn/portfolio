import Header from './components/header/Header';
import AboutMeContent from './pages/AboutMeContent/AboutMeContent';
import ContactFormContent from './pages/ContactFormContent/ContactFormContent';
import BlogPage from './pages/BlogPage/BlogPage';

import './App.css';
import { COLORS } from './static/constants';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';

function App() {

  const theme = createTheme({
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
		        <Route path='/blog/*' element={<BlogPage />} />
            <Route path='/contact/*' element={<ContactFormContent />} />
          </Routes>
          <Header />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
