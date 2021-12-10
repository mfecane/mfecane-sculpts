import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from 'ts/components/MainPage'
import Collection from 'ts/components/collection'
import Layout from 'ts/components/layout'
import { Context } from 'ts/components/context'
import Imageslist from 'ts/model/components/images-list'

const App = () => {
  const [context, setContext] = useState(null)

  useEffect(() => {
    // wanted to put iife here but those lazy motherfuckers
    // won't fix prettier
    var fn = async () => {
      let imagesList = new Imageslist()
      await imagesList.createItems().then()
      setContext(imagesList)
    }
    fn()
  }, [])

  return (
    <Context.Provider value={[context, setContext]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout content={<MainPage />} />} />
          <Route
            path="/collections/:id"
            element={<Layout content={<Collection />} />}
          />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
}

export default App
