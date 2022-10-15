import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import './global.css'
import { GlobalState } from './reducers/itemsCart/CartState'

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </GlobalState>
  )
}

export default App
