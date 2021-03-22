import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import { ReducerEventState, eventReducer } from './globoticket.reducer';
import * as fromRoot from '@app/store';

export const eventFeature = 'eventFeature';
export interface EventState extends fromRoot.State { event: ReducerEventState; }
export const eventReducers: ActionReducerMap<EventState> = { event: eventReducer };
export const getEventFeatureState = createFeatureSelector<EventState>( eventFeature);

export const getEvents = createSelector(getEventFeatureState, state => state.event.events);
export const getError = createSelector(getEventFeatureState, state => state.event.error);
