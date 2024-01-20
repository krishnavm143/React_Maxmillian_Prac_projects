import { useState, useEffect } from "react";
import { fetchMeals } from "../../services";
import { MealItem } from "../meal-item";

const Meals = () => {
  const [loadingMeals, setLoadingMeals] = useState([]);
  useEffect(() => {
    const fetchingMeals = async () => {
      const data = await fetchMeals();
      setLoadingMeals(data);
    };
    fetchingMeals();
  }, []);
  return (
    <ul id="meals">
      {loadingMeals?.map((meal) => (
        <MealItem meal={meal} key={meal?.id} />
      ))}
    </ul>
  );
};
export { Meals };
