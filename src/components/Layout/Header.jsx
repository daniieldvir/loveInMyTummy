import { Fragment } from 'react';
import lemonElGryImg from '../../assets/lemonElGryImg.jpg';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes['brand-name']}>Love In My Tummy</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={lemonElGryImg} alt="Lemon El Gry" />
      </div>
    </Fragment>
  );
};

export default Header;
