import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home.tsx'
import Header from './shared/Header/Header.tsx'
import Resume from './components/Resume/Resume.tsx'
import Projects from './components/Projects/Projects.tsx'
import Calculator from './components/Calculator/Calculator.tsx'

const App = () => {
  return (
    <div className="bg-slate-800">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  )
}

export default App
