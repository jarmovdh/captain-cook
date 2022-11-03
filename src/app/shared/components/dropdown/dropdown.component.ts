import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  isOpen = false

  toggleMenu() {
    this.isOpen = !this.isOpen
  }

  constructor() { }

  ngOnInit(): void {
  }

}
