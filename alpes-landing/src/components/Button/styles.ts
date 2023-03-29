import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.secondary};
  height: 30px;
  width: 150px;
  border-radius: 50px;
  text-transform: uppercase;
  user-select: none;
  font-size: 0.8rem;
  color: ${(props) => props.theme.secondary};
  cursor: pointer;
  z-index: 1;
  background: none;
  overflow: hidden;
  transition: 0.3s ease-in;
  user-select: none;
  text-decoration: none;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  &:hover {
    color: ${({ theme }) => theme.text};
  }

  &:before {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.secondary};
    bottom: 0;
    left: 0;
    right: 0;
    top: 100%;
    z-index: -1;
    -webkit-transition: top 0.2s ease-in;
  }

  &:hover:before {
    top: 0;
  }

  &:active {
    opacity: 0.7;
  }

  a {
    color: inherit;
  }
`
