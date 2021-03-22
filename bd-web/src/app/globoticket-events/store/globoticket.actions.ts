import { createAction, props } from '@ngrx/store';
import { EventData } from '@app/models';

// Effects related actions
export const loadAllEvents = createAction('[Event] Load');
export const loadSuccess = createAction('[Event] Load Success', props<{ payload: EventData[] }>());
export const loadFail = createAction('[Event] Load Fail', props<{ payload: string }>());
