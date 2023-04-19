import ButtonCurrentEmployee from '../components/ButtonCurrentEmployee/ButtonCurrentEmployee'
import Form from '../components/Form/Form'

import styled from 'styled-components'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`

function Home() {
  return (
    <Container>
      <ButtonCurrentEmployee />
      <Form />
    </Container>
  )
}

export default Home
