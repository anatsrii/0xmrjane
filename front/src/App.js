
// import './App.css';
import {Routes, Route, } from 'react-router-dom';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Projects from './Components/Projects';
import NoPage from './Components/NoPage';
import Blog from './Components/Blog';
import Exchange from './Projects/Exchange';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='portfolio' element={<Portfolio/>} />
        <Route path='projects' element={<Projects/>} />
        <Route path='projects/exchange' element={<Exchange/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='blog' element={<Blog/>} />
        <Route path='*' element={<NoPage/>} />
      </Routes>
    </div>
  );
}

export default App;
