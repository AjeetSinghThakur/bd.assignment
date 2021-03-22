import { Directive, OnInit, OnDestroy, HostBinding, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { LOCALIZATION_CONFIGURATION_TOKEN, LocalizationConfiguration } from '../configurations';

@Directive({
  selector: '[qr-text-direction]'
})

export class TextDirectionDirective implements OnInit, OnDestroy {

  @HostBinding('attr.dir') dir: 'ltr' | 'rtl' = 'ltr';
  private onLangChangeSubscription?: Subscription;

  constructor(private translateService: TranslateService,
              @Inject(LOCALIZATION_CONFIGURATION_TOKEN) private configuration: LocalizationConfiguration) {}

  ngOnInit() {
    this.onLangChangeSubscription = this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.dir = this.configuration.rtlLanguages.indexOf(event.lang.split('-')[0]) > -1 ? 'rtl' : 'ltr';
    });
  }
  ngOnDestroy() {
    if (this.onLangChangeSubscription) {
      this.onLangChangeSubscription.unsubscribe();
    }
  }
}
