/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  constructor() {}

  ngOnInit(): void {}
}
