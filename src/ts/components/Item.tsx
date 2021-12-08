import React from 'react'
import img1 from 'assets/images/albedo.jpg'
import img2 from 'assets/images/biba.jpg'
import img3 from 'assets/images/moto.jpg'

import style from 'ts/components/Item.module.scss'

const Item = ({ id, index, images }) => {
  console.log('style', style)

  images = [img1, img2, img3].map((src, index) => (
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
      <div className={style['item__grid']}>{images}</div>
    </div>
  )
}

// inherit, combine, show all from existring +
// found items

export default Item
