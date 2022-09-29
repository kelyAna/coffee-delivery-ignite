import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { IntroSection } from './components/IntroSection'
import { ItemsList } from './components/ItemsList'
import './global.css'

function App() {
  return(
    <BrowserRouter>
      <Header />
      <IntroSection />
      <ItemsList />
    </BrowserRouter>
  )
}

export default App
