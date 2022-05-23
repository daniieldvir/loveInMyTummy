import { Fragment } from 'react';
import Desserts from './components/Desserts/Desserts';

import Header from './components/Layout/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Desserts />
      </main>
    </Fragment>
  );
}

export default App;
