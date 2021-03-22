import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ContentComponent } from './container';
import { EventListComponent } from './presentational/event-list/event-list.component';
import { EventEffects, eventFeature, eventReducers } from './store';

const routes: Routes = [
  { path: '', component: ContentComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(eventFeature, eventReducers),
    EffectsModule.forFeature([EventEffects]),
  ],
  declarations: [
    ContentComponent,
    EventListComponent,
  ]
})
export class EventModule { }
