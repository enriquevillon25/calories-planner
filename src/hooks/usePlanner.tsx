import React, { useEffect, useState } from "react";

import { Food } from "../interfaces/Food";
import { useNavigate } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { PlannerService } from "../services/PlannerService";

export const usePlanner = () => {
  const [entrityFoods, setEntrityFoods] = useState<Food[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const plannerService = new PlannerService();
  const [modalAddFood, setModalAddFood] = useState(false);
  const [inputCaloriesAdd, setInputCaloriesAdd] = useState<
    number | undefined
  >();
  const [inputNameAdd, setInputNameAdd] = useState<string | undefined>("");
  const [idEdit, setIdEdit] = useState<string>("");

  useEffect(() => {
    getListFood();
  }, []);

  // interaction services

  const getListFood = async () => {
    setIsLoading(true);
    const getListFood = await plannerService.getFood();
    const getEntrityFood = getListFood.map((food: any) => ({
      ...food.data(),
      id: food.id,
      createDate: food.data().createDate.toDate(),
    }));
    setEntrityFoods(getEntrityFood);
    setIsLoading(false);
    return getEntrityFood;
  };

  const sendAddFood = async () => {
    const newFood = {
      name: inputNameAdd || "",
      calories: Number(inputCaloriesAdd) || 0,
      createDate: Timestamp.fromDate(new Date()),
    };
    const docRef = await plannerService.postFood(newFood);
    setEntrityFoods([
      ...entrityFoods,
      { ...newFood, id: docRef.id, createDate: "" },
    ]);
  };

  const sendEditFood = () => {
    const editEntrityFood = entrityFoods.map((food: Food) => {
      if (String(idEdit) === food.id) {
        setInputCaloriesAdd(food.calories);
        setInputNameAdd(food.name);
        return {
          ...food,
          name: inputNameAdd || food.name,
          calories: Number(inputCaloriesAdd) || food.calories,
        };
      } else {
        return food;
      }
    });

    const editFood = editEntrityFood.find(
      (food: any) => food.id === String(idEdit)
    );

    setEntrityFoods(editEntrityFood);
    (async () => {
      await plannerService.updateFood(editFood);
    })();

    setModalAddFood(false);
  };

  const deleteFood = async (id: string) => {
    await deleteDoc(doc(db, "foods", id));
    const deleteFood = entrityFoods.filter((food: Food) => food.id !== id);
    setEntrityFoods(deleteFood);
  };

  // Handle Modals Show

  const handleModalAddFood = () => {
    setModalAddFood(true);
    setInputCaloriesAdd(undefined);
    setInputNameAdd("");
    setIdEdit("");
  };

  const handleModalEditFood = (id: string) => {
    setModalAddFood(true);
    const currentInputFood = entrityFoods.find((food: Food) => food.id === id);
    setInputCaloriesAdd(currentInputFood?.calories);
    setInputNameAdd(currentInputFood?.name);
    setIdEdit(id);
  };

  const closeModalAddFood = () => {
    setModalAddFood(false);
  };

  const sendModalFood = (e: any) => {
    e.preventDefault();
    if (idEdit) {
      sendEditFood();
    } else {
      sendAddFood();
    }
    setModalAddFood(false);
  };

  // total calories by day

  const totalCaloriesByDay = () => {
    const totalCaloriesByDay = entrityFoods.reduce(
      (acumulator, food): any => acumulator + food.calories,
      0
    );
    return totalCaloriesByDay;
  };

  // navigate

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
    handleModalEditFood,
    deleteFood,
    sendModalFood,
    totalCaloriesByDay,
    redirectProfile,
    redirectHome,
    isLoading,
  };
};
