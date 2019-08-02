import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior',
  templateUrl: './behavior.component.html',
  styleUrls: ['./behavior.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BehaviorComponent {
  private isShowing = false;
  isShowing$ = new BehaviorSubject<boolean>(this.isShowing);
  
  constructor() { }

  onToggle() {
    this.isShowing = !this.isShowing;
    this.isShowing$.next(this.isShowing);
  }
}
