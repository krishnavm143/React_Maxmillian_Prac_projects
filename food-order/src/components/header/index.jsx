import { useContext } from "react";
import { Button } from "../../UI/button";
import logoImage from "../../assets/logo.jpg";
import { CartContext } from "../../store/cart-context";
import { UserProgressContext } from "../../store/user-progress-context";
const Header = () => {
  const cartCtx = useContext(CartContext);
  const userPrgsCtx = useContext(UserProgressContext);
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item?.quantity;
  }, 0);
  const handleCartModal = () => {
    userPrgsCtx.showCart();
  };
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImage} alt="" srcset="" />
        <h1>Product list</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleCartModal}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
};
export { Header };
