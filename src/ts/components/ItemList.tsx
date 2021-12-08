import React from 'react'
import img1 from 'assets/images/albedo.jpg'
import img2 from 'assets/images/biba.jpg'
import img3 from 'assets/images/moto.jpg'

import ItemComponent from 'ts/components/Item'
import Item from 'ts/model/components/item'

export default () => {
  const item = new Item()

  item.images.push(img1)
  item.images.push(img2)
  item.images.push(img3)

  return <ItemComponent item={item} />
}
