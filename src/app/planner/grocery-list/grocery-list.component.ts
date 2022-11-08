/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from "@angular/core";
import { PlannedService } from "src/app/shared/services/planned.service";

@Component({
  selector: "app-grocery-list",
  templateUrl: "./grocery-list.component.html",
  styleUrls: ["./grocery-list.component.scss"],
})
export class GroceryListComponent implements OnInit {
  ingredients: {
    name: string;
    amount: string;
  }[] = [];
  constructor(private plannedService: PlannedService) {}

  ngOnInit(): void {
    this.ingredients = this.plannedService.groceryList;
    this.plannedService.$updatedGroceryList.subscribe((newIngredientsArray) => {
      this.ingredients = newIngredientsArray;
    });
  }
}
