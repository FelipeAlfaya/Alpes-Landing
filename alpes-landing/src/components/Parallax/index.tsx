import { useEffect, useState } from 'react'
import * as C from './styles'

const useParallaxBanner = (setScrollPosition: any) => {
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  })
}

const Parallax = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useParallaxBanner(setScrollPosition)

  return (
    <>
      <C.Container>
        <section
          style={{
            backgroundSize: `${(window.outerHeight - scrollPosition) / 3}%`,
          }}
        >
          <h2>Parallax</h2>
          <h3>teste</h3>
        </section>
      </C.Container>
    </>
  )
}

export default Parallax
