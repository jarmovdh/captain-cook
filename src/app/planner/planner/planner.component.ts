import { Component, OnInit } from '@angular/core';

//  interface MealType {
//   id: number,
//   name: string,
//   portion: string,
//   url: string,
  
// }

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
  

 
  
export class PlannerComponent implements OnInit {

 
    meals  = [
      {id: 1, name: 'Pasta Carbonara', portion: "2p", url: "https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3871&q=80"},
      {id: 2, name: 'Homemade Pizza', portion: "1p", url: "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" },
      {id: 3, name: 'Vegan Burger', portion: "1p", url: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80"},
    ]
  
  updateMeals() {
    this.meals.push(this.meals[0])
  }

  deleteMeals = (id: number) => {

    this.meals = this.meals.filter(item => item.id !== id)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
