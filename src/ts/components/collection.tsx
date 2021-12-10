import React, { useRef, useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from 'ts/components/context'

import styles from 'ts/components/collection.module.scss'

const Collection = (props) => {
  const [imagesList, setImagesList] = useContext(Context)
  let params = useParams()

  if (!imagesList) {
    return <></>
  }

  let collection = imagesList.collections.find((el) => el.index === +params.id)
  let imagesContent = (collection?.images || []).map((img, index: number) => (
    <CollectionImage {...img} key={index} />
  ))
  return <div className={styles['image-list']}>{imagesContent}</div>
}

const CollectionImage = ({ width, height, src }: { src: string }) => {
  let ratio = height / width
  let ratioClass = ''

  if (ratio <= 0.5) {
    ratioClass = styles['image-container-1']
  } else if (ratio < 1.0) {
    ratioClass = styles['image-container-2']
  } else if (ratio < 1.5) {
    ratioClass = styles['image-container-3']
  } else {
    ratioClass = styles['image-container-4']
  }

  console.log(ratioClass)

  return (
    <div className={`${styles['image-container']} ${ratioClass}`}>
      <img src={src} className={styles.image} />
    </div>
  )
}

export default Collection
