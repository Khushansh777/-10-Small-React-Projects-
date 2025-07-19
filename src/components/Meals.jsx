import React, { useEffect, useState } from "react";

const Meals = () => {
  const [meal, setMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setMeals(data.meals || []);
        }
      } catch (e) {
        throw new Error("Error in fetching API", e);
      }
    };
    fetchMeals();
    
  }, []);
  
  
  return <div>Meals
    <ul>
  {meal.map(({strMeal,strMealThumb}) => {
    return <li>{strMeal} <img src={strMealThumb} alt="Meal Image" /></li>
  })}
    </ul>
  </div>;
};

export default Meals;
