import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 25rem;
  padding: 5rem;
  margin-top: -1rem;
`

export const BigText = styled.h1`
  font-size: 3rem;
  display: block;
  font-weight: 100;
  line-height: 1;
  color: ${({ theme }) => theme.grey};
  text-align: justify;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-family: CooperHewitt, sans-serif;
  text-align: justify;
`

export const SmallText = styled.p`
  font-size: 0.8rem;
  font-weight: 200;
  color: ${({ theme }) => theme.grey};
  text-align: center;
  margin-bottom: 1rem;
  text-align: justify;
  line-break: strict;
`
