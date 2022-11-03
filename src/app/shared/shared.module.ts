import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';


@NgModule({
  declarations: [
    ButtonComponent,
    NavigationComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ButtonComponent,
    NavigationComponent,
    DropdownComponent
  ]
})
export class SharedModule { }
