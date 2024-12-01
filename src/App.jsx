import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/header';
import ProductsList from './containers/ProductsList';
import ProductsDetails from './containers/ProductDetail';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<ProductsList />} />
                <Route path="/product/:productId" element={<ProductsDetails />} />
                <Route path="*" element={<div>404 Not Found!</div>} />
            </Routes>
        </Router>
    );
}

export default App;
