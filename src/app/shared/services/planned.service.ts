import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PlannedService {
  plannedMeals = [
    {
      id: 1,
      name: "Pasta Carbonara",
      portion: "2p",
      url: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3871&q=80",
      ingredients: [
        { name: "Tagliatelle", amount: "200 gram" },
        { name: "Spinazie", amount: "150 gram" },
        { name: "Olijf Olive", amount: "2 el" },
      ],
    },
    {
      id: 2,
      name: "Homemade Pizza",
      portion: "1p",
      url: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      ingredients: [
        { name: "Bloem", amount: "400 gram" },
        { name: "Eieren", amount: "3 stuks" },
        { name: "Cherry tomaten", amount: "300 gram" },
        { name: "Rucola", amount: "200 gram" },
      ],
    },
    {
      id: 3,
      name: "Vegan Burger",
      portion: "1p",
      url: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
      ingredients: [
        { name: "Jackfruit", amount: "280 gram" },
        { name: "Avocado", amount: "1 stuk" },
        { name: "Tomaten", amount: "1 stuk" },
        { name: "Wit Broodje", amount: "1 stuk" },
      ],
    },
  ];

  groceryList = this.plannedMeals.map((entry) => entry.ingredients).flat();

  $updatedPlannedMeals = of(this.plannedMeals);
  $updatedGroceryList = of(this.groceryList);

  getPlannedMeals() {
    return this.plannedMeals;
  }

  deleteMeals(id: number) {
    const deletedMeal = this.plannedMeals.findIndex((item) => item.id === id);
    this.plannedMeals.splice(deletedMeal, 1);
  }

  updateMeals() {
    this.plannedMeals.push({
      id: Math.random(),
      name: "",
      portion: "",
      url: "",
      ingredients: [{ name: "", amount: "" }],
    });
  }

  constructor() {}
}
