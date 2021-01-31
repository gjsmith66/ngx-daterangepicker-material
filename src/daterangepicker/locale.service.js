import { Injectable, Inject } from '@angular/core';
import { LOCALE_CONFIG, DefaultLocaleConfig } from './daterangepicker.config';
import * as i0 from "@angular/core";
export class LocaleService {
    constructor(_config) {
        this._config = _config;
    }
    get config() {
        if (!this._config) {
            return DefaultLocaleConfig;
        }
        return Object.assign(Object.assign({}, DefaultLocaleConfig), this._config);
    }
}
LocaleService.ɵfac = function LocaleService_Factory(t) { return new (t || LocaleService)(i0.ɵɵinject(LOCALE_CONFIG)); };
LocaleService.ɵprov = i0.ɵɵdefineInjectable({ token: LocaleService, factory: LocaleService.ɵfac });
(function () { i0.ɵsetClassMetadata(LocaleService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [LOCALE_CONFIG]
            }] }]; }, null); })();
