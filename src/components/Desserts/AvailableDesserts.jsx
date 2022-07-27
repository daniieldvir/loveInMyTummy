import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import DessertItem from './DessertItem/DessertItem';
import classes from './AvailableDesserts.module.css';

const AvailableDesserts = () => {
  const [desserts, setDesserts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchDesserts = async () => {
      const response = await fetch(
        'https://desser-a46c4-default-rtdb.firebaseio.com/desserts.json'
      );

      if (!response.ok) throw new Error('Something went wrong!');

      const responseData = await response.json();

      const loadedDeserts = [];

      for (const key in responseData) {
        loadedDeserts.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          image: responseData[key].image,
        });
      }

      setDesserts(loadedDeserts);
      setIsLoading(false);
    };

    fetchDesserts().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading)
    return (
      <section className={classes.dessertsLoading}>
        <p>Loading...</p>
      </section>
    );

  if (httpError)
    return (
      <section className={classes.dessertsError}>
        <p>{httpError}</p>
      </section>
    );

  const dessertsList = desserts.map((dessert) => (
    <DessertItem
      key={dessert.id}
      id={dessert.id}
      name={dessert.name}
      description={dessert.description}
      price={dessert.price}
      image={dessert.image}
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
