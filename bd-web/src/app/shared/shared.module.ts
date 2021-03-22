import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { translateLoaderProvider } from './translations';
import { NavigationComponent, PageNotFoundComponent } from './components';
import { Configuration, DEFAULT_LOCALIZATION_CONFIGURATION, LOCALIZATION_CONFIGURATION_TOKEN } from './configurations';
import { TextDirectionDirective } from './directives/text-direction.directive';
import { FilterPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({loader: translateLoaderProvider}),
  ],
  exports: [
    NavigationComponent,
    PageNotFoundComponent,
    TranslateModule,
    TextDirectionDirective,
    FilterPipe
  ],
  declarations: [
    NavigationComponent,
    PageNotFoundComponent,
    TextDirectionDirective,
    FilterPipe
  ],
  providers: [
    Configuration,
    { provide: LOCALIZATION_CONFIGURATION_TOKEN, useValue: DEFAULT_LOCALIZATION_CONFIGURATION }
  ],
})
export class SharedModule {
}
