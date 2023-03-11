import styled from 'styled-components'

interface NavLinkProps {
  isActive: boolean
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  height: 20vh;
  background: ${(props) => props.theme.primary};
  user-select: none;
`

export const Logo = styled.div`
  padding: 15px;
  margin-top: -3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text};
  cursor: pointer;
`

export const Links = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  flex-direction: column;
  line-height: 1.9;
`
export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  gap: 15px;
  padding: 0 10px;
`

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    display: inline-block;
    margin: 0 10px;
    justify-content: flex-start;
    font-family: CooperHewitt, sans-serif;
    font-weight: 300;
    cursor: pointer;
    color: ${(props) =>
      props.isActive ? props.theme.secondary : props.theme.grey};
    transition: 0.3s;
  }

  &:hover a {
    transition: 0.3s;
    color: ${({ theme }) => theme.secondary};
  }
`
