import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StartComponent } from './container/start/start.component';
import { startRoutes } from './start.routing';
import { SharedModule } from '@app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(startRoutes),
    SharedModule
  ],
  exports: [],
  declarations: [StartComponent],
  providers: [],
})
export class StartModule {}
