import React, { useState } from "react";

import { Food } from "../interfaces/Food";
import { listFoods } from "../../data/data";

export const usePlanner = () => {
  const [entrityFoods, setEntrityFoods] = useState<Food[]>(listFoods);

  const [modalAddFood, setModalAddFood] = useState(false);
  const [inputCaloriesAdd, setInputCaloriesAdd] = useState<number>();
  const [inputNameAdd, setInputNameAdd] = useState<string>();
  const [idEdit, setIdEdit] = useState<number>(0);

  const handleModalAddFood = () => {
    setModalAddFood(true);
  };

  const handleModalEditFood = (id: number) => {
    setModalAddFood(true);
    setIdEdit(id);
    entrityFoods.forEach((food) => {
      if (food.id === id) {
        setInputCaloriesAdd(food.calories);
        setInputNameAdd(food.name);
      }
    });
  };

  const closeModalAddFood = () => {
    setModalAddFood(false);
  };

  const editNameByFood = () => {
    const editEntrityFood = listFoods.map((value: Food) => {
      if (value.id === idEdit) {
        return {
          ...value,
          name: inputNameAdd || "",
          calories: inputCaloriesAdd || value.calories,
        };
      } else {
        return value;
      }
    });
    setEntrityFoods(editEntrityFood);
    setModalAddFood(false);
  };

  return {
    modalAddFood,
    setModalAddFood,
    handleModalAddFood,
    closeModalAddFood,
    inputCaloriesAdd,
    setInputCaloriesAdd,
    inputNameAdd,
    setInputNameAdd,
    entrityFoods,
    setEntrityFoods,
    editNameByFood,
    handleModalEditFood,
  };
};
