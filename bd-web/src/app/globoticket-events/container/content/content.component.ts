import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

// Ngrx
import * as fromEventStore from '@app/globoticket-events/store';
import * as fromRoot from '@app/store';
import { EventData } from '@app/models';
import { getError, getEvents } from '@app/globoticket-events/store';

@Component({
  selector: 'qa-event-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent implements OnInit {
  events$: Observable<EventData[]>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.store.dispatch(fromEventStore.loadAllEvents());
    this.events$ = this.store.pipe(select(getEvents));
    this.errorMessage$ = this.store.pipe(select(getError));
  }
}
