import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-height: 600px;
  min-width: 400px;
  padding: -1rem;
  height: fit-content;
  border-radius: 5% 5% 5% 5% / 0% 0% 2% 2%;
  background-color: ${({ theme }) => theme.text};
`

export const ImageContainer = styled.div`
  display: flex;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  min-width: 100px;
  min-height: 100px;
  box-shadow: 0 0 0.3rem 0.01rem #000;
`

export const Title = styled.h1`
  font-size: 2.2rem;
  text-align: justify;
`

export const Description = styled.p`
  font-size: 0.8rem;
  text-align: justify;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  gap: 1rem;
  width: 340px;
  height: 100%;
  text-align: justify;
  transition: all 0.2s ease-in-out;
  color: ${({ theme }) => theme.primary};
  padding: 1rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
  z-index: 999;
`
