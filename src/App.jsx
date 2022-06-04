import { useState } from 'react'
import './App.css'
import Cards from './components/cards'
import CartWidget from './components/CartWidget'
import Container from './components/Container'
import NavBar from './components/NavBar'


function App() {

  return (
    <>
      <NavBar >
        <CartWidget/>
      </NavBar>

      <Container >
        <Cards/>
      </Container >
    </>
  )
}

export default App
