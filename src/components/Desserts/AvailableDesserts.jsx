import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import DessertItem from './DessertItem/DessertItem';
import classes from './AvailableDesserts.module.css';

const AvailableDesserts = () => {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    const fetchDesserts = async () => {
      const response = await fetch(
        'https://desser-a46c4-default-rtdb.firebaseio.com/desserts.json'
      );

      const responseData = await response.json();

      const loadedDeserts = [];

      for (const key in responseData) {
        loadedDeserts.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      setDesserts(loadedDeserts);
    };

    fetchDesserts();
  }, []);

  const dessertsList = desserts.map((dessert) => (
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
