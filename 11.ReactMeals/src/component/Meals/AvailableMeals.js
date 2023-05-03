import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "./..//UI/Card";
import { useEffect, useState } from "react";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    setIsLoading(true);
    const fetchmeals = async () => {
      const rawdata = await fetch(
        "https://react-learn-a0909-default-rtdb.firebaseio.com/meals.json"
      );
      const mealsdata = await rawdata.json();

      if (!rawdata.ok) {
        throw new Error();
      }

      const loadedMeals = [];
      for (const key in mealsdata) {
        loadedMeals.push({
          id: key,
          name: mealsdata[key].name,
          description: mealsdata[key].description,
          price: mealsdata[key].price,
        });
      }
      setMeals(loadedMeals);
    };

    fetchmeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <section className={classes.isLoading}>
        <p>Loading Meals...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.isError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
