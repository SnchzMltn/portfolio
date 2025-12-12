import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import AboutMeContent from "./pages/AboutMeContent/AboutMeContent";
import ContactFormContent from "./pages/ContactFormContent/ContactFormContent";
import { createTheme } from "@mui/material";
import { COLORS } from "./static/constants";
import "./App.css";
import { useState, useMemo } from "react";
import type { Posts } from "./services/Posts";
import { fetchPosts } from "./services/PostsApiHelper";
import BlogPageDetail from "./components/BlogPageDetailMarkdown/BlogPageDetail";
import BlogPage from "./pages/BlogPage/BlogPage";
import HackerNewsTopStories from "./pages/HackerNewsTopStories/HackerNewsTopStories";

function App() {
  const [posts, setPosts] = useState<Posts[]>([]);
  useMemo(() => {
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
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AboutMeContent />} />
          <Route path='/about-me' element={<AboutMeContent />} />
          <Route path='/blog' element={<BlogPage blogItems={posts} />} />
          <Route path='/blog/:id' element={<BlogPageDetail blogItems={posts} />} />
          <Route path="/contact" element={<ContactFormContent />} />
          <Route path='/news' element={<HackerNewsTopStories />} />
          <Route path="*" element={<p>Nothing to see here</p>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
