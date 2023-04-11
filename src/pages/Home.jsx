import ButtonCurrentEmployee from '../components/ButtonCurrentEmployee'

import styled from 'styled-components'

const Container = styled.main`
  display: flex;
  justify-content: center;
`

function Home() {
  return (
    <Container>
      <ButtonCurrentEmployee />
    </Container>
  )
}

export default Home
