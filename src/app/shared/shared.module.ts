import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ButtonComponent } from "./components/button/button.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { DropdownComponent } from "./components/dropdown/dropdown.component";
import { AsideComponent } from "./aside/aside.component";
import { GroceryListComponent } from "../planner/grocery-list/grocery-list.component";

@NgModule({
  declarations: [
    ButtonComponent,
    NavigationComponent,
    DropdownComponent,
    AsideComponent,
    GroceryListComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ButtonComponent,
    NavigationComponent,
    DropdownComponent,
    AsideComponent,
    GroceryListComponent,
  ],
})
export class SharedModule {}
