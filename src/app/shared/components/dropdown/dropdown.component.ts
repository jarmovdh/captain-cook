/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"],
})
export class DropdownComponent implements OnInit {
  items = [
    { id: "mi1", routerlink: "/planner", text: "Planner" },
    { id: "mi2", routerlink: "/recipes", text: "Recipes" },
  ];

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  onKeydown(event: any) {
    alert("pressed");
    console.log(event);
  }

  constructor() {}

  ngOnInit(): void {}
}
