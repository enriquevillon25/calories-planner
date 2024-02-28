import { Food } from "../interfaces/Food";

export const totalCaloriesByDay = (arr: Food[]) => {
  const totalCaloriesByDay = arr.reduce(
    (acumulator, food): any => acumulator + food.calories,
    0
  );
  return totalCaloriesByDay;
};
