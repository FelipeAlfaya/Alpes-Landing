import styled from 'styled-components'

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url('https://images5.alphacoders.com/546/thumb-1920-546181.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    height: 600px;
    padding: 0 10%;
    transition: 0.1s linear;
  }
`
