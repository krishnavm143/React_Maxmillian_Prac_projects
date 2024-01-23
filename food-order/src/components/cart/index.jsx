import { useContext } from "react";
import { Modal } from "../../UI/Modal";
import { CartContext } from "../../store/cart-context";
import { currentFormatter } from "../../utils";
import { UserProgressContext } from "../../store/user-progress-context";
import { Button } from "../../UI/button";
import { CartItem } from "../cart-item";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userPrgsCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx?.items.reduce(
    (totalPrice, item) => totalPrice + item?.price * item?.quantity,
    0
  );
  const handleCloseCart = () => {
    userPrgsCtx.hideCart();
  };
  const handleGoToCheckout = () => {
    userPrgsCtx.showCheckout();
  };
  return (
    <Modal
      className="cart"
      open={userPrgsCtx?.progress === "cart"}
      onClose={userPrgsCtx?.progress === "cart" ? handleCloseCart : null}
    >
      <ul>
        {cartCtx?.items?.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currentFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx?.items?.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
};
export { Cart };
