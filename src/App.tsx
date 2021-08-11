import Header from './components/header/Header';
import AboutMeContent from './components/AboutMeContent/AboutMeContent';
import { Typography } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="App">
      <br/>
      <br/>
      <Typography variant="h1" className="AppTitle">
        Milton A. Sanchez M.
      </Typography>
      <br />
      <Header />
      <br/>
      <AboutMeContent />
    </div>
  );
}

export default App;
