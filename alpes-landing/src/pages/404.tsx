import Header from '@/components/Header'
import * as C from '../styles/NotFoundStyles'

const NotFound = () => {
  return (
    <>
      <Header />
      <C.Container>
        <C.Content>
          <h1>404</h1>
          <p>Página não encontrada</p>
        </C.Content>
      </C.Container>
    </>
  )
}

export default NotFound
