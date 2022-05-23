import { Fragment } from 'react';
import Cart from './components/Cart/Cart';
import Desserts from './components/Desserts/Desserts';
import Header from './components/Layout/Header';

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Desserts />
      </main>
    </Fragment>
  );
}

export default App;
