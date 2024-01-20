import { useContext } from "react";
import { Modal } from "../../UI/Modal";
import { CartContext } from "../../store/cart-context";
import { currentFormatter } from "../../utils";
import { UserProgressContext } from "../../store/user-progress-context";
import { Button } from "../../UI/button";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userPrgsCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx?.items.reduce(
    (totalPrice, item) => totalPrice + item?.price * item?.quantity,
    0
  );
  return (
    <Modal className="cart" open={userPrgsCtx?.progress === "cart"}>
      <ul>
        {cartCtx?.items?.map((item) => (
          <li key={item?.id}>
            {item?.name} - {item?.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">{currentFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly>Close</Button>
        <Button>Go to Checkout</Button>
      </p>
    </Modal>
  );
};
export { Cart };
