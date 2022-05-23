import { Fragment } from 'react';
import lemonElGryImg from '../../assets/lemonElGryImg.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Love In My Tummy</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={lemonElGryImg} alt="Lemon El Gry" />
      </div>
    </Fragment>
  );
};

export default Header;
