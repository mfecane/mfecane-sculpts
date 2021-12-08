import React from 'react'

import Item from 'ts/model/components/item'

import style from 'ts/components/Item.module.scss'

const ItemConponent = ({ item }) => {
  let displayImagesCount = 3

  switch (item.index) {
    case 0:
      displayImagesCount = 5
      break
    case 1:
      displayImagesCount = 3
      break
    case 2:
    default:
      displayImagesCount = 3
      break
  }

  let displayImages = item.images.slice(0, displayImagesCount)

  if (displayImages.length < displayImagesCount) {
    displayImages = displayImages.concat(
      new Array(displayImagesCount - displayImages.length)
    )
  }

  const imageContent = displayImages.map((src, index) => (
    <div className={style['item__image-container']} key={index}>
      <img src={src} className={style['item__image']} />
    </div>
  ))

  return (
    <div className={`${style['item']} ${style['upper-grid_item1']}`}>
      <div className={style['item__header-container']}>
        <div className={style['item__name']}>Lorem, ipsum dolor.</div>
        <div className={style['item__header-menu']}></div>
        <div className={style['item__count']}>100 items</div>
      </div>
      <div className={style['item__grid']}>{imageContent}</div>
    </div>
  )
}

// inherit, combine, show all from existring +
// found items

export default ItemConponent
