import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { IntroSection } from './components/IntroSection'
import './global.css'

function App() {
  return(
    <BrowserRouter>
      <Header />
      <IntroSection />
    </BrowserRouter>
  )
}

export default App
