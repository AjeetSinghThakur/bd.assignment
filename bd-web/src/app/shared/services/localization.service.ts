import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AbstractLocalizationService } from './abstract-localization.service';
import { Inject } from '@angular/core';
import { LOCALIZATION_CONFIGURATION_TOKEN } from '../configurations';

export class LocalizationService implements AbstractLocalizationService {
  configure(): void {
    this.translateService.addLangs(this.localizationConfiguration.supportedLocales);
    this.translateService.setDefaultLang(this.localizationConfiguration.fallbackLanguage);
  }
  getLanguages(): Array<string> {
    return this.translateService.getLangs();
  }
  useLanguage(language: string): Observable<any> {
    return this.translateService.use(language);
  }
  getCurrentLanguage(): string {
    return this.translateService.currentLang;
  }
  getTranslateService(): TranslateService {
    return this.translateService;
  }
  constructor(private translateService: TranslateService,
              @Inject(LOCALIZATION_CONFIGURATION_TOKEN) private localizationConfiguration) {
  }
}
