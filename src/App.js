import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Desserts from './components/Desserts/Desserts';
import Header from './components/Layout/Header';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Desserts />
      </main>
    </CartProvider>
  );
}

export default App;
