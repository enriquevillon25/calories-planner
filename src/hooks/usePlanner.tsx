import React, { useEffect, useState } from "react";

import { Food } from "../interfaces/Food";
import { listFoods } from "../data/data";
import { useNavigate } from "react-router-dom";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";

export const usePlanner = () => {
  const [entrityFoods, setEntrityFoods] = useState<Food[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const [modalAddFood, setModalAddFood] = useState(false);
  const [inputCaloriesAdd, setInputCaloriesAdd] = useState<
    number | undefined
  >();
  const [inputNameAdd, setInputNameAdd] = useState<string>("");
  const [idEdit, setIdEdit] = useState<number>(0);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const foodRef = collection(db, "foods");
      const snapFood = await getDocs(foodRef);
      const foods = snapFood.docs.map((food: any) => ({
        ...food.data(),
        id: food.id,
        createDate: food.data().createDate.toDate(),
      }));
      setEntrityFoods(foods);
      setIsLoading(false);
    })();
  }, []);

  const handleModalAddFood = () => {
    setModalAddFood(true);
    setInputCaloriesAdd(undefined);
    setInputNameAdd("");
    setIdEdit(0);
  };

  const handleModalEditFood = (id: number) => {
    setModalAddFood(true);
    setIdEdit(id);
  };

  const closeModalAddFood = () => {
    setModalAddFood(false);
  };

  const addFood = async () => {
    const newFood = {
      name: inputNameAdd || "",
      calories: Number(inputCaloriesAdd) || 0,
    };
    const docRef = await addDoc(collection(db, "foods"), newFood);
    console.log("id gen", docRef.id);
    setEntrityFoods([
      ...entrityFoods,
      { ...newFood, id: docRef.id, createDate: "" },
    ]);
  };

  const editNameByFood = async () => {
    const editEntrityFood = entrityFoods.map((food: Food) => {
      if (String(food.id) === String(idEdit)) {
        setInputCaloriesAdd(food.calories);
        setInputNameAdd(food.name);
        const foodRef = doc(db, "foods", food.id);
        (async () => {
          await updateDoc(foodRef, {
            name: inputNameAdd,
            calories: Number(inputCaloriesAdd),
          });
        })();
        return {
          ...food,
          name: inputNameAdd || food.name,
          calories: Number(inputCaloriesAdd) || food.calories,
        };
      } else {
        return food;
      }
    });
    setEntrityFoods(editEntrityFood);
    setModalAddFood(false);
  };

  const deleteFood = async (id: string) => {
    await deleteDoc(doc(db, "foods", id));
    const deleteFood = entrityFoods.filter((food: Food) => food.id !== id);
    setEntrityFoods(deleteFood);
  };

  const sendModalFood = (e: any) => {
    e.preventDefault();
    if (idEdit) {
      editNameByFood();
    } else {
      addFood();
    }
    setModalAddFood(false);
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
    isLoading,
  };
};
