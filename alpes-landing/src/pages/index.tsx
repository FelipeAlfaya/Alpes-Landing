/* eslint-disable @next/next/no-img-element */
import Header from '@/components/Header'
import * as C from '../styles/HomeStyles'
import HomeText from '@/components/HomeText'

const index = () => {
  return (
    <>
      <C.Container>
        <Header />
        <C.HomeImage></C.HomeImage>
        <HomeText />
      </C.Container>
    </>
  )
}

export default index
