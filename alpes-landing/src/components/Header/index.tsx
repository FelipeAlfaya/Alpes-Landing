import * as C from './styles'
import NavLink from './NavLink'
import Image from 'next/image'
import Button from '../Button'
import Link from 'next/link'

function Header() {
  return (
    <C.Container>
      <C.Logo>
        <Image src='./Logo.svg' width={150} height={150} alt='Logo' />
      </C.Logo>
      <C.Menu>
        <span>
          <Button>
            <Link legacyBehavior href='/contato'>
              <a>Fale Conosco</a>
            </Link>
          </Button>
        </span>
        <C.Links>
          <NavLink title='Quem Somos' path='/' />
          <NavLink title='Produto' path='/produto' />
          <NavLink title='Sobre' path='/sobre' />
        </C.Links>
      </C.Menu>
    </C.Container>
  )
}

export default Header
