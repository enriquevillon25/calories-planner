import React, { useState } from "react";

import { Food } from "../../interfaces/Food";
import { listFoods } from "../../data/data";
import { useNavigate } from "react-router-dom";

export const usePlanner = () => {
  const [entrityFoods, setEntrityFoods] = useState<Food[]>(listFoods);
  const navigate = useNavigate();

  const [modalAddFood, setModalAddFood] = useState(false);
  const [inputCaloriesAdd, setInputCaloriesAdd] = useState<
    number | undefined
  >();
  const [inputNameAdd, setInputNameAdd] = useState<string>("");
  const [idEdit, setIdEdit] = useState<number>(0);

  const handleModalAddFood = () => {
    setModalAddFood(true);
    setInputCaloriesAdd(undefined);
    setInputNameAdd("");
    setIdEdit(-1);
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

  const addFood = () => {
    const newFood: Food = {
      id: Number(entrityFoods[entrityFoods.length - 1].id + 1),
      name: inputNameAdd || "",
      calories: Number(inputCaloriesAdd) || 0,
    };
    console.log("new food", newFood);
    setEntrityFoods([...entrityFoods, newFood]);
    setModalAddFood(false);
  };

  const editNameByFood = () => {
    const editEntrityFood = entrityFoods.map((food: Food) => {
      if (food.id === idEdit) {
        return {
          ...food,
          name: inputNameAdd || food.name,
          calories: inputCaloriesAdd || food.calories,
        };
      } else {
        return food;
      }
    });
    setEntrityFoods(editEntrityFood);
    setModalAddFood(false);
  };

  const deleteFood = (id: number) => {
    const deleteFood = entrityFoods.filter((food: Food) => food.id !== id);
    setEntrityFoods(deleteFood);
  };

  const sendModalFood = () => {
    if (idEdit >= 0) {
      editNameByFood();
    } else {
      addFood();
    }
  };

  const totalCaloriesByDay = () => {
    const totalCaloriesByDay = entrityFoods.reduce(
      (acumulator, food): any => acumulator + food.calories,
      0
    );
    return totalCaloriesByDay;
  };

  const redirectProfile = () => {
    navigate("/profile", { replace: true });
  };
  const redirectHome = () => {
    navigate("/", { replace: true });
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
    deleteFood,
    addFood,
    sendModalFood,
    totalCaloriesByDay,
    redirectProfile,
    redirectHome,
  };
};
