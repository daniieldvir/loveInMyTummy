import { Fragment, useState } from 'react';
import Cart from './components/Cart/Cart';
import Desserts from './components/Desserts/Desserts';
import Header from './components/Layout/Header';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Desserts />
      </main>
    </Fragment>
  );
}

export default App;
