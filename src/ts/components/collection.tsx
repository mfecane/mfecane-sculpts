import React from 'react'
import { imagesList } from 'ts/model/components/images-list'
import { useParams } from 'react-router-dom'

import styles from 'ts/components/collection.module.scss'

const collection = (props) => {
  let params = useParams()
  let collection = imagesList.collections.find((el) => el.index === +params.id)
  let imagesContent = collection.images.map((src, index) => (
    <div className={styles['image-container']}>
      <img src={src} className={styles.image} />
    </div>
  ))
  return <div>{imagesContent}</div>
}

export default collection
