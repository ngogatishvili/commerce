import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
       <Link to="/">amazona</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="products/:slug" element={<ProductScreen/>}/>
        </Routes>
      
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
