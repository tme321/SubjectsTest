import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorComponent } from '../behavior/behavior.component';

@NgModule({
  declarations: [BehaviorComponent],
  imports: [
    CommonModule
  ],
  exports: [BehaviorComponent],
})
export class BehaviorModule { }
