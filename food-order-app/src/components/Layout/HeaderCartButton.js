import { useContext ,useEffect,useState} from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [isBtnHilighted,setIsBtnHighlighted]=useState(false)
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const {items}=cartCtx

  useEffect(()=>{
    if(items.length === 0){
      return 
    }
    setIsBtnHighlighted(true)

    const timer=setTimeout(()=>{
      setIsBtnHighlighted(false)
    },300)

    return ()=>{
      clearTimeout(timer)
    }
  },[items])
  const btnClasses = `${classes.button} ${isBtnHilighted ? classes.bump : ''}`

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;