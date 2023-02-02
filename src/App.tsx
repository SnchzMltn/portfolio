import Header from './components/header/Header';
import AboutMeContent from './components/AboutMeContent/AboutMeContent';
import ContactFormContent from './components/ContactFormContent/ContactFormContent';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AboutMeContent />} />
          <Route path='/contact/*' element={<ContactFormContent />} />
        </Routes>
        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
