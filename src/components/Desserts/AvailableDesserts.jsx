import classes from './AvailableDesserts.module.css';

const DUMMY_DESSERTS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableDesserts = () => {
  const dessertsList = DUMMY_DESSERTS.map((dessert) => <li>{dessert.name}</li>);

  return (
    <section className={classes.desserts}>
      <ul>{dessertsList}</ul>
    </section>
  );
};

export default AvailableDesserts;
