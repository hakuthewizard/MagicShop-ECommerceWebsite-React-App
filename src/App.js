import './index.css';
import  Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import {Route, Routes} from 'react-router-dom';
import MagicShopItems from './components/MagicShopItems';
import ShoppingCart from './components/ShoppingCartPage';
import CartProvider from './components/store/CartProvider';
import CompleteOrderForm from './components/CompleteOrderPage';
function App() {
  return (
    <CartProvider>

      <Header/>
      <Routes>
      <Route path="/" element={<WelcomePage/>} exact/>
      <Route path="/welcomepage" element={<WelcomePage/>}/>
      <Route path="/magicshop" element={<MagicShopItems/>}></Route>
      <Route path="/magicshoppingcart" element={<ShoppingCart/>}></Route>
      <Route path="/loginpage" element={<CompleteOrderForm/>}></Route>
      </Routes>

    </CartProvider>
  );
}

export default App;
