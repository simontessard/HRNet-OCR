import ButtonCurrentEmployee from '../components/ButtonCurrentEmployee'
import Form from '../components/Form'

import styled from 'styled-components'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`

function Home() {
  return (
    <Container>
      <ButtonCurrentEmployee />
      <FormContainer>
        <Form />
      </FormContainer>
    </Container>
  )
}

export default Home
