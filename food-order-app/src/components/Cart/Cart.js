import React, { useContext, useState } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import Checkout from './Checkout'
const Cart = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [didSubmit, setDidSubmit] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const cartCtx = useContext(CartContext)
  const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  }
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  }
  const orderHandler = () => {
    setIsChecked(true)
  }
  const submitOrderHandler = async (userData) => {
    // console.log(userData)
    setIsSubmitting(true)
    try {
      const response = await fetch(`https://fetch-app-7d637-default-rtdb.firebaseio.com/orders.json`, {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderItems: cartCtx.items
        })
      })
      const data = await response.json()

      console.log(data)
      setIsSubmitting(false)
      setDidSubmit(true)
      cartCtx.clearCart()
    } catch (error) {
      console.log(error)
    }


  }
  const cartItems = <ul className={classes['cart-items']}>
    {
      cartCtx.items.map(item => <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={() => cartItemRemoveHandler(item.id)}
        onAdd={() => cartItemAddHandler(item)}
      />)
    }
  </ul>
  const modalActions = <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
    {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
  </div>

  const cartModalContent = <React.Fragment>
    {cartItems}
    <div className={classes.total}>
      <span>total Amount</span>
      <span>{totalAmount}</span>
    </div>
    {isChecked && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
    {!isChecked && modalActions}
  </React.Fragment>

  const isSubmittingModalContent = <p>Sending Order Data</p>
  const didSubmitModalContent = <>

    <p>Succesfully sent the order</p>
    
    <button className={classes['button--alt']} onClick={props.onClose}>Close</button>

  </>
  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  )
}

export default Cart