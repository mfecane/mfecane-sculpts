import React from 'react'
import FirstRow from 'ts/components/FirstRow'
import { imagesList } from 'ts/model/components/images-list'

import MainGrid from './MainGrid'

const MainPage = () => {
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
