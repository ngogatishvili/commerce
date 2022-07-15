import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Container,Nav,Badge} from 'react-bootstrap';
import { useContext } from 'react';
import {Link} from "react-router-dom"
import { Store } from './Store';

function App() {
  const {state:{cart}}=useContext(Store)
  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
        <header>
          <Navbar bg='dark' variant='dark'>
            <Container>
              <LinkContainer to='/'>
                <Navbar.Brand>amazona</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                    cart
                    {cart.cartItems.length>0 && <Badge pill bg="danger">{cart.cartItems.length}</Badge>}
                </Link>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='products/:slug' element={<ProductScreen />} />
          </Routes>
          </Container>
         
        </main>
        <footer>
          <div className="text-center">
           All rights reserved
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
