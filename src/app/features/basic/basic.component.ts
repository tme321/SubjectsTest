import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicComponent implements OnInit {
  private isShowing = false;
  isShowing$ = new Subject<boolean>();

  constructor() { }

  ngOnInit() {
    this.isShowing$.next(this.isShowing);
  }

  onToggle() {
    this.isShowing = !this.isShowing;
    this.isShowing$.next(this.isShowing);
  }
}
