import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages'

const App = () => {
  return (
    <div className=' font-main'>
<BrowserRouter>
<Routes>
  <Route path="/">
    <Route index element={<Home />} />
  </Route>
</Routes>
</BrowserRouter>

    </div>
  )
}

export default App