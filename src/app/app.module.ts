import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicModule } from './features/basic/basic.module';
import { BehaviorModule } from './features/behavior/behavior.module';
import { ReplayModule } from './features/replay/replay.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BasicModule,
    BehaviorModule,
    ReplayModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
