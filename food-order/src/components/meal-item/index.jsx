import { useContext } from "react";
import { Button } from "../../UI/button";
import { url } from "../../services";
import { currentFormatter } from "../../utils";
import { CartContext } from "../../store/cart-context";

const MealItem = ({ meal }) => {
  const createCtx = useContext(CartContext);

  const handleAddItem = () => {
    createCtx.addItem(meal);
  };
  return (
    <li className="meal-item">
      <article>
        <img src={`${url}/${meal?.image}`} alt={meal?.name} />
        <div>
          <h3>{meal?.name}</h3>
          <p className="meal-item-price">
            {currentFormatter.format(meal?.price)}
          </p>
          <p className="meal-item-description">{meal?.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddItem}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};
export { MealItem };
