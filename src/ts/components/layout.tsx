import React from 'react'
import Header from 'ts/components/header'

import styles from 'ts/components/layout.module.scss'

export default ({ content }) => {
  return (
    <div>
      <div className={styles['container']}>
        <Header />
      </div>
      <div className={styles['content']}>
        <div className={styles['container']}>{content}</div>
      </div>
    </div>
  )
}
