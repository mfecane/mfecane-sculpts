import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from 'ts/components/MainPage'
import Collection from 'ts/components/collection'
import Layout from 'ts/components/layout'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout content={<MainPage />} />} />
        <Route
          path="/collections/:id"
          element={<Layout content={<Collection />} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
