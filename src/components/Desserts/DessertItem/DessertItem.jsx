import classes from './DessertItem.module.css';
import DessertItemForm from './DessertItemForm';

const DessertItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.dessert}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <DessertItemForm />
      </div>
    </li>
  );
};
export default DessertItem;
