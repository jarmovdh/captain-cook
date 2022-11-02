import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { NavigationComponent } from './components/navigation/navigation.component';


@NgModule({
  declarations: [
    ButtonComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    NavigationComponent
  ]
})
export class SharedModule { }
