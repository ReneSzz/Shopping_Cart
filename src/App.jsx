import { useState, createContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Store } from './pages/store';
import { Home } from './pages/home';
import { Link, Route , Routes } from 'react-router-dom';
import './App.css'

export const TotalContext = createContext();
export const CartContext = createContext();
function App() {
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  return (
    <>
     <CartContext.Provider value={[cart,setCart]}>
    <TotalContext.Provider value={[total, setTotal]}> 
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand  as={Link} to={"/"} >React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  as={Link} to={"/"} >Home</Nav.Link>
            <Nav.Link as={Link} to={"/store"} >Store</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/store" element={<Store/>} ></Route>
      </Routes>
      </TotalContext.Provider>
      </CartContext.Provider>
    </>
  )
}

export default App
