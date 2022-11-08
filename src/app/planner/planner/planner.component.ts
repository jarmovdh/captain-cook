/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from "@angular/core";
import { PlannedService } from "src/app/shared/services/planned.service";

@Component({
  selector: "app-planner",
  templateUrl: "./planner.component.html",
  styleUrls: ["./planner.component.scss"],
})
export class PlannerComponent implements OnInit {
  plannedMeals: {
    id: number;
    name: string;
    portion: string;
    url: string;
    ingredients: { name: string; amount: string }[];
  }[] = [];

  updateMeals() {
    this.plannedService.updateMeals();
  }
  deleteMeals(id: number) {
    this.plannedService.deleteMeals(id);
  }

  constructor(private plannedService: PlannedService) {}

  ngOnInit(): void {
    this.plannedMeals = this.plannedService.plannedMeals;
    this.plannedService.$updatedPlannedMeals.subscribe((newMealsArray) => {
      this.plannedMeals = newMealsArray;
    });
  }
}
