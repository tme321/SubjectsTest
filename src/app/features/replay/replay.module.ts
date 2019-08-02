import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplayComponent } from '../replay/replay.component';

@NgModule({
  declarations: [ReplayComponent],
  imports: [
    CommonModule
  ],
  exports: [ReplayComponent],
})
export class ReplayModule { }
