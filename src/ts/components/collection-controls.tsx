import React from 'react'

import Checkbox from 'ts/components/checkbox'

import styles from 'ts/components/collection-controls.module.scss'

export default () => {
  return (
    <div className={styles['controls']}>
      <Checkbox label="More ideas" />
      <Checkbox label="Single row" />
    </div>
  )
}
