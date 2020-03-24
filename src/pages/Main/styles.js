import styled from 'styled-components'

export const Container = styled.div`
  max-width: 700px;
  background: #ffff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    width: 100%;
    font-size: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
  }

  svg {
    margin-right: 10px;
  }
`

export const Images = styled.div`
  padding-top: 40px;
  align-items: center;
  text-align: center;
  img {
  }
`
