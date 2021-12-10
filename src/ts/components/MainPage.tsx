import React, { useContext } from 'react'
import FirstRow from 'ts/components/FirstRow'
import MainGrid from './MainGrid'
import { Context } from 'ts/components/context'

const MainPage = () => {
  const [imagesList, setImagesList] = useContext(Context)

  if (!imagesList) {
    return <></>
  }

  let firstRowItems = imagesList.getItems(0, 3)
  let mainGridItems = imagesList.getItems(3)

  return (
    <>
      <FirstRow items={firstRowItems} />
      <MainGrid items={mainGridItems} />
    </>
  )
}

export default MainPage
