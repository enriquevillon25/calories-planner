import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";

export class PlannerService {
  private path: string = "foods";
  async getFood() {
    const foodRef = collection(db, this.path);
    return (await getDocs(foodRef)).docs;
  }

  async postFood(food: any) {
    return await addDoc(collection(db, this.path), food);
  }

  async updateFood(food: any) {
    const foodRef = doc(db, this.path, food.id);
    await updateDoc(foodRef, { ...food });
  }

  async deleteFood(food: any) {
    await deleteDoc(doc(db, this.path, food.id));
  }
}
