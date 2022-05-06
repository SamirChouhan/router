import './App.css';
import { BrowserRouter, Router, Route, Routes, Link } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about";
import Form from "./components/form";
import Home from './components/home';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Layout from './components/Layout';
import NoPage from './components/NoPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter> */}

      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route  element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="form" element={<Form />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes> */}

        <Routes>
          <Link to=''>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/form'>Form</Link>


          <Route exact path='' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/form' element={<Form/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
