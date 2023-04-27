import classes from './Checkout.module.css';
import { useRef, useState } from 'react';
const isEmpty = value => value.trim() === ""
const isFiveChars = (value) => value.trim().length === 5;
const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    })

    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const postalInputRef = useRef()
    const cityInputRef = useRef()

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName)
        const enteredStreetIsValid = !isEmpty(enteredStreet)
        const enteredPostalIsValid = isFiveChars(enteredPostal)
        const enteredCityIsValid = !isEmpty(enteredCity)

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalIsValid
        })

        const formIsValid =
            enteredNameIsValid
            &&
            enteredCityIsValid
            &&
            enteredStreetIsValid
            &&
            enteredPostalIsValid

        if (!formIsValid) {
            return
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostal,
            city: enteredCity
        })
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={`${classes.control} ${formInputsValidity.name ? "" : classes.invalid}`}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' ref={nameInputRef} id='name' />
                {!formInputsValidity.name && <p>Please Enter a valid Name</p>}
            </div>
            <div className={`${classes.control} ${formInputsValidity.street ? "" : classes.invalid}`}>
                <label htmlFor='street'>Street</label>
                <input type='text' ref={streetInputRef} id='street' />
                {!formInputsValidity.street && <p>Please Enter a valid street</p>}

            </div>
            <div className={`${classes.control} ${formInputsValidity.postalCode ? "" : classes.invalid}`}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' ref={postalInputRef} id='postal' />
                {!formInputsValidity.postalCode && <p>Please Enter a valid Postal Code</p>}
            </div>
            <div className={`${classes.control} ${formInputsValidity.city ? "" : classes.invalid}`}>
                <label htmlFor='city'>City</label>
                <input type='text' ref={cityInputRef} id='city' />
                {!formInputsValidity.city && <p>Please Enter a valid City</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;