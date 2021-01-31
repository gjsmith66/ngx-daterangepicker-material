import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DaterangepickerComponent } from './daterangepicker.component';
import { DaterangepickerDirective } from './daterangepicker.directive';
import { LOCALE_CONFIG } from './daterangepicker.config';
import { LocaleService } from './locale.service';
import * as i0 from "@angular/core";
export class NgxDaterangepickerMd {
    constructor() {
    }
    static forRoot(config = {}) {
        return {
            ngModule: NgxDaterangepickerMd,
            providers: [
                { provide: LOCALE_CONFIG, useValue: config },
                { provide: LocaleService, useClass: LocaleService, deps: [LOCALE_CONFIG] }
            ]
        };
    }
}
NgxDaterangepickerMd.ɵmod = i0.ɵɵdefineNgModule({ type: NgxDaterangepickerMd });
NgxDaterangepickerMd.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxDaterangepickerMd_Factory(t) { return new (t || NgxDaterangepickerMd)(); }, providers: [], imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxDaterangepickerMd, { declarations: [DaterangepickerComponent,
        DaterangepickerDirective], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule], exports: [DaterangepickerComponent,
        DaterangepickerDirective] }); })();
(function () { i0.ɵsetClassMetadata(NgxDaterangepickerMd, [{
        type: NgModule,
        args: [{
                declarations: [
                    DaterangepickerComponent,
                    DaterangepickerDirective
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule
                ],
                providers: [],
                exports: [
                    DaterangepickerComponent,
                    DaterangepickerDirective
                ],
                entryComponents: [
                    DaterangepickerComponent
                ]
            }]
    }], function () { return []; }, null); })();
