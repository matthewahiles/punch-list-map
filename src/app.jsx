import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import TitleBar from './components/title-bar'
import Drawer from './components/drawer'
import GoogleMap from './components/map'
import { store } from './store'
import { Column, Row } from './components/layout'

const App = () =>
  <Provider store = {store}>
    <Router>
      <Column>
        <TitleBar />
        <Row>
          <Drawer />
          <GoogleMap />
        </Row>
      </Column>
    </Router>
  </Provider>

export default App
