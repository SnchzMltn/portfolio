import Header from './components/header/Header';
import AboutMeContent from './pages/AboutMeContent/AboutMeContent';
import ContactFormContent from './pages/ContactFormContent/ContactFormContent';
import './App.css';
import { COLORS } from './static/constants';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import BlogPage from './pages/BlogPage/BlogPage';
import BlogPageDetail from './components/BlogPageDetailMarkdown/BlogPageDetail';
import { useEffect, useState } from 'react';
import { fetchPosts } from './services/PostsApiHelper';
import { Posts } from './services/Posts';
import HackerNewsTopStories from './pages/HackerNewsTopStories/HackerNewsTopStories';

function App() {

  const [posts, setPosts] = useState<Posts[]>([]);
  useEffect(() => {
    fetchPosts().then(postsArray => {
      setPosts(postsArray);
    }).catch(error => {
      console.debug(error);
    })
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: COLORS.primary.main,
      },
      secondary: {
        main: COLORS.secondary.main,
      }
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div className="Background">
          <BrowserRouter>
              <Routes>
                <Route path='/' element={<AboutMeContent />} />
                <Route path='/blog' element={<BlogPage blogItems={posts} />} />
                <Route path='/blog/:id' element={<BlogPageDetail blogItems={posts} />} />
                <Route path='/contact' element={<ContactFormContent />} />
                <Route path='/news' element={<HackerNewsTopStories />} />
              </Routes>
              <Header />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
