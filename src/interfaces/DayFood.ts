import { Food } from "./Food";

export interface DayFood {
  id: number;
  foods: Food[];
  date: string;
  totalCalories: number;
}
