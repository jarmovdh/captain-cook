/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input() id!: number;
  @Input() name!: string;
  @Input() portion!: string;
  @Input() url!: string;

  @Output()
  delete = new EventEmitter();
  deleteMeals(id: number) {
    this.delete.emit(id);
  }
  constructor() {}

  ngOnInit(): void {}
}
