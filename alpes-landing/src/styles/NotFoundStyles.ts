import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 100vw;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: ${({ theme }) => theme.secondary};
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    color: #fff;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.primary};
`

// Path: src\components\NotFound.tsx
