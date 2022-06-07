import { useState } from 'react'
import './App.css'
import Cards from './components/cards/Cards'
import CartWidget from './components/cartWidget/CartWidget'
import Container from './components/container/Container'
import ItemCount from './components/ItemCount'
import NavBar from './components/navBar/NavBar'


function App() {

  return (
    <>
      <NavBar >
        <CartWidget/>
      </NavBar>

      <Container >
        <ItemCount/>
        <Cards/>
      </Container >
    </>
  )
}

export default App
