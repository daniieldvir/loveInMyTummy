import { Fragment } from 'react';
import DessertsSummary from './DessertsSummery';
import AvailableDesserts from './AvailableDesserts';

const Desserts = () => {
  return (
    <Fragment>
      <DessertsSummary />
      <AvailableDesserts />
    </Fragment>
  );
};

export default Desserts;
