import { Routes, Route, BrowserRouter } from 'react-router-dom'
import React, { Suspense } from 'react'

import Header from './components/Header/Header'

const Home = React.lazy(() => import('./pages/Home'))
const Employees = React.lazy(() => import('./pages/Employees'))

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Routing
