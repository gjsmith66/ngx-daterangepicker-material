import { Directive, ViewContainerRef, ComponentFactoryResolver, ElementRef, HostListener, forwardRef, ChangeDetectorRef, Input, KeyValueDiffers, Output, EventEmitter, Renderer2, HostBinding } from '@angular/core';
import { DaterangepickerComponent } from './daterangepicker.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as _dayjs from 'dayjs';
import { LocaleService } from './locale.service';
import * as i0 from "@angular/core";
import * as i1 from "./locale.service";
const moment = _dayjs;
export class DaterangepickerDirective {
    constructor(viewContainerRef, _changeDetectorRef, _componentFactoryResolver, _el, _renderer, differs, _localeService, elementRef) {
        this.viewContainerRef = viewContainerRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._el = _el;
        this._renderer = _renderer;
        this.differs = differs;
        this._localeService = _localeService;
        this.elementRef = elementRef;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        this._validatorChange = Function.prototype;
        this.dateLimit = null;
        this.showCancel = false;
        this.lockStartDate = false;
        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        this.closeOnAutoApply = true;
        this._locale = {};
        this._endKey = 'endDate';
        this._startKey = 'startDate';
        this.notForChangesProperty = [
            'locale',
            'endKey',
            'startKey'
        ];
        this.onChange = new EventEmitter();
        this.rangeClicked = new EventEmitter();
        this.datesUpdated = new EventEmitter();
        this.startDateChanged = new EventEmitter();
        this.endDateChanged = new EventEmitter();
        this.drops = 'down';
        this.opens = 'auto';
        const componentFactory = this._componentFactoryResolver.resolveComponentFactory(DaterangepickerComponent);
        viewContainerRef.clear();
        const componentRef = viewContainerRef.createComponent(componentFactory);
        this.picker = componentRef.instance;
        this.picker.inline = false;
    }
    set locale(value) {
        this._locale = Object.assign(Object.assign({}, this._localeService.config), value);
    }
    get locale() {
        return this._locale;
    }
    set startKey(value) {
        if (value !== null) {
            this._startKey = value;
        }
        else {
            this._startKey = 'startDate';
        }
    }
    set endKey(value) {
        if (value !== null) {
            this._endKey = value;
        }
        else {
            this._endKey = 'endDate';
        }
    }
    get value() {
        return this._value || null;
    }
    set value(val) {
        this._value = val;
        this._onChange(val);
        this._changeDetectorRef.markForCheck();
    }
    get disabled() { return this._disabled; }
    ngOnInit() {
        this.picker.startDateChanged.asObservable().subscribe((itemChanged) => {
            this.startDateChanged.emit(itemChanged);
        });
        this.picker.endDateChanged.asObservable().subscribe((itemChanged) => {
            this.endDateChanged.emit(itemChanged);
        });
        this.picker.rangeClicked.asObservable().subscribe((range) => {
            this.rangeClicked.emit(range);
        });
        this.picker.datesUpdated.asObservable().subscribe((range) => {
            this.datesUpdated.emit(range);
        });
        this.picker.choosedDate.asObservable().subscribe((change) => {
            if (change) {
                const value = {};
                value[this._startKey] = change.startDate;
                value[this._endKey] = change.endDate;
                this.value = value;
                this.onChange.emit(value);
                if (typeof change.chosenLabel === 'string') {
                    this._el.nativeElement.value = change.chosenLabel;
                }
            }
        });
        this.picker.firstMonthDayClass = this.firstMonthDayClass;
        this.picker.lastMonthDayClass = this.lastMonthDayClass;
        this.picker.emptyWeekRowClass = this.emptyWeekRowClass;
        this.picker.emptyWeekColumnClass = this.emptyWeekColumnClass;
        this.picker.firstDayOfNextMonthClass = this.firstDayOfNextMonthClass;
        this.picker.lastDayOfPreviousMonthClass = this.lastDayOfPreviousMonthClass;
        this.picker.drops = this.drops;
        this.picker.opens = this.opens;
        this.localeDiffer = this.differs.find(this.locale).create();
        this.picker.closeOnAutoApply = this.closeOnAutoApply;
    }
    ngOnChanges(changes) {
        for (const change in changes) {
            if (changes.hasOwnProperty(change)) {
                if (this.notForChangesProperty.indexOf(change) === -1) {
                    this.picker[change] = changes[change].currentValue;
                }
            }
        }
    }
    ngDoCheck() {
        if (this.localeDiffer) {
            const changes = this.localeDiffer.diff(this.locale);
            if (changes) {
                this.picker.updateLocale(this.locale);
            }
        }
    }
    onBlur() {
        this._onTouched();
    }
    open(event) {
        if (this.disabled) {
            return;
        }
        this.picker.show(event);
        setTimeout(() => {
            this.setPosition();
        });
    }
    hide(e) {
        this.picker.hide(e);
    }
    toggle(e) {
        if (this.picker.isShown) {
            this.hide(e);
        }
        else {
            this.open(e);
        }
    }
    clear() {
        this.picker.clear();
    }
    writeValue(value) {
        this.setValue(value);
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    setDisabledState(state) {
        this._disabled = state;
    }
    setValue(val) {
        if (val) {
            this.value = val;
            if (val[this._startKey]) {
                this.picker.setStartDate(val[this._startKey]);
            }
            if (val[this._endKey]) {
                this.picker.setEndDate(val[this._endKey]);
            }
            this.picker.calculateChosenLabel();
            if (this.picker.chosenLabel) {
                this._el.nativeElement.value = this.picker.chosenLabel;
            }
        }
        else {
            this.picker.clear();
        }
    }
    setPosition() {
        let style;
        let containerTop;
        const container = this.picker.pickerContainer.nativeElement;
        const element = this._el.nativeElement;
        if (this.drops && this.drops === 'up') {
            containerTop = (element.offsetTop - container.clientHeight) + 'px';
        }
        else {
            containerTop = 'auto';
        }
        if (this.opens === 'left') {
            style = {
                top: containerTop,
                left: (element.offsetLeft - container.clientWidth + element.clientWidth) + 'px',
                right: 'auto'
            };
        }
        else if (this.opens === 'center') {
            style = {
                top: containerTop,
                left: (element.offsetLeft + element.clientWidth / 2
                    - container.clientWidth / 2) + 'px',
                right: 'auto'
            };
        }
        else if (this.opens === 'right') {
            style = {
                top: containerTop,
                left: element.offsetLeft + 'px',
                right: 'auto'
            };
        }
        else {
            const position = element.offsetLeft + element.clientWidth / 2 - container.clientWidth / 2;
            if (position < 0) {
                style = {
                    top: containerTop,
                    left: element.offsetLeft + 'px',
                    right: 'auto'
                };
            }
            else {
                style = {
                    top: containerTop,
                    left: position + 'px',
                    right: 'auto'
                };
            }
        }
        if (style) {
            this._renderer.setStyle(container, 'top', style.top);
            this._renderer.setStyle(container, 'left', style.left);
            this._renderer.setStyle(container, 'right', style.right);
        }
    }
    inputChanged(e) {
        if (e.target.tagName.toLowerCase() !== 'input') {
            return;
        }
        if (!e.target.value.length) {
            return;
        }
        const dateString = e.target.value.split(this.picker.locale.separator);
        let start = null, end = null;
        if (dateString.length === 2) {
            start = _dayjs(dateString[0], this.picker.locale.format);
            end = _dayjs(dateString[1], this.picker.locale.format);
        }
        if (this.singleDatePicker || start === null || end === null) {
            start = _dayjs(e.target.value, this.picker.locale.format);
            end = start;
        }
        if (!start.isValid() || !end.isValid()) {
            return;
        }
        this.picker.setStartDate(start);
        this.picker.setEndDate(end);
        this.picker.updateView();
    }
    outsideClick(event) {
        if (!event.target) {
            return;
        }
        if (event.target.classList.contains('ngx-daterangepicker-action')) {
            return;
        }
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.hide();
        }
    }
}
DaterangepickerDirective.ɵfac = function DaterangepickerDirective_Factory(t) { return new (t || DaterangepickerDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.KeyValueDiffers), i0.ɵɵdirectiveInject(i1.LocaleService), i0.ɵɵdirectiveInject(i0.ElementRef)); };
DaterangepickerDirective.ɵdir = i0.ɵɵdefineDirective({ type: DaterangepickerDirective, selectors: [["input", "ngxDaterangepickerMd", ""]], hostVars: 1, hostBindings: function DaterangepickerDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keyup.esc", function DaterangepickerDirective_keyup_esc_HostBindingHandler() { return ctx.hide(); })("blur", function DaterangepickerDirective_blur_HostBindingHandler() { return ctx.onBlur(); })("click", function DaterangepickerDirective_click_HostBindingHandler() { return ctx.open(); })("keyup", function DaterangepickerDirective_keyup_HostBindingHandler($event) { return ctx.inputChanged($event); })("click", function DaterangepickerDirective_click_HostBindingHandler($event) { return ctx.outsideClick($event); }, false, i0.ɵɵresolveDocument);
    } if (rf & 2) {
        i0.ɵɵhostProperty("disabled", ctx.disabled);
    } }, inputs: { minDate: "minDate", maxDate: "maxDate", autoApply: "autoApply", alwaysShowCalendars: "alwaysShowCalendars", showCustomRangeLabel: "showCustomRangeLabel", linkedCalendars: "linkedCalendars", dateLimit: "dateLimit", singleDatePicker: "singleDatePicker", showWeekNumbers: "showWeekNumbers", showISOWeekNumbers: "showISOWeekNumbers", showDropdowns: "showDropdowns", isInvalidDate: "isInvalidDate", isCustomDate: "isCustomDate", isTooltipDate: "isTooltipDate", showClearButton: "showClearButton", customRangeDirection: "customRangeDirection", ranges: "ranges", opens: "opens", drops: "drops", lastMonthDayClass: "lastMonthDayClass", emptyWeekRowClass: "emptyWeekRowClass", emptyWeekColumnClass: "emptyWeekColumnClass", firstDayOfNextMonthClass: "firstDayOfNextMonthClass", lastDayOfPreviousMonthClass: "lastDayOfPreviousMonthClass", keepCalendarOpeningWithRange: "keepCalendarOpeningWithRange", showRangeLabelOnInput: "showRangeLabelOnInput", showCancel: "showCancel", lockStartDate: "lockStartDate", timePicker: "timePicker", timePicker24Hour: "timePicker24Hour", timePickerIncrement: "timePickerIncrement", timePickerSeconds: "timePickerSeconds", closeOnAutoApply: "closeOnAutoApply", locale: "locale", _endKey: "_endKey", startKey: "startKey", endKey: "endKey" }, outputs: { onChange: "change", rangeClicked: "rangeClicked", datesUpdated: "datesUpdated", startDateChanged: "startDateChanged", endDateChanged: "endDateChanged" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => DaterangepickerDirective), multi: true
            }
        ]), i0.ɵɵNgOnChangesFeature] });
(function () { i0.ɵsetClassMetadata(DaterangepickerDirective, [{
        type: Directive,
        args: [{
                selector: 'input[ngxDaterangepickerMd]',
                host: {
                    '(keyup.esc)': 'hide()',
                    '(blur)': 'onBlur()',
                    '(click)': 'open()',
                    '(keyup)': 'inputChanged($event)'
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DaterangepickerDirective), multi: true
                    }
                ]
            }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: i0.ChangeDetectorRef }, { type: i0.ComponentFactoryResolver }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.KeyValueDiffers }, { type: i1.LocaleService }, { type: i0.ElementRef }]; }, { minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], autoApply: [{
            type: Input
        }], alwaysShowCalendars: [{
            type: Input
        }], showCustomRangeLabel: [{
            type: Input
        }], linkedCalendars: [{
            type: Input
        }], dateLimit: [{
            type: Input
        }], singleDatePicker: [{
            type: Input
        }], showWeekNumbers: [{
            type: Input
        }], showISOWeekNumbers: [{
            type: Input
        }], showDropdowns: [{
            type: Input
        }], isInvalidDate: [{
            type: Input
        }], isCustomDate: [{
            type: Input
        }], isTooltipDate: [{
            type: Input
        }], showClearButton: [{
            type: Input
        }], customRangeDirection: [{
            type: Input
        }], ranges: [{
            type: Input
        }], opens: [{
            type: Input
        }], drops: [{
            type: Input
        }], lastMonthDayClass: [{
            type: Input
        }], emptyWeekRowClass: [{
            type: Input
        }], emptyWeekColumnClass: [{
            type: Input
        }], firstDayOfNextMonthClass: [{
            type: Input
        }], lastDayOfPreviousMonthClass: [{
            type: Input
        }], keepCalendarOpeningWithRange: [{
            type: Input
        }], showRangeLabelOnInput: [{
            type: Input
        }], showCancel: [{
            type: Input
        }], lockStartDate: [{
            type: Input
        }], timePicker: [{
            type: Input
        }], timePicker24Hour: [{
            type: Input
        }], timePickerIncrement: [{
            type: Input
        }], timePickerSeconds: [{
            type: Input
        }], closeOnAutoApply: [{
            type: Input
        }], locale: [{
            type: Input
        }], _endKey: [{
            type: Input
        }], startKey: [{
            type: Input
        }], endKey: [{
            type: Input
        }], onChange: [{
            type: Output,
            args: ['change']
        }], rangeClicked: [{
            type: Output,
            args: ['rangeClicked']
        }], datesUpdated: [{
            type: Output,
            args: ['datesUpdated']
        }], startDateChanged: [{
            type: Output
        }], endDateChanged: [{
            type: Output
        }], disabled: [{
            type: HostBinding,
            args: ['disabled']
        }], outsideClick: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }] }); })();
