import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Navbar/Header";
import Main from "./pages/Main";
import PostPage from "./pages/PostPage";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
