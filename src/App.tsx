import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from './store'
import { GlobalStyle } from './styles' // O nome que você usa
import Rotas from './routes'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}

export default App
