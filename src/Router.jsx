import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Header from './components/Header'

import Home from './pages/Home'
import Employees from './pages/Employees'

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
