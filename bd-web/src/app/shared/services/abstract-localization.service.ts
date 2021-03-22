import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { LocalizationService } from './localization.service';
import { LocalizationConfiguration, LOCALIZATION_CONFIGURATION_TOKEN } from '../configurations';

@Injectable({
  providedIn: 'root',
  useFactory: localizationFactory,
  deps: [TranslateService, LOCALIZATION_CONFIGURATION_TOKEN],
})
export abstract class AbstractLocalizationService implements ILocalizationService {
  abstract configure(): void;
  abstract getLanguages(): Array<string>;
  abstract useLanguage(language: string): Observable<any>;
  abstract getCurrentLanguage(): string;
  abstract getTranslateService(): TranslateService;
}
export interface ILocalizationService {
  configure(): void;
  getLanguages(): Array<string>;
  useLanguage(language: string): Observable<any>;
  getCurrentLanguage(): string;
  getTranslateService(): TranslateService;
}

export function localizationFactory(translateService: TranslateService,
                                    localizationConfiguration: LocalizationConfiguration): AbstractLocalizationService {
  return new LocalizationService(translateService, localizationConfiguration);
}

