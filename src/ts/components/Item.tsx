import React from 'react'
import img1 from 'assets/images/albedo.jpg'
import img2 from 'assets/images/biba.jpg'
import img3 from 'assets/images/moto.jpg'

import 'ts/components/Item.scss'

const Item = ({ id }) => {
  const images = [img1, img2, img3].map((src, index) => (
    <div className="item__image-container" key={index}>
      <img src={src} class="item__image" />
    </div>
  ))

  return (
    <div className="item upper-grid_item1">
      <div className="item__header-container">
        <div className="item__name">Lorem, ipsum dolor.</div>
        <div className="item__header-menu"></div>
        <div className="item__count">100 items</div>
      </div>
      <div className="item__grid">{images}</div>
    </div>
  )
}

// inherit, combine

export default Item
