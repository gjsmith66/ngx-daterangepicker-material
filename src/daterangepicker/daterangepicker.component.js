import { ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as dayjs from 'dayjs';
import { LocaleService } from './locale.service';
import * as localeData from 'dayjs/plugin/localeData';
import * as LocalizedFormat from 'dayjs/plugin/localizedFormat';
import * as isoWeek from 'dayjs/plugin/isoWeek';
import * as i0 from "@angular/core";
import * as i1 from "./locale.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
const _c0 = ["pickerContainer"];
const _c1 = function (a0) { return { "active": a0 }; };
function DaterangepickerComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "button", 7);
    i0.ɵɵlistener("click", function DaterangepickerComponent_li_4_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r7); const range_r5 = ctx.$implicit; const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.clickRange($event, range_r5); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const range_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r1.disableRange(range_r5))("ngClass", i0.ɵɵpureFunction1(3, _c1, range_r5 === ctx_r1.chosenRange));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(range_r5);
} }
function DaterangepickerComponent_div_5_table_2_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th");
} }
function DaterangepickerComponent_div_5_table_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "th", 19);
    i0.ɵɵlistener("click", function DaterangepickerComponent_div_5_table_2_ng_container_4_Template_th_click_1_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(3); return ctx_r20.clickPrev(ctx_r20.sideEnum.left); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function DaterangepickerComponent_div_5_table_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "th");
    i0.ɵɵelementContainerEnd();
} }
function DaterangepickerComponent_div_5_table_2_ng_container_7_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const m_r24 = ctx.$implicit;
    const ctx_r22 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", ctx_r22.calendarVariables.left.dropdowns.inMinYear && m_r24 < ctx_r22.calendarVariables.left.minDate.month() || ctx_r22.calendarVariables.left.dropdowns.inMaxYear && m_r24 > ctx_r22.calendarVariables.left.maxDate.month())("value", m_r24)("selected", ctx_r22.calendarVariables.left.dropdowns.currentMonth == m_r24);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r22.locale.monthNames[m_r24], " ");
} }
function DaterangepickerComponent_div_5_table_2_ng_container_7_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const y_r25 = ctx.$implicit;
    const ctx_r23 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("selected", y_r25 === ctx_r23.calendarVariables.left.dropdowns.currentYear);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", y_r25, " ");
} }
function DaterangepickerComponent_div_5_table_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 20);
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "select", 21);
    i0.ɵɵlistener("change", function DaterangepickerComponent_div_5_table_2_ng_container_7_Template_select_change_3_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r26 = i0.ɵɵnextContext(3); return ctx_r26.monthChanged($event, ctx_r26.sideEnum.left); });
    i0.ɵɵtemplate(4, DaterangepickerComponent_div_5_table_2_ng_container_7_option_4_Template, 2, 4, "option", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 20);
    i0.ɵɵtext(6);
    i0.ɵɵelementStart(7, "select", 23);
    i0.ɵɵlistener("change", function DaterangepickerComponent_div_5_table_2_ng_container_7_Template_select_change_7_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r28 = i0.ɵɵnextContext(3); return ctx_r28.yearChanged($event, ctx_r28.sideEnum.left); });
    i0.ɵɵtemplate(8, DaterangepickerComponent_div_5_table_2_ng_container_7_option_8_Template, 2, 2, "option", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r13.locale.monthNames[ctx_r13.calendarVariables == null ? null : ctx_r13.calendarVariables.left == null ? null : ctx_r13.calendarVariables.left.calendar[1][1].month()], " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r13.calendarVariables.left.dropdowns.monthArrays);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r13.calendarVariables == null ? null : ctx_r13.calendarVariables.left == null ? null : ctx_r13.calendarVariables.left.calendar[1][1].format(" YYYY"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r13.calendarVariables.left.dropdowns.yearArrays);
} }
function DaterangepickerComponent_div_5_table_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" ", ctx_r14.locale.monthNames[ctx_r14.calendarVariables == null ? null : ctx_r14.calendarVariables.left == null ? null : ctx_r14.calendarVariables.left.calendar[1][1].month()], " ", ctx_r14.calendarVariables == null ? null : ctx_r14.calendarVariables.left == null ? null : ctx_r14.calendarVariables.left.calendar[1][1].format(" YYYY"), " ");
} }
function DaterangepickerComponent_div_5_table_2_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "th", 27);
    i0.ɵɵlistener("click", function DaterangepickerComponent_div_5_table_2_ng_container_9_Template_th_click_1_listener() { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(3); return ctx_r29.clickNext(ctx_r29.sideEnum.left); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function DaterangepickerComponent_div_5_table_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "th");
    i0.ɵɵelementContainerEnd();
} }
function DaterangepickerComponent_div_5_table_2_th_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 28);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r17.locale.weekLabel);
} }
function DaterangepickerComponent_div_5_table_2_th_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dayofweek_r31 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(dayofweek_r31);
} }
function DaterangepickerComponent_div_5_table_2_tr_15_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 28);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r32 = i0.ɵɵnextContext().$implicit;
    const ctx_r33 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r33.calendarVariables.left.calendar[row_r32][0].week());
} }
function DaterangepickerComponent_div_5_table_2_tr_15_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 28);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r32 = i0.ɵɵnextContext().$implicit;
    const ctx_r34 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r34.calendarVariables.left.calendar[row_r32][0].isoWeek());
} }
function DaterangepickerComponent_div_5_table_2_tr_15_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 30);
    i0.ɵɵlistener("click", function DaterangepickerComponent_div_5_table_2_tr_15_td_3_Template_td_click_0_listener($event) { i0.ɵɵrestoreView(_r40); const col_r38 = ctx.$implicit; const row_r32 = i0.ɵɵnextContext().$implicit; const ctx_r39 = i0.ɵɵnextContext(3); return ctx_r39.clickDate($event, ctx_r39.sideEnum.left, row_r32, col_r38); })("mouseenter", function DaterangepickerComponent_div_5_table_2_tr_15_td_3_Template_td_mouseenter_0_listener($event) { i0.ɵɵrestoreView(_r40); const col_r38 = ctx.$implicit; const row_r32 = i0.ɵɵnextContext().$implicit; const ctx_r42 = i0.ɵɵnextContext(3); return ctx_r42.hoverDate($event, ctx_r42.sideEnum.left, row_r32, col_r38); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r38 = ctx.$implicit;
    const row_r32 = i0.ɵɵnextContext().$implicit;
    const ctx_r35 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMap(ctx_r35.calendarVariables.left.classes[row_r32][col_r38]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r35.calendarVariables.left.calendar[row_r32][col_r38].date());
} }
function DaterangepickerComponent_div_5_table_2_tr_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, DaterangepickerComponent_div_5_table_2_tr_15_td_1_Template, 3, 1, "td", 16);
    i0.ɵɵtemplate(2, DaterangepickerComponent_div_5_table_2_tr_15_td_2_Template, 3, 1, "td", 16);
    i0.ɵɵtemplate(3, DaterangepickerComponent_div_5_table_2_tr_15_td_3_Template, 3, 3, "td", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r32 = ctx.$implicit;
    const ctx_r19 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMap(ctx_r19.calendarVariables.left.classes[row_r32].classList);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r19.showWeekNumbers);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r19.showISOWeekNumbers);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r19.calendarVariables.left.calCols);
} }
function DaterangepickerComponent_div_5_table_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 12);
    i0.ɵɵelementStart(1, "thead");
    i0.ɵɵelementStart(2, "tr");
    i0.ɵɵtemplate(3, DaterangepickerComponent_div_5_table_2_th_3_Template, 1, 0, "th", 13);
    i0.ɵɵtemplate(4, DaterangepickerComponent_div_5_table_2_ng_container_4_Template, 2, 0, "ng-container", 13);
    i0.ɵɵtemplate(5, DaterangepickerComponent_div_5_table_2_ng_container_5_Template, 2, 0, "ng-container", 13);
    i0.ɵɵelementStart(6, "th", 14);
    i0.ɵɵtemplate(7, DaterangepickerComponent_div_5_table_2_ng_container_7_Template, 9, 4, "ng-container", 13);
    i0.ɵɵtemplate(8, DaterangepickerComponent_div_5_table_2_ng_container_8_Template, 2, 2, "ng-container", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, DaterangepickerComponent_div_5_table_2_ng_container_9_Template, 2, 0, "ng-container", 13);
    i0.ɵɵtemplate(10, DaterangepickerComponent_div_5_table_2_ng_container_10_Template, 2, 0, "ng-container", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "tr", 15);
    i0.ɵɵtemplate(12, DaterangepickerComponent_div_5_table_2_th_12_Template, 3, 1, "th", 16);
    i0.ɵɵtemplate(13, DaterangepickerComponent_div_5_table_2_th_13_Template, 3, 1, "th", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "tbody", 17);
    i0.ɵɵtemplate(15, DaterangepickerComponent_div_5_table_2_tr_15_Template, 4, 5, "tr", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r8.showWeekNumbers || ctx_r8.showISOWeekNumbers);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r8.calendarVariables.left.minDate || ctx_r8.calendarVariables.left.minDate.isBefore(ctx_r8.calendarVariables.left.calendar.firstDay) && (!ctx_r8.linkedCalendars || true));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(!ctx_r8.calendarVariables.left.minDate || ctx_r8.calendarVariables.left.minDate.isBefore(ctx_r8.calendarVariables.left.calendar.firstDay) && (!ctx_r8.linkedCalendars || true)));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r8.showDropdowns && ctx_r8.calendarVariables.left.dropdowns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r8.showDropdowns || !ctx_r8.calendarVariables.left.dropdowns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (!ctx_r8.calendarVariables.left.maxDate || ctx_r8.calendarVariables.left.maxDate.isAfter(ctx_r8.calendarVariables.left.calendar.lastDay)) && (!ctx_r8.linkedCalendars || ctx_r8.singleDatePicker));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !((!ctx_r8.calendarVariables.left.maxDate || ctx_r8.calendarVariables.left.maxDate.isAfter(ctx_r8.calendarVariables.left.calendar.lastDay)) && (!ctx_r8.linkedCalendars || ctx_r8.singleDatePicker)));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r8.showWeekNumbers || ctx_r8.showISOWeekNumbers);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r8.locale.daysOfWeek);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r8.calendarVariables.left.calRows);
} }
function DaterangepickerComponent_div_5_div_3_option_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r49 = ctx.$implicit;
    const ctx_r45 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", i_r49)("disabled", ctx_r45.timepickerVariables.left.disabledHours.indexOf(i_r49) > 0 - 1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i_r49);
} }
function DaterangepickerComponent_div_5_div_3_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r50 = ctx.$implicit;
    const index_r51 = ctx.index;
    const ctx_r46 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", i_r50)("disabled", ctx_r46.timepickerVariables.left.disabledMinutes.indexOf(i_r50) > 0 - 1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r46.timepickerVariables.left.minutesLabel[index_r51]);
} }
function DaterangepickerComponent_div_5_div_3_select_10_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r53 = ctx.$implicit;
    const index_r54 = ctx.index;
    const ctx_r52 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("value", i_r53)("disabled", ctx_r52.timepickerVariables.left.disabledSeconds.indexOf(i_r53) > 0 - 1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r52.timepickerVariables.left.secondsLabel[index_r54]);
} }
function DaterangepickerComponent_div_5_div_3_select_10_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 41);
    i0.ɵɵlistener("ngModelChange", function DaterangepickerComponent_div_5_div_3_select_10_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r55 = i0.ɵɵnextContext(3); return ctx_r55.timepickerVariables.left.selectedSecond = $event; })("ngModelChange", function DaterangepickerComponent_div_5_div_3_select_10_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r56); const ctx_r57 = i0.ɵɵnextContext(3); return ctx_r57.timeChanged($event, ctx_r57.sideEnum.left); });
    i0.ɵɵtemplate(1, DaterangepickerComponent_div_5_div_3_select_10_option_1_Template, 2, 3, "option", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r47 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", !ctx_r47.startDate)("ngModel", ctx_r47.timepickerVariables.left.selectedSecond);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r47.timepickerVariables.left.seconds);
} }
function DaterangepickerComponent_div_5_div_3_select_14_Template(rf, ctx) { if (rf & 1) {
    const _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 42);
    i0.ɵɵlistener("ngModelChange", function DaterangepickerComponent_div_5_div_3_select_14_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r59); const ctx_r58 = i0.ɵɵnextContext(3); return ctx_r58.timepickerVariables.left.ampmModel = $event; })("ngModelChange", function DaterangepickerComponent_div_5_div_3_select_14_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r59); const ctx_r60 = i0.ɵɵnextContext(3); return ctx_r60.timeChanged($event, ctx_r60.sideEnum.left); });
    i0.ɵɵelementStart(1, "option", 43);
    i0.ɵɵtext(2, "AM");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "option", 44);
    i0.ɵɵtext(4, "PM");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r48 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngModel", ctx_r48.timepickerVariables.left.ampmModel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r48.timepickerVariables.left.amDisabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r48.timepickerVariables.left.pmDisabled);
} }
function DaterangepickerComponent_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵelementStart(1, "div", 32);
    i0.ɵɵelementStart(2, "select", 33);
    i0.ɵɵlistener("ngModelChange", function DaterangepickerComponent_div_5_div_3_Template_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r62); const ctx_r61 = i0.ɵɵnextContext(2); return ctx_r61.timepickerVariables.left.selectedHour = $event; })("ngModelChange", function DaterangepickerComponent_div_5_div_3_Template_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r62); const ctx_r63 = i0.ɵɵnextContext(2); return ctx_r63.timeChanged($event, ctx_r63.sideEnum.left); });
    i0.ɵɵtemplate(3, DaterangepickerComponent_div_5_div_3_option_3_Template, 2, 3, "option", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 32);
    i0.ɵɵelementStart(5, "select", 35);
    i0.ɵɵlistener("ngModelChange", function DaterangepickerComponent_div_5_div_3_Template_select_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r62); const ctx_r64 = i0.ɵɵnextContext(2); return ctx_r64.timepickerVariables.left.selectedMinute = $event; })("ngModelChange", function DaterangepickerComponent_div_5_div_3_Template_select_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r62); const ctx_r65 = i0.ɵɵnextContext(2); return ctx_r65.timeChanged($event, ctx_r65.sideEnum.left); });
    i0.ɵɵtemplate(6, DaterangepickerComponent_div_5_div_3_option_6_Template, 2, 3, "option", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "span", 36);
    i0.ɵɵelement(8, "span", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 32);
    i0.ɵɵtemplate(10, DaterangepickerComponent_div_5_div_3_select_10_Template, 2, 3, "select", 38);
    i0.ɵɵelement(11, "span", 36);
    i0.ɵɵelement(12, "span", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 32);
    i0.ɵɵtemplate(14, DaterangepickerComponent_div_5_div_3_select_14_Template, 5, 3, "select", 39);
    i0.ɵɵelement(15, "span", 36);
    i0.ɵɵelement(16, "span", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r9.startDate)("ngModel", ctx_r9.timepickerVariables.left.selectedHour);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r9.timepickerVariables.left.hours);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r9.startDate)("ngModel", ctx_r9.timepickerVariables.left.selectedMinute);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r9.timepickerVariables.left.minutes);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r9.timePickerSeconds);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r9.timePicker24Hour);
} }
const _c2 = function (a0, a1) { return { right: a0, left: a1 }; };
function DaterangepickerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵtemplate(2, DaterangepickerComponent_div_5_table_2_Template, 16, 10, "table", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, DaterangepickerComponent_div_5_div_3_Template, 17, 8, "div", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c2, ctx_r2.singleDatePicker, !ctx_r2.singleDatePicker));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.calendarVariables);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.timePicker);
} }
function DaterangepickerComponent_div_6_table_2_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th");
} }
function DaterangepickerComponent_div_6_table_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r79 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "th", 19);
    i0.ɵɵlistener("click", function DaterangepickerComponent_div_6_table_2_ng_container_4_Template_th_click_1_listener() { i0.ɵɵrestoreView(_r79); const ctx_r78 = i0.ɵɵnextContext(3); return ctx_r78.clickPrev(ctx_r78.sideEnum.right); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function DaterangepickerComponent_div_6_table_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "th");
    i0.ɵɵelementContainerEnd();
} }
function DaterangepickerComponent_div_6_table_2_ng_container_7_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const m_r82 = ctx.$implicit;
    const ctx_r80 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", ctx_r80.calendarVariables.right.dropdowns.inMinYear && ctx_r80.calendarVariables.right.minDate && m_r82 < ctx_r80.calendarVariables.right.minDate.month() || ctx_r80.calendarVariables.right.dropdowns.inMaxYear && ctx_r80.calendarVariables.right.maxDate && m_r82 > ctx_r80.calendarVariables.right.maxDate.month())("value", m_r82)("selected", ctx_r80.calendarVariables.right.dropdowns.currentMonth == m_r82);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r80.locale.monthNames[m_r82], " ");
} }
function DaterangepickerComponent_div_6_table_2_ng_container_7_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const y_r83 = ctx.$implicit;
    const ctx_r81 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("selected", y_r83 === ctx_r81.calendarVariables.right.dropdowns.currentYear);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", y_r83, " ");
} }
function DaterangepickerComponent_div_6_table_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r85 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 20);
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "select", 21);
    i0.ɵɵlistener("change", function DaterangepickerComponent_div_6_table_2_ng_container_7_Template_select_change_3_listener($event) { i0.ɵɵrestoreView(_r85); const ctx_r84 = i0.ɵɵnextContext(3); return ctx_r84.monthChanged($event, ctx_r84.sideEnum.right); });
    i0.ɵɵtemplate(4, DaterangepickerComponent_div_6_table_2_ng_container_7_option_4_Template, 2, 4, "option", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 20);
    i0.ɵɵtext(6);
    i0.ɵɵelementStart(7, "select", 23);
    i0.ɵɵlistener("change", function DaterangepickerComponent_div_6_table_2_ng_container_7_Template_select_change_7_listener($event) { i0.ɵɵrestoreView(_r85); const ctx_r86 = i0.ɵɵnextContext(3); return ctx_r86.yearChanged($event, ctx_r86.sideEnum.right); });
    i0.ɵɵtemplate(8, DaterangepickerComponent_div_6_table_2_ng_container_7_option_8_Template, 2, 2, "option", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r71 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r71.locale.monthNames[ctx_r71.calendarVariables == null ? null : ctx_r71.calendarVariables.right == null ? null : ctx_r71.calendarVariables.right.calendar[1][1].month()], " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r71.calendarVariables.right.dropdowns.monthArrays);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r71.calendarVariables == null ? null : ctx_r71.calendarVariables.right == null ? null : ctx_r71.calendarVariables.right.calendar[1][1].format(" YYYY"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r71.calendarVariables.right.dropdowns.yearArrays);
} }
function DaterangepickerComponent_div_6_table_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r72 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" ", ctx_r72.locale.monthNames[ctx_r72.calendarVariables == null ? null : ctx_r72.calendarVariables.right == null ? null : ctx_r72.calendarVariables.right.calendar[1][1].month()], " ", ctx_r72.calendarVariables == null ? null : ctx_r72.calendarVariables.right == null ? null : ctx_r72.calendarVariables.right.calendar[1][1].format(" YYYY"), " ");
} }
function DaterangepickerComponent_div_6_table_2_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r88 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "th", 27);
    i0.ɵɵlistener("click", function DaterangepickerComponent_div_6_table_2_ng_container_9_Template_th_click_1_listener() { i0.ɵɵrestoreView(_r88); const ctx_r87 = i0.ɵɵnextContext(3); return ctx_r87.clickNext(ctx_r87.sideEnum.right); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function DaterangepickerComponent_div_6_table_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "th");
    i0.ɵɵelementContainerEnd();
} }
function DaterangepickerComponent_div_6_table_2_th_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 28);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r75 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r75.locale.weekLabel);
} }
function DaterangepickerComponent_div_6_table_2_th_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dayofweek_r89 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(dayofweek_r89);
} }
function DaterangepickerComponent_div_6_table_2_tr_15_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 28);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r90 = i0.ɵɵnextContext().$implicit;
    const ctx_r91 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r91.calendarVariables.right.calendar[row_r90][0].week());
} }
function DaterangepickerComponent_div_6_table_2_tr_15_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 28);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r90 = i0.ɵɵnextContext().$implicit;
    const ctx_r92 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r92.calendarVariables.right.calendar[row_r90][0].isoWeek());
} }
function DaterangepickerComponent_div_6_table_2_tr_15_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r98 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 30);
    i0.ɵɵlistener("click", function DaterangepickerComponent_div_6_table_2_tr_15_td_3_Template_td_click_0_listener($event) { i0.ɵɵrestoreView(_r98); const col_r96 = ctx.$implicit; const row_r90 = i0.ɵɵnextContext().$implicit; const ctx_r97 = i0.ɵɵnextContext(3); return ctx_r97.clickDate($event, ctx_r97.sideEnum.right, row_r90, col_r96); })("mouseenter", function DaterangepickerComponent_div_6_table_2_tr_15_td_3_Template_td_mouseenter_0_listener($event) { i0.ɵɵrestoreView(_r98); const col_r96 = ctx.$implicit; const row_r90 = i0.ɵɵnextContext().$implicit; const ctx_r100 = i0.ɵɵnextContext(3); return ctx_r100.hoverDate($event, ctx_r100.sideEnum.right, row_r90, col_r96); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const col_r96 = ctx.$implicit;
    const row_r90 = i0.ɵɵnextContext().$implicit;
    const ctx_r93 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMap(ctx_r93.calendarVariables.right.classes[row_r90][col_r96]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r93.calendarVariables.right.calendar[row_r90][col_r96].date());
} }
function DaterangepickerComponent_div_6_table_2_tr_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, DaterangepickerComponent_div_6_table_2_tr_15_td_1_Template, 3, 1, "td", 16);
    i0.ɵɵtemplate(2, DaterangepickerComponent_div_6_table_2_tr_15_td_2_Template, 3, 1, "td", 16);
    i0.ɵɵtemplate(3, DaterangepickerComponent_div_6_table_2_tr_15_td_3_Template, 3, 3, "td", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r90 = ctx.$implicit;
    const ctx_r77 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMap(ctx_r77.calendarVariables.right.classes[row_r90].classList);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r77.showWeekNumbers);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r77.showISOWeekNumbers);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r77.calendarVariables.right.calCols);
} }
function DaterangepickerComponent_div_6_table_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 12);
    i0.ɵɵelementStart(1, "thead");
    i0.ɵɵelementStart(2, "tr");
    i0.ɵɵtemplate(3, DaterangepickerComponent_div_6_table_2_th_3_Template, 1, 0, "th", 13);
    i0.ɵɵtemplate(4, DaterangepickerComponent_div_6_table_2_ng_container_4_Template, 2, 0, "ng-container", 13);
    i0.ɵɵtemplate(5, DaterangepickerComponent_div_6_table_2_ng_container_5_Template, 2, 0, "ng-container", 13);
    i0.ɵɵelementStart(6, "th", 46);
    i0.ɵɵtemplate(7, DaterangepickerComponent_div_6_table_2_ng_container_7_Template, 9, 4, "ng-container", 13);
    i0.ɵɵtemplate(8, DaterangepickerComponent_div_6_table_2_ng_container_8_Template, 2, 2, "ng-container", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, DaterangepickerComponent_div_6_table_2_ng_container_9_Template, 2, 0, "ng-container", 13);
    i0.ɵɵtemplate(10, DaterangepickerComponent_div_6_table_2_ng_container_10_Template, 2, 0, "ng-container", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "tr", 15);
    i0.ɵɵtemplate(12, DaterangepickerComponent_div_6_table_2_th_12_Template, 3, 1, "th", 16);
    i0.ɵɵtemplate(13, DaterangepickerComponent_div_6_table_2_th_13_Template, 3, 1, "th", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "tbody");
    i0.ɵɵtemplate(15, DaterangepickerComponent_div_6_table_2_tr_15_Template, 4, 5, "tr", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r66 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r66.showWeekNumbers || ctx_r66.showISOWeekNumbers);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (!ctx_r66.calendarVariables.right.minDate || ctx_r66.calendarVariables.right.minDate.isBefore(ctx_r66.calendarVariables.right.calendar.firstDay)) && !ctx_r66.linkedCalendars);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !((!ctx_r66.calendarVariables.right.minDate || ctx_r66.calendarVariables.right.minDate.isBefore(ctx_r66.calendarVariables.right.calendar.firstDay)) && !ctx_r66.linkedCalendars));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r66.showDropdowns && ctx_r66.calendarVariables.right.dropdowns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r66.showDropdowns || !ctx_r66.calendarVariables.right.dropdowns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r66.calendarVariables.right.maxDate || ctx_r66.calendarVariables.right.maxDate.isAfter(ctx_r66.calendarVariables.right.calendar.lastDay) && (!ctx_r66.linkedCalendars || ctx_r66.singleDatePicker || true));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(!ctx_r66.calendarVariables.right.maxDate || ctx_r66.calendarVariables.right.maxDate.isAfter(ctx_r66.calendarVariables.right.calendar.lastDay) && (!ctx_r66.linkedCalendars || ctx_r66.singleDatePicker || true)));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r66.showWeekNumbers || ctx_r66.showISOWeekNumbers);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r66.locale.daysOfWeek);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r66.calendarVariables.right.calRows);
} }
function DaterangepickerComponent_div_6_div_3_option_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r107 = ctx.$implicit;
    const ctx_r103 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", i_r107)("disabled", ctx_r103.timepickerVariables.right.disabledHours.indexOf(i_r107) > 0 - 1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i_r107);
} }
function DaterangepickerComponent_div_6_div_3_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r108 = ctx.$implicit;
    const index_r109 = ctx.index;
    const ctx_r104 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", i_r108)("disabled", ctx_r104.timepickerVariables.right.disabledMinutes.indexOf(i_r108) > 0 - 1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r104.timepickerVariables.right.minutesLabel[index_r109]);
} }
function DaterangepickerComponent_div_6_div_3_select_12_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r111 = ctx.$implicit;
    const index_r112 = ctx.index;
    const ctx_r110 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("value", i_r111)("disabled", ctx_r110.timepickerVariables.right.disabledSeconds.indexOf(i_r111) > 0 - 1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r110.timepickerVariables.right.secondsLabel[index_r112]);
} }
function DaterangepickerComponent_div_6_div_3_select_12_Template(rf, ctx) { if (rf & 1) {
    const _r114 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 41);
    i0.ɵɵlistener("ngModelChange", function DaterangepickerComponent_div_6_div_3_select_12_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r114); const ctx_r113 = i0.ɵɵnextContext(3); return ctx_r113.timepickerVariables.right.selectedSecond = $event; })("ngModelChange", function DaterangepickerComponent_div_6_div_3_select_12_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r114); const ctx_r115 = i0.ɵɵnextContext(3); return ctx_r115.timeChanged($event, ctx_r115.sideEnum.right); });
    i0.ɵɵtemplate(1, DaterangepickerComponent_div_6_div_3_select_12_option_1_Template, 2, 3, "option", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r105 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", !ctx_r105.startDate)("ngModel", ctx_r105.timepickerVariables.right.selectedSecond);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r105.timepickerVariables.right.seconds);
} }
function DaterangepickerComponent_div_6_div_3_select_16_Template(rf, ctx) { if (rf & 1) {
    const _r117 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 42);
    i0.ɵɵlistener("ngModelChange", function DaterangepickerComponent_div_6_div_3_select_16_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r117); const ctx_r116 = i0.ɵɵnextContext(3); return ctx_r116.timepickerVariables.right.ampmModel = $event; })("ngModelChange", function DaterangepickerComponent_div_6_div_3_select_16_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r117); const ctx_r118 = i0.ɵɵnextContext(3); return ctx_r118.timeChanged($event, ctx_r118.sideEnum.right); });
    i0.ɵɵelementStart(1, "option", 43);
    i0.ɵɵtext(2, "AM");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "option", 44);
    i0.ɵɵtext(4, "PM");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r106 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngModel", ctx_r106.timepickerVariables.right.ampmModel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r106.timepickerVariables.right.amDisabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r106.timepickerVariables.right.pmDisabled);
} }
function DaterangepickerComponent_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r120 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵelementStart(1, "div", 32);
    i0.ɵɵelementStart(2, "select", 47);
    i0.ɵɵlistener("ngModelChange", function DaterangepickerComponent_div_6_div_3_Template_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r120); const ctx_r119 = i0.ɵɵnextContext(2); return ctx_r119.timepickerVariables.right.selectedHour = $event; })("ngModelChange", function DaterangepickerComponent_div_6_div_3_Template_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r120); const ctx_r121 = i0.ɵɵnextContext(2); return ctx_r121.timeChanged($event, ctx_r121.sideEnum.right); });
    i0.ɵɵtemplate(3, DaterangepickerComponent_div_6_div_3_option_3_Template, 2, 3, "option", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "span", 36);
    i0.ɵɵelement(5, "span", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 32);
    i0.ɵɵelementStart(7, "select", 35);
    i0.ɵɵlistener("ngModelChange", function DaterangepickerComponent_div_6_div_3_Template_select_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r120); const ctx_r122 = i0.ɵɵnextContext(2); return ctx_r122.timepickerVariables.right.selectedMinute = $event; })("ngModelChange", function DaterangepickerComponent_div_6_div_3_Template_select_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r120); const ctx_r123 = i0.ɵɵnextContext(2); return ctx_r123.timeChanged($event, ctx_r123.sideEnum.right); });
    i0.ɵɵtemplate(8, DaterangepickerComponent_div_6_div_3_option_8_Template, 2, 3, "option", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "span", 36);
    i0.ɵɵelement(10, "span", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 32);
    i0.ɵɵtemplate(12, DaterangepickerComponent_div_6_div_3_select_12_Template, 2, 3, "select", 38);
    i0.ɵɵelement(13, "span", 36);
    i0.ɵɵelement(14, "span", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 32);
    i0.ɵɵtemplate(16, DaterangepickerComponent_div_6_div_3_select_16_Template, 5, 3, "select", 39);
    i0.ɵɵelement(17, "span", 36);
    i0.ɵɵelement(18, "span", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r67.startDate)("ngModel", ctx_r67.timepickerVariables.right.selectedHour);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r67.timepickerVariables.right.hours);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", !ctx_r67.startDate)("ngModel", ctx_r67.timepickerVariables.right.selectedMinute);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r67.timepickerVariables.right.minutes);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r67.timePickerSeconds);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r67.timePicker24Hour);
} }
function DaterangepickerComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵtemplate(2, DaterangepickerComponent_div_6_table_2_Template, 16, 10, "table", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, DaterangepickerComponent_div_6_div_3_Template, 19, 8, "div", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.calendarVariables);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.timePicker);
} }
function DaterangepickerComponent_div_7_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r127 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 53);
    i0.ɵɵlistener("click", function DaterangepickerComponent_div_7_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r127); const ctx_r126 = i0.ɵɵnextContext(2); return ctx_r126.clear(); });
    i0.ɵɵtext(1);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 54);
    i0.ɵɵelement(3, "path", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r124 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", ctx_r124.locale.clearLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r124.locale.clearLabel, " ");
} }
function DaterangepickerComponent_div_7_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r129 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 56);
    i0.ɵɵlistener("click", function DaterangepickerComponent_div_7_button_3_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r129); const ctx_r128 = i0.ɵɵnextContext(2); return ctx_r128.clickCancel($event); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r125 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r125.locale.cancelLabel);
} }
function DaterangepickerComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r131 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵelementStart(1, "div", 49);
    i0.ɵɵtemplate(2, DaterangepickerComponent_div_7_button_2_Template, 4, 2, "button", 50);
    i0.ɵɵtemplate(3, DaterangepickerComponent_div_7_button_3_Template, 2, 1, "button", 51);
    i0.ɵɵelementStart(4, "button", 52);
    i0.ɵɵlistener("click", function DaterangepickerComponent_div_7_Template_button_click_4_listener($event) { i0.ɵɵrestoreView(_r131); const ctx_r130 = i0.ɵɵnextContext(); return ctx_r130.clickApply($event); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r4.showClearButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.showCancel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r4.applyBtn.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r4.locale.applyLabel);
} }
const _c3 = function (a0, a1, a2, a3, a4, a5, a6) { return { ltr: a0, rtl: a1, "shown": a2, "hidden": a3, "inline": a4, "double": a5, "show-ranges": a6 }; };
dayjs.extend(localeData);
dayjs.extend(LocalizedFormat);
dayjs.extend(isoWeek);
export var SideEnum;
(function (SideEnum) {
    SideEnum["left"] = "left";
    SideEnum["right"] = "right";
})(SideEnum || (SideEnum = {}));
export class DaterangepickerComponent {
    constructor(el, _ref, _localeService) {
        this.el = el;
        this._ref = _ref;
        this._localeService = _localeService;
        this._old = { start: null, end: null };
        this.calendarVariables = { left: {}, right: {} };
        this.tooltiptext = [];
        this.timepickerVariables = { left: {}, right: {} };
        this.daterangepicker = { start: new FormControl(), end: new FormControl() };
        this.applyBtn = { disabled: false };
        this.startDate = dayjs().startOf('day');
        this.endDate = dayjs().endOf('day');
        this.dateLimit = null;
        this.sideEnum = SideEnum;
        this.minDate = null;
        this.maxDate = null;
        this.autoApply = false;
        this.singleDatePicker = false;
        this.showDropdowns = false;
        this.showWeekNumbers = false;
        this.showISOWeekNumbers = false;
        this.linkedCalendars = false;
        this.autoUpdateInput = true;
        this.alwaysShowCalendars = false;
        this.maxSpan = false;
        this.lockStartDate = false;
        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        this.showClearButton = false;
        this.firstMonthDayClass = null;
        this.lastMonthDayClass = null;
        this.emptyWeekRowClass = null;
        this.emptyWeekColumnClass = null;
        this.firstDayOfNextMonthClass = null;
        this.lastDayOfPreviousMonthClass = null;
        this._locale = {};
        this._ranges = {};
        this.showCancel = false;
        this.keepCalendarOpeningWithRange = false;
        this.showRangeLabelOnInput = false;
        this.customRangeDirection = false;
        this.rangesArray = [];
        this.isShown = false;
        this.inline = true;
        this.leftCalendar = {};
        this.rightCalendar = {};
        this.showCalInRanges = false;
        this.nowHoveredDate = null;
        this.pickingDate = false;
        this.options = {};
        this.closeOnAutoApply = true;
        this.choosedDate = new EventEmitter();
        this.rangeClicked = new EventEmitter();
        this.datesUpdated = new EventEmitter();
        this.startDateChanged = new EventEmitter();
        this.endDateChanged = new EventEmitter();
    }
    set locale(value) {
        this._locale = Object.assign(Object.assign({}, this._localeService.config), value);
    }
    get locale() {
        return this._locale;
    }
    set ranges(value) {
        this._ranges = value;
        this.renderRanges();
    }
    get ranges() {
        return this._ranges;
    }
    ngOnInit() {
        this._buildLocale();
        const daysOfWeek = [...this.locale.daysOfWeek];
        this.locale.firstDay = this.locale.firstDay % 7;
        if (this.locale.firstDay !== 0) {
            let iterator = this.locale.firstDay;
            while (iterator > 0) {
                daysOfWeek.push(daysOfWeek.shift());
                iterator--;
            }
        }
        this.locale.daysOfWeek = daysOfWeek;
        if (this.inline) {
            this._old.start = this.startDate.clone();
            this._old.end = this.endDate.clone();
        }
        if (this.startDate && this.timePicker) {
            this.setStartDate(this.startDate);
            this.renderTimePicker(SideEnum.left);
        }
        if (this.endDate && this.timePicker) {
            this.setEndDate(this.endDate);
            this.renderTimePicker(SideEnum.right);
        }
        this.updateMonthsInView();
        this.renderCalendar(SideEnum.left);
        this.renderCalendar(SideEnum.right);
        this.renderRanges();
    }
    renderRanges() {
        this.rangesArray = [];
        let start, end;
        if (typeof this.ranges === 'object') {
            for (const range in this.ranges) {
                if (this.ranges[range]) {
                    if (typeof this.ranges[range][0] === 'string') {
                        start = dayjs(this.ranges[range][0], this.locale.format);
                    }
                    else {
                        start = dayjs(this.ranges[range][0]);
                    }
                    if (typeof this.ranges[range][1] === 'string') {
                        end = dayjs(this.ranges[range][1], this.locale.format);
                    }
                    else {
                        end = dayjs(this.ranges[range][1]);
                    }
                    if (this.minDate && start.isBefore(this.minDate)) {
                        start = this.minDate.clone();
                    }
                    let maxDate = this.maxDate;
                    if (this.maxSpan && maxDate && start.clone().add(this.maxSpan).isAfter(maxDate)) {
                        maxDate = start.clone().add(this.maxSpan);
                    }
                    if (maxDate && end.isAfter(maxDate)) {
                        end = maxDate.clone();
                    }
                    if ((this.minDate && end.isBefore(this.minDate, this.timePicker ? 'minute' : 'day'))
                        || (maxDate && start.isAfter(maxDate, this.timePicker ? 'minute' : 'day'))) {
                        continue;
                    }
                    const elem = document.createElement('textarea');
                    elem.innerHTML = range;
                    const rangeHtml = elem.value;
                    this.ranges[rangeHtml] = [start, end];
                }
            }
            for (const range in this.ranges) {
                if (this.ranges[range]) {
                    this.rangesArray.push(range);
                }
            }
            if (this.showCustomRangeLabel) {
                this.rangesArray.push(this.locale.customRangeLabel);
            }
            this.showCalInRanges = (!this.rangesArray.length) || this.alwaysShowCalendars;
            if (!this.timePicker) {
                this.startDate = this.startDate.startOf('day');
                this.endDate = this.endDate.endOf('day');
            }
        }
    }
    renderTimePicker(side) {
        let selected, minDate;
        const maxDate = this.maxDate;
        if (side === SideEnum.left) {
            selected = this.startDate.clone(),
                minDate = this.minDate;
        }
        else if (side === SideEnum.right && this.endDate) {
            selected = this.endDate.clone(),
                minDate = this.startDate;
        }
        else if (side === SideEnum.right && !this.endDate) {
            selected = this._getDateWithTime(this.startDate, SideEnum.right);
            if (selected.isBefore(this.startDate)) {
                selected = this.startDate.clone();
            }
            minDate = this.startDate;
        }
        const start = this.timePicker24Hour ? 0 : 1;
        const end = this.timePicker24Hour ? 23 : 12;
        this.timepickerVariables[side] = {
            hours: [],
            minutes: [],
            minutesLabel: [],
            seconds: [],
            secondsLabel: [],
            disabledHours: [],
            disabledMinutes: [],
            disabledSeconds: [],
            selectedHour: 0,
            selectedMinute: 0,
            selectedSecond: 0,
        };
        for (let i = start; i <= end; i++) {
            let i_in_24 = i;
            if (!this.timePicker24Hour) {
                i_in_24 = selected.hour() >= 12 ? (i === 12 ? 12 : i + 12) : (i === 12 ? 0 : i);
            }
            const time = selected.clone().hour(i_in_24);
            let disabled = false;
            if (minDate && time.minute(59).isBefore(minDate)) {
                disabled = true;
            }
            if (maxDate && time.minute(0).isAfter(maxDate)) {
                disabled = true;
            }
            this.timepickerVariables[side].hours.push(i);
            if (i_in_24 === selected.hour() && !disabled) {
                this.timepickerVariables[side].selectedHour = i;
            }
            else if (disabled) {
                this.timepickerVariables[side].disabledHours.push(i);
            }
        }
        for (let i = 0; i < 60; i += this.timePickerIncrement) {
            const padded = i < 10 ? '0' + i : i;
            const time = selected.clone().minute(i);
            let disabled = false;
            if (minDate && time.second(59).isBefore(minDate)) {
                disabled = true;
            }
            if (maxDate && time.second(0).isAfter(maxDate)) {
                disabled = true;
            }
            this.timepickerVariables[side].minutes.push(i);
            this.timepickerVariables[side].minutesLabel.push(padded);
            if (selected.minute() === i && !disabled) {
                this.timepickerVariables[side].selectedMinute = i;
            }
            else if (disabled) {
                this.timepickerVariables[side].disabledMinutes.push(i);
            }
        }
        if (this.timePickerSeconds) {
            for (let i = 0; i < 60; i++) {
                const padded = i < 10 ? '0' + i : i;
                const time = selected.clone().second(i);
                let disabled = false;
                if (minDate && time.isBefore(minDate)) {
                    disabled = true;
                }
                if (maxDate && time.isAfter(maxDate)) {
                    disabled = true;
                }
                this.timepickerVariables[side].seconds.push(i);
                this.timepickerVariables[side].secondsLabel.push(padded);
                if (selected.second() === i && !disabled) {
                    this.timepickerVariables[side].selectedSecond = i;
                }
                else if (disabled) {
                    this.timepickerVariables[side].disabledSeconds.push(i);
                }
            }
        }
        if (!this.timePicker24Hour) {
            const am_html = '';
            const pm_html = '';
            if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate)) {
                this.timepickerVariables[side].amDisabled = true;
            }
            if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate)) {
                this.timepickerVariables[side].pmDisabled = true;
            }
            if (selected.hour() >= 12) {
                this.timepickerVariables[side].ampmModel = 'PM';
            }
            else {
                this.timepickerVariables[side].ampmModel = 'AM';
            }
        }
        this.timepickerVariables[side].selected = selected;
    }
    renderCalendar(side) {
        const mainCalendar = (side === SideEnum.left) ? this.leftCalendar : this.rightCalendar;
        const month = mainCalendar.month.month();
        const year = mainCalendar.month.year();
        const hour = mainCalendar.month.hour();
        const minute = mainCalendar.month.minute();
        const second = mainCalendar.month.second();
        const daysInMonth = dayjs(new Date(year, month)).daysInMonth();
        const firstDay = dayjs(new Date(year, month, 1));
        const lastDay = dayjs(new Date(year, month, daysInMonth));
        const lastMonth = dayjs(firstDay).subtract(1, 'month').month();
        const lastYear = dayjs(firstDay).subtract(1, 'month').year();
        const daysInLastMonth = dayjs(new Date(lastYear, lastMonth)).daysInMonth();
        const dayOfWeek = firstDay.day();
        const calendar = [];
        calendar.firstDay = firstDay;
        calendar.lastDay = lastDay;
        for (let i = 0; i < 6; i++) {
            calendar[i] = [];
        }
        let startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
        if (startDay > daysInLastMonth) {
            startDay -= 7;
        }
        if (dayOfWeek === this.locale.firstDay) {
            startDay = daysInLastMonth - 6;
        }
        let curDate = dayjs(new Date(lastYear, lastMonth, startDay, 12, minute, second));
        for (let i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = dayjs(curDate).add(24, 'hour')) {
            if (i > 0 && col % 7 === 0) {
                col = 0;
                row++;
            }
            calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
            curDate.hour(12);
            if (this.minDate && calendar[row][col].format('YYYY-MM-DD') === this.minDate.format('YYYY-MM-DD') &&
                calendar[row][col].isBefore(this.minDate) && side === 'left') {
                calendar[row][col] = this.minDate.clone();
            }
            if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') === this.maxDate.format('YYYY-MM-DD') &&
                calendar[row][col].isAfter(this.maxDate) && side === 'right') {
                calendar[row][col] = this.maxDate.clone();
            }
        }
        if (side === SideEnum.left) {
            this.leftCalendar.calendar = calendar;
        }
        else {
            this.rightCalendar.calendar = calendar;
        }
        const minDate = side === 'left' ? this.minDate : this.startDate;
        let maxDate = this.maxDate;
        if (this.endDate === null && this.dateLimit) {
            const maxLimit = this.startDate.clone().add(this.dateLimit, 'day').endOf('day');
            if (!maxDate || maxLimit.isBefore(maxDate)) {
                maxDate = maxLimit;
            }
        }
        this.calendarVariables[side] = {
            month: month,
            year: year,
            hour: hour,
            minute: minute,
            second: second,
            daysInMonth: daysInMonth,
            firstDay: firstDay,
            lastDay: lastDay,
            lastMonth: lastMonth,
            lastYear: lastYear,
            daysInLastMonth: daysInLastMonth,
            dayOfWeek: dayOfWeek,
            calRows: Array.from(Array(6).keys()),
            calCols: Array.from(Array(7).keys()),
            classes: {},
            minDate: minDate,
            maxDate: maxDate,
            calendar: calendar
        };
        if (this.showDropdowns) {
            const currentMonth = calendar[1][1].month();
            const currentYear = calendar[1][1].year();
            const realCurrentYear = dayjs().year();
            const maxYear = (maxDate && maxDate.year()) || (realCurrentYear + 5);
            const minYear = (minDate && minDate.year()) || (realCurrentYear - 50);
            const inMinYear = currentYear === minYear;
            const inMaxYear = currentYear === maxYear;
            const years = [];
            for (let y = minYear; y <= maxYear; y++) {
                years.push(y);
            }
            this.calendarVariables[side].dropdowns = {
                currentMonth: currentMonth,
                currentYear: currentYear,
                maxYear: maxYear,
                minYear: minYear,
                inMinYear: inMinYear,
                inMaxYear: inMaxYear,
                monthArrays: Array.from(Array(12).keys()),
                yearArrays: years
            };
        }
        this._buildCells(calendar, side);
    }
    setStartDate(startDate) {
        if (typeof startDate === 'string') {
            this.startDate = dayjs(startDate, this.locale.format);
        }
        if (typeof startDate === 'object') {
            this.pickingDate = true;
            this.startDate = dayjs(startDate);
        }
        if (!this.timePicker) {
            this.pickingDate = true;
            this.startDate = this.startDate.startOf('day');
        }
        if (this.timePicker && this.timePickerIncrement) {
            this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
        }
        if (this.minDate && this.startDate.isBefore(this.minDate)) {
            this.startDate = this.minDate.clone();
            if (this.timePicker && this.timePickerIncrement) {
                this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }
        }
        if (this.maxDate && this.startDate.isAfter(this.maxDate)) {
            this.startDate = this.maxDate.clone();
            if (this.timePicker && this.timePickerIncrement) {
                this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }
        }
        if (!this.isShown) {
            this.updateElement();
        }
        this.startDateChanged.emit({ startDate: this.startDate });
        this.updateMonthsInView();
    }
    setEndDate(endDate) {
        if (typeof endDate === 'string') {
            this.endDate = dayjs(endDate, this.locale.format);
        }
        if (typeof endDate === 'object') {
            this.pickingDate = false;
            this.endDate = dayjs(endDate);
        }
        if (!this.timePicker) {
            this.pickingDate = false;
            this.endDate = this.endDate.add(1, 'd').startOf('day').subtract(1, 'second');
        }
        if (this.timePicker && this.timePickerIncrement) {
            this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
        }
        if (this.endDate.isBefore(this.startDate)) {
            this.endDate = this.startDate.clone();
        }
        if (this.maxDate && this.endDate.isAfter(this.maxDate)) {
            this.endDate = this.maxDate.clone();
        }
        if (this.dateLimit && this.startDate.clone().add(this.dateLimit, 'day').isBefore(this.endDate)) {
            this.endDate = this.startDate.clone().add(this.dateLimit, 'day');
        }
        if (!this.isShown) {
        }
        this.endDateChanged.emit({ endDate: this.endDate });
        this.updateMonthsInView();
    }
    isInvalidDate(date) {
        return false;
    }
    isCustomDate(date) {
        return false;
    }
    isTooltipDate(date) {
        return null;
    }
    updateView() {
        if (this.timePicker) {
            this.renderTimePicker(SideEnum.left);
            this.renderTimePicker(SideEnum.right);
        }
        this.updateMonthsInView();
        this.updateCalendars();
    }
    updateMonthsInView() {
        if (this.endDate) {
            if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month &&
                ((this.startDate && this.leftCalendar && this.startDate.format('YYYY-MM') === this.leftCalendar.month.format('YYYY-MM')) ||
                    (this.startDate && this.rightCalendar && this.startDate.format('YYYY-MM') === this.rightCalendar.month.format('YYYY-MM')))
                &&
                    (this.endDate.format('YYYY-MM') === this.leftCalendar.month.format('YYYY-MM') ||
                        this.endDate.format('YYYY-MM') === this.rightCalendar.month.format('YYYY-MM'))) {
                return;
            }
            if (this.startDate) {
                this.leftCalendar.month = this.startDate.clone().date(2);
                if (!this.linkedCalendars && (this.endDate.month() !== this.startDate.month() ||
                    this.endDate.year() !== this.startDate.year())) {
                    this.rightCalendar.month = this.endDate.clone().date(2);
                }
                else {
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }
            }
        }
        else {
            if (this.leftCalendar.month.format('YYYY-MM') !== this.startDate.format('YYYY-MM') &&
                this.rightCalendar.month.format('YYYY-MM') !== this.startDate.format('YYYY-MM')) {
                this.leftCalendar.month = this.startDate.clone().date(2);
                this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
            }
        }
        if (this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate) {
            this.rightCalendar.month = this.maxDate.clone().date(2);
            this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, 'month');
        }
    }
    updateCalendars() {
        this.renderCalendar(SideEnum.left);
        this.renderCalendar(SideEnum.right);
        if (this.endDate === null) {
            return;
        }
        this.calculateChosenLabel();
    }
    updateElement() {
        const format = this.locale.displayFormat ? this.locale.displayFormat : this.locale.format;
        if (!this.singleDatePicker && this.autoUpdateInput) {
            if (this.startDate && this.endDate) {
                if (this.rangesArray.length && this.showRangeLabelOnInput === true && this.chosenRange &&
                    this.locale.customRangeLabel !== this.chosenRange) {
                    this.chosenLabel = this.chosenRange;
                }
                else {
                    this.chosenLabel = this.startDate.format(format) +
                        this.locale.separator + this.endDate.format(format);
                }
            }
        }
        else if (this.autoUpdateInput) {
            this.chosenLabel = this.startDate.format(format);
        }
    }
    remove() {
        this.isShown = false;
    }
    calculateChosenLabel() {
        if (!this.locale || !this.locale.separator) {
            this._buildLocale();
        }
        let customRange = true;
        let i = 0;
        if (this.rangesArray.length > 0) {
            for (const range in this.ranges) {
                if (this.ranges[range]) {
                    if (this.timePicker) {
                        const format = this.timePickerSeconds ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD HH:mm';
                        if (this.startDate.format(format) === this.ranges[range][0].format(format)
                            && this.endDate.format(format) === this.ranges[range][1].format(format)) {
                            customRange = false;
                            this.chosenRange = this.rangesArray[i];
                            break;
                        }
                    }
                    else {
                        if (this.startDate.format('YYYY-MM-DD') === this.ranges[range][0].format('YYYY-MM-DD')
                            && this.endDate.format('YYYY-MM-DD') === this.ranges[range][1].format('YYYY-MM-DD')) {
                            customRange = false;
                            this.chosenRange = this.rangesArray[i];
                            break;
                        }
                    }
                    i++;
                }
            }
            if (customRange) {
                if (this.showCustomRangeLabel) {
                    this.chosenRange = this.locale.customRangeLabel;
                }
                else {
                    this.chosenRange = null;
                }
                this.showCalInRanges = true;
            }
        }
        this.updateElement();
    }
    clickApply(e) {
        var _a;
        if (!this.singleDatePicker && this.startDate && !((_a = this.endDate) === null || _a === void 0 ? void 0 : _a.isValid())) {
            this.endDate = this._getDateWithTime(this.startDate, SideEnum.right);
            this.calculateChosenLabel();
        }
        else {
            debugger;
        }
        if (this.isInvalidDate && this.startDate && this.endDate) {
            let d = this.startDate.clone();
            while (d.isBefore(this.endDate)) {
                if (this.isInvalidDate(d)) {
                    this.endDate = d.subtract(1, 'days');
                    this.calculateChosenLabel();
                    break;
                }
                d = d.add(1, 'days');
            }
        }
        if (this.chosenLabel) {
            this.choosedDate.emit({ chosenLabel: this.chosenLabel, startDate: this.startDate, endDate: this.endDate });
        }
        this.datesUpdated.emit({ startDate: this.startDate, endDate: this.endDate });
        if (e || (this.closeOnAutoApply && !e)) {
            this.hide();
        }
    }
    clickCancel(e) {
        this.startDate = this._old.start;
        this.endDate = this._old.end;
        if (this.inline) {
            this.updateView();
        }
        this.hide();
    }
    monthChanged(monthEvent, side) {
        const year = this.calendarVariables[side].dropdowns.currentYear;
        const month = parseInt(monthEvent.target.value, 10);
        this.monthOrYearChanged(month, year, side);
    }
    yearChanged(yearEvent, side) {
        const month = this.calendarVariables[side].dropdowns.currentMonth;
        const year = parseInt(yearEvent.target.value, 10);
        this.monthOrYearChanged(month, year, side);
    }
    timeChanged(timeEvent, side) {
        let hour = parseInt(this.timepickerVariables[side].selectedHour, 10);
        const minute = parseInt(this.timepickerVariables[side].selectedMinute, 10);
        const second = this.timePickerSeconds ? parseInt(this.timepickerVariables[side].selectedSecond, 10) : 0;
        if (!this.timePicker24Hour) {
            const ampm = this.timepickerVariables[side].ampmModel;
            if (ampm === 'PM' && hour < 12) {
                hour += 12;
            }
            if (ampm === 'AM' && hour === 12) {
                hour = 0;
            }
        }
        if (side === SideEnum.left) {
            const start = this.startDate.clone();
            start.hour(hour);
            start.minute(minute);
            start.second(second);
            this.setStartDate(start);
            if (this.singleDatePicker) {
                this.endDate = this.startDate.clone();
            }
            else if (this.endDate && this.endDate.format('YYYY-MM-DD') === start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) {
                this.setEndDate(start.clone());
            }
            else if (!this.endDate && this.timePicker) {
                const startClone = this._getDateWithTime(start, SideEnum.right);
                if (startClone.isBefore(start)) {
                    this.timepickerVariables[SideEnum.right].selectedHour = hour;
                    this.timepickerVariables[SideEnum.right].selectedMinute = minute;
                    this.timepickerVariables[SideEnum.right].selectedSecond = second;
                }
            }
        }
        else if (this.endDate) {
            const end = this.endDate.clone();
            end.hour(hour);
            end.minute(minute);
            end.second(second);
            this.setEndDate(end);
        }
        this.updateCalendars();
        this.renderTimePicker(SideEnum.left);
        this.renderTimePicker(SideEnum.right);
        if (this.autoApply) {
            this.clickApply();
        }
    }
    monthOrYearChanged(month, year, side) {
        const isLeft = side === SideEnum.left;
        if (!isLeft) {
            if (year < this.startDate.year() || (year === this.startDate.year() && month < this.startDate.month())) {
                month = this.startDate.month();
                year = this.startDate.year();
            }
        }
        if (this.minDate) {
            if (year < this.minDate.year() || (year === this.minDate.year() && month < this.minDate.month())) {
                month = this.minDate.month();
                year = this.minDate.year();
            }
        }
        if (this.maxDate) {
            if (year > this.maxDate.year() || (year === this.maxDate.year() && month > this.maxDate.month())) {
                month = this.maxDate.month();
                year = this.maxDate.year();
            }
        }
        this.calendarVariables[side].dropdowns.currentYear = year;
        this.calendarVariables[side].dropdowns.currentMonth = month;
        if (isLeft) {
            this.leftCalendar.month.month(month).year(year);
            if (this.linkedCalendars) {
                this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');
            }
        }
        else {
            this.rightCalendar.month.month(month).year(year);
            if (this.linkedCalendars) {
                this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');
            }
        }
        this.updateCalendars();
    }
    clickPrev(side) {
        if (side === SideEnum.left) {
            this.leftCalendar.month = this.leftCalendar.month.subtract(1, 'month');
            if (this.linkedCalendars) {
                this.rightCalendar.month = this.rightCalendar.month.subtract(1, 'month');
            }
        }
        else {
            this.rightCalendar.month = this.rightCalendar.month.subtract(1, 'month');
        }
        this.updateCalendars();
    }
    clickNext(side) {
        if (side === SideEnum.left) {
            this.leftCalendar.month = this.leftCalendar.month.add(1, 'month');
        }
        else {
            this.rightCalendar.month = this.rightCalendar.month.add(1, 'month');
            if (this.linkedCalendars) {
                this.leftCalendar.month = this.leftCalendar.month.add(1, 'month');
            }
        }
        this.updateCalendars();
    }
    hoverDate(e, side, row, col) {
        const leftCalDate = this.calendarVariables.left.calendar[row][col];
        const rightCalDate = this.calendarVariables.right.calendar[row][col];
        if (this.pickingDate) {
            this.nowHoveredDate = side === SideEnum.left ? leftCalDate : rightCalDate;
            this.renderCalendar(SideEnum.left);
            this.renderCalendar(SideEnum.right);
        }
        const tooltip = side === SideEnum.left ? this.tooltiptext[leftCalDate] : this.tooltiptext[rightCalDate];
        if (tooltip.length > 0) {
            e.target.setAttribute('title', tooltip);
        }
    }
    clickDate(e, side, row, col) {
        if (e.target.tagName === 'TD') {
            if (!e.target.classList.contains('available')) {
                return;
            }
        }
        else if (e.target.tagName === 'SPAN') {
            if (!e.target.parentElement.classList.contains('available')) {
                return;
            }
        }
        if (this.rangesArray.length) {
            this.chosenRange = this.locale.customRangeLabel;
        }
        let date = side === SideEnum.left ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];
        if ((this.endDate || (date.isBefore(this.startDate, 'day')
            && this.customRangeDirection === false)) && this.lockStartDate === false) {
            if (this.timePicker) {
                date = this._getDateWithTime(date, SideEnum.left);
            }
            this.endDate = null;
            this.setStartDate(date.clone());
        }
        else if (!this.endDate && date.isBefore(this.startDate) && this.customRangeDirection === false) {
            this.setEndDate(this.startDate.clone());
        }
        else {
            if (this.timePicker) {
                date = this._getDateWithTime(date, SideEnum.right);
            }
            if (date.isBefore(this.startDate, 'day') === true && this.customRangeDirection === true) {
                this.setEndDate(this.startDate);
                this.setStartDate(date.clone());
            }
            else {
                this.setEndDate(date.clone());
            }
            if (this.autoApply) {
                this.calculateChosenLabel();
            }
        }
        if (this.singleDatePicker) {
            this.setEndDate(this.startDate);
            this.updateElement();
            if (this.autoApply) {
                this.clickApply();
            }
        }
        this.updateView();
        if (this.autoApply && this.startDate && this.endDate) {
            this.clickApply();
        }
        e.stopPropagation();
    }
    clickRange(e, label) {
        this.chosenRange = label;
        if (label === this.locale.customRangeLabel) {
            this.isShown = true;
            this.showCalInRanges = true;
        }
        else {
            const dates = this.ranges[label];
            this.startDate = dates[0].clone();
            this.endDate = dates[1].clone();
            if (this.showRangeLabelOnInput && label !== this.locale.customRangeLabel) {
                this.chosenLabel = label;
            }
            else {
                this.calculateChosenLabel();
            }
            this.showCalInRanges = (!this.rangesArray.length) || this.alwaysShowCalendars;
            if (!this.timePicker) {
                this.startDate.startOf('day');
                this.endDate.endOf('day');
            }
            if (!this.alwaysShowCalendars) {
                this.isShown = false;
            }
            this.rangeClicked.emit({ label: label, dates: dates });
            if (!this.keepCalendarOpeningWithRange || this.autoApply) {
                this.clickApply();
            }
            else {
                if (!this.alwaysShowCalendars) {
                    return this.clickApply();
                }
                if (this.maxDate && this.maxDate.isSame(dates[0], 'month')) {
                    this.rightCalendar.month.month(dates[0].month());
                    this.rightCalendar.month.year(dates[0].year());
                    this.leftCalendar.month.month(dates[0].month() - 1);
                    this.leftCalendar.month.year(dates[1].year());
                }
                else {
                    this.leftCalendar.month.month(dates[0].month());
                    this.leftCalendar.month.year(dates[0].year());
                    const nextMonth = dates[0].clone().add(1, 'month');
                    this.rightCalendar.month.month(nextMonth.month());
                    this.rightCalendar.month.year(nextMonth.year());
                }
                this.updateCalendars();
                if (this.timePicker) {
                    this.renderTimePicker(SideEnum.left);
                    this.renderTimePicker(SideEnum.right);
                }
            }
        }
    }
    show(e) {
        if (this.isShown) {
            return;
        }
        this._old.start = this.startDate.clone();
        this._old.end = this.endDate ? this.endDate.clone() : null;
        this.isShown = true;
        this.updateView();
    }
    hide(e) {
        if (!this.isShown) {
            return;
        }
        if (!this.endDate) {
            if (this._old.start) {
                this.startDate = this._old.start.clone();
            }
            if (this._old.end) {
                this.endDate = this._old.end.clone();
            }
        }
        if (!this.startDate.isSame(this._old.start) || !this.endDate.isSame(this._old.end)) {
        }
        this.updateElement();
        this.isShown = false;
        this._ref.detectChanges();
    }
    handleInternalClick(e) {
        e.stopPropagation();
    }
    updateLocale(locale) {
        for (const key in locale) {
            if (locale.hasOwnProperty(key)) {
                this.locale[key] = locale[key];
                if (key === 'customRangeLabel') {
                    this.renderRanges();
                }
            }
        }
    }
    clear() {
        this.startDate = dayjs().startOf('day');
        this.endDate = dayjs().endOf('day');
        this.choosedDate.emit({ chosenLabel: '', startDate: null, endDate: null });
        this.datesUpdated.emit({ startDate: null, endDate: null });
        this.hide();
    }
    disableRange(range) {
        if (range === this.locale.customRangeLabel) {
            return false;
        }
        const rangeMarkers = this.ranges[range];
        const areBothBefore = rangeMarkers.every(date => {
            if (!this.minDate) {
                return false;
            }
            return date.isBefore(this.minDate);
        });
        const areBothAfter = rangeMarkers.every(date => {
            if (!this.maxDate) {
                return false;
            }
            return date.isAfter(this.maxDate);
        });
        return (areBothBefore || areBothAfter);
    }
    _getDateWithTime(date, side) {
        var _a;
        if (!((_a = this.timepickerVariables[side]) === null || _a === void 0 ? void 0 : _a.selectedHour))
            return date;
        let hour = parseInt(this.timepickerVariables[side].selectedHour, 10);
        if (!this.timePicker24Hour) {
            const ampm = this.timepickerVariables[side].ampmModel;
            if (ampm === 'PM' && hour < 12) {
                hour += 12;
            }
            if (ampm === 'AM' && hour === 12) {
                hour = 0;
            }
        }
        const minute = parseInt(this.timepickerVariables[side].selectedMinute, 10);
        const second = this.timePickerSeconds ? parseInt(this.timepickerVariables[side].selectedSecond, 10) : 0;
        return date.clone().hour(hour).minute(minute).second(second);
    }
    _buildLocale() {
        this.locale = Object.assign(Object.assign({}, this._localeService.config), this.locale);
        if (!this.locale.format) {
            if (this.timePicker) {
                this.locale.format = dayjs().localeData().longDateFormat('lll');
            }
            else {
                this.locale.format = dayjs().localeData().longDateFormat('L');
            }
        }
    }
    _buildCells(calendar, side) {
        for (let row = 0; row < 6; row++) {
            this.calendarVariables[side].classes[row] = {};
            const rowClasses = [];
            if (this.emptyWeekRowClass &&
                Array.from(Array(7).keys()).some(i => calendar[row][i].month() !== this.calendarVariables[side].month)) {
                rowClasses.push(this.emptyWeekRowClass);
            }
            for (let col = 0; col < 7; col++) {
                const classes = [];
                if (this.emptyWeekColumnClass) {
                    if (calendar[row][col].month() !== this.calendarVariables[side].month) {
                        classes.push(this.emptyWeekColumnClass);
                    }
                }
                if (calendar[row][col].isSame(new Date(), 'day')) {
                    classes.push('today');
                }
                if (calendar[row][col].isoWeekday() > 5) {
                    classes.push('weekend');
                }
                if (calendar[row][col].month() !== calendar[1][1].month()) {
                    classes.push('off');
                    if (this.lastDayOfPreviousMonthClass && (calendar[row][col].month() < calendar[1][1].month() ||
                        calendar[1][1].month() === 0) && calendar[row][col].date() === this.calendarVariables[side].daysInLastMonth) {
                        classes.push(this.lastDayOfPreviousMonthClass);
                    }
                    if (this.firstDayOfNextMonthClass && (calendar[row][col].month() > calendar[1][1].month() ||
                        calendar[row][col].month() === 0) && calendar[row][col].date() === 1) {
                        classes.push(this.firstDayOfNextMonthClass);
                    }
                }
                if (this.firstMonthDayClass && calendar[row][col].month() === calendar[1][1].month() &&
                    calendar[row][col].date() === calendar.firstDay.date()) {
                    classes.push(this.firstMonthDayClass);
                }
                if (this.lastMonthDayClass && calendar[row][col].month() === calendar[1][1].month() &&
                    calendar[row][col].date() === calendar.lastDay.date()) {
                    classes.push(this.lastMonthDayClass);
                }
                if (this.minDate && calendar[row][col].isBefore(this.minDate, 'day')) {
                    classes.push('off', 'disabled');
                }
                if (this.calendarVariables[side].maxDate && calendar[row][col].isAfter(this.calendarVariables[side].maxDate, 'day')) {
                    classes.push('off', 'disabled');
                }
                if (this.isInvalidDate(calendar[row][col])) {
                    classes.push('off', 'disabled', 'invalid');
                }
                if (this.startDate && calendar[row][col].format('YYYY-MM-DD') === this.startDate.format('YYYY-MM-DD')) {
                    classes.push('active', 'start-date');
                }
                if (this.endDate != null && calendar[row][col].format('YYYY-MM-DD') === this.endDate.format('YYYY-MM-DD')) {
                    classes.push('active', 'end-date');
                }
                if (((this.nowHoveredDate != null && this.pickingDate) || this.endDate != null) &&
                    (calendar[row][col] > this.startDate &&
                        (calendar[row][col] < this.endDate || (calendar[row][col] < this.nowHoveredDate && this.pickingDate))) &&
                    (!classes.find(el => el === 'off'))) {
                    classes.push('in-range');
                }
                const isCustom = this.isCustomDate(calendar[row][col]);
                if (isCustom !== false) {
                    if (typeof isCustom === 'string') {
                        classes.push(isCustom);
                    }
                    else {
                        Array.prototype.push.apply(classes, isCustom);
                    }
                }
                const isTooltip = this.isTooltipDate(calendar[row][col]);
                if (isTooltip) {
                    if (typeof isTooltip === 'string') {
                        this.tooltiptext[calendar[row][col]] = isTooltip;
                    }
                    else {
                        this.tooltiptext[calendar[row][col]] = 'Put the tooltip as the returned value of isTooltipDate';
                    }
                }
                else {
                    this.tooltiptext[calendar[row][col]] = '';
                }
                let cname = '', disabled = false;
                for (let i = 0; i < classes.length; i++) {
                    cname += classes[i] + ' ';
                    if (classes[i] === 'disabled') {
                        disabled = true;
                    }
                }
                if (!disabled) {
                    cname += 'available';
                }
                this.calendarVariables[side].classes[row][col] = cname.replace(/^\s+|\s+$/g, '');
            }
            this.calendarVariables[side].classes[row].classList = rowClasses.join(' ');
        }
    }
}
DaterangepickerComponent.ɵfac = function DaterangepickerComponent_Factory(t) { return new (t || DaterangepickerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.LocaleService)); };
DaterangepickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DaterangepickerComponent, selectors: [["ngx-daterangepicker-material"]], viewQuery: function DaterangepickerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pickerContainer = _t.first);
    } }, hostBindings: function DaterangepickerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function DaterangepickerComponent_click_HostBindingHandler($event) { return ctx.handleInternalClick($event); });
    } }, inputs: { startDate: "startDate", endDate: "endDate", dateLimit: "dateLimit", minDate: "minDate", maxDate: "maxDate", autoApply: "autoApply", singleDatePicker: "singleDatePicker", showDropdowns: "showDropdowns", showWeekNumbers: "showWeekNumbers", showISOWeekNumbers: "showISOWeekNumbers", linkedCalendars: "linkedCalendars", autoUpdateInput: "autoUpdateInput", alwaysShowCalendars: "alwaysShowCalendars", maxSpan: "maxSpan", lockStartDate: "lockStartDate", timePicker: "timePicker", timePicker24Hour: "timePicker24Hour", timePickerIncrement: "timePickerIncrement", timePickerSeconds: "timePickerSeconds", showClearButton: "showClearButton", firstMonthDayClass: "firstMonthDayClass", lastMonthDayClass: "lastMonthDayClass", emptyWeekRowClass: "emptyWeekRowClass", emptyWeekColumnClass: "emptyWeekColumnClass", firstDayOfNextMonthClass: "firstDayOfNextMonthClass", lastDayOfPreviousMonthClass: "lastDayOfPreviousMonthClass", locale: "locale", ranges: "ranges", showCustomRangeLabel: "showCustomRangeLabel", showCancel: "showCancel", keepCalendarOpeningWithRange: "keepCalendarOpeningWithRange", showRangeLabelOnInput: "showRangeLabelOnInput", customRangeDirection: "customRangeDirection", drops: "drops", opens: "opens", closeOnAutoApply: "closeOnAutoApply", isInvalidDate: "isInvalidDate", isCustomDate: "isCustomDate", isTooltipDate: "isTooltipDate" }, outputs: { choosedDate: "choosedDate", rangeClicked: "rangeClicked", datesUpdated: "datesUpdated", startDateChanged: "startDateChanged", endDateChanged: "endDateChanged" }, features: [i0.ɵɵProvidersFeature([{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => DaterangepickerComponent),
                multi: true
            }])], decls: 8, vars: 15, consts: [[1, "md-drppicker", 3, "ngClass"], ["pickerContainer", ""], [1, "ranges"], [4, "ngFor", "ngForOf"], ["class", "calendar", 3, "ngClass", 4, "ngIf"], ["class", "calendar right", 4, "ngIf"], ["class", "buttons", 4, "ngIf"], ["type", "button", 3, "disabled", "ngClass", "click"], [1, "calendar", 3, "ngClass"], [1, "calendar-table"], ["class", "table-condensed", 4, "ngIf"], ["class", "calendar-time", 4, "ngIf"], [1, "table-condensed"], [4, "ngIf"], ["colspan", "5", 1, "month", "drp-animate"], [1, "week-days"], ["class", "week", 4, "ngIf"], [1, "drp-animate"], [3, "class", 4, "ngFor", "ngForOf"], [1, "prev", "available", 3, "click"], [1, "dropdowns"], [1, "monthselect", 3, "change"], [3, "disabled", "value", "selected", 4, "ngFor", "ngForOf"], [1, "yearselect", 3, "change"], [3, "selected", 4, "ngFor", "ngForOf"], [3, "disabled", "value", "selected"], [3, "selected"], [1, "next", "available", 3, "click"], [1, "week"], [3, "class", "click", "mouseenter", 4, "ngFor", "ngForOf"], [3, "click", "mouseenter"], [1, "calendar-time"], [1, "select"], [1, "hourselect", "select-item", 3, "disabled", "ngModel", "ngModelChange"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [1, "select-item", "minuteselect", 3, "disabled", "ngModel", "ngModelChange"], [1, "select-highlight"], [1, "select-bar"], ["class", "select-item secondselect", 3, "disabled", "ngModel", "ngModelChange", 4, "ngIf"], ["class", "select-item ampmselect", 3, "ngModel", "ngModelChange", 4, "ngIf"], [3, "value", "disabled"], [1, "select-item", "secondselect", 3, "disabled", "ngModel", "ngModelChange"], [1, "select-item", "ampmselect", 3, "ngModel", "ngModelChange"], ["value", "AM", 3, "disabled"], ["value", "PM", 3, "disabled"], [1, "calendar", "right"], ["colspan", "5", 1, "month"], [1, "select-item", "hourselect", 3, "disabled", "ngModel", "ngModelChange"], [1, "buttons"], [1, "buttons_input"], ["class", "btn btn-default clear", "type", "button", 3, "title", "click", 4, "ngIf"], ["class", "btn btn-default", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", 3, "disabled", "click"], ["type", "button", 1, "btn", "btn-default", "clear", 3, "title", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "30", "height", "30", "viewBox", "0 -5 24 24"], ["d", "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"], ["type", "button", 1, "btn", "btn-default", 3, "click"]], template: function DaterangepickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "ul");
        i0.ɵɵtemplate(4, DaterangepickerComponent_li_4_Template, 3, 5, "li", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, DaterangepickerComponent_div_5_Template, 4, 6, "div", 4);
        i0.ɵɵtemplate(6, DaterangepickerComponent_div_6_Template, 4, 2, "div", 5);
        i0.ɵɵtemplate(7, DaterangepickerComponent_div_7_Template, 6, 4, "div", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap("drops-" + ctx.drops + "-" + ctx.opens);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction7(7, _c3, ctx.locale.direction === "ltr", ctx.locale.direction === "rtl", ctx.isShown || ctx.inline, !ctx.isShown && !ctx.inline, ctx.inline, !ctx.singleDatePicker && ctx.showCalInRanges, ctx.rangesArray.length));
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.rangesArray);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showCalInRanges);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showCalInRanges && !ctx.singleDatePicker);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.autoApply && (!ctx.rangesArray.length || ctx.showCalInRanges && !ctx.singleDatePicker));
    } }, directives: [i2.NgClass, i2.NgForOf, i2.NgIf, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgModel], styles: ["/*\n*  variables\n*/\n$md-drppicker-color:                      inherit !default;\n$md-drppicker-bg-color:                   #fff !default;\n\n$md-drppicker-cell-color:                 $md-drppicker-color !default;\n$md-drppicker-cell-border-color:          transparent !default;\n$md-drppicker-cell-bg-color:              $md-drppicker-bg-color !default;\n\n$md-drppicker-cell-hover-color:           $md-drppicker-color !default;\n$md-drppicker-cell-hover-border-color:    $md-drppicker-cell-border-color !default;\n$md-drppicker-cell-hover-bg-color:        #eee !default;\n\n$md-drppicker-in-range-color:             #000 !default;\n$md-drppicker-in-range-border-color:      transparent !default;\n$md-drppicker-in-range-bg-color:          #dde2e4 !default;\n\n$md-drppicker-active-color:               #fff !default;\n$md-drppicker-active-bg-color:            #3f51b5 !default;\n$md-drppicker-active-border-color:        transparent !default;\n\n$md-drppicker-unselected-color:           #999 !default;\n$md-drppicker-unselected-border-color:    transparent !default;\n$md-drppicker-unselected-bg-color:        #fff !default;\n\n$md-drppicker-width:          278px !default;\n$md-drppicker-width-double:          auto !default;\n$md-drppicker-border-color:   #ccc !default;\n\n$md-drppicker-calendar-margin:              4px !default;\n$md-drppicker-calendar-bg-color:            $md-drppicker-bg-color !default;\n\n$md-drppicker-calendar-border-size:         1px !default;\n$md-drppicker-calendar-border-color:        $md-drppicker-bg-color !default;\n$md-drppicker-calendar-border-radius:       4px !default;\n\n$md-drppicker-cell-size:           20px !default;\n$md-drppicker-cell-width:          $md-drppicker-cell-size !default;\n$md-drppicker-cell-height:         $md-drppicker-cell-size !default;\n\n$md-drppicker-cell-border-radius:  $md-drppicker-calendar-border-radius !default;\n$md-drppicker-cell-border-size:    1px !default;\n\n$md-drppicker-control-height:               30px !default;\n$md-drppicker-control-line-height:          $md-drppicker-control-height !default;\n$md-drppicker-control-color:                #555 !default;\n\n$md-drppicker-control-border-size:          1px !default;\n$md-drppicker-control-border-color:         #ccc !default;\n$md-drppicker-control-border-radius:        4px !default;\n\n$md-drppicker-control-active-border-size:   1px !default;\n$md-drppicker-control-active-border-color:  #08c !default;\n$md-drppicker-control-active-border-radius: $md-drppicker-control-border-radius !default;\n\n$md-drppicker-control-disabled-color:       #ccc !default;\n// Select\n$select-border: 1px solid #f2f2f2 !default;\n$select-background: rgba(255, 255, 255, 0.90) !default;\n$select-padding: 5px !default;\n$select-radius: 2px !default;\n$input-height: 3rem !default;\n/*\n* styles\n*/\n.md-drppicker {\n  position: absolute;\n  font-family: Roboto, sans-serif;\n  color: $md-drppicker-color;\n  background-color: $md-drppicker-bg-color;\n  border-radius: 4px;\n  width: $md-drppicker-width;\n  padding: 4px;\n  margin-top: -10px;\n  overflow: hidden;\n  z-index: 1000;\n  font-size: 14px;\n  background-color: #ffffff;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 8px 0 rgba(0, 0, 0, 0.12);\n  &.double {\n    width: $md-drppicker-width-double;\n  }\n  &.inline {\n    position: relative;\n    display: inline-block;\n  }\n\n  &:before, &:after {\n    position: absolute;\n    display: inline-block;\n\n    border-bottom-color: rgba(0, 0, 0, 0.2);\n    content: '';\n  }\n\n\n\n  &.openscenter {\n    &:before {\n      left: 0;\n      right: 0;\n      width: 0;\n      margin-left: auto;\n      margin-right: auto;\n    }\n\n    &:after {\n      left: 0;\n      right: 0;\n      width: 0;\n      margin-left: auto;\n      margin-right: auto;\n    }\n  }\n\n  &.single {\n    .ranges, .calendar {\n      float: none;\n    }\n  }\n\n  &.shown {\n    transform: scale(1);\n    transition: all 0.1s ease-in-out;\n    transform-origin: 0 0;\n    -webkit-touch-callout: none;\n      -webkit-user-select: none;\n        -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n    &.drops-up-left {\n      transform-origin: 100% 100%;\n    }\n    &.drops-up-right {\n      transform-origin: 0 100%;\n    }\n    &.drops-down-left {\n      transform-origin: 100% 0;\n    }\n    &.drops-down-right {\n      transform-origin: 0 0;\n    }\n    &.drops-down-center {\n      transform-origin: 50%% 0;\n    }\n    &.drops-up-center {\n      transform-origin: 50%% 100%;\n    }\n    .calendar {\n      display: block;\n    }\n  }\n  &.hidden {\n    transition: all 0.1s ease;\n    transform: scale(0);\n    transform-origin: 0 0;\n    cursor: default;\n    -webkit-touch-callout: none;\n      -webkit-user-select: none;\n        -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n    &.drops-up-left {\n      transform-origin: 100% 100%;\n    }\n    &.drops-up-right {\n      transform-origin: 0 100%;\n    }\n    &.drops-down-left {\n      transform-origin: 100% 0;\n    }\n    &.drops-down-right {\n      transform-origin: 0 0;\n    }\n    &.drops-down-center {\n      transform-origin: 50% 0;\n    }\n    &.drops-up-center {\n      transform-origin: 50% 100%;\n    }\n    \n    .calendar {\n      display: none;\n    }\n  }\n\n  .calendar {\n    /* display: none; */\n    max-width: $md-drppicker-width - ($md-drppicker-calendar-margin * 2);\n    margin: $md-drppicker-calendar-margin;\n\n    &.single {\n      .calendar-table {\n        border: none;\n      }\n    }\n\n    th, td {\n      padding: 0;\n      white-space: nowrap;\n      text-align: center;\n      min-width: 32px;\n      span {\n        pointer-events: none;\n      }\n    }\n  }\n\n  .calendar-table {\n    border: $md-drppicker-calendar-border-size solid $md-drppicker-calendar-border-color;\n    padding: $md-drppicker-calendar-margin;\n    border-radius: $md-drppicker-calendar-border-radius;\n    background-color: $md-drppicker-calendar-bg-color;\n  }\n\n  table {\n    width: 100%;\n    margin: 0;\n  }\n  th {\n    color: #988c8c;\n  }\n  td, th {\n    text-align: center;\n    width: $md-drppicker-cell-width;\n    height: $md-drppicker-cell-height;\n    border-radius: $md-drppicker-cell-border-radius;\n    border: $md-drppicker-cell-border-size solid $md-drppicker-cell-border-color;\n    white-space: nowrap;\n    cursor: pointer;\n    height: 2em;\n    width: 2em;\n\n    &.available {\n      &.prev {\n        display: block;\n        background-image: url(\"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMy43IDYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMuNyA2IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0zLjcsMC43TDEuNCwzbDIuMywyLjNMMyw2TDAsM2wzLTNMMy43LDAuN3oiLz4NCjwvZz4NCjwvc3ZnPg0K\");\n        background-repeat: no-repeat;\n        background-size: .5em;\n        background-position: center;\n        opacity: .8;\n        transition: background-color .2s ease;\n        border-radius: 2em;\n        &:hover {\n          margin: 0;\n        }\n      }\n      &.next {\n        transform: rotate(180deg);\n        display: block;\n        background-image: url(\"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMy43IDYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMuNyA2IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0zLjcsMC43TDEuNCwzbDIuMywyLjNMMyw2TDAsM2wzLTNMMy43LDAuN3oiLz4NCjwvZz4NCjwvc3ZnPg0K\");\n        background-repeat: no-repeat;\n        background-size: .5em;\n        background-position: center;\n        opacity: .8;\n        transition: background-color .2s ease;\n        border-radius: 2em;\n        &:hover {\n          margin: 0;\n          transform: rotate(180deg);\n        }\n      }\n      &:hover {\n        background-color: $md-drppicker-cell-hover-bg-color;\n        border-color: $md-drppicker-cell-hover-border-color;\n        color: $md-drppicker-cell-hover-color;\n        background-repeat: no-repeat;\n        background-size: .5em;\n        background-position: center;\n        margin: .25em 0;\n        opacity: .8;\n        /*transition: background-color .2s ease;*/\n        border-radius: 2em;\n\n        transform: scale(1);\n        transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n\n      }\n    }\n\n    &.week {\n      font-size: 80%;\n      color: #ccc;\n    }\n  }\n\n  td {\n        margin: .25em 0;\n        opacity: .8;\n        transition: background-color .2s ease;\n        border-radius: 2em;\n        transform: scale(1);\n        transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n    &.off {\n      &, &.in-range, &.start-date, &.end-date {\n        background-color: $md-drppicker-unselected-bg-color;\n        border-color: $md-drppicker-unselected-border-color;\n        color: $md-drppicker-unselected-color;\n      }\n    }\n\n    //\n    // Date Range\n    &.in-range {\n      background-color: $md-drppicker-in-range-bg-color;\n      border-color: $md-drppicker-in-range-border-color;\n      color: $md-drppicker-in-range-color;\n\n      // TODO: Should this be static or should it be parameterized?\n      border-radius: 0;\n    }\n\n    &.start-date {\n      border-radius: 2em 0 0 2em;\n    }\n\n    &.end-date {\n      border-radius: 0 2em 2em 0;\n    }\n\n    &.start-date.end-date {\n      border-radius: $md-drppicker-cell-border-radius;\n    }\n\n    &.active {\n      transition: background 300ms ease-out;\n      background: rgba(0, 0, 0, 0.1);\n      &, &:hover {\n        background-color: $md-drppicker-active-bg-color;\n        border-color: $md-drppicker-active-border-color;\n        color: $md-drppicker-active-color;\n      }\n    }\n  }\n\n  th {\n    &.month {\n      width: auto;\n    }\n  }\n\n  // disabled controls\n  td, option {\n    &.disabled {\n      color: #999;\n      cursor: not-allowed;\n      text-decoration: line-through;\n    }\n  }\n\n  .dropdowns {\n    background-repeat: no-repeat;\n    background-size: 10px;\n    background-position-y: center;\n    background-position-x: right;\n    width: 50px;\n    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDI1NSAyNTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1NSAyNTU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iYXJyb3ctZHJvcC1kb3duIj4KCQk8cG9seWdvbiBwb2ludHM9IjAsNjMuNzUgMTI3LjUsMTkxLjI1IDI1NSw2My43NSAgICIgZmlsbD0iIzk4OGM4YyIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=);\n    select {\n      display: inline-block;\n      background-color: $select-background;\n      width: 100%;\n      padding: $select-padding;\n      border: $select-border;\n      border-radius: $select-radius;\n      height: $input-height;\n      &.monthselect, &.yearselect {\n        font-size: 12px;\n        padding: 1px;\n        height: auto;\n        margin: 0;\n        cursor: default;\n      }\n      &.hourselect, \n      &.minuteselect,\n      &.secondselect,\n      &.ampmselect {\n        width: 50px;\n        margin: 0 auto;\n        background: #eee;\n        border: 1px solid #eee;\n        padding: 2px;\n        outline: 0;\n        font-size: 12px;\n      }\n\n      &.monthselect,\n      &.yearselect {\n        cursor: pointer;\n        opacity: 0;\n        position: absolute; \n        top: 0; \n        left: 0; \n        margin: 0;\n        padding: 0;\n      }\n    }\n  }\n\n  th.month > div {\n    position: relative; \n    display: inline-block;\n  }\n\n  .calendar-time {\n    text-align: center;\n    margin: 4px auto 0 auto;\n    line-height: 30px;\n    position: relative;\n    .select {\n      display: inline;\n      .select-item {\n        display: inline-block;\n        width: auto;\n        position: relative;\n        font-family: inherit;\n        background-color: transparent;\n        padding: 10px 10px 10px 0;\n        font-size: 18px;\n        border-radius: 0;\n        border: none;\n        border-bottom: 1px solid rgba(0,0,0, 0.12);\n        /* Remove focus */\n        &:after {\n          position: absolute;\n          top: 18px;\n          right: 10px;\n          /* Styling the down arrow */\n          width: 0;\n          height: 0;\n          padding: 0;\n          content: '';\n          border-left: 6px solid transparent;\n          border-right: 6px solid transparent;\n          border-top: 6px solid rgba(0, 0, 0, 0.12);\n          pointer-events: none;\n        }\n        &:focus {\n          outline: none;\n        }\n        .select-label {\n          color: rgba(0,0,0, 0.26);\n          font-size: 16px;\n          font-weight: normal;\n          position: absolute;\n          pointer-events: none;\n          left: 0;\n          top: 10px;\n          transition: 0.2s ease all;\n        }\n      }\n    }\n  }\n  \n  .calendar-time select.disabled {\n    color: #ccc;\n    cursor: not-allowed;\n  }\n\n  .label-input {\n    border: $md-drppicker-control-border-size solid $md-drppicker-control-border-color;\n    border-radius: $md-drppicker-control-border-radius;\n    color: $md-drppicker-control-color;\n    height: $md-drppicker-control-line-height;\n    line-height: $md-drppicker-control-height;\n    display: block;\n    vertical-align: middle;\n    margin: 0 auto 5px auto;\n    padding: 0 0 0 28px;\n    width: 100%;\n\n    &.active {\n      border: $md-drppicker-control-active-border-size solid $md-drppicker-control-active-border-color;\n      border-radius: $md-drppicker-control-active-border-radius;\n    }\n  }\n\n  .md-drppicker_input {\n    position: relative;\n    padding: 0 30px 0 0;\n\n    i, svg {\n      position: absolute;\n      left: 8px;\n      top: 8px;\n    }\n  }\n  &.rtl {\n    .label-input {\n      padding-right: 28px;\n      padding-left: 6px;\n    }\n    .md-drppicker_input i,  .md-drppicker_input svg{\n      left: auto;\n      right: 8px;\n    }\n  }\n  /* ranges */\n  .show-ranges {\n    .drp-calendar.left {\n      border-left: 1px solid #ddd;\n    }\n  }\n\n  .ranges {\n    float: none;\n    text-align: left;\n    margin: 0;\n    ul {\n      list-style: none;\n      margin: 0 auto;\n      padding: 0;\n      width: 100%;\n      li {\n        font-size: 12px;\n        button {\n          padding: 8px 12px;\n          width: 100%;\n          background: none;\n          border: none;\n          text-align: left;\n          cursor: pointer;\n          &.active {\n            background-color: #3f51b5;\n            color: #fff;\n          }\n          &[disabled] {\n            opacity: 0.3;\n          }\n          &:active {\n            background: transparent;\n          }\n        }\n      }\n      li:hover {\n        background-color: #eee;\n      }\n    }\n  }\n\n  .show-calendar {\n    .ranges {\n      margin-top: 8px;\n    }\n  }\n    \n  [hidden] {\n    display: none;\n  }\n\n  /* button */\n  .buttons {\n    text-align: right;\n    margin: 0 5px 5px 0;\n  }\n  .btn {\n    position: relative;\n    overflow: hidden;\n    border-width: 0;\n    outline: none;\n    padding: 0px 6px;\n    cursor: pointer;\n    border-radius: 2px;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\n    background-color: #3f51b5;\n    color: #ecf0f1;\n    transition: background-color .4s;\n    height: auto;\n    text-transform: uppercase;\n    line-height: 36px;\n    border: none;\n    &:hover, &:focus {\n      background-color: #3f51b5;\n    }\n    & > * {\n      position: relative;\n    }\n    & span {\n      display: block;\n      padding: 12px 24px;\n    }\n    &:before {\n      content: \"\";\n      position: absolute;\n      top: 50%;\n      left: 50%;\n\n      display: block;\n      width: 0;\n      padding-top: 0;\n      border-radius: 100%;\n      background-color: rgba(236, 240, 241, .3);\n      -webkit-transform: translate(-50%, -50%);\n      -moz-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n      -o-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n    }\n    &:active {\n      &:before {\n        width: 120%;\n        padding-top: 120%;\n        transition: width .2s ease-out, padding-top .2s ease-out;\n      }\n    }\n    &:disabled {\n      opacity:0.5;\n    }\n    &.btn-default {\n      color: black;\n      background-color: gainsboro;\n    }\n  }\n  .clear {\n    box-shadow: none;\n    background-color: #ffffff !important;\n    svg {\n      color: #eb3232;\n      fill: currentColor;\n    }\n  }\n}\n\n@media (min-width: 564px) {\n  .md-drppicker {\n    width: auto;\n\n    &.single {\n      .calendar.left {\n        clear: none;\n      }\n    }\n\n    &.ltr {\n      direction: ltr;\n      text-align: left;\n      .calendar{\n        &.left {\n          clear: left;\n          /*margin-right: 1.5em;*/\n\n          .calendar-table {\n            border-right: none;\n            border-top-right-radius: 0;\n            border-bottom-right-radius: 0;\n          }\n        }\n\n        &.right {\n          margin-left: 0;\n\n          .calendar-table {\n            border-left: none;\n            border-top-left-radius: 0;\n            border-bottom-left-radius: 0;\n          }\n        }\n      }\n\n      .left .md-drppicker_input {\n        padding-right: 35px;\n      }\n      .right .md-drppicker_input {\n        padding-right: 35px;\n      }\n\n      .calendar.left .calendar-table {\n        padding-right: 12px;\n      }\n\n      .ranges, .calendar {\n        float: left;\n      }\n    }\n    &.rtl {\n      direction: rtl;\n      text-align: right;\n      .calendar{\n        &.left {\n          clear: right;\n          margin-left: 0;\n\n          .calendar-table {\n            border-left: none;\n            border-top-left-radius: 0;\n            border-bottom-left-radius: 0;\n          }\n        }\n\n        &.right {\n          margin-right: 0;\n\n          .calendar-table {\n            border-right: none;\n            border-top-right-radius: 0;\n            border-bottom-right-radius: 0;\n          }\n        }\n      }\n\n      .left .md-drppicker_input {\n        padding-left: 12px;\n      }\n\n      .calendar.left .calendar-table {\n        padding-left: 12px;\n      }\n\n      .ranges, .calendar {\n        text-align: right;\n        float: right;\n      }\n    }\n  }\n  .drp-animate {\n    transform: translate(0);\n    transition: transform .2s ease,\n                opacity .2s ease;\n\n    &.drp-picker-site-this {\n      transition-timing-function: linear;\n    }\n\n    &.drp-animate-right {\n      transform: translateX(10%);\n      opacity: 0;\n    }\n\n    &.drp-animate-left {\n      transform: translateX(-10%);\n      opacity: 0;\n    }\n  }\n}\n\n@media (min-width: 730px) {\n  .md-drppicker {\n    .ranges {\n      width: auto;\n    }\n    &.ltr {\n      .ranges {\n        float: left;\n      }\n    }\n    &.rtl {\n      .ranges {\n        float: right;\n      }\n    }\n\n    .calendar.left {\n      clear: none !important;\n    }\n  }\n}\n\n"], encapsulation: 2 });
(function () { i0.ɵsetClassMetadata(DaterangepickerComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-daterangepicker-material',
                styleUrls: ['./daterangepicker.component.scss'],
                templateUrl: './daterangepicker.component.html',
                host: {
                    '(click)': 'handleInternalClick($event)',
                },
                encapsulation: ViewEncapsulation.None,
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => DaterangepickerComponent),
                        multi: true
                    }]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.LocaleService }]; }, { startDate: [{
            type: Input
        }], endDate: [{
            type: Input
        }], dateLimit: [{
            type: Input
        }], minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], autoApply: [{
            type: Input
        }], singleDatePicker: [{
            type: Input
        }], showDropdowns: [{
            type: Input
        }], showWeekNumbers: [{
            type: Input
        }], showISOWeekNumbers: [{
            type: Input
        }], linkedCalendars: [{
            type: Input
        }], autoUpdateInput: [{
            type: Input
        }], alwaysShowCalendars: [{
            type: Input
        }], maxSpan: [{
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
        }], showClearButton: [{
            type: Input
        }], firstMonthDayClass: [{
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
        }], locale: [{
            type: Input
        }], ranges: [{
            type: Input
        }], showCustomRangeLabel: [{
            type: Input
        }], showCancel: [{
            type: Input
        }], keepCalendarOpeningWithRange: [{
            type: Input
        }], showRangeLabelOnInput: [{
            type: Input
        }], customRangeDirection: [{
            type: Input
        }], drops: [{
            type: Input
        }], opens: [{
            type: Input
        }], closeOnAutoApply: [{
            type: Input
        }], choosedDate: [{
            type: Output
        }], rangeClicked: [{
            type: Output
        }], datesUpdated: [{
            type: Output
        }], startDateChanged: [{
            type: Output
        }], endDateChanged: [{
            type: Output
        }], pickerContainer: [{
            type: ViewChild,
            args: ['pickerContainer', { static: true }]
        }], isInvalidDate: [{
            type: Input
        }], isCustomDate: [{
            type: Input
        }], isTooltipDate: [{
            type: Input
        }] }); })();
