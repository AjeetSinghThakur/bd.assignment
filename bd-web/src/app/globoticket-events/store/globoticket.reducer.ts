import * as eventActions from './globoticket.actions';
import { createReducer, on, Action } from '@ngrx/store';
import { EventData } from '@app/models';

export interface ReducerEventState {
  currentEventId: number | null;
  events: EventData[];
  error: string;
  loading: boolean;
}

export const initialState: ReducerEventState = {
  currentEventId: null,
  events: [],
  error: '',
  loading: false
};

const eventReducerInternal = createReducer(
  initialState,
  on(
    eventActions.loadAllEvents,
    state => ({
      ...state,
      loading: true
    })
  )
  ,
  on(eventActions.loadSuccess, (state, { payload }) => ({
    ...state,
    events: payload,
    error: '',
    loading: false
  })),
  on(eventActions.loadFail, (state, { payload }) => ({
    ...state,
    events: [],
    error: payload,
    loading: false,
  })),
);

export function eventReducer(state: ReducerEventState | undefined, action: Action) {
  return eventReducerInternal(state, action);
}
