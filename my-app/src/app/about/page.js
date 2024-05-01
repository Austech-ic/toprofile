
import React from 'react'
import Compnine from '@/components/websites/compnine/compnine'
import Sectionone from '../../components/websites/sectionone/index'
import styles from './about.module.css'
import Header from '@/components/websites/header/header'

const Page = () => {
  return (
    <div>
    <div className={styles.main}>
      <Header />
      <Compnine/>
    </div>
{/* <Blogsnews /> */}

  </div>
  )
}

export default Page