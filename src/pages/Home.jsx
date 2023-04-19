import ButtonCurrentEmployee from '../components/ButtonCurrentEmployee/ButtonCurrentEmployee'
import Form from '../components/Form/Form'

import './pages.css'

function Home() {
  return (
    <main className="home-container">
      <ButtonCurrentEmployee />
      <Form />
    </main>
  )
}

export default Home
