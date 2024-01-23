import { useContext } from "react";
import { Modal } from "../../UI/Modal";
import { CartContext } from "../../store/cart-context";
import { UserProgressContext } from "../../store/user-progress-context";
import { currentFormatter } from "../../utils";
import { Input } from "../../UI/input";
import { Button } from "../../UI/button";

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userPgrCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx?.items.reduce(
    (totalPrice, item) => totalPrice + item?.price * item?.quantity,
    0
  );
  const handleCloseCheckout = () => {
    userPgrCtx.hideCheckout();
  };
  return (
    <Modal
      open={userPgrCtx.progress === "checkout"}
      onClose={userPgrCtx.progress === "checkout" ? handleCloseCheckout : null}
    >
      <form>
        <h2>Checkout</h2>
        <p>Total Amount :{currentFormatter.format(cartTotal)}</p>
        <Input label="full-name" type="text" id="full-name" />
        <Input label="E-mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <Button type="button" onClick={handleCloseCheckout} textOnly>
            Close{" "}
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
};

export { Checkout };
