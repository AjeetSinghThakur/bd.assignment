import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import * as eventActions from './globoticket.actions';
import { map, catchError, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Product } from '@app/models/product';
import { AbstractNotificationService } from '@app/shared/services';
import { EventService } from '@app/core/services/event.service';
import { EventData } from '@app/models';

@Injectable()
export class EventEffects {
  constructor(private actions$: Actions,
              private eventService: EventService,
              private notificationService: AbstractNotificationService) {}

  loadEvents$ = createEffect(() =>
  this.actions$.pipe(
    ofType(eventActions.loadAllEvents),
    mergeMap(action =>
      this.eventService.getEvents().pipe(
        map((events: EventData[]) => {
          this.notificationService.showInfo('Events', 'Loading Successful.');
          return eventActions.loadSuccess({ payload: events });
        }),
        catchError(err => of(eventActions.loadFail(err)))
      )
    )
   )
  );
}
