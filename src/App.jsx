import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Store } from './pages/store';
import { Home } from './pages/home';
import { Link, Route , Routes } from 'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Link className="headerLink nav-link" to="/">Home</Link>
          <Nav className="me-auto">
          <Link className="headerLink nav-link" color='white' to="/store">Store</Link>
          </Nav>
        </Container> 
      </Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/store" element={<Store/>} ></Route>
      </Routes>
    </>
  )
}

export default App
