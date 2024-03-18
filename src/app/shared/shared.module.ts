import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommandBarComponent } from './components/command-bar/command-bar.component';




@NgModule({
  declarations: [
    CommandBarComponent,
    
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommandBarComponent,

  ]
})
export class SharedModule { }
