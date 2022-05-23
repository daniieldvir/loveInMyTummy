import Card from '../UI/Card';
import DessertItem from './DessertItem/DessertItem';
import classes from './AvailableDesserts.module.css';

const DUMMY_DESSERTS = [
  {
    id: 'm1',
    name: 'LPR Pie ',
    description: 'Lemon Pistachio and Raspberry Pie',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'The pistachio delight',
    description: 'Pistachio cookies with chocolate and raspberries',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Spring clouds',
    description: 'Pavlova milkshake with citrus fruits',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Numbers cake',
    description:
      'Number-shaped cake with diplomat cream, fruit or chocolates to choose from',
    price: 18.99,
  },
];

const AvailableDesserts = () => {
  const dessertsList = DUMMY_DESSERTS.map((dessert) => (
    <DessertItem
      key={dessert.id}
      id={dessert.id}
      name={dessert.name}
      description={dessert.description}
      price={dessert.price}
    />
  ));

  return (
    <section className={classes.desserts}>
      <Card>
        <ul>{dessertsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableDesserts;
