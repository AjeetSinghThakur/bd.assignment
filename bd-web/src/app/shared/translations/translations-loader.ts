import {Inject, Injectable, Optional} from '@angular/core';
import {TranslateLoader} from '@ngx-translate/core';
import {from as observableFromPromise, Observable, of} from 'rxjs';
import {catchError, filter, switchMap} from 'rxjs/operators';
import { LOCALIZATION_CONFIGURATION_TOKEN, LocalizationConfiguration } from '../configurations';

@Injectable()
export class TranslationsLoader implements TranslateLoader {
  constructor(@Inject(LOCALIZATION_CONFIGURATION_TOKEN) private localizationConfiguration: LocalizationConfiguration) {}

  getTranslation(lang: string): Observable<any> {
    const pathPrefix: string = location.origin + '/' + this.localizationConfiguration.bundlesOutputPath + '/';
    const fallbackLanguage = this.localizationConfiguration.fallbackLanguage;

    return observableFromPromise(fetch(pathPrefix + lang + '.json')).pipe(
      switchMap((response: Response) => response.json()),
      catchError(() => {
        return of(lang).pipe(
          filter((l: string) => l !== fallbackLanguage),
          switchMap(() => {
            return observableFromPromise(fetch(pathPrefix + fallbackLanguage + '.json'))
            .pipe(switchMap((response: Response) => response.json()), catchError(() => of({})));
          })
        );
      })
    );
  }
}
