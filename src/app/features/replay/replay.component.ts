import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ReplayComponent implements OnInit {
  private isShowing = false;
  isShowing$ = new ReplaySubject<boolean>(1);

  constructor() { }

  ngOnInit() {
    this.isShowing$.next(this.isShowing);
  }

  onToggle() {
    this.isShowing = !this.isShowing;
    this.isShowing$.next(this.isShowing);
  }
}
