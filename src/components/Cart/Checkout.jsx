import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isPhoneNumber = (value) => value.trim().length === 10;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    phonNumber: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const phonNumberRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPhonNumber = phonNumberRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPhonNumberIsValid = isPhoneNumber(enteredPhonNumber);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      phonNumber: enteredPhonNumberIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPhonNumberIsValid;

    if (!formIsValid) return;

    props.onConfirm({
      name: enteredName,
      street: enteredCity,
      city: enteredCity,
      phonNumber: enteredPhonNumber,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`;

  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? '' : classes.invalid
  }`;

  const phoneNumberControlClasses = `${classes.control} ${
    formInputsValidity.phonNumber ? '' : classes.invalid
  }`;

  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? '' : classes.invalid
  }`;
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name.</p>}
      </div>

      <div className={phoneNumberControlClasses}>
        <label htmlFor="phon">Phon Number</label>
        <input type="text" id="phon" ref={phonNumberRef} />
        {!formInputsValidity.phonNumber && (
          <p>Please enter a valid phon number</p>
        )}
      </div>

      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street.</p>}
      </div>

      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city.</p>}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCloseCart}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
