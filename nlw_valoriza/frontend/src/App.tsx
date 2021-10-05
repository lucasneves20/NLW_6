import React, { Provider } from 'react'
import Header from './components/template/Header'
import Content from './components/template/Content'
import Footer from './components/template/Footer'
import './styles/global.scss'
import { BrowserRouter as Router } from 'react-router-dom'

export default function App() {
  return (
      <Router>
        <div className="App">
          <Header />
          <Content />
          <Footer />
        </div>
      </Router>
  );
}
