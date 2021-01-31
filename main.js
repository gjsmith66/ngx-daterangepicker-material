(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../src/daterangepicker/daterangepicker.component.ts":
/*!***********************************************************!*\
  !*** ../src/daterangepicker/daterangepicker.component.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var dayjs = __webpack_require__(/*! dayjs */ "../node_modules/dayjs/dayjs.min.js");
var locale_service_1 = __webpack_require__(/*! ./locale.service */ "../src/daterangepicker/locale.service.ts");
var localeData = __webpack_require__(/*! dayjs/plugin/localeData */ "../node_modules/dayjs/plugin/localeData.js");
var LocalizedFormat = __webpack_require__(/*! dayjs/plugin/localizedFormat */ "../node_modules/dayjs/plugin/localizedFormat.js");
var isoWeek = __webpack_require__(/*! dayjs/plugin/isoWeek */ "../node_modules/dayjs/plugin/isoWeek.js");
var i0 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i1 = __webpack_require__(/*! ./locale.service */ "../src/daterangepicker/locale.service.ts");
var i2 = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var i3 = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var _c0 = ["pickerContainer"];
var _c1 = function (a0) { return { "active": a0 }; };
function DaterangepickerComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    var _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelementStart(1, "button", 7);
    i0.ɵɵlistener("click", function DaterangepickerComponent_li_4_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r7); var range_r5 = ctx.$implicit; var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.clickRange($event, range_r5); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var range_r5 = ctx.$implicit;
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r1.disableRange(range_r5))("ngClass", i0.ɵɵpureFunction1(3, _c1, range_r5 === ctx_r1.chosenRange));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(range_r5);
} }
function DaterangepickerComponent_div_5_table_2_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th");
} }
function DaterangepickerComponent_div_5_table_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    var _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "th", 19);
    i0.ɵɵlistener("click", function DaterangepickerComponent_div_5_table_2_ng_container_4_Template_th_click_1_listener() { i0.ɵɵrestoreView(_r21); var ctx_r20 = i0.ɵɵnextContext(3); return ctx_r20.clickPrev(ctx_r20.sideEnum.left); });
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
    var m_r24 = ctx.$implicit;
    var ctx_r22 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", ctx_r22.calendarVariables.left.dropdowns.inMinYear && m_r24 < ctx_r22.calendarVariables.left.minDate.month() || ctx_r22.calendarVariables.left.dropdowns.inMaxYear && m_r24 > ctx_r22.calendarVariables.left.maxDate.month())("value", m_r24)("selected", ctx_r22.calendarVariables.left.dropdowns.currentMonth == m_r24);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r22.locale.monthNames[m_r24], " ");
} }
function DaterangepickerComponent_div_5_table_2_ng_container_7_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var y_r25 = ctx.$implicit;
    var ctx_r23 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("selected", y_r25 === ctx_r23.calendarVariables.left.dropdowns.currentYear);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", y_r25, " ");
} }
function DaterangepickerComponent_div_5_table_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    var _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 20);
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "select", 21);
    i0.ɵɵlistener("change", function DaterangepickerComponent_div_5_table_2_ng_container_7_Template_select_change_3_listener($event) { i0.ɵɵrestoreView(_r27); var ctx_r26 = i0.ɵɵnextContext(3); return ctx_r26.monthChanged($event, ctx_r26.sideEnum.left); });
    i0.ɵɵtemplate(4, DaterangepickerComponent_div_5_table_2_ng_container_7_option_4_Template, 2, 4, "option", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 20);
    i0.ɵɵtext(6);
    i0.ɵɵelementStart(7, "select", 23);
    i0.ɵɵlistener("change", function DaterangepickerComponent_div_5_table_2_ng_container_7_Template_select_change_7_listener($event) { i0.ɵɵrestoreView(_r27); var ctx_r28 = i0.ɵɵnextContext(3); return ctx_r28.yearChanged($event, ctx_r28.sideEnum.left); });
    i0.ɵɵtemplate(8, DaterangepickerComponent_div_5_table_2_ng_container_7_option_8_Template, 2, 2, "option", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r13 = i0.ɵɵnextContext(3);
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
    var ctx_r14 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" ", ctx_r14.locale.monthNames[ctx_r14.calendarVariables == null ? null : ctx_r14.calendarVariables.left == null ? null : ctx_r14.calendarVariables.left.calendar[1][1].month()], " ", ctx_r14.calendarVariables == null ? null : ctx_r14.calendarVariables.left == null ? null : ctx_r14.calendarVariables.left.calendar[1][1].format(" YYYY"), " ");
} }
function DaterangepickerComponent_div_5_table_2_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    var _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "th", 27);
    i0.ɵɵlistener("click", function DaterangepickerComponent_div_5_table_2_ng_container_9_Template_th_click_1_listener() { i0.ɵɵrestoreView(_r30); var ctx_r29 = i0.ɵɵnextContext(3); return ctx_r29.clickNext(ctx_r29.sideEnum.left); });
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
    var ctx_r17 = i0.ɵɵnextContext(3);
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
    var dayofweek_r31 = ctx.$implicit;
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
    var row_r32 = i0.ɵɵnextContext().$implicit;
    var ctx_r33 = i0.ɵɵnextContext(3);
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
    var row_r32 = i0.ɵɵnextContext().$implicit;
    var ctx_r34 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r34.calendarVariables.left.calendar[row_r32][0].isoWeek());
} }
function DaterangepickerComponent_div_5_table_2_tr_15_td_3_Template(rf, ctx) { if (rf & 1) {
    var _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 30);
    i0.ɵɵlistener("click", function DaterangepickerComponent_div_5_table_2_tr_15_td_3_Template_td_click_0_listener($event) { i0.ɵɵrestoreView(_r40); var col_r38 = ctx.$implicit; var row_r32 = i0.ɵɵnextContext().$implicit; var ctx_r39 = i0.ɵɵnextContext(3); return ctx_r39.clickDate($event, ctx_r39.sideEnum.left, row_r32, col_r38); })("mouseenter", function DaterangepickerComponent_div_5_table_2_tr_15_td_3_Template_td_mouseenter_0_listener($event) { i0.ɵɵrestoreView(_r40); var col_r38 = ctx.$implicit; var row_r32 = i0.ɵɵnextContext().$implicit; var ctx_r42 = i0.ɵɵnextContext(3); return ctx_r42.hoverDate($event, ctx_r42.sideEnum.left, row_r32, col_r38); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var col_r38 = ctx.$implicit;
    var row_r32 = i0.ɵɵnextContext().$implicit;
    var ctx_r35 = i0.ɵɵnextContext(3);
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
    var row_r32 = ctx.$implicit;
    var ctx_r19 = i0.ɵɵnextContext(3);
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
    var ctx_r8 = i0.ɵɵnextContext(2);
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
    var i_r49 = ctx.$implicit;
    var ctx_r45 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", i_r49)("disabled", ctx_r45.timepickerVariables.left.disabledHours.indexOf(i_r49) > 0 - 1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i_r49);
} }
function DaterangepickerComponent_div_5_div_3_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var i_r50 = ctx.$implicit;
    var index_r51 = ctx.index;
    var ctx_r46 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", i_r50)("disabled", ctx_r46.timepickerVariables.left.disabledMinutes.indexOf(i_r50) > 0 - 1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r46.timepickerVariables.left.minutesLabel[index_r51]);
} }
function DaterangepickerComponent_div_5_div_3_select_10_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var i_r53 = ctx.$implicit;
    var index_r54 = ctx.index;
    var ctx_r52 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("value", i_r53)("disabled", ctx_r52.timepickerVariables.left.disabledSeconds.indexOf(i_r53) > 0 - 1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r52.timepickerVariables.left.secondsLabel[index_r54]);
} }
function DaterangepickerComponent_div_5_div_3_select_10_Template(rf, ctx) { if (rf & 1) {
    var _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 41);
    i0.ɵɵlistener("ngModelChange", function DaterangepickerComponent_div_5_div_3_select_10_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r56); var ctx_r55 = i0.ɵɵnextContext(3); return ctx_r55.timepickerVariables.left.selectedSecond = $event; })("ngModelChange", function DaterangepickerComponent_div_5_div_3_select_10_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r56); var ctx_r57 = i0.ɵɵnextContext(3); return ctx_r57.timeChanged($event, ctx_r57.sideEnum.left); });
    i0.ɵɵtemplate(1, DaterangepickerComponent_div_5_div_3_select_10_option_1_Template, 2, 3, "option", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r47 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", !ctx_r47.startDate)("ngModel", ctx_r47.timepickerVariables.left.selectedSecond);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r47.timepickerVariables.left.seconds);
} }
function DaterangepickerComponent_div_5_div_3_select_14_Template(rf, ctx) { if (rf & 1) {
    var _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 42);
    i0.ɵɵlistener("ngModelChange", function DaterangepickerComponent_div_5_div_3_select_14_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r59); var ctx_r58 = i0.ɵɵnextContext(3); return ctx_r58.timepickerVariables.left.ampmModel = $event; })("ngModelChange", function DaterangepickerComponent_div_5_div_3_select_14_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r59); var ctx_r60 = i0.ɵɵnextContext(3); return ctx_r60.timeChanged($event, ctx_r60.sideEnum.left); });
    i0.ɵɵelementStart(1, "option", 43);
    i0.ɵɵtext(2, "AM");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "option", 44);
    i0.ɵɵtext(4, "PM");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r48 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngModel", ctx_r48.timepickerVariables.left.ampmModel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r48.timepickerVariables.left.amDisabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r48.timepickerVariables.left.pmDisabled);
} }
function DaterangepickerComponent_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵelementStart(1, "div", 32);
    i0.ɵɵelementStart(2, "select", 33);
    i0.ɵɵlistener("ngModelChange", function DaterangepickerComponent_div_5_div_3_Template_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r62); var ctx_r61 = i0.ɵɵnextContext(2); return ctx_r61.timepickerVariables.left.selectedHour = $event; })("ngModelChange", function DaterangepickerComponent_div_5_div_3_Template_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r62); var ctx_r63 = i0.ɵɵnextContext(2); return ctx_r63.timeChanged($event, ctx_r63.sideEnum.left); });
    i0.ɵɵtemplate(3, DaterangepickerComponent_div_5_div_3_option_3_Template, 2, 3, "option", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 32);
    i0.ɵɵelementStart(5, "select", 35);
    i0.ɵɵlistener("ngModelChange", function DaterangepickerComponent_div_5_div_3_Template_select_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r62); var ctx_r64 = i0.ɵɵnextContext(2); return ctx_r64.timepickerVariables.left.selectedMinute = $event; })("ngModelChange", function DaterangepickerComponent_div_5_div_3_Template_select_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r62); var ctx_r65 = i0.ɵɵnextContext(2); return ctx_r65.timeChanged($event, ctx_r65.sideEnum.left); });
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
    var ctx_r9 = i0.ɵɵnextContext(2);
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
var _c2 = function (a0, a1) { return { right: a0, left: a1 }; };
function DaterangepickerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵtemplate(2, DaterangepickerComponent_div_5_table_2_Template, 16, 10, "table", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, DaterangepickerComponent_div_5_div_3_Template, 17, 8, "div", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
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
    var _r79 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "th", 19);
    i0.ɵɵlistener("click", function DaterangepickerComponent_div_6_table_2_ng_container_4_Template_th_click_1_listener() { i0.ɵɵrestoreView(_r79); var ctx_r78 = i0.ɵɵnextContext(3); return ctx_r78.clickPrev(ctx_r78.sideEnum.right); });
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
    var m_r82 = ctx.$implicit;
    var ctx_r80 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", ctx_r80.calendarVariables.right.dropdowns.inMinYear && ctx_r80.calendarVariables.right.minDate && m_r82 < ctx_r80.calendarVariables.right.minDate.month() || ctx_r80.calendarVariables.right.dropdowns.inMaxYear && ctx_r80.calendarVariables.right.maxDate && m_r82 > ctx_r80.calendarVariables.right.maxDate.month())("value", m_r82)("selected", ctx_r80.calendarVariables.right.dropdowns.currentMonth == m_r82);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r80.locale.monthNames[m_r82], " ");
} }
function DaterangepickerComponent_div_6_table_2_ng_container_7_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var y_r83 = ctx.$implicit;
    var ctx_r81 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("selected", y_r83 === ctx_r81.calendarVariables.right.dropdowns.currentYear);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", y_r83, " ");
} }
function DaterangepickerComponent_div_6_table_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    var _r85 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 20);
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "select", 21);
    i0.ɵɵlistener("change", function DaterangepickerComponent_div_6_table_2_ng_container_7_Template_select_change_3_listener($event) { i0.ɵɵrestoreView(_r85); var ctx_r84 = i0.ɵɵnextContext(3); return ctx_r84.monthChanged($event, ctx_r84.sideEnum.right); });
    i0.ɵɵtemplate(4, DaterangepickerComponent_div_6_table_2_ng_container_7_option_4_Template, 2, 4, "option", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 20);
    i0.ɵɵtext(6);
    i0.ɵɵelementStart(7, "select", 23);
    i0.ɵɵlistener("change", function DaterangepickerComponent_div_6_table_2_ng_container_7_Template_select_change_7_listener($event) { i0.ɵɵrestoreView(_r85); var ctx_r86 = i0.ɵɵnextContext(3); return ctx_r86.yearChanged($event, ctx_r86.sideEnum.right); });
    i0.ɵɵtemplate(8, DaterangepickerComponent_div_6_table_2_ng_container_7_option_8_Template, 2, 2, "option", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r71 = i0.ɵɵnextContext(3);
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
    var ctx_r72 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" ", ctx_r72.locale.monthNames[ctx_r72.calendarVariables == null ? null : ctx_r72.calendarVariables.right == null ? null : ctx_r72.calendarVariables.right.calendar[1][1].month()], " ", ctx_r72.calendarVariables == null ? null : ctx_r72.calendarVariables.right == null ? null : ctx_r72.calendarVariables.right.calendar[1][1].format(" YYYY"), " ");
} }
function DaterangepickerComponent_div_6_table_2_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    var _r88 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "th", 27);
    i0.ɵɵlistener("click", function DaterangepickerComponent_div_6_table_2_ng_container_9_Template_th_click_1_listener() { i0.ɵɵrestoreView(_r88); var ctx_r87 = i0.ɵɵnextContext(3); return ctx_r87.clickNext(ctx_r87.sideEnum.right); });
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
    var ctx_r75 = i0.ɵɵnextContext(3);
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
    var dayofweek_r89 = ctx.$implicit;
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
    var row_r90 = i0.ɵɵnextContext().$implicit;
    var ctx_r91 = i0.ɵɵnextContext(3);
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
    var row_r90 = i0.ɵɵnextContext().$implicit;
    var ctx_r92 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r92.calendarVariables.right.calendar[row_r90][0].isoWeek());
} }
function DaterangepickerComponent_div_6_table_2_tr_15_td_3_Template(rf, ctx) { if (rf & 1) {
    var _r98 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 30);
    i0.ɵɵlistener("click", function DaterangepickerComponent_div_6_table_2_tr_15_td_3_Template_td_click_0_listener($event) { i0.ɵɵrestoreView(_r98); var col_r96 = ctx.$implicit; var row_r90 = i0.ɵɵnextContext().$implicit; var ctx_r97 = i0.ɵɵnextContext(3); return ctx_r97.clickDate($event, ctx_r97.sideEnum.right, row_r90, col_r96); })("mouseenter", function DaterangepickerComponent_div_6_table_2_tr_15_td_3_Template_td_mouseenter_0_listener($event) { i0.ɵɵrestoreView(_r98); var col_r96 = ctx.$implicit; var row_r90 = i0.ɵɵnextContext().$implicit; var ctx_r100 = i0.ɵɵnextContext(3); return ctx_r100.hoverDate($event, ctx_r100.sideEnum.right, row_r90, col_r96); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var col_r96 = ctx.$implicit;
    var row_r90 = i0.ɵɵnextContext().$implicit;
    var ctx_r93 = i0.ɵɵnextContext(3);
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
    var row_r90 = ctx.$implicit;
    var ctx_r77 = i0.ɵɵnextContext(3);
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
    var ctx_r66 = i0.ɵɵnextContext(2);
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
    var i_r107 = ctx.$implicit;
    var ctx_r103 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", i_r107)("disabled", ctx_r103.timepickerVariables.right.disabledHours.indexOf(i_r107) > 0 - 1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i_r107);
} }
function DaterangepickerComponent_div_6_div_3_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var i_r108 = ctx.$implicit;
    var index_r109 = ctx.index;
    var ctx_r104 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", i_r108)("disabled", ctx_r104.timepickerVariables.right.disabledMinutes.indexOf(i_r108) > 0 - 1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r104.timepickerVariables.right.minutesLabel[index_r109]);
} }
function DaterangepickerComponent_div_6_div_3_select_12_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var i_r111 = ctx.$implicit;
    var index_r112 = ctx.index;
    var ctx_r110 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("value", i_r111)("disabled", ctx_r110.timepickerVariables.right.disabledSeconds.indexOf(i_r111) > 0 - 1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r110.timepickerVariables.right.secondsLabel[index_r112]);
} }
function DaterangepickerComponent_div_6_div_3_select_12_Template(rf, ctx) { if (rf & 1) {
    var _r114 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 41);
    i0.ɵɵlistener("ngModelChange", function DaterangepickerComponent_div_6_div_3_select_12_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r114); var ctx_r113 = i0.ɵɵnextContext(3); return ctx_r113.timepickerVariables.right.selectedSecond = $event; })("ngModelChange", function DaterangepickerComponent_div_6_div_3_select_12_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r114); var ctx_r115 = i0.ɵɵnextContext(3); return ctx_r115.timeChanged($event, ctx_r115.sideEnum.right); });
    i0.ɵɵtemplate(1, DaterangepickerComponent_div_6_div_3_select_12_option_1_Template, 2, 3, "option", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r105 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", !ctx_r105.startDate)("ngModel", ctx_r105.timepickerVariables.right.selectedSecond);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r105.timepickerVariables.right.seconds);
} }
function DaterangepickerComponent_div_6_div_3_select_16_Template(rf, ctx) { if (rf & 1) {
    var _r117 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 42);
    i0.ɵɵlistener("ngModelChange", function DaterangepickerComponent_div_6_div_3_select_16_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r117); var ctx_r116 = i0.ɵɵnextContext(3); return ctx_r116.timepickerVariables.right.ampmModel = $event; })("ngModelChange", function DaterangepickerComponent_div_6_div_3_select_16_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r117); var ctx_r118 = i0.ɵɵnextContext(3); return ctx_r118.timeChanged($event, ctx_r118.sideEnum.right); });
    i0.ɵɵelementStart(1, "option", 43);
    i0.ɵɵtext(2, "AM");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "option", 44);
    i0.ɵɵtext(4, "PM");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r106 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngModel", ctx_r106.timepickerVariables.right.ampmModel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r106.timepickerVariables.right.amDisabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r106.timepickerVariables.right.pmDisabled);
} }
function DaterangepickerComponent_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r120 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵelementStart(1, "div", 32);
    i0.ɵɵelementStart(2, "select", 47);
    i0.ɵɵlistener("ngModelChange", function DaterangepickerComponent_div_6_div_3_Template_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r120); var ctx_r119 = i0.ɵɵnextContext(2); return ctx_r119.timepickerVariables.right.selectedHour = $event; })("ngModelChange", function DaterangepickerComponent_div_6_div_3_Template_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r120); var ctx_r121 = i0.ɵɵnextContext(2); return ctx_r121.timeChanged($event, ctx_r121.sideEnum.right); });
    i0.ɵɵtemplate(3, DaterangepickerComponent_div_6_div_3_option_3_Template, 2, 3, "option", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "span", 36);
    i0.ɵɵelement(5, "span", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 32);
    i0.ɵɵelementStart(7, "select", 35);
    i0.ɵɵlistener("ngModelChange", function DaterangepickerComponent_div_6_div_3_Template_select_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r120); var ctx_r122 = i0.ɵɵnextContext(2); return ctx_r122.timepickerVariables.right.selectedMinute = $event; })("ngModelChange", function DaterangepickerComponent_div_6_div_3_Template_select_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r120); var ctx_r123 = i0.ɵɵnextContext(2); return ctx_r123.timeChanged($event, ctx_r123.sideEnum.right); });
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
    var ctx_r67 = i0.ɵɵnextContext(2);
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
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.calendarVariables);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.timePicker);
} }
function DaterangepickerComponent_div_7_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r127 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 53);
    i0.ɵɵlistener("click", function DaterangepickerComponent_div_7_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r127); var ctx_r126 = i0.ɵɵnextContext(2); return ctx_r126.clear(); });
    i0.ɵɵtext(1);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(2, "svg", 54);
    i0.ɵɵelement(3, "path", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r124 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", ctx_r124.locale.clearLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r124.locale.clearLabel, " ");
} }
function DaterangepickerComponent_div_7_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r129 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 56);
    i0.ɵɵlistener("click", function DaterangepickerComponent_div_7_button_3_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r129); var ctx_r128 = i0.ɵɵnextContext(2); return ctx_r128.clickCancel($event); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r125 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r125.locale.cancelLabel);
} }
function DaterangepickerComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    var _r131 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵelementStart(1, "div", 49);
    i0.ɵɵtemplate(2, DaterangepickerComponent_div_7_button_2_Template, 4, 2, "button", 50);
    i0.ɵɵtemplate(3, DaterangepickerComponent_div_7_button_3_Template, 2, 1, "button", 51);
    i0.ɵɵelementStart(4, "button", 52);
    i0.ɵɵlistener("click", function DaterangepickerComponent_div_7_Template_button_click_4_listener($event) { i0.ɵɵrestoreView(_r131); var ctx_r130 = i0.ɵɵnextContext(); return ctx_r130.clickApply($event); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r4.showClearButton);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.showCancel);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r4.applyBtn.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r4.locale.applyLabel);
} }
var _c3 = function (a0, a1, a2, a3, a4, a5, a6) { return { ltr: a0, rtl: a1, "shown": a2, "hidden": a3, "inline": a4, "double": a5, "show-ranges": a6 }; };
dayjs.extend(localeData);
dayjs.extend(LocalizedFormat);
dayjs.extend(isoWeek);
var SideEnum;
(function (SideEnum) {
    SideEnum["left"] = "left";
    SideEnum["right"] = "right";
})(SideEnum = exports.SideEnum || (exports.SideEnum = {}));
var DaterangepickerComponent = /** @class */ (function () {
    function DaterangepickerComponent(el, _ref, _localeService) {
        this.el = el;
        this._ref = _ref;
        this._localeService = _localeService;
        this._old = { start: null, end: null };
        this.calendarVariables = { left: {}, right: {} };
        this.tooltiptext = []; // for storing tooltiptext
        this.timepickerVariables = { left: {}, right: {} };
        this.daterangepicker = { start: new forms_1.FormControl(), end: new forms_1.FormControl() };
        this.applyBtn = { disabled: false };
        this.startDate = dayjs().startOf('day');
        this.endDate = dayjs().endOf('day');
        this.dateLimit = null;
        // used in template for compile time support of enum values.
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
        // timepicker variables
        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        // end of timepicker variables
        this.showClearButton = false;
        this.firstMonthDayClass = null;
        this.lastMonthDayClass = null;
        this.emptyWeekRowClass = null;
        this.emptyWeekColumnClass = null;
        this.firstDayOfNextMonthClass = null;
        this.lastDayOfPreviousMonthClass = null;
        this._locale = {};
        // custom ranges
        this._ranges = {};
        this.showCancel = false;
        this.keepCalendarOpeningWithRange = false;
        this.showRangeLabelOnInput = false;
        this.customRangeDirection = false;
        this.rangesArray = [];
        // some state information
        this.isShown = false;
        this.inline = true;
        this.leftCalendar = {};
        this.rightCalendar = {};
        this.showCalInRanges = false;
        this.nowHoveredDate = null;
        this.pickingDate = false;
        this.options = {}; // should get some opt from user
        this.closeOnAutoApply = true;
        this.choosedDate = new core_1.EventEmitter();
        this.rangeClicked = new core_1.EventEmitter();
        this.datesUpdated = new core_1.EventEmitter();
        this.startDateChanged = new core_1.EventEmitter();
        this.endDateChanged = new core_1.EventEmitter();
    }
    Object.defineProperty(DaterangepickerComponent.prototype, "locale", {
        get: function () {
            return this._locale;
        },
        set: function (value) {
            this._locale = __assign(__assign({}, this._localeService.config), value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaterangepickerComponent.prototype, "ranges", {
        get: function () {
            return this._ranges;
        },
        set: function (value) {
            this._ranges = value;
            this.renderRanges();
        },
        enumerable: true,
        configurable: true
    });
    DaterangepickerComponent.prototype.ngOnInit = function () {
        this._buildLocale();
        var daysOfWeek = __spreadArrays(this.locale.daysOfWeek);
        this.locale.firstDay = this.locale.firstDay % 7;
        if (this.locale.firstDay !== 0) {
            var iterator = this.locale.firstDay;
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
    };
    DaterangepickerComponent.prototype.renderRanges = function () {
        this.rangesArray = [];
        var start, end;
        if (typeof this.ranges === 'object') {
            for (var range in this.ranges) {
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
                    // If the start or end date exceed those allowed by the minDate or maxSpan
                    // options, shorten the range to the allowable period.
                    if (this.minDate && start.isBefore(this.minDate)) {
                        start = this.minDate.clone();
                    }
                    var maxDate = this.maxDate;
                    if (this.maxSpan && maxDate && start.clone().add(this.maxSpan).isAfter(maxDate)) {
                        maxDate = start.clone().add(this.maxSpan);
                    }
                    if (maxDate && end.isAfter(maxDate)) {
                        end = maxDate.clone();
                    }
                    // If the end of the range is before the minimum or the start of the range is
                    // after the maximum, don't display this range option at all.
                    if ((this.minDate && end.isBefore(this.minDate, this.timePicker ? 'minute' : 'day'))
                        || (maxDate && start.isAfter(maxDate, this.timePicker ? 'minute' : 'day'))) {
                        continue;
                    }
                    // Support unicode chars in the range names.
                    var elem = document.createElement('textarea');
                    elem.innerHTML = range;
                    var rangeHtml = elem.value;
                    this.ranges[rangeHtml] = [start, end];
                }
            }
            for (var range in this.ranges) {
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
    };
    DaterangepickerComponent.prototype.renderTimePicker = function (side) {
        var selected, minDate;
        var maxDate = this.maxDate;
        if (side === SideEnum.left) {
            selected = this.startDate.clone(),
                minDate = this.minDate;
        }
        else if (side === SideEnum.right && this.endDate) {
            selected = this.endDate.clone(),
                minDate = this.startDate;
        }
        else if (side === SideEnum.right && !this.endDate) {
            // don't have an end date, use the start date then put the selected time for the right side as the time
            selected = this._getDateWithTime(this.startDate, SideEnum.right);
            if (selected.isBefore(this.startDate)) {
                selected = this.startDate.clone(); //set it back to the start date the time was backwards
            }
            minDate = this.startDate;
        }
        var start = this.timePicker24Hour ? 0 : 1;
        var end = this.timePicker24Hour ? 23 : 12;
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
        // generate hours
        for (var i = start; i <= end; i++) {
            var i_in_24 = i;
            if (!this.timePicker24Hour) {
                i_in_24 = selected.hour() >= 12 ? (i === 12 ? 12 : i + 12) : (i === 12 ? 0 : i);
            }
            var time = selected.clone().hour(i_in_24);
            var disabled = false;
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
        // generate minutes
        for (var i = 0; i < 60; i += this.timePickerIncrement) {
            var padded = i < 10 ? '0' + i : i;
            var time = selected.clone().minute(i);
            var disabled = false;
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
        // generate seconds
        if (this.timePickerSeconds) {
            for (var i = 0; i < 60; i++) {
                var padded = i < 10 ? '0' + i : i;
                var time = selected.clone().second(i);
                var disabled = false;
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
        // generate AM/PM
        if (!this.timePicker24Hour) {
            var am_html = '';
            var pm_html = '';
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
    };
    DaterangepickerComponent.prototype.renderCalendar = function (side) {
        var mainCalendar = (side === SideEnum.left) ? this.leftCalendar : this.rightCalendar;
        var month = mainCalendar.month.month();
        var year = mainCalendar.month.year();
        var hour = mainCalendar.month.hour();
        var minute = mainCalendar.month.minute();
        var second = mainCalendar.month.second();
        var daysInMonth = dayjs(new Date(year, month)).daysInMonth();
        var firstDay = dayjs(new Date(year, month, 1));
        var lastDay = dayjs(new Date(year, month, daysInMonth));
        var lastMonth = dayjs(firstDay).subtract(1, 'month').month();
        var lastYear = dayjs(firstDay).subtract(1, 'month').year();
        var daysInLastMonth = dayjs(new Date(lastYear, lastMonth)).daysInMonth();
        var dayOfWeek = firstDay.day();
        // initialize a 6 rows x 7 columns array for the calendar
        var calendar = [];
        calendar.firstDay = firstDay;
        calendar.lastDay = lastDay;
        for (var i = 0; i < 6; i++) {
            calendar[i] = [];
        }
        // populate the calendar with date objects
        var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
        if (startDay > daysInLastMonth) {
            startDay -= 7;
        }
        if (dayOfWeek === this.locale.firstDay) {
            startDay = daysInLastMonth - 6;
        }
        var curDate = dayjs(new Date(lastYear, lastMonth, startDay, 12, minute, second));
        for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = dayjs(curDate).add(24, 'hour')) {
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
        // make the calendar object available to hoverDate/clickDate
        if (side === SideEnum.left) {
            this.leftCalendar.calendar = calendar;
        }
        else {
            this.rightCalendar.calendar = calendar;
        }
        //
        // Display the calendar
        //
        var minDate = side === 'left' ? this.minDate : this.startDate;
        var maxDate = this.maxDate;
        // adjust maxDate to reflect the dateLimit setting in order to
        // grey out end dates beyond the dateLimit
        if (this.endDate === null && this.dateLimit) {
            var maxLimit = this.startDate.clone().add(this.dateLimit, 'day').endOf('day');
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
            // other vars
            calRows: Array.from(Array(6).keys()),
            calCols: Array.from(Array(7).keys()),
            classes: {},
            minDate: minDate,
            maxDate: maxDate,
            calendar: calendar
        };
        if (this.showDropdowns) {
            var currentMonth = calendar[1][1].month();
            var currentYear = calendar[1][1].year();
            var realCurrentYear = dayjs().year();
            var maxYear = (maxDate && maxDate.year()) || (realCurrentYear + 5);
            var minYear = (minDate && minDate.year()) || (realCurrentYear - 50);
            var inMinYear = currentYear === minYear;
            var inMaxYear = currentYear === maxYear;
            var years = [];
            for (var y = minYear; y <= maxYear; y++) {
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
    };
    DaterangepickerComponent.prototype.setStartDate = function (startDate) {
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
    };
    DaterangepickerComponent.prototype.setEndDate = function (endDate) {
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
            // this.updateElement();
        }
        this.endDateChanged.emit({ endDate: this.endDate });
        this.updateMonthsInView();
    };
    DaterangepickerComponent.prototype.isInvalidDate = function (date) {
        return false;
    };
    DaterangepickerComponent.prototype.isCustomDate = function (date) {
        return false;
    };
    DaterangepickerComponent.prototype.isTooltipDate = function (date) {
        return null;
    };
    DaterangepickerComponent.prototype.updateView = function () {
        if (this.timePicker) {
            this.renderTimePicker(SideEnum.left);
            this.renderTimePicker(SideEnum.right);
        }
        this.updateMonthsInView();
        this.updateCalendars();
    };
    DaterangepickerComponent.prototype.updateMonthsInView = function () {
        if (this.endDate) {
            // if both dates are visible already, do nothing
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
    };
    /**
     *  This is responsible for updating the calendars
     */
    DaterangepickerComponent.prototype.updateCalendars = function () {
        this.renderCalendar(SideEnum.left);
        this.renderCalendar(SideEnum.right);
        if (this.endDate === null) {
            return;
        }
        this.calculateChosenLabel();
    };
    DaterangepickerComponent.prototype.updateElement = function () {
        var format = this.locale.displayFormat ? this.locale.displayFormat : this.locale.format;
        if (!this.singleDatePicker && this.autoUpdateInput) {
            if (this.startDate && this.endDate) {
                // if we use ranges and should show range label on input
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
    };
    DaterangepickerComponent.prototype.remove = function () {
        this.isShown = false;
    };
    /**
     * this should calculate the label
     */
    DaterangepickerComponent.prototype.calculateChosenLabel = function () {
        if (!this.locale || !this.locale.separator) {
            this._buildLocale();
        }
        var customRange = true;
        var i = 0;
        if (this.rangesArray.length > 0) {
            for (var range in this.ranges) {
                if (this.ranges[range]) {
                    if (this.timePicker) {
                        var format = this.timePickerSeconds ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD HH:mm';
                        // ignore times when comparing dates if time picker seconds is not enabled
                        if (this.startDate.format(format) === this.ranges[range][0].format(format)
                            && this.endDate.format(format) === this.ranges[range][1].format(format)) {
                            customRange = false;
                            this.chosenRange = this.rangesArray[i];
                            break;
                        }
                    }
                    else {
                        // ignore times when comparing dates if time picker is not enabled
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
                // if custom label: show calendar
                this.showCalInRanges = true;
            }
        }
        this.updateElement();
    };
    DaterangepickerComponent.prototype.clickApply = function (e) {
        var _a;
        if (!this.singleDatePicker && this.startDate && !((_a = this.endDate) === null || _a === void 0 ? void 0 : _a.isValid())) {
            this.endDate = this._getDateWithTime(this.startDate, SideEnum.right);
            this.calculateChosenLabel();
        }
        if (this.isInvalidDate && this.startDate && this.endDate) {
            // get if there are invalid date between range
            var d = this.startDate.clone();
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
    };
    DaterangepickerComponent.prototype.clickCancel = function (e) {
        this.startDate = this._old.start;
        this.endDate = this._old.end;
        if (this.inline) {
            this.updateView();
        }
        this.hide();
    };
    /**
     * called when month is changed
     * @param monthEvent get value in event.target.value
     * @param side left or right
     */
    DaterangepickerComponent.prototype.monthChanged = function (monthEvent, side) {
        var year = this.calendarVariables[side].dropdowns.currentYear;
        var month = parseInt(monthEvent.target.value, 10);
        this.monthOrYearChanged(month, year, side);
    };
    /**
     * called when year is changed
     * @param yearEvent get value in event.target.value
     * @param side left or right
     */
    DaterangepickerComponent.prototype.yearChanged = function (yearEvent, side) {
        var month = this.calendarVariables[side].dropdowns.currentMonth;
        var year = parseInt(yearEvent.target.value, 10);
        this.monthOrYearChanged(month, year, side);
    };
    /**
     * called when time is changed
     * @param timeEvent  an event
     * @param side left or right
     */
    DaterangepickerComponent.prototype.timeChanged = function (timeEvent, side) {
        var hour = parseInt(this.timepickerVariables[side].selectedHour, 10);
        var minute = parseInt(this.timepickerVariables[side].selectedMinute, 10);
        var second = this.timePickerSeconds ? parseInt(this.timepickerVariables[side].selectedSecond, 10) : 0;
        if (!this.timePicker24Hour) {
            var ampm = this.timepickerVariables[side].ampmModel;
            if (ampm === 'PM' && hour < 12) {
                hour += 12;
            }
            if (ampm === 'AM' && hour === 12) {
                hour = 0;
            }
        }
        if (side === SideEnum.left) {
            var start = this.startDate.clone();
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
                var startClone = this._getDateWithTime(start, SideEnum.right);
                if (startClone.isBefore(start)) {
                    this.timepickerVariables[SideEnum.right].selectedHour = hour;
                    this.timepickerVariables[SideEnum.right].selectedMinute = minute;
                    this.timepickerVariables[SideEnum.right].selectedSecond = second;
                }
            }
        }
        else if (this.endDate) {
            var end = this.endDate.clone();
            end.hour(hour);
            end.minute(minute);
            end.second(second);
            this.setEndDate(end);
        }
        // update the calendars so all clickable dates reflect the new time component
        this.updateCalendars();
        // re-render the time pickers because changing one selection can affect what's enabled in another
        this.renderTimePicker(SideEnum.left);
        this.renderTimePicker(SideEnum.right);
        if (this.autoApply) {
            this.clickApply();
        }
    };
    /**
     *  call when month or year changed
     * @param month month number 0 -11
     * @param year year eg: 1995
     * @param side left or right
     */
    DaterangepickerComponent.prototype.monthOrYearChanged = function (month, year, side) {
        var isLeft = side === SideEnum.left;
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
    };
    /**
     * Click on previous month
     * @param side left or right calendar
     */
    DaterangepickerComponent.prototype.clickPrev = function (side) {
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
    };
    /**
     * Click on next month
     * @param side left or right calendar
     */
    DaterangepickerComponent.prototype.clickNext = function (side) {
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
    };
    /**
     * When hovering a date
     * @param e event: get value by e.target.value
     * @param side left or right
     * @param row row position of the current date clicked
     * @param col col position of the current date clicked
     */
    DaterangepickerComponent.prototype.hoverDate = function (e, side, row, col) {
        var leftCalDate = this.calendarVariables.left.calendar[row][col];
        var rightCalDate = this.calendarVariables.right.calendar[row][col];
        if (this.pickingDate) {
            this.nowHoveredDate = side === SideEnum.left ? leftCalDate : rightCalDate;
            this.renderCalendar(SideEnum.left);
            this.renderCalendar(SideEnum.right);
        }
        var tooltip = side === SideEnum.left ? this.tooltiptext[leftCalDate] : this.tooltiptext[rightCalDate];
        if (tooltip.length > 0) {
            e.target.setAttribute('title', tooltip);
        }
    };
    /**
     * When selecting a date
     * @param e event: get value by e.target.value
     * @param side left or right
     * @param row row position of the current date clicked
     * @param col col position of the current date clicked
     */
    DaterangepickerComponent.prototype.clickDate = function (e, side, row, col) {
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
        var date = side === SideEnum.left ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];
        if ((this.endDate || (date.isBefore(this.startDate, 'day')
            && this.customRangeDirection === false)) && this.lockStartDate === false) { // picking start
            if (this.timePicker) {
                date = this._getDateWithTime(date, SideEnum.left);
            }
            this.endDate = null;
            this.setStartDate(date.clone());
        }
        else if (!this.endDate && date.isBefore(this.startDate) && this.customRangeDirection === false) {
            // special case: clicking the same date for start/end,
            // but the time of the end date is before the start date
            this.setEndDate(this.startDate.clone());
        }
        else { // picking end
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
        // This is to cancel the blur event handler if the mouse was in one of the inputs
        e.stopPropagation();
    };
    /**
     *  Click on the custom range
     * @param e: Event
     * @param label
     */
    DaterangepickerComponent.prototype.clickRange = function (e, label) {
        this.chosenRange = label;
        if (label === this.locale.customRangeLabel) {
            this.isShown = true; // show calendars
            this.showCalInRanges = true;
        }
        else {
            var dates = this.ranges[label];
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
                this.isShown = false; // hide calendars
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
                    // get the next year
                    var nextMonth = dates[0].clone().add(1, 'month');
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
    };
    DaterangepickerComponent.prototype.show = function (e) {
        if (this.isShown) {
            return;
        }
        this._old.start = this.startDate.clone();
        this._old.end = this.endDate ? this.endDate.clone() : null;
        this.isShown = true;
        this.updateView();
    };
    DaterangepickerComponent.prototype.hide = function (e) {
        if (!this.isShown) {
            return;
        }
        // incomplete date selection, revert to last values
        if (!this.endDate) {
            if (this._old.start) {
                this.startDate = this._old.start.clone();
            }
            if (this._old.end) {
                this.endDate = this._old.end.clone();
            }
        }
        // if a new date range was selected, invoke the user callback function
        if (!this.startDate.isSame(this._old.start) || !this.endDate.isSame(this._old.end)) {
            // this.callback(this.startDate, this.endDate, this.chosenLabel);
        }
        // if picker is attached to a text input, update it
        this.updateElement();
        this.isShown = false;
        this._ref.detectChanges();
    };
    /**
     * handle click on all element in the component, useful for outside of click
     * @param e event
     */
    DaterangepickerComponent.prototype.handleInternalClick = function (e) {
        e.stopPropagation();
    };
    /**
     * update the locale options
     * @param locale
     */
    DaterangepickerComponent.prototype.updateLocale = function (locale) {
        for (var key in locale) {
            if (locale.hasOwnProperty(key)) {
                this.locale[key] = locale[key];
                if (key === 'customRangeLabel') {
                    this.renderRanges();
                }
            }
        }
    };
    /**
     *  clear the daterange picker
     */
    DaterangepickerComponent.prototype.clear = function () {
        this.startDate = dayjs().startOf('day');
        this.endDate = dayjs().endOf('day');
        this.choosedDate.emit({ chosenLabel: '', startDate: null, endDate: null });
        this.datesUpdated.emit({ startDate: null, endDate: null });
        this.hide();
    };
    /**
     * Find out if the selected range should be disabled if it doesn't
     * fit into minDate and maxDate limitations.
     */
    DaterangepickerComponent.prototype.disableRange = function (range) {
        var _this = this;
        if (range === this.locale.customRangeLabel) {
            return false;
        }
        var rangeMarkers = this.ranges[range];
        var areBothBefore = rangeMarkers.every(function (date) {
            if (!_this.minDate) {
                return false;
            }
            return date.isBefore(_this.minDate);
        });
        var areBothAfter = rangeMarkers.every(function (date) {
            if (!_this.maxDate) {
                return false;
            }
            return date.isAfter(_this.maxDate);
        });
        return (areBothBefore || areBothAfter);
    };
    /**
     *
     * @param date the date to add time
     * @param side left or right
     */
    DaterangepickerComponent.prototype._getDateWithTime = function (date, side) {
        var _a;
        if (!((_a = this.timepickerVariables[side]) === null || _a === void 0 ? void 0 : _a.selectedHour))
            return date;
        var hour = parseInt(this.timepickerVariables[side].selectedHour, 10);
        if (!this.timePicker24Hour) {
            var ampm = this.timepickerVariables[side].ampmModel;
            if (ampm === 'PM' && hour < 12) {
                hour += 12;
            }
            if (ampm === 'AM' && hour === 12) {
                hour = 0;
            }
        }
        var minute = parseInt(this.timepickerVariables[side].selectedMinute, 10);
        var second = this.timePickerSeconds ? parseInt(this.timepickerVariables[side].selectedSecond, 10) : 0;
        return date.clone().hour(hour).minute(minute).second(second);
    };
    /**
     *  build the locale config
     */
    DaterangepickerComponent.prototype._buildLocale = function () {
        this.locale = __assign(__assign({}, this._localeService.config), this.locale);
        if (!this.locale.format) {
            if (this.timePicker) {
                this.locale.format = dayjs().localeData().longDateFormat('lll');
            }
            else {
                this.locale.format = dayjs().localeData().longDateFormat('L');
            }
        }
    };
    DaterangepickerComponent.prototype._buildCells = function (calendar, side) {
        var _this = this;
        var _loop_1 = function (row) {
            this_1.calendarVariables[side].classes[row] = {};
            var rowClasses = [];
            if (this_1.emptyWeekRowClass &&
                Array.from(Array(7).keys()).some(function (i) { return calendar[row][i].month() !== _this.calendarVariables[side].month; })) {
                rowClasses.push(this_1.emptyWeekRowClass);
            }
            for (var col = 0; col < 7; col++) {
                var classes = [];
                // empty week row class
                if (this_1.emptyWeekColumnClass) {
                    if (calendar[row][col].month() !== this_1.calendarVariables[side].month) {
                        classes.push(this_1.emptyWeekColumnClass);
                    }
                }
                // highlight today's date
                if (calendar[row][col].isSame(new Date(), 'day')) {
                    classes.push('today');
                }
                // highlight weekends
                if (calendar[row][col].isoWeekday() > 5) {
                    classes.push('weekend');
                }
                // grey out the dates in other months displayed at beginning and end of this calendar
                if (calendar[row][col].month() !== calendar[1][1].month()) {
                    classes.push('off');
                    // mark the last day of the previous month in this calendar
                    if (this_1.lastDayOfPreviousMonthClass && (calendar[row][col].month() < calendar[1][1].month() ||
                        calendar[1][1].month() === 0) && calendar[row][col].date() === this_1.calendarVariables[side].daysInLastMonth) {
                        classes.push(this_1.lastDayOfPreviousMonthClass);
                    }
                    // mark the first day of the next month in this calendar
                    if (this_1.firstDayOfNextMonthClass && (calendar[row][col].month() > calendar[1][1].month() ||
                        calendar[row][col].month() === 0) && calendar[row][col].date() === 1) {
                        classes.push(this_1.firstDayOfNextMonthClass);
                    }
                }
                // mark the first day of the current month with a custom class
                if (this_1.firstMonthDayClass && calendar[row][col].month() === calendar[1][1].month() &&
                    calendar[row][col].date() === calendar.firstDay.date()) {
                    classes.push(this_1.firstMonthDayClass);
                }
                // mark the last day of the current month with a custom class
                if (this_1.lastMonthDayClass && calendar[row][col].month() === calendar[1][1].month() &&
                    calendar[row][col].date() === calendar.lastDay.date()) {
                    classes.push(this_1.lastMonthDayClass);
                }
                // don't allow selection of dates before the minimum date
                if (this_1.minDate && calendar[row][col].isBefore(this_1.minDate, 'day')) {
                    classes.push('off', 'disabled');
                }
                // don't allow selection of dates after the maximum date
                if (this_1.calendarVariables[side].maxDate && calendar[row][col].isAfter(this_1.calendarVariables[side].maxDate, 'day')) {
                    classes.push('off', 'disabled');
                }
                // don't allow selection of date if a custom function decides it's invalid
                if (this_1.isInvalidDate(calendar[row][col])) {
                    classes.push('off', 'disabled', 'invalid');
                }
                // highlight the currently selected start date
                if (this_1.startDate && calendar[row][col].format('YYYY-MM-DD') === this_1.startDate.format('YYYY-MM-DD')) {
                    classes.push('active', 'start-date');
                }
                // highlight the currently selected end date
                if (this_1.endDate != null && calendar[row][col].format('YYYY-MM-DD') === this_1.endDate.format('YYYY-MM-DD')) {
                    classes.push('active', 'end-date');
                }
                // highlight dates in-between the selected dates
                if (((this_1.nowHoveredDate != null && this_1.pickingDate) || this_1.endDate != null) &&
                    (calendar[row][col] > this_1.startDate &&
                        (calendar[row][col] < this_1.endDate || (calendar[row][col] < this_1.nowHoveredDate && this_1.pickingDate))) &&
                    (!classes.find(function (el) { return el === 'off'; }))) {
                    classes.push('in-range');
                }
                // apply custom classes for this date
                var isCustom = this_1.isCustomDate(calendar[row][col]);
                if (isCustom !== false) {
                    if (typeof isCustom === 'string') {
                        classes.push(isCustom);
                    }
                    else {
                        Array.prototype.push.apply(classes, isCustom);
                    }
                }
                // apply custom tooltip for this date
                var isTooltip = this_1.isTooltipDate(calendar[row][col]);
                if (isTooltip) {
                    if (typeof isTooltip === 'string') {
                        this_1.tooltiptext[calendar[row][col]] = isTooltip; // setting tooltiptext for custom date
                    }
                    else {
                        this_1.tooltiptext[calendar[row][col]] = 'Put the tooltip as the returned value of isTooltipDate';
                    }
                }
                else {
                    this_1.tooltiptext[calendar[row][col]] = '';
                }
                // store classes var
                var cname = '', disabled = false;
                for (var i = 0; i < classes.length; i++) {
                    cname += classes[i] + ' ';
                    if (classes[i] === 'disabled') {
                        disabled = true;
                    }
                }
                if (!disabled) {
                    cname += 'available';
                }
                this_1.calendarVariables[side].classes[row][col] = cname.replace(/^\s+|\s+$/g, '');
            }
            this_1.calendarVariables[side].classes[row].classList = rowClasses.join(' ');
        };
        var this_1 = this;
        for (var row = 0; row < 6; row++) {
            _loop_1(row);
        }
    };
    DaterangepickerComponent.ɵfac = function DaterangepickerComponent_Factory(t) { return new (t || DaterangepickerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.LocaleService)); };
    DaterangepickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DaterangepickerComponent, selectors: [["ngx-daterangepicker-material"]], viewQuery: function DaterangepickerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pickerContainer = _t.first);
        } }, hostBindings: function DaterangepickerComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function DaterangepickerComponent_click_HostBindingHandler($event) { return ctx.handleInternalClick($event); });
        } }, inputs: { startDate: "startDate", endDate: "endDate", dateLimit: "dateLimit", minDate: "minDate", maxDate: "maxDate", autoApply: "autoApply", singleDatePicker: "singleDatePicker", showDropdowns: "showDropdowns", showWeekNumbers: "showWeekNumbers", showISOWeekNumbers: "showISOWeekNumbers", linkedCalendars: "linkedCalendars", autoUpdateInput: "autoUpdateInput", alwaysShowCalendars: "alwaysShowCalendars", maxSpan: "maxSpan", lockStartDate: "lockStartDate", timePicker: "timePicker", timePicker24Hour: "timePicker24Hour", timePickerIncrement: "timePickerIncrement", timePickerSeconds: "timePickerSeconds", showClearButton: "showClearButton", firstMonthDayClass: "firstMonthDayClass", lastMonthDayClass: "lastMonthDayClass", emptyWeekRowClass: "emptyWeekRowClass", emptyWeekColumnClass: "emptyWeekColumnClass", firstDayOfNextMonthClass: "firstDayOfNextMonthClass", lastDayOfPreviousMonthClass: "lastDayOfPreviousMonthClass", locale: "locale", ranges: "ranges", showCustomRangeLabel: "showCustomRangeLabel", showCancel: "showCancel", keepCalendarOpeningWithRange: "keepCalendarOpeningWithRange", showRangeLabelOnInput: "showRangeLabelOnInput", customRangeDirection: "customRangeDirection", drops: "drops", opens: "opens", closeOnAutoApply: "closeOnAutoApply", isInvalidDate: "isInvalidDate", isCustomDate: "isCustomDate", isTooltipDate: "isTooltipDate" }, outputs: { choosedDate: "choosedDate", rangeClicked: "rangeClicked", datesUpdated: "datesUpdated", startDateChanged: "startDateChanged", endDateChanged: "endDateChanged" }, features: [i0.ɵɵProvidersFeature([{
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return DaterangepickerComponent; }),
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
        } }, directives: [i2.NgClass, i2.NgForOf, i2.NgIf, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x, i3.SelectControlValueAccessor, i3.NgControlStatus, i3.NgModel], styles: ["/*\n*  variables\n*/\n/*\n* styles\n*/\n.md-drppicker {\n  position: absolute;\n  font-family: Roboto, sans-serif;\n  color: inherit;\n  background-color: #fff;\n  border-radius: 4px;\n  width: 278px;\n  padding: 4px;\n  margin-top: -10px;\n  overflow: hidden;\n  z-index: 1000;\n  font-size: 14px;\n  background-color: #ffffff;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 8px 0 rgba(0, 0, 0, 0.12);\n  /* ranges */\n  /* button */\n}\n.md-drppicker.double {\n  width: auto;\n}\n.md-drppicker.inline {\n  position: relative;\n  display: inline-block;\n}\n.md-drppicker:before, .md-drppicker:after {\n  position: absolute;\n  display: inline-block;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  content: \"\";\n}\n.md-drppicker.openscenter:before {\n  left: 0;\n  right: 0;\n  width: 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n.md-drppicker.openscenter:after {\n  left: 0;\n  right: 0;\n  width: 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n.md-drppicker.single .ranges, .md-drppicker.single .calendar {\n  float: none;\n}\n.md-drppicker.shown {\n  transform: scale(1);\n  transition: all 0.1s ease-in-out;\n  transform-origin: 0 0;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.md-drppicker.shown.drops-up-left {\n  transform-origin: 100% 100%;\n}\n.md-drppicker.shown.drops-up-right {\n  transform-origin: 0 100%;\n}\n.md-drppicker.shown.drops-down-left {\n  transform-origin: 100% 0;\n}\n.md-drppicker.shown.drops-down-right {\n  transform-origin: 0 0;\n}\n.md-drppicker.shown.drops-down-center {\n  transform-origin: NaN%;\n}\n.md-drppicker.shown.drops-up-center {\n  transform-origin: 50%;\n}\n.md-drppicker.shown .calendar {\n  display: block;\n}\n.md-drppicker.hidden {\n  transition: all 0.1s ease;\n  transform: scale(0);\n  transform-origin: 0 0;\n  cursor: default;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.md-drppicker.hidden.drops-up-left {\n  transform-origin: 100% 100%;\n}\n.md-drppicker.hidden.drops-up-right {\n  transform-origin: 0 100%;\n}\n.md-drppicker.hidden.drops-down-left {\n  transform-origin: 100% 0;\n}\n.md-drppicker.hidden.drops-down-right {\n  transform-origin: 0 0;\n}\n.md-drppicker.hidden.drops-down-center {\n  transform-origin: 50% 0;\n}\n.md-drppicker.hidden.drops-up-center {\n  transform-origin: 50% 100%;\n}\n.md-drppicker.hidden .calendar {\n  display: none;\n}\n.md-drppicker .calendar {\n  /* display: none; */\n  max-width: 270px;\n  margin: 4px;\n}\n.md-drppicker .calendar.single .calendar-table {\n  border: none;\n}\n.md-drppicker .calendar th, .md-drppicker .calendar td {\n  padding: 0;\n  white-space: nowrap;\n  text-align: center;\n  min-width: 32px;\n}\n.md-drppicker .calendar th span, .md-drppicker .calendar td span {\n  pointer-events: none;\n}\n.md-drppicker .calendar-table {\n  border: 1px solid #fff;\n  padding: 4px;\n  border-radius: 4px;\n  background-color: #fff;\n}\n.md-drppicker table {\n  width: 100%;\n  margin: 0;\n}\n.md-drppicker th {\n  color: #988c8c;\n}\n.md-drppicker td, .md-drppicker th {\n  text-align: center;\n  width: 20px;\n  height: 20px;\n  border-radius: 4px;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  cursor: pointer;\n  height: 2em;\n  width: 2em;\n}\n.md-drppicker td.available.prev, .md-drppicker th.available.prev {\n  display: block;\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMy43IDYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMuNyA2IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0zLjcsMC43TDEuNCwzbDIuMywyLjNMMyw2TDAsM2wzLTNMMy43LDAuN3oiLz4NCjwvZz4NCjwvc3ZnPg0K\");\n  background-repeat: no-repeat;\n  background-size: 0.5em;\n  background-position: center;\n  opacity: 0.8;\n  transition: background-color 0.2s ease;\n  border-radius: 2em;\n}\n.md-drppicker td.available.prev:hover, .md-drppicker th.available.prev:hover {\n  margin: 0;\n}\n.md-drppicker td.available.next, .md-drppicker th.available.next {\n  transform: rotate(180deg);\n  display: block;\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMy43IDYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMuNyA2IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0zLjcsMC43TDEuNCwzbDIuMywyLjNMMyw2TDAsM2wzLTNMMy43LDAuN3oiLz4NCjwvZz4NCjwvc3ZnPg0K\");\n  background-repeat: no-repeat;\n  background-size: 0.5em;\n  background-position: center;\n  opacity: 0.8;\n  transition: background-color 0.2s ease;\n  border-radius: 2em;\n}\n.md-drppicker td.available.next:hover, .md-drppicker th.available.next:hover {\n  margin: 0;\n  transform: rotate(180deg);\n}\n.md-drppicker td.available:hover, .md-drppicker th.available:hover {\n  background-color: #eee;\n  border-color: transparent;\n  color: inherit;\n  background-repeat: no-repeat;\n  background-size: 0.5em;\n  background-position: center;\n  margin: 0.25em 0;\n  opacity: 0.8;\n  /*transition: background-color .2s ease;*/\n  border-radius: 2em;\n  transform: scale(1);\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n}\n.md-drppicker td.week, .md-drppicker th.week {\n  font-size: 80%;\n  color: #ccc;\n}\n.md-drppicker td {\n  margin: 0.25em 0;\n  opacity: 0.8;\n  transition: background-color 0.2s ease;\n  border-radius: 2em;\n  transform: scale(1);\n  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n}\n.md-drppicker td.off, .md-drppicker td.off.in-range, .md-drppicker td.off.start-date, .md-drppicker td.off.end-date {\n  background-color: #fff;\n  border-color: transparent;\n  color: #999;\n}\n.md-drppicker td.in-range {\n  background-color: #dde2e4;\n  border-color: transparent;\n  color: #000;\n  border-radius: 0;\n}\n.md-drppicker td.start-date {\n  border-radius: 2em 0 0 2em;\n}\n.md-drppicker td.end-date {\n  border-radius: 0 2em 2em 0;\n}\n.md-drppicker td.start-date.end-date {\n  border-radius: 4px;\n}\n.md-drppicker td.active {\n  transition: background 300ms ease-out;\n  background: rgba(0, 0, 0, 0.1);\n}\n.md-drppicker td.active, .md-drppicker td.active:hover {\n  background-color: #3f51b5;\n  border-color: transparent;\n  color: #fff;\n}\n.md-drppicker th.month {\n  width: auto;\n}\n.md-drppicker td.disabled, .md-drppicker option.disabled {\n  color: #999;\n  cursor: not-allowed;\n  text-decoration: line-through;\n}\n.md-drppicker .dropdowns {\n  background-repeat: no-repeat;\n  background-size: 10px;\n  background-position-y: center;\n  background-position-x: right;\n  width: 50px;\n  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDI1NSAyNTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1NSAyNTU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iYXJyb3ctZHJvcC1kb3duIj4KCQk8cG9seWdvbiBwb2ludHM9IjAsNjMuNzUgMTI3LjUsMTkxLjI1IDI1NSw2My43NSAgICIgZmlsbD0iIzk4OGM4YyIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=);\n}\n.md-drppicker .dropdowns select {\n  display: inline-block;\n  background-color: rgba(255, 255, 255, 0.9);\n  width: 100%;\n  padding: 5px;\n  border: 1px solid #f2f2f2;\n  border-radius: 2px;\n  height: 3rem;\n}\n.md-drppicker .dropdowns select.monthselect, .md-drppicker .dropdowns select.yearselect {\n  font-size: 12px;\n  padding: 1px;\n  height: auto;\n  margin: 0;\n  cursor: default;\n}\n.md-drppicker .dropdowns select.hourselect, .md-drppicker .dropdowns select.minuteselect, .md-drppicker .dropdowns select.secondselect, .md-drppicker .dropdowns select.ampmselect {\n  width: 50px;\n  margin: 0 auto;\n  background: #eee;\n  border: 1px solid #eee;\n  padding: 2px;\n  outline: 0;\n  font-size: 12px;\n}\n.md-drppicker .dropdowns select.monthselect, .md-drppicker .dropdowns select.yearselect {\n  cursor: pointer;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  margin: 0;\n  padding: 0;\n}\n.md-drppicker th.month > div {\n  position: relative;\n  display: inline-block;\n}\n.md-drppicker .calendar-time {\n  text-align: center;\n  margin: 4px auto 0 auto;\n  line-height: 30px;\n  position: relative;\n}\n.md-drppicker .calendar-time .select {\n  display: inline;\n}\n.md-drppicker .calendar-time .select .select-item {\n  display: inline-block;\n  width: auto;\n  position: relative;\n  font-family: inherit;\n  background-color: transparent;\n  padding: 10px 10px 10px 0;\n  font-size: 18px;\n  border-radius: 0;\n  border: none;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n  /* Remove focus */\n}\n.md-drppicker .calendar-time .select .select-item:after {\n  position: absolute;\n  top: 18px;\n  right: 10px;\n  /* Styling the down arrow */\n  width: 0;\n  height: 0;\n  padding: 0;\n  content: \"\";\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid rgba(0, 0, 0, 0.12);\n  pointer-events: none;\n}\n.md-drppicker .calendar-time .select .select-item:focus {\n  outline: none;\n}\n.md-drppicker .calendar-time .select .select-item .select-label {\n  color: rgba(0, 0, 0, 0.26);\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 0;\n  top: 10px;\n  transition: 0.2s ease all;\n}\n.md-drppicker .calendar-time select.disabled {\n  color: #ccc;\n  cursor: not-allowed;\n}\n.md-drppicker .label-input {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  color: #555;\n  height: 30px;\n  line-height: 30px;\n  display: block;\n  vertical-align: middle;\n  margin: 0 auto 5px auto;\n  padding: 0 0 0 28px;\n  width: 100%;\n}\n.md-drppicker .label-input.active {\n  border: 1px solid #08c;\n  border-radius: 4px;\n}\n.md-drppicker .md-drppicker_input {\n  position: relative;\n  padding: 0 30px 0 0;\n}\n.md-drppicker .md-drppicker_input i, .md-drppicker .md-drppicker_input svg {\n  position: absolute;\n  left: 8px;\n  top: 8px;\n}\n.md-drppicker.rtl .label-input {\n  padding-right: 28px;\n  padding-left: 6px;\n}\n.md-drppicker.rtl .md-drppicker_input i, .md-drppicker.rtl .md-drppicker_input svg {\n  left: auto;\n  right: 8px;\n}\n.md-drppicker .show-ranges .drp-calendar.left {\n  border-left: 1px solid #ddd;\n}\n.md-drppicker .ranges {\n  float: none;\n  text-align: left;\n  margin: 0;\n}\n.md-drppicker .ranges ul {\n  list-style: none;\n  margin: 0 auto;\n  padding: 0;\n  width: 100%;\n}\n.md-drppicker .ranges ul li {\n  font-size: 12px;\n}\n.md-drppicker .ranges ul li button {\n  padding: 8px 12px;\n  width: 100%;\n  background: none;\n  border: none;\n  text-align: left;\n  cursor: pointer;\n}\n.md-drppicker .ranges ul li button.active {\n  background-color: #3f51b5;\n  color: #fff;\n}\n.md-drppicker .ranges ul li button[disabled] {\n  opacity: 0.3;\n}\n.md-drppicker .ranges ul li button:active {\n  background: transparent;\n}\n.md-drppicker .ranges ul li:hover {\n  background-color: #eee;\n}\n.md-drppicker .show-calendar .ranges {\n  margin-top: 8px;\n}\n.md-drppicker [hidden] {\n  display: none;\n}\n.md-drppicker .buttons {\n  text-align: right;\n  margin: 0 5px 5px 0;\n}\n.md-drppicker .btn {\n  position: relative;\n  overflow: hidden;\n  border-width: 0;\n  outline: none;\n  padding: 0px 6px;\n  cursor: pointer;\n  border-radius: 2px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);\n  background-color: #3f51b5;\n  color: #ecf0f1;\n  transition: background-color 0.4s;\n  height: auto;\n  text-transform: uppercase;\n  line-height: 36px;\n  border: none;\n}\n.md-drppicker .btn:hover, .md-drppicker .btn:focus {\n  background-color: #3f51b5;\n}\n.md-drppicker .btn > * {\n  position: relative;\n}\n.md-drppicker .btn span {\n  display: block;\n  padding: 12px 24px;\n}\n.md-drppicker .btn:before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: block;\n  width: 0;\n  padding-top: 0;\n  border-radius: 100%;\n  background-color: rgba(236, 240, 241, 0.3);\n  transform: translate(-50%, -50%);\n}\n.md-drppicker .btn:active:before {\n  width: 120%;\n  padding-top: 120%;\n  transition: width 0.2s ease-out, padding-top 0.2s ease-out;\n}\n.md-drppicker .btn:disabled {\n  opacity: 0.5;\n}\n.md-drppicker .btn.btn-default {\n  color: black;\n  background-color: gainsboro;\n}\n.md-drppicker .clear {\n  box-shadow: none;\n  background-color: #ffffff !important;\n}\n.md-drppicker .clear svg {\n  color: #eb3232;\n  fill: currentColor;\n}\n@media (min-width: 564px) {\n  .md-drppicker {\n    width: auto;\n  }\n  .md-drppicker.single .calendar.left {\n    clear: none;\n  }\n  .md-drppicker.ltr {\n    direction: ltr;\n    text-align: left;\n  }\n  .md-drppicker.ltr .calendar.left {\n    clear: left;\n    /*margin-right: 1.5em;*/\n  }\n  .md-drppicker.ltr .calendar.left .calendar-table {\n    border-right: none;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  .md-drppicker.ltr .calendar.right {\n    margin-left: 0;\n  }\n  .md-drppicker.ltr .calendar.right .calendar-table {\n    border-left: none;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .md-drppicker.ltr .left .md-drppicker_input {\n    padding-right: 35px;\n  }\n  .md-drppicker.ltr .right .md-drppicker_input {\n    padding-right: 35px;\n  }\n  .md-drppicker.ltr .calendar.left .calendar-table {\n    padding-right: 12px;\n  }\n  .md-drppicker.ltr .ranges, .md-drppicker.ltr .calendar {\n    float: left;\n  }\n  .md-drppicker.rtl {\n    direction: rtl;\n    text-align: right;\n  }\n  .md-drppicker.rtl .calendar.left {\n    clear: right;\n    margin-left: 0;\n  }\n  .md-drppicker.rtl .calendar.left .calendar-table {\n    border-left: none;\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n  .md-drppicker.rtl .calendar.right {\n    margin-right: 0;\n  }\n  .md-drppicker.rtl .calendar.right .calendar-table {\n    border-right: none;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n  .md-drppicker.rtl .left .md-drppicker_input {\n    padding-left: 12px;\n  }\n  .md-drppicker.rtl .calendar.left .calendar-table {\n    padding-left: 12px;\n  }\n  .md-drppicker.rtl .ranges, .md-drppicker.rtl .calendar {\n    text-align: right;\n    float: right;\n  }\n\n  .drp-animate {\n    transform: translate(0);\n    transition: transform 0.2s ease, opacity 0.2s ease;\n  }\n  .drp-animate.drp-picker-site-this {\n    transition-timing-function: linear;\n  }\n  .drp-animate.drp-animate-right {\n    transform: translateX(10%);\n    opacity: 0;\n  }\n  .drp-animate.drp-animate-left {\n    transform: translateX(-10%);\n    opacity: 0;\n  }\n}\n@media (min-width: 730px) {\n  .md-drppicker .ranges {\n    width: auto;\n  }\n  .md-drppicker.ltr .ranges {\n    float: left;\n  }\n  .md-drppicker.rtl .ranges {\n    float: right;\n  }\n  .md-drppicker .calendar.left {\n    clear: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nanNtaXRoNjYvU29mdHdhcmVQcm9qZWN0cy9uZ3gtZGF0ZXJhbmdlcGlja2VyLW1hdGVyaWFsLWRheWpzL3NyYy9kYXRlcmFuZ2VwaWNrZXIvZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2RhdGVyYW5nZXBpY2tlci9kYXRlcmFuZ2VwaWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBQUE7QUErREE7O0NBQUE7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQWxFd0M7RUFtRXhDLHNCQWxFd0M7RUFtRXhDLGtCQUFBO0VBQ0EsWUE5QzRCO0VBK0M1QixZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSw0RUFBQTtFQWthQSxXQUFBO0VBcURBLFdBQUE7QUNoaEJGO0FEMERFO0VBQ0UsV0F0RGlDO0FDRnJDO0FEMERFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQ3hESjtBRDJERTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFFQSx1Q0FBQTtFQUNBLFdBQUE7QUMxREo7QURnRUk7RUFDRSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDOUROO0FEaUVJO0VBQ0UsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQy9ETjtBRG9FSTtFQUNFLFdBQUE7QUNsRU47QURzRUU7RUFDRSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNFLHlCQUFBO0VBQ0Usc0JBQUE7RUFDRSxxQkFBQTtFQUNJLGlCQUFBO0FDcEVkO0FEcUVJO0VBQ0UsMkJBQUE7QUNuRU47QURxRUk7RUFDRSx3QkFBQTtBQ25FTjtBRHFFSTtFQUNFLHdCQUFBO0FDbkVOO0FEcUVJO0VBQ0UscUJBQUE7QUNuRU47QURxRUk7RUFDRSxzQkFBQTtBQ25FTjtBRHFFSTtFQUNFLHFCQUFBO0FDbkVOO0FEcUVJO0VBQ0UsY0FBQTtBQ25FTjtBRHNFRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNFLHlCQUFBO0VBQ0Usc0JBQUE7RUFDRSxxQkFBQTtFQUNJLGlCQUFBO0FDcEVkO0FEcUVJO0VBQ0UsMkJBQUE7QUNuRU47QURxRUk7RUFDRSx3QkFBQTtBQ25FTjtBRHFFSTtFQUNFLHdCQUFBO0FDbkVOO0FEcUVJO0VBQ0UscUJBQUE7QUNuRU47QURxRUk7RUFDRSx1QkFBQTtBQ25FTjtBRHFFSTtFQUNFLDBCQUFBO0FDbkVOO0FEc0VJO0VBQ0UsYUFBQTtBQ3BFTjtBRHdFRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQWhLd0M7QUMwRjVDO0FEeUVNO0VBQ0UsWUFBQTtBQ3ZFUjtBRDJFSTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ3pFTjtBRDBFTTtFQUNFLG9CQUFBO0FDeEVSO0FENkVFO0VBQ0Usc0JBQUE7RUFDQSxZQXJMd0M7RUFzTHhDLGtCQWpMd0M7RUFrTHhDLHNCQWpOc0M7QUNzSTFDO0FEOEVFO0VBQ0UsV0FBQTtFQUNBLFNBQUE7QUM1RUo7QUQ4RUU7RUFDRSxjQUFBO0FDNUVKO0FEOEVFO0VBQ0Usa0JBQUE7RUFDQSxXQTVMK0I7RUE2TC9CLFlBN0wrQjtFQThML0Isa0JBaE13QztFQWlNeEMsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQzVFSjtBRCtFTTtFQUNFLGNBQUE7RUFDQSwyWkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0FDN0VSO0FEOEVRO0VBQ0UsU0FBQTtBQzVFVjtBRCtFTTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLDJaQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7QUM3RVI7QUQ4RVE7RUFDRSxTQUFBO0VBQ0EseUJBQUE7QUM1RVY7QUQrRU07RUFDRSxzQkE1UGtDO0VBNlBsQyx5QkFsUWtDO0VBbVFsQyxjQXZRa0M7RUF3UWxDLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQkFBQTtFQUNBLHdEQUFBO0FDOUVSO0FEbUZJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUNqRk47QURxRkU7RUFDTSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3REFBQTtBQ25GUjtBRHFGTTtFQUNFLHNCQWhSa0M7RUFpUmxDLHlCQWxSa0M7RUFtUmxDLFdBcFJrQztBQ2lNMUM7QUR5Rkk7RUFDRSx5QkFqU29DO0VBa1NwQyx5QkFuU29DO0VBb1NwQyxXQXJTb0M7RUF3U3BDLGdCQUFBO0FDekZOO0FENEZJO0VBQ0UsMEJBQUE7QUMxRk47QUQ2Rkk7RUFDRSwwQkFBQTtBQzNGTjtBRDhGSTtFQUNFLGtCQS9Sc0M7QUNtTTVDO0FEK0ZJO0VBQ0UscUNBQUE7RUFDQSw4QkFBQTtBQzdGTjtBRDhGTTtFQUNFLHlCQXRUa0M7RUF1VGxDLHlCQXRUa0M7RUF1VGxDLFdBelRrQztBQzZOMUM7QURrR0k7RUFDRSxXQUFBO0FDaEdOO0FEc0dJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNwR047QUR3R0U7RUFDRSw0QkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxzZ0NBQUE7QUN0R0o7QUR1R0k7RUFDRSxxQkFBQTtFQUNBLDBDQTdTYztFQThTZCxXQUFBO0VBQ0EsWUE5U1c7RUErU1gseUJBalRVO0VBa1RWLGtCQS9TVTtFQWdUVixZQS9TUztBQzBNZjtBRHNHTTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDcEdSO0FEc0dNO0VBSUUsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDdkdSO0FEMEdNO0VBRUUsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUN6R1I7QUQ4R0U7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDNUdKO0FEK0dFO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUM3R0o7QUQ4R0k7RUFDRSxlQUFBO0FDNUdOO0FENkdNO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFDQSxpQkFBQTtBQzNHUjtBRDRHUTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EseUNBQUE7RUFDQSxvQkFBQTtBQzFHVjtBRDRHUTtFQUNFLGFBQUE7QUMxR1Y7QUQ0R1E7RUFDRSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FDMUdWO0FEZ0hFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FDOUdKO0FEaUhFO0VBQ0Usc0JBQUE7RUFDQSxrQkEzWndDO0VBNFp4QyxXQWhhd0M7RUFpYXhDLFlBbmF3QztFQW9heEMsaUJBcGF3QztFQXFheEMsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUMvR0o7QURpSEk7RUFDRSxzQkFBQTtFQUNBLGtCQXZhc0M7QUN3VDVDO0FEbUhFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ2pISjtBRG1ISTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNqSE47QURxSEk7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDbkhOO0FEcUhJO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUNuSE47QUR3SEk7RUFDRSwyQkFBQTtBQ3RITjtBRDBIRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUN4SEo7QUR5SEk7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ3ZITjtBRHdITTtFQUNFLGVBQUE7QUN0SFI7QUR1SFE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNySFY7QURzSFU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUNwSFo7QURzSFU7RUFDRSxZQUFBO0FDcEhaO0FEc0hVO0VBQ0UsdUJBQUE7QUNwSFo7QUR3SE07RUFDRSxzQkFBQTtBQ3RIUjtBRDRISTtFQUNFLGVBQUE7QUMxSE47QUQ4SEU7RUFDRSxhQUFBO0FDNUhKO0FEZ0lFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQzlISjtBRGdJRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQzlISjtBRCtISTtFQUNFLHlCQUFBO0FDN0hOO0FEK0hJO0VBQ0Usa0JBQUE7QUM3SE47QUQrSEk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUM3SE47QUQrSEk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUVBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFLQSxnQ0FBQTtBQzlITjtBRGlJTTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDBEQUFBO0FDL0hSO0FEa0lJO0VBQ0UsWUFBQTtBQ2hJTjtBRGtJSTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtBQ2hJTjtBRG1JRTtFQUNFLGdCQUFBO0VBQ0Esb0NBQUE7QUNqSUo7QURrSUk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNoSU47QURxSUE7RUFDRTtJQUNFLFdBQUE7RUNsSUY7RURxSUk7SUFDRSxXQUFBO0VDbklOO0VEdUlFO0lBQ0UsY0FBQTtJQUNBLGdCQUFBO0VDcklKO0VEdUlNO0lBQ0UsV0FBQTtJQUNBLHVCQUFBO0VDcklSO0VEdUlRO0lBQ0Usa0JBQUE7SUFDQSwwQkFBQTtJQUNBLDZCQUFBO0VDcklWO0VEeUlNO0lBQ0UsY0FBQTtFQ3ZJUjtFRHlJUTtJQUNFLGlCQUFBO0lBQ0EseUJBQUE7SUFDQSw0QkFBQTtFQ3ZJVjtFRDRJSTtJQUNFLG1CQUFBO0VDMUlOO0VENElJO0lBQ0UsbUJBQUE7RUMxSU47RUQ2SUk7SUFDRSxtQkFBQTtFQzNJTjtFRDhJSTtJQUNFLFdBQUE7RUM1SU47RUQrSUU7SUFDRSxjQUFBO0lBQ0EsaUJBQUE7RUM3SUo7RUQrSU07SUFDRSxZQUFBO0lBQ0EsY0FBQTtFQzdJUjtFRCtJUTtJQUNFLGlCQUFBO0lBQ0EseUJBQUE7SUFDQSw0QkFBQTtFQzdJVjtFRGlKTTtJQUNFLGVBQUE7RUMvSVI7RURpSlE7SUFDRSxrQkFBQTtJQUNBLDBCQUFBO0lBQ0EsNkJBQUE7RUMvSVY7RURvSkk7SUFDRSxrQkFBQTtFQ2xKTjtFRHFKSTtJQUNFLGtCQUFBO0VDbkpOO0VEc0pJO0lBQ0UsaUJBQUE7SUFDQSxZQUFBO0VDcEpOOztFRHdKQTtJQUNFLHVCQUFBO0lBQ0Esa0RBQUE7RUNySkY7RUR3SkU7SUFDRSxrQ0FBQTtFQ3RKSjtFRHlKRTtJQUNFLDBCQUFBO0lBQ0EsVUFBQTtFQ3ZKSjtFRDBKRTtJQUNFLDJCQUFBO0lBQ0EsVUFBQTtFQ3hKSjtBQUNGO0FENEpBO0VBRUk7SUFDRSxXQUFBO0VDM0pKO0VEOEpJO0lBQ0UsV0FBQTtFQzVKTjtFRGdLSTtJQUNFLFlBQUE7RUM5Sk47RURrS0U7SUFDRSxzQkFBQTtFQ2hLSjtBQUNGIiwiZmlsZSI6InNyYy9kYXRlcmFuZ2VwaWNrZXIvZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiogIHZhcmlhYmxlc1xuKi9cbiRtZC1kcnBwaWNrZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICAgIGluaGVyaXQgIWRlZmF1bHQ7XG4kbWQtZHJwcGlja2VyLWJnLWNvbG9yOiAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuXG4kbWQtZHJwcGlja2VyLWNlbGwtY29sb3I6ICAgICAgICAgICAgICAgICAkbWQtZHJwcGlja2VyLWNvbG9yICFkZWZhdWx0O1xuJG1kLWRycHBpY2tlci1jZWxsLWJvcmRlci1jb2xvcjogICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kbWQtZHJwcGlja2VyLWNlbGwtYmctY29sb3I6ICAgICAgICAgICAgICAkbWQtZHJwcGlja2VyLWJnLWNvbG9yICFkZWZhdWx0O1xuXG4kbWQtZHJwcGlja2VyLWNlbGwtaG92ZXItY29sb3I6ICAgICAgICAgICAkbWQtZHJwcGlja2VyLWNvbG9yICFkZWZhdWx0O1xuJG1kLWRycHBpY2tlci1jZWxsLWhvdmVyLWJvcmRlci1jb2xvcjogICAgJG1kLWRycHBpY2tlci1jZWxsLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRtZC1kcnBwaWNrZXItY2VsbC1ob3Zlci1iZy1jb2xvcjogICAgICAgICNlZWUgIWRlZmF1bHQ7XG5cbiRtZC1kcnBwaWNrZXItaW4tcmFuZ2UtY29sb3I6ICAgICAgICAgICAgICMwMDAgIWRlZmF1bHQ7XG4kbWQtZHJwcGlja2VyLWluLXJhbmdlLWJvcmRlci1jb2xvcjogICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRtZC1kcnBwaWNrZXItaW4tcmFuZ2UtYmctY29sb3I6ICAgICAgICAgICNkZGUyZTQgIWRlZmF1bHQ7XG5cbiRtZC1kcnBwaWNrZXItYWN0aXZlLWNvbG9yOiAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kbWQtZHJwcGlja2VyLWFjdGl2ZS1iZy1jb2xvcjogICAgICAgICAgICAjM2Y1MWI1ICFkZWZhdWx0O1xuJG1kLWRycHBpY2tlci1hY3RpdmUtYm9yZGVyLWNvbG9yOiAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG5cbiRtZC1kcnBwaWNrZXItdW5zZWxlY3RlZC1jb2xvcjogICAgICAgICAgICM5OTkgIWRlZmF1bHQ7XG4kbWQtZHJwcGlja2VyLXVuc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOiAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRtZC1kcnBwaWNrZXItdW5zZWxlY3RlZC1iZy1jb2xvcjogICAgICAgICNmZmYgIWRlZmF1bHQ7XG5cbiRtZC1kcnBwaWNrZXItd2lkdGg6ICAgICAgICAgIDI3OHB4ICFkZWZhdWx0O1xuJG1kLWRycHBpY2tlci13aWR0aC1kb3VibGU6ICAgICAgICAgIGF1dG8gIWRlZmF1bHQ7XG4kbWQtZHJwcGlja2VyLWJvcmRlci1jb2xvcjogICAjY2NjICFkZWZhdWx0O1xuXG4kbWQtZHJwcGlja2VyLWNhbGVuZGFyLW1hcmdpbjogICAgICAgICAgICAgIDRweCAhZGVmYXVsdDtcbiRtZC1kcnBwaWNrZXItY2FsZW5kYXItYmctY29sb3I6ICAgICAgICAgICAgJG1kLWRycHBpY2tlci1iZy1jb2xvciAhZGVmYXVsdDtcblxuJG1kLWRycHBpY2tlci1jYWxlbmRhci1ib3JkZXItc2l6ZTogICAgICAgICAxcHggIWRlZmF1bHQ7XG4kbWQtZHJwcGlja2VyLWNhbGVuZGFyLWJvcmRlci1jb2xvcjogICAgICAgICRtZC1kcnBwaWNrZXItYmctY29sb3IgIWRlZmF1bHQ7XG4kbWQtZHJwcGlja2VyLWNhbGVuZGFyLWJvcmRlci1yYWRpdXM6ICAgICAgIDRweCAhZGVmYXVsdDtcblxuJG1kLWRycHBpY2tlci1jZWxsLXNpemU6ICAgICAgICAgICAyMHB4ICFkZWZhdWx0O1xuJG1kLWRycHBpY2tlci1jZWxsLXdpZHRoOiAgICAgICAgICAkbWQtZHJwcGlja2VyLWNlbGwtc2l6ZSAhZGVmYXVsdDtcbiRtZC1kcnBwaWNrZXItY2VsbC1oZWlnaHQ6ICAgICAgICAgJG1kLWRycHBpY2tlci1jZWxsLXNpemUgIWRlZmF1bHQ7XG5cbiRtZC1kcnBwaWNrZXItY2VsbC1ib3JkZXItcmFkaXVzOiAgJG1kLWRycHBpY2tlci1jYWxlbmRhci1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJG1kLWRycHBpY2tlci1jZWxsLWJvcmRlci1zaXplOiAgICAxcHggIWRlZmF1bHQ7XG5cbiRtZC1kcnBwaWNrZXItY29udHJvbC1oZWlnaHQ6ICAgICAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcbiRtZC1kcnBwaWNrZXItY29udHJvbC1saW5lLWhlaWdodDogICAgICAgICAgJG1kLWRycHBpY2tlci1jb250cm9sLWhlaWdodCAhZGVmYXVsdDtcbiRtZC1kcnBwaWNrZXItY29udHJvbC1jb2xvcjogICAgICAgICAgICAgICAgIzU1NSAhZGVmYXVsdDtcblxuJG1kLWRycHBpY2tlci1jb250cm9sLWJvcmRlci1zaXplOiAgICAgICAgICAxcHggIWRlZmF1bHQ7XG4kbWQtZHJwcGlja2VyLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiAgICAgICAgICNjY2MgIWRlZmF1bHQ7XG4kbWQtZHJwcGlja2VyLWNvbnRyb2wtYm9yZGVyLXJhZGl1czogICAgICAgIDRweCAhZGVmYXVsdDtcblxuJG1kLWRycHBpY2tlci1jb250cm9sLWFjdGl2ZS1ib3JkZXItc2l6ZTogICAxcHggIWRlZmF1bHQ7XG4kbWQtZHJwcGlja2VyLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogICMwOGMgIWRlZmF1bHQ7XG4kbWQtZHJwcGlja2VyLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1yYWRpdXM6ICRtZC1kcnBwaWNrZXItY29udHJvbC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kbWQtZHJwcGlja2VyLWNvbnRyb2wtZGlzYWJsZWQtY29sb3I6ICAgICAgICNjY2MgIWRlZmF1bHQ7XG4vLyBTZWxlY3RcbiRzZWxlY3QtYm9yZGVyOiAxcHggc29saWQgI2YyZjJmMiAhZGVmYXVsdDtcbiRzZWxlY3QtYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkwKSAhZGVmYXVsdDtcbiRzZWxlY3QtcGFkZGluZzogNXB4ICFkZWZhdWx0O1xuJHNlbGVjdC1yYWRpdXM6IDJweCAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQ6IDNyZW0gIWRlZmF1bHQ7XG4vKlxuKiBzdHlsZXNcbiovXG4ubWQtZHJwcGlja2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogJG1kLWRycHBpY2tlci1jb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1kLWRycHBpY2tlci1iZy1jb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogJG1kLWRycHBpY2tlci13aWR0aDtcbiAgcGFkZGluZzogNHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMTAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAmLmRvdWJsZSB7XG4gICAgd2lkdGg6ICRtZC1kcnBwaWNrZXItd2lkdGgtZG91YmxlO1xuICB9XG4gICYuaW5saW5lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgJjpiZWZvcmUsICY6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgY29udGVudDogJyc7XG4gIH1cblxuXG5cbiAgJi5vcGVuc2NlbnRlciB7XG4gICAgJjpiZWZvcmUge1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG5cbiAgJi5zaW5nbGUge1xuICAgIC5yYW5nZXMsIC5jYWxlbmRhciB7XG4gICAgICBmbG9hdDogbm9uZTtcbiAgICB9XG4gIH1cblxuICAmLnNob3duIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgJi5kcm9wcy11cC1sZWZ0IHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgICB9XG4gICAgJi5kcm9wcy11cC1yaWdodCB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG4gICAgfVxuICAgICYuZHJvcHMtZG93bi1sZWZ0IHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMDtcbiAgICB9XG4gICAgJi5kcm9wcy1kb3duLXJpZ2h0IHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICB9XG4gICAgJi5kcm9wcy1kb3duLWNlbnRlciB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUlIDA7XG4gICAgfVxuICAgICYuZHJvcHMtdXAtY2VudGVyIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSUgMTAwJTtcbiAgICB9XG4gICAgLmNhbGVuZGFyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuICAmLmhpZGRlbiB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICYuZHJvcHMtdXAtbGVmdCB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gICAgfVxuICAgICYuZHJvcHMtdXAtcmlnaHQge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICAgIH1cbiAgICAmLmRyb3BzLWRvd24tbGVmdCB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDA7XG4gICAgfVxuICAgICYuZHJvcHMtZG93bi1yaWdodCB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gICAgfVxuICAgICYuZHJvcHMtZG93bi1jZW50ZXIge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XG4gICAgfVxuICAgICYuZHJvcHMtdXAtY2VudGVyIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICAgIH1cbiAgICBcbiAgICAuY2FsZW5kYXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAuY2FsZW5kYXIge1xuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXG4gICAgbWF4LXdpZHRoOiAkbWQtZHJwcGlja2VyLXdpZHRoIC0gKCRtZC1kcnBwaWNrZXItY2FsZW5kYXItbWFyZ2luICogMik7XG4gICAgbWFyZ2luOiAkbWQtZHJwcGlja2VyLWNhbGVuZGFyLW1hcmdpbjtcblxuICAgICYuc2luZ2xlIHtcbiAgICAgIC5jYWxlbmRhci10YWJsZSB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aCwgdGQge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtaW4td2lkdGg6IDMycHg7XG4gICAgICBzcGFuIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNhbGVuZGFyLXRhYmxlIHtcbiAgICBib3JkZXI6ICRtZC1kcnBwaWNrZXItY2FsZW5kYXItYm9yZGVyLXNpemUgc29saWQgJG1kLWRycHBpY2tlci1jYWxlbmRhci1ib3JkZXItY29sb3I7XG4gICAgcGFkZGluZzogJG1kLWRycHBpY2tlci1jYWxlbmRhci1tYXJnaW47XG4gICAgYm9yZGVyLXJhZGl1czogJG1kLWRycHBpY2tlci1jYWxlbmRhci1ib3JkZXItcmFkaXVzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtZC1kcnBwaWNrZXItY2FsZW5kYXItYmctY29sb3I7XG4gIH1cblxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIHRoIHtcbiAgICBjb2xvcjogIzk4OGM4YztcbiAgfVxuICB0ZCwgdGgge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogJG1kLWRycHBpY2tlci1jZWxsLXdpZHRoO1xuICAgIGhlaWdodDogJG1kLWRycHBpY2tlci1jZWxsLWhlaWdodDtcbiAgICBib3JkZXItcmFkaXVzOiAkbWQtZHJwcGlja2VyLWNlbGwtYm9yZGVyLXJhZGl1cztcbiAgICBib3JkZXI6ICRtZC1kcnBwaWNrZXItY2VsbC1ib3JkZXItc2l6ZSBzb2xpZCAkbWQtZHJwcGlja2VyLWNlbGwtYm9yZGVyLWNvbG9yO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMmVtO1xuICAgIHdpZHRoOiAyZW07XG5cbiAgICAmLmF2YWlsYWJsZSB7XG4gICAgICAmLnByZXYge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWcwS0NTQjJhV1YzUW05NFBTSXdJREFnTXk0M0lEWWlJR1Z1WVdKc1pTMWlZV05yWjNKdmRXNWtQU0p1WlhjZ01DQXdJRE11TnlBMklpQjRiV3c2YzNCaFkyVTlJbkJ5WlhObGNuWmxJajROQ2p4blBnMEtDVHh3WVhSb0lHUTlJazB6TGpjc01DNDNUREV1TkN3emJESXVNeXd5TGpOTU15dzJUREFzTTJ3ekxUTk1NeTQzTERBdU4zb2lMejROQ2p3dlp6NE5Dand2YzNablBnMEtcIik7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogLjVlbTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgZWFzZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMmVtO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICYubmV4dCB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZzBLQ1NCMmFXVjNRbTk0UFNJd0lEQWdNeTQzSURZaUlHVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a1BTSnVaWGNnTUNBd0lETXVOeUEySWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNE5DanhuUGcwS0NUeHdZWFJvSUdROUlrMHpMamNzTUM0M1RERXVOQ3d6YkRJdU15d3lMak5NTXl3MlREQXNNMnd6TFROTU15NDNMREF1TjNvaUx6NE5Dand2Wno0TkNqd3ZjM1puUGcwS1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAuNWVtO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyZW07XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1kLWRycHBpY2tlci1jZWxsLWhvdmVyLWJnLWNvbG9yO1xuICAgICAgICBib3JkZXItY29sb3I6ICRtZC1kcnBwaWNrZXItY2VsbC1ob3Zlci1ib3JkZXItY29sb3I7XG4gICAgICAgIGNvbG9yOiAkbWQtZHJwcGlja2VyLWNlbGwtaG92ZXItY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogLjVlbTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IC4yNWVtIDA7XG4gICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICAvKnRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2U7Ki9cbiAgICAgICAgYm9yZGVyLXJhZGl1czogMmVtO1xuXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCA0NTBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgMG1zO1xuXG4gICAgICB9XG4gICAgfVxuXG4gICAgJi53ZWVrIHtcbiAgICAgIGZvbnQtc2l6ZTogODAlO1xuICAgICAgY29sb3I6ICNjY2M7XG4gICAgfVxuICB9XG5cbiAgdGQge1xuICAgICAgICBtYXJnaW46IC4yNWVtIDA7XG4gICAgICAgIG9wYWNpdHk6IC44O1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBlYXNlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyZW07XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCA0NTBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgMG1zO1xuICAgICYub2ZmIHtcbiAgICAgICYsICYuaW4tcmFuZ2UsICYuc3RhcnQtZGF0ZSwgJi5lbmQtZGF0ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtZC1kcnBwaWNrZXItdW5zZWxlY3RlZC1iZy1jb2xvcjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWQtZHJwcGlja2VyLXVuc2VsZWN0ZWQtYm9yZGVyLWNvbG9yO1xuICAgICAgICBjb2xvcjogJG1kLWRycHBpY2tlci11bnNlbGVjdGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vXG4gICAgLy8gRGF0ZSBSYW5nZVxuICAgICYuaW4tcmFuZ2Uge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1kLWRycHBpY2tlci1pbi1yYW5nZS1iZy1jb2xvcjtcbiAgICAgIGJvcmRlci1jb2xvcjogJG1kLWRycHBpY2tlci1pbi1yYW5nZS1ib3JkZXItY29sb3I7XG4gICAgICBjb2xvcjogJG1kLWRycHBpY2tlci1pbi1yYW5nZS1jb2xvcjtcblxuICAgICAgLy8gVE9ETzogU2hvdWxkIHRoaXMgYmUgc3RhdGljIG9yIHNob3VsZCBpdCBiZSBwYXJhbWV0ZXJpemVkP1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG5cbiAgICAmLnN0YXJ0LWRhdGUge1xuICAgICAgYm9yZGVyLXJhZGl1czogMmVtIDAgMCAyZW07XG4gICAgfVxuXG4gICAgJi5lbmQtZGF0ZSB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwIDJlbSAyZW0gMDtcbiAgICB9XG5cbiAgICAmLnN0YXJ0LWRhdGUuZW5kLWRhdGUge1xuICAgICAgYm9yZGVyLXJhZGl1czogJG1kLWRycHBpY2tlci1jZWxsLWJvcmRlci1yYWRpdXM7XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAzMDBtcyBlYXNlLW91dDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICYsICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWQtZHJwcGlja2VyLWFjdGl2ZS1iZy1jb2xvcjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWQtZHJwcGlja2VyLWFjdGl2ZS1ib3JkZXItY29sb3I7XG4gICAgICAgIGNvbG9yOiAkbWQtZHJwcGlja2VyLWFjdGl2ZS1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aCB7XG4gICAgJi5tb250aCB7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICB9XG4gIH1cblxuICAvLyBkaXNhYmxlZCBjb250cm9sc1xuICB0ZCwgb3B0aW9uIHtcbiAgICAmLmRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIH1cbiAgfVxuXG4gIC5kcm9wZG93bnMge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogcmlnaHQ7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4O2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpYVhOdkxUZzROVGt0TVNJL1BnbzhJUzB0SUVkbGJtVnlZWFJ2Y2pvZ1FXUnZZbVVnU1d4c2RYTjBjbUYwYjNJZ01UWXVNQzR3TENCVFZrY2dSWGh3YjNKMElGQnNkV2N0U1c0Z0xpQlRWa2NnVm1WeWMybHZiam9nTmk0d01DQkNkV2xzWkNBd0tTQWdMUzArQ2p3aFJFOURWRmxRUlNCemRtY2dVRlZDVEVsRElDSXRMeTlYTTBNdkwwUlVSQ0JUVmtjZ01TNHhMeTlGVGlJZ0ltaDBkSEE2THk5M2QzY3Vkek11YjNKbkwwZHlZWEJvYVdOekwxTldSeTh4TGpFdlJGUkVMM04yWnpFeExtUjBaQ0krQ2p4emRtY2dlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2RtVnljMmx2YmowaU1TNHhJaUJwWkQwaVEyRndZVjh4SWlCNFBTSXdjSGdpSUhrOUlqQndlQ0lnZDJsa2RHZzlJakUyY0hnaUlHaGxhV2RvZEQwaU1UWndlQ0lnZG1sbGQwSnZlRDBpTUNBd0lESTFOU0F5TlRVaUlITjBlV3hsUFNKbGJtRmliR1V0WW1GamEyZHliM1Z1WkRwdVpYY2dNQ0F3SURJMU5TQXlOVFU3SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNEtQR2MrQ2drOFp5QnBaRDBpWVhKeWIzY3RaSEp2Y0Mxa2IzZHVJajRLQ1FrOGNHOXNlV2R2YmlCd2IybHVkSE05SWpBc05qTXVOelVnTVRJM0xqVXNNVGt4TGpJMUlESTFOU3cyTXk0M05TQWdJQ0lnWm1sc2JEMGlJems0T0dNNFl5SXZQZ29KUEM5blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p4blBnbzhMMmMrQ2p3dmMzWm5QZ289KTtcbiAgICBzZWxlY3Qge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNlbGVjdC1iYWNrZ3JvdW5kO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAkc2VsZWN0LXBhZGRpbmc7XG4gICAgICBib3JkZXI6ICRzZWxlY3QtYm9yZGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogJHNlbGVjdC1yYWRpdXM7XG4gICAgICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQ7XG4gICAgICAmLm1vbnRoc2VsZWN0LCAmLnllYXJzZWxlY3Qge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHBhZGRpbmc6IDFweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIH1cbiAgICAgICYuaG91cnNlbGVjdCwgXG4gICAgICAmLm1pbnV0ZXNlbGVjdCxcbiAgICAgICYuc2Vjb25kc2VsZWN0LFxuICAgICAgJi5hbXBtc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cblxuICAgICAgJi5tb250aHNlbGVjdCxcbiAgICAgICYueWVhcnNlbGVjdCB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgdG9wOiAwOyBcbiAgICAgICAgbGVmdDogMDsgXG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aC5tb250aCA+IGRpdiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAuY2FsZW5kYXItdGltZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogNHB4IGF1dG8gMCBhdXRvO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuc2VsZWN0IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgIC5zZWxlY3QtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsIDAuMTIpO1xuICAgICAgICAvKiBSZW1vdmUgZm9jdXMgKi9cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMThweDtcbiAgICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgICAvKiBTdHlsaW5nIHRoZSBkb3duIGFycm93ICovXG4gICAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItdG9wOiA2cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5zZWxlY3QtbGFiZWwge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLCAwLjI2KTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmNhbGVuZGFyLXRpbWUgc2VsZWN0LmRpc2FibGVkIHtcbiAgICBjb2xvcjogI2NjYztcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5cbiAgLmxhYmVsLWlucHV0IHtcbiAgICBib3JkZXI6ICRtZC1kcnBwaWNrZXItY29udHJvbC1ib3JkZXItc2l6ZSBzb2xpZCAkbWQtZHJwcGlja2VyLWNvbnRyb2wtYm9yZGVyLWNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6ICRtZC1kcnBwaWNrZXItY29udHJvbC1ib3JkZXItcmFkaXVzO1xuICAgIGNvbG9yOiAkbWQtZHJwcGlja2VyLWNvbnRyb2wtY29sb3I7XG4gICAgaGVpZ2h0OiAkbWQtZHJwcGlja2VyLWNvbnRyb2wtbGluZS1oZWlnaHQ7XG4gICAgbGluZS1oZWlnaHQ6ICRtZC1kcnBwaWNrZXItY29udHJvbC1oZWlnaHQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW46IDAgYXV0byA1cHggYXV0bztcbiAgICBwYWRkaW5nOiAwIDAgMCAyOHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJi5hY3RpdmUge1xuICAgICAgYm9yZGVyOiAkbWQtZHJwcGlja2VyLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1zaXplIHNvbGlkICRtZC1kcnBwaWNrZXItY29udHJvbC1hY3RpdmUtYm9yZGVyLWNvbG9yO1xuICAgICAgYm9yZGVyLXJhZGl1czogJG1kLWRycHBpY2tlci1jb250cm9sLWFjdGl2ZS1ib3JkZXItcmFkaXVzO1xuICAgIH1cbiAgfVxuXG4gIC5tZC1kcnBwaWNrZXJfaW5wdXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAwIDMwcHggMCAwO1xuXG4gICAgaSwgc3ZnIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDhweDtcbiAgICAgIHRvcDogOHB4O1xuICAgIH1cbiAgfVxuICAmLnJ0bCB7XG4gICAgLmxhYmVsLWlucHV0IHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDI4cHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICB9XG4gICAgLm1kLWRycHBpY2tlcl9pbnB1dCBpLCAgLm1kLWRycHBpY2tlcl9pbnB1dCBzdmd7XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgICAgcmlnaHQ6IDhweDtcbiAgICB9XG4gIH1cbiAgLyogcmFuZ2VzICovXG4gIC5zaG93LXJhbmdlcyB7XG4gICAgLmRycC1jYWxlbmRhci5sZWZ0IHtcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RkZDtcbiAgICB9XG4gIH1cblxuICAucmFuZ2VzIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogMDtcbiAgICB1bCB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBsaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgICB9XG4gICAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnNob3ctY2FsZW5kYXIge1xuICAgIC5yYW5nZXMge1xuICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIH1cbiAgfVxuICAgIFxuICBbaGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC8qIGJ1dHRvbiAqL1xuICAuYnV0dG9ucyB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luOiAwIDVweCA1cHggMDtcbiAgfVxuICAuYnRuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwcHggNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgLjYpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gICAgY29sb3I6ICNlY2YwZjE7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuNHM7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgICB9XG4gICAgJiA+ICoge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAmIHNwYW4ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gICAgfVxuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIGxlZnQ6IDUwJTtcblxuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM2LCAyNDAsIDI0MSwgLjMpO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cbiAgICAmOmFjdGl2ZSB7XG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIHdpZHRoOiAxMjAlO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTIwJTtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggLjJzIGVhc2Utb3V0LCBwYWRkaW5nLXRvcCAuMnMgZWFzZS1vdXQ7XG4gICAgICB9XG4gICAgfVxuICAgICY6ZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTowLjU7XG4gICAgfVxuICAgICYuYnRuLWRlZmF1bHQge1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xuICAgIH1cbiAgfVxuICAuY2xlYXIge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgIHN2ZyB7XG4gICAgICBjb2xvcjogI2ViMzIzMjtcbiAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU2NHB4KSB7XG4gIC5tZC1kcnBwaWNrZXIge1xuICAgIHdpZHRoOiBhdXRvO1xuXG4gICAgJi5zaW5nbGUge1xuICAgICAgLmNhbGVuZGFyLmxlZnQge1xuICAgICAgICBjbGVhcjogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmx0ciB7XG4gICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAuY2FsZW5kYXJ7XG4gICAgICAgICYubGVmdCB7XG4gICAgICAgICAgY2xlYXI6IGxlZnQ7XG4gICAgICAgICAgLyptYXJnaW4tcmlnaHQ6IDEuNWVtOyovXG5cbiAgICAgICAgICAuY2FsZW5kYXItdGFibGUge1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLnJpZ2h0IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcblxuICAgICAgICAgIC5jYWxlbmRhci10YWJsZSB7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubGVmdCAubWQtZHJwcGlja2VyX2lucHV0IHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgICAgIH1cbiAgICAgIC5yaWdodCAubWQtZHJwcGlja2VyX2lucHV0IHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgICAgIH1cblxuICAgICAgLmNhbGVuZGFyLmxlZnQgLmNhbGVuZGFyLXRhYmxlIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgICAgIH1cblxuICAgICAgLnJhbmdlcywgLmNhbGVuZGFyIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICB9XG4gICAgfVxuICAgICYucnRsIHtcbiAgICAgIGRpcmVjdGlvbjogcnRsO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAuY2FsZW5kYXJ7XG4gICAgICAgICYubGVmdCB7XG4gICAgICAgICAgY2xlYXI6IHJpZ2h0O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuXG4gICAgICAgICAgLmNhbGVuZGFyLXRhYmxlIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5yaWdodCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuXG4gICAgICAgICAgLmNhbGVuZGFyLXRhYmxlIHtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5sZWZ0IC5tZC1kcnBwaWNrZXJfaW5wdXQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIC5jYWxlbmRhci5sZWZ0IC5jYWxlbmRhci10YWJsZSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcbiAgICAgIH1cblxuICAgICAgLnJhbmdlcywgLmNhbGVuZGFyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmRycC1hbmltYXRlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2UsXG4gICAgICAgICAgICAgICAgb3BhY2l0eSAuMnMgZWFzZTtcblxuICAgICYuZHJwLXBpY2tlci1zaXRlLXRoaXMge1xuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICB9XG5cbiAgICAmLmRycC1hbmltYXRlLXJpZ2h0IHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMCUpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAmLmRycC1hbmltYXRlLWxlZnQge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMCUpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDczMHB4KSB7XG4gIC5tZC1kcnBwaWNrZXIge1xuICAgIC5yYW5nZXMge1xuICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxuICAgICYubHRyIHtcbiAgICAgIC5yYW5nZXMge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5ydGwge1xuICAgICAgLnJhbmdlcyB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FsZW5kYXIubGVmdCB7XG4gICAgICBjbGVhcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG4iLCIvKlxuKiAgdmFyaWFibGVzXG4qL1xuLypcbiogc3R5bGVzXG4qL1xuLm1kLWRycHBpY2tlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDI3OHB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxMDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIC8qIHJhbmdlcyAqL1xuICAvKiBidXR0b24gKi9cbn1cbi5tZC1kcnBwaWNrZXIuZG91YmxlIHtcbiAgd2lkdGg6IGF1dG87XG59XG4ubWQtZHJwcGlja2VyLmlubGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm1kLWRycHBpY2tlcjpiZWZvcmUsIC5tZC1kcnBwaWNrZXI6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjb250ZW50OiBcIlwiO1xufVxuLm1kLWRycHBpY2tlci5vcGVuc2NlbnRlcjpiZWZvcmUge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ubWQtZHJwcGlja2VyLm9wZW5zY2VudGVyOmFmdGVyIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLm1kLWRycHBpY2tlci5zaW5nbGUgLnJhbmdlcywgLm1kLWRycHBpY2tlci5zaW5nbGUgLmNhbGVuZGFyIHtcbiAgZmxvYXQ6IG5vbmU7XG59XG4ubWQtZHJwcGlja2VyLnNob3duIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLm1kLWRycHBpY2tlci5zaG93bi5kcm9wcy11cC1sZWZ0IHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xufVxuLm1kLWRycHBpY2tlci5zaG93bi5kcm9wcy11cC1yaWdodCB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbn1cbi5tZC1kcnBwaWNrZXIuc2hvd24uZHJvcHMtZG93bi1sZWZ0IHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwO1xufVxuLm1kLWRycHBpY2tlci5zaG93bi5kcm9wcy1kb3duLXJpZ2h0IHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xufVxuLm1kLWRycHBpY2tlci5zaG93bi5kcm9wcy1kb3duLWNlbnRlciB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IE5hTiU7XG59XG4ubWQtZHJwcGlja2VyLnNob3duLmRyb3BzLXVwLWNlbnRlciB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJTtcbn1cbi5tZC1kcnBwaWNrZXIuc2hvd24gLmNhbGVuZGFyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWQtZHJwcGlja2VyLmhpZGRlbiB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2U7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ubWQtZHJwcGlja2VyLmhpZGRlbi5kcm9wcy11cC1sZWZ0IHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xufVxuLm1kLWRycHBpY2tlci5oaWRkZW4uZHJvcHMtdXAtcmlnaHQge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XG59XG4ubWQtZHJwcGlja2VyLmhpZGRlbi5kcm9wcy1kb3duLWxlZnQge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDA7XG59XG4ubWQtZHJwcGlja2VyLmhpZGRlbi5kcm9wcy1kb3duLXJpZ2h0IHtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xufVxuLm1kLWRycHBpY2tlci5oaWRkZW4uZHJvcHMtZG93bi1jZW50ZXIge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcbn1cbi5tZC1kcnBwaWNrZXIuaGlkZGVuLmRyb3BzLXVwLWNlbnRlciB7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xufVxuLm1kLWRycHBpY2tlci5oaWRkZW4gLmNhbGVuZGFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5tZC1kcnBwaWNrZXIgLmNhbGVuZGFyIHtcbiAgLyogZGlzcGxheTogbm9uZTsgKi9cbiAgbWF4LXdpZHRoOiAyNzBweDtcbiAgbWFyZ2luOiA0cHg7XG59XG4ubWQtZHJwcGlja2VyIC5jYWxlbmRhci5zaW5nbGUgLmNhbGVuZGFyLXRhYmxlIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLm1kLWRycHBpY2tlciAuY2FsZW5kYXIgdGgsIC5tZC1kcnBwaWNrZXIgLmNhbGVuZGFyIHRkIHtcbiAgcGFkZGluZzogMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4td2lkdGg6IDMycHg7XG59XG4ubWQtZHJwcGlja2VyIC5jYWxlbmRhciB0aCBzcGFuLCAubWQtZHJwcGlja2VyIC5jYWxlbmRhciB0ZCBzcGFuIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ubWQtZHJwcGlja2VyIC5jYWxlbmRhci10YWJsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLm1kLWRycHBpY2tlciB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG59XG4ubWQtZHJwcGlja2VyIHRoIHtcbiAgY29sb3I6ICM5ODhjOGM7XG59XG4ubWQtZHJwcGlja2VyIHRkLCAubWQtZHJwcGlja2VyIHRoIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMmVtO1xuICB3aWR0aDogMmVtO1xufVxuLm1kLWRycHBpY2tlciB0ZC5hdmFpbGFibGUucHJldiwgLm1kLWRycHBpY2tlciB0aC5hdmFpbGFibGUucHJldiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZzBLQ1NCMmFXVjNRbTk0UFNJd0lEQWdNeTQzSURZaUlHVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a1BTSnVaWGNnTUNBd0lETXVOeUEySWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNE5DanhuUGcwS0NUeHdZWFJvSUdROUlrMHpMamNzTUM0M1RERXVOQ3d6YkRJdU15d3lMak5NTXl3MlREQXNNMnd6TFROTU15NDNMREF1TjNvaUx6NE5Dand2Wno0TkNqd3ZjM1puUGcwS1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAwLjVlbTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuICBib3JkZXItcmFkaXVzOiAyZW07XG59XG4ubWQtZHJwcGlja2VyIHRkLmF2YWlsYWJsZS5wcmV2OmhvdmVyLCAubWQtZHJwcGlja2VyIHRoLmF2YWlsYWJsZS5wcmV2OmhvdmVyIHtcbiAgbWFyZ2luOiAwO1xufVxuLm1kLWRycHBpY2tlciB0ZC5hdmFpbGFibGUubmV4dCwgLm1kLWRycHBpY2tlciB0aC5hdmFpbGFibGUubmV4dCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZzBLQ1NCMmFXVjNRbTk0UFNJd0lEQWdNeTQzSURZaUlHVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a1BTSnVaWGNnTUNBd0lETXVOeUEySWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNE5DanhuUGcwS0NUeHdZWFJvSUdROUlrMHpMamNzTUM0M1RERXVOQ3d6YkRJdU15d3lMak5NTXl3MlREQXNNMnd6TFROTU15NDNMREF1TjNvaUx6NE5Dand2Wno0TkNqd3ZjM1puUGcwS1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAwLjVlbTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBvcGFjaXR5OiAwLjg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuICBib3JkZXItcmFkaXVzOiAyZW07XG59XG4ubWQtZHJwcGlja2VyIHRkLmF2YWlsYWJsZS5uZXh0OmhvdmVyLCAubWQtZHJwcGlja2VyIHRoLmF2YWlsYWJsZS5uZXh0OmhvdmVyIHtcbiAgbWFyZ2luOiAwO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuLm1kLWRycHBpY2tlciB0ZC5hdmFpbGFibGU6aG92ZXIsIC5tZC1kcnBwaWNrZXIgdGguYXZhaWxhYmxlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMC41ZW07XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgbWFyZ2luOiAwLjI1ZW0gMDtcbiAgb3BhY2l0eTogMC44O1xuICAvKnRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2U7Ki9cbiAgYm9yZGVyLXJhZGl1czogMmVtO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgNDUwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIDBtcztcbn1cbi5tZC1kcnBwaWNrZXIgdGQud2VlaywgLm1kLWRycHBpY2tlciB0aC53ZWVrIHtcbiAgZm9udC1zaXplOiA4MCU7XG4gIGNvbG9yOiAjY2NjO1xufVxuLm1kLWRycHBpY2tlciB0ZCB7XG4gIG1hcmdpbjogMC4yNWVtIDA7XG4gIG9wYWNpdHk6IDAuODtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDQ1MG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSAwbXM7XG59XG4ubWQtZHJwcGlja2VyIHRkLm9mZiwgLm1kLWRycHBpY2tlciB0ZC5vZmYuaW4tcmFuZ2UsIC5tZC1kcnBwaWNrZXIgdGQub2ZmLnN0YXJ0LWRhdGUsIC5tZC1kcnBwaWNrZXIgdGQub2ZmLmVuZC1kYXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM5OTk7XG59XG4ubWQtZHJwcGlja2VyIHRkLmluLXJhbmdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZTJlNDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMwMDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4ubWQtZHJwcGlja2VyIHRkLnN0YXJ0LWRhdGUge1xuICBib3JkZXItcmFkaXVzOiAyZW0gMCAwIDJlbTtcbn1cbi5tZC1kcnBwaWNrZXIgdGQuZW5kLWRhdGUge1xuICBib3JkZXItcmFkaXVzOiAwIDJlbSAyZW0gMDtcbn1cbi5tZC1kcnBwaWNrZXIgdGQuc3RhcnQtZGF0ZS5lbmQtZGF0ZSB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5tZC1kcnBwaWNrZXIgdGQuYWN0aXZlIHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAzMDBtcyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLm1kLWRycHBpY2tlciB0ZC5hY3RpdmUsIC5tZC1kcnBwaWNrZXIgdGQuYWN0aXZlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7XG59XG4ubWQtZHJwcGlja2VyIHRoLm1vbnRoIHtcbiAgd2lkdGg6IGF1dG87XG59XG4ubWQtZHJwcGlja2VyIHRkLmRpc2FibGVkLCAubWQtZHJwcGlja2VyIG9wdGlvbi5kaXNhYmxlZCB7XG4gIGNvbG9yOiAjOTk5O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbi5tZC1kcnBwaWNrZXIgLmRyb3Bkb3ducyB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogcmlnaHQ7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO3V0Zjg7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlhWE52TFRnNE5Ua3RNU0kvUGdvOElTMHRJRWRsYm1WeVlYUnZjam9nUVdSdlltVWdTV3hzZFhOMGNtRjBiM0lnTVRZdU1DNHdMQ0JUVmtjZ1JYaHdiM0owSUZCc2RXY3RTVzRnTGlCVFZrY2dWbVZ5YzJsdmJqb2dOaTR3TUNCQ2RXbHNaQ0F3S1NBZ0xTMCtDandoUkU5RFZGbFFSU0J6ZG1jZ1VGVkNURWxESUNJdEx5OVhNME12TDBSVVJDQlRWa2NnTVM0eEx5OUZUaUlnSW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTDBkeVlYQm9hV056TDFOV1J5OHhMakV2UkZSRUwzTjJaekV4TG1SMFpDSStDanh6ZG1jZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZG1WeWMybHZiajBpTVM0eElpQnBaRDBpUTJGd1lWOHhJaUI0UFNJd2NIZ2lJSGs5SWpCd2VDSWdkMmxrZEdnOUlqRTJjSGdpSUdobGFXZG9kRDBpTVRad2VDSWdkbWxsZDBKdmVEMGlNQ0F3SURJMU5TQXlOVFVpSUhOMGVXeGxQU0psYm1GaWJHVXRZbUZqYTJkeWIzVnVaRHB1WlhjZ01DQXdJREkxTlNBeU5UVTdJaUI0Yld3NmMzQmhZMlU5SW5CeVpYTmxjblpsSWo0S1BHYytDZ2s4WnlCcFpEMGlZWEp5YjNjdFpISnZjQzFrYjNkdUlqNEtDUWs4Y0c5c2VXZHZiaUJ3YjJsdWRITTlJakFzTmpNdU56VWdNVEkzTGpVc01Ua3hMakkxSURJMU5TdzJNeTQzTlNBZ0lDSWdabWxzYkQwaUl6azRPR000WXlJdlBnb0pQQzluUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDanhuUGdvOEwyYytDand2YzNablBnbz0pO1xufVxuLm1kLWRycHBpY2tlciAuZHJvcGRvd25zIHNlbGVjdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjJmMmYyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGhlaWdodDogM3JlbTtcbn1cbi5tZC1kcnBwaWNrZXIgLmRyb3Bkb3ducyBzZWxlY3QubW9udGhzZWxlY3QsIC5tZC1kcnBwaWNrZXIgLmRyb3Bkb3ducyBzZWxlY3QueWVhcnNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogMXB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMDtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLm1kLWRycHBpY2tlciAuZHJvcGRvd25zIHNlbGVjdC5ob3Vyc2VsZWN0LCAubWQtZHJwcGlja2VyIC5kcm9wZG93bnMgc2VsZWN0Lm1pbnV0ZXNlbGVjdCwgLm1kLWRycHBpY2tlciAuZHJvcGRvd25zIHNlbGVjdC5zZWNvbmRzZWxlY3QsIC5tZC1kcnBwaWNrZXIgLmRyb3Bkb3ducyBzZWxlY3QuYW1wbXNlbGVjdCB7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgcGFkZGluZzogMnB4O1xuICBvdXRsaW5lOiAwO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWQtZHJwcGlja2VyIC5kcm9wZG93bnMgc2VsZWN0Lm1vbnRoc2VsZWN0LCAubWQtZHJwcGlja2VyIC5kcm9wZG93bnMgc2VsZWN0LnllYXJzZWxlY3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4ubWQtZHJwcGlja2VyIHRoLm1vbnRoID4gZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ubWQtZHJwcGlja2VyIC5jYWxlbmRhci10aW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDRweCBhdXRvIDAgYXV0bztcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tZC1kcnBwaWNrZXIgLmNhbGVuZGFyLXRpbWUgLnNlbGVjdCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5tZC1kcnBwaWNrZXIgLmNhbGVuZGFyLXRpbWUgLnNlbGVjdCAuc2VsZWN0LWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAvKiBSZW1vdmUgZm9jdXMgKi9cbn1cbi5tZC1kcnBwaWNrZXIgLmNhbGVuZGFyLXRpbWUgLnNlbGVjdCAuc2VsZWN0LWl0ZW06YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMThweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIC8qIFN0eWxpbmcgdGhlIGRvd24gYXJyb3cgKi9cbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZzogMDtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDZweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5tZC1kcnBwaWNrZXIgLmNhbGVuZGFyLXRpbWUgLnNlbGVjdCAuc2VsZWN0LWl0ZW06Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLm1kLWRycHBpY2tlciAuY2FsZW5kYXItdGltZSAuc2VsZWN0IC5zZWxlY3QtaXRlbSAuc2VsZWN0LWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xufVxuLm1kLWRycHBpY2tlciAuY2FsZW5kYXItdGltZSBzZWxlY3QuZGlzYWJsZWQge1xuICBjb2xvcjogI2NjYztcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi5tZC1kcnBwaWNrZXIgLmxhYmVsLWlucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogIzU1NTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbjogMCBhdXRvIDVweCBhdXRvO1xuICBwYWRkaW5nOiAwIDAgMCAyOHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5tZC1kcnBwaWNrZXIgLmxhYmVsLWlucHV0LmFjdGl2ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwOGM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5tZC1kcnBwaWNrZXIgLm1kLWRycHBpY2tlcl9pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCAzMHB4IDAgMDtcbn1cbi5tZC1kcnBwaWNrZXIgLm1kLWRycHBpY2tlcl9pbnB1dCBpLCAubWQtZHJwcGlja2VyIC5tZC1kcnBwaWNrZXJfaW5wdXQgc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4cHg7XG4gIHRvcDogOHB4O1xufVxuLm1kLWRycHBpY2tlci5ydGwgLmxhYmVsLWlucHV0IHtcbiAgcGFkZGluZy1yaWdodDogMjhweDtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG59XG4ubWQtZHJwcGlja2VyLnJ0bCAubWQtZHJwcGlja2VyX2lucHV0IGksIC5tZC1kcnBwaWNrZXIucnRsIC5tZC1kcnBwaWNrZXJfaW5wdXQgc3ZnIHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IDhweDtcbn1cbi5tZC1kcnBwaWNrZXIgLnNob3ctcmFuZ2VzIC5kcnAtY2FsZW5kYXIubGVmdCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RkZDtcbn1cbi5tZC1kcnBwaWNrZXIgLnJhbmdlcyB7XG4gIGZsb2F0OiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDA7XG59XG4ubWQtZHJwcGlja2VyIC5yYW5nZXMgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWQtZHJwcGlja2VyIC5yYW5nZXMgdWwgbGkge1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWQtZHJwcGlja2VyIC5yYW5nZXMgdWwgbGkgYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tZC1kcnBwaWNrZXIgLnJhbmdlcyB1bCBsaSBidXR0b24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgY29sb3I6ICNmZmY7XG59XG4ubWQtZHJwcGlja2VyIC5yYW5nZXMgdWwgbGkgYnV0dG9uW2Rpc2FibGVkXSB7XG4gIG9wYWNpdHk6IDAuMztcbn1cbi5tZC1kcnBwaWNrZXIgLnJhbmdlcyB1bCBsaSBidXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ubWQtZHJwcGlja2VyIC5yYW5nZXMgdWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuLm1kLWRycHBpY2tlciAuc2hvdy1jYWxlbmRhciAucmFuZ2VzIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLm1kLWRycHBpY2tlciBbaGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubWQtZHJwcGlja2VyIC5idXR0b25zIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbjogMCA1cHggNXB4IDA7XG59XG4ubWQtZHJwcGlja2VyIC5idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci13aWR0aDogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMHB4IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiAjZWNmMGYxO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNHM7XG4gIGhlaWdodDogYXV0bztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5tZC1kcnBwaWNrZXIgLmJ0bjpob3ZlciwgLm1kLWRycHBpY2tlciAuYnRuOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbn1cbi5tZC1kcnBwaWNrZXIgLmJ0biA+ICoge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWQtZHJwcGlja2VyIC5idG4gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMnB4IDI0cHg7XG59XG4ubWQtZHJwcGlja2VyIC5idG46YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNiwgMjQwLCAyNDEsIDAuMyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLm1kLWRycHBpY2tlciAuYnRuOmFjdGl2ZTpiZWZvcmUge1xuICB3aWR0aDogMTIwJTtcbiAgcGFkZGluZy10b3A6IDEyMCU7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMnMgZWFzZS1vdXQsIHBhZGRpbmctdG9wIDAuMnMgZWFzZS1vdXQ7XG59XG4ubWQtZHJwcGlja2VyIC5idG46ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG4ubWQtZHJwcGlja2VyIC5idG4uYnRuLWRlZmF1bHQge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcbn1cbi5tZC1kcnBwaWNrZXIgLmNsZWFyIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuLm1kLWRycHBpY2tlciAuY2xlYXIgc3ZnIHtcbiAgY29sb3I6ICNlYjMyMzI7XG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU2NHB4KSB7XG4gIC5tZC1kcnBwaWNrZXIge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG4gIC5tZC1kcnBwaWNrZXIuc2luZ2xlIC5jYWxlbmRhci5sZWZ0IHtcbiAgICBjbGVhcjogbm9uZTtcbiAgfVxuICAubWQtZHJwcGlja2VyLmx0ciB7XG4gICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAubWQtZHJwcGlja2VyLmx0ciAuY2FsZW5kYXIubGVmdCB7XG4gICAgY2xlYXI6IGxlZnQ7XG4gICAgLyptYXJnaW4tcmlnaHQ6IDEuNWVtOyovXG4gIH1cbiAgLm1kLWRycHBpY2tlci5sdHIgLmNhbGVuZGFyLmxlZnQgLmNhbGVuZGFyLXRhYmxlIHtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIH1cbiAgLm1kLWRycHBpY2tlci5sdHIgLmNhbGVuZGFyLnJpZ2h0IHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAubWQtZHJwcGlja2VyLmx0ciAuY2FsZW5kYXIucmlnaHQgLmNhbGVuZGFyLXRhYmxlIHtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIH1cbiAgLm1kLWRycHBpY2tlci5sdHIgLmxlZnQgLm1kLWRycHBpY2tlcl9pbnB1dCB7XG4gICAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgfVxuICAubWQtZHJwcGlja2VyLmx0ciAucmlnaHQgLm1kLWRycHBpY2tlcl9pbnB1dCB7XG4gICAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgfVxuICAubWQtZHJwcGlja2VyLmx0ciAuY2FsZW5kYXIubGVmdCAuY2FsZW5kYXItdGFibGUge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gIH1cbiAgLm1kLWRycHBpY2tlci5sdHIgLnJhbmdlcywgLm1kLWRycHBpY2tlci5sdHIgLmNhbGVuZGFyIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAubWQtZHJwcGlja2VyLnJ0bCB7XG4gICAgZGlyZWN0aW9uOiBydGw7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgLm1kLWRycHBpY2tlci5ydGwgLmNhbGVuZGFyLmxlZnQge1xuICAgIGNsZWFyOiByaWdodDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAubWQtZHJwcGlja2VyLnJ0bCAuY2FsZW5kYXIubGVmdCAuY2FsZW5kYXItdGFibGUge1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgfVxuICAubWQtZHJwcGlja2VyLnJ0bCAuY2FsZW5kYXIucmlnaHQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuICAubWQtZHJwcGlja2VyLnJ0bCAuY2FsZW5kYXIucmlnaHQgLmNhbGVuZGFyLXRhYmxlIHtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIH1cbiAgLm1kLWRycHBpY2tlci5ydGwgLmxlZnQgLm1kLWRycHBpY2tlcl9pbnB1dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICB9XG4gIC5tZC1kcnBwaWNrZXIucnRsIC5jYWxlbmRhci5sZWZ0IC5jYWxlbmRhci10YWJsZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICB9XG4gIC5tZC1kcnBwaWNrZXIucnRsIC5yYW5nZXMsIC5tZC1kcnBwaWNrZXIucnRsIC5jYWxlbmRhciB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG5cbiAgLmRycC1hbmltYXRlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCBvcGFjaXR5IDAuMnMgZWFzZTtcbiAgfVxuICAuZHJwLWFuaW1hdGUuZHJwLXBpY2tlci1zaXRlLXRoaXMge1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIH1cbiAgLmRycC1hbmltYXRlLmRycC1hbmltYXRlLXJpZ2h0IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIC5kcnAtYW5pbWF0ZS5kcnAtYW5pbWF0ZS1sZWZ0IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDczMHB4KSB7XG4gIC5tZC1kcnBwaWNrZXIgLnJhbmdlcyB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbiAgLm1kLWRycHBpY2tlci5sdHIgLnJhbmdlcyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgLm1kLWRycHBpY2tlci5ydGwgLnJhbmdlcyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIC5tZC1kcnBwaWNrZXIgLmNhbGVuZGFyLmxlZnQge1xuICAgIGNsZWFyOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"], encapsulation: 2 });
    return DaterangepickerComponent;
}());
exports.DaterangepickerComponent = DaterangepickerComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DaterangepickerComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'ngx-daterangepicker-material',
                styleUrls: ['./daterangepicker.component.scss'],
                templateUrl: './daterangepicker.component.html',
                host: {
                    '(click)': 'handleInternalClick($event)',
                },
                encapsulation: core_1.ViewEncapsulation.None,
                providers: [{
                        provide: forms_1.NG_VALUE_ACCESSOR,
                        useExisting: core_1.forwardRef(function () { return DaterangepickerComponent; }),
                        multi: true
                    }]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.LocaleService }]; }, { startDate: [{
            type: core_1.Input
        }], endDate: [{
            type: core_1.Input
        }], dateLimit: [{
            type: core_1.Input
        }], minDate: [{
            type: core_1.Input
        }], maxDate: [{
            type: core_1.Input
        }], autoApply: [{
            type: core_1.Input
        }], singleDatePicker: [{
            type: core_1.Input
        }], showDropdowns: [{
            type: core_1.Input
        }], showWeekNumbers: [{
            type: core_1.Input
        }], showISOWeekNumbers: [{
            type: core_1.Input
        }], linkedCalendars: [{
            type: core_1.Input
        }], autoUpdateInput: [{
            type: core_1.Input
        }], alwaysShowCalendars: [{
            type: core_1.Input
        }], maxSpan: [{
            type: core_1.Input
        }], lockStartDate: [{
            type: core_1.Input
        }], timePicker: [{
            type: core_1.Input
        }], timePicker24Hour: [{
            type: core_1.Input
        }], timePickerIncrement: [{
            type: core_1.Input
        }], timePickerSeconds: [{
            type: core_1.Input
        }], showClearButton: [{
            type: core_1.Input
        }], firstMonthDayClass: [{
            type: core_1.Input
        }], lastMonthDayClass: [{
            type: core_1.Input
        }], emptyWeekRowClass: [{
            type: core_1.Input
        }], emptyWeekColumnClass: [{
            type: core_1.Input
        }], firstDayOfNextMonthClass: [{
            type: core_1.Input
        }], lastDayOfPreviousMonthClass: [{
            type: core_1.Input
        }], locale: [{
            type: core_1.Input
        }], ranges: [{
            type: core_1.Input
        }], showCustomRangeLabel: [{
            type: core_1.Input
        }], showCancel: [{
            type: core_1.Input
        }], keepCalendarOpeningWithRange: [{
            type: core_1.Input
        }], showRangeLabelOnInput: [{
            type: core_1.Input
        }], customRangeDirection: [{
            type: core_1.Input
        }], drops: [{
            type: core_1.Input
        }], opens: [{
            type: core_1.Input
        }], closeOnAutoApply: [{
            type: core_1.Input
        }], choosedDate: [{
            type: core_1.Output
        }], rangeClicked: [{
            type: core_1.Output
        }], datesUpdated: [{
            type: core_1.Output
        }], startDateChanged: [{
            type: core_1.Output
        }], endDateChanged: [{
            type: core_1.Output
        }], pickerContainer: [{
            type: core_1.ViewChild,
            args: ['pickerContainer', { static: true }]
        }], isInvalidDate: [{
            type: core_1.Input
        }], isCustomDate: [{
            type: core_1.Input
        }], isTooltipDate: [{
            type: core_1.Input
        }] }); })();


/***/ }),

/***/ "../src/daterangepicker/daterangepicker.config.ts":
/*!********************************************************!*\
  !*** ../src/daterangepicker/daterangepicker.config.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var _dayjs = __webpack_require__(/*! dayjs */ "../node_modules/dayjs/dayjs.min.js");
var localeData = __webpack_require__(/*! dayjs/plugin/localeData */ "../node_modules/dayjs/plugin/localeData.js");
_dayjs.extend(localeData);
exports.LOCALE_CONFIG = new core_1.InjectionToken('daterangepicker.config');
/**
 *  DefaultLocaleConfig
 */
exports.DefaultLocaleConfig = {
    direction: 'ltr',
    separator: ' - ',
    weekLabel: 'W',
    applyLabel: 'Apply',
    cancelLabel: 'Cancel',
    clearLabel: 'Clear',
    customRangeLabel: 'Custom range',
    daysOfWeek: _dayjs.weekdaysMin(),
    monthNames: _dayjs.monthsShort(),
    firstDay: _dayjs.localeData().firstDayOfWeek()
};


/***/ }),

/***/ "../src/daterangepicker/daterangepicker.directive.ts":
/*!***********************************************************!*\
  !*** ../src/daterangepicker/daterangepicker.directive.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var daterangepicker_component_1 = __webpack_require__(/*! ./daterangepicker.component */ "../src/daterangepicker/daterangepicker.component.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var _dayjs = __webpack_require__(/*! dayjs */ "../node_modules/dayjs/dayjs.min.js");
var locale_service_1 = __webpack_require__(/*! ./locale.service */ "../src/daterangepicker/locale.service.ts");
var i0 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i1 = __webpack_require__(/*! ./locale.service */ "../src/daterangepicker/locale.service.ts");
var moment = _dayjs;
var DaterangepickerDirective = /** @class */ (function () {
    function DaterangepickerDirective(viewContainerRef, _changeDetectorRef, _componentFactoryResolver, _el, _renderer, differs, _localeService, elementRef) {
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
        // timepicker variables
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
        this.onChange = new core_1.EventEmitter();
        this.rangeClicked = new core_1.EventEmitter();
        this.datesUpdated = new core_1.EventEmitter();
        this.startDateChanged = new core_1.EventEmitter();
        this.endDateChanged = new core_1.EventEmitter();
        this.drops = 'down';
        this.opens = 'auto';
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(daterangepicker_component_1.DaterangepickerComponent);
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        this.picker = componentRef.instance;
        this.picker.inline = false; // set inline to false for all directive usage
    }
    Object.defineProperty(DaterangepickerDirective.prototype, "locale", {
        get: function () {
            return this._locale;
        },
        set: function (value) {
            this._locale = __assign(__assign({}, this._localeService.config), value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaterangepickerDirective.prototype, "startKey", {
        set: function (value) {
            if (value !== null) {
                this._startKey = value;
            }
            else {
                this._startKey = 'startDate';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaterangepickerDirective.prototype, "endKey", {
        set: function (value) {
            if (value !== null) {
                this._endKey = value;
            }
            else {
                this._endKey = 'endDate';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaterangepickerDirective.prototype, "value", {
        get: function () {
            return this._value || null;
        },
        set: function (val) {
            this._value = val;
            this._onChange(val);
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaterangepickerDirective.prototype, "disabled", {
        get: function () { return this._disabled; },
        enumerable: true,
        configurable: true
    });
    DaterangepickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.picker.startDateChanged.asObservable().subscribe(function (itemChanged) {
            _this.startDateChanged.emit(itemChanged);
        });
        this.picker.endDateChanged.asObservable().subscribe(function (itemChanged) {
            _this.endDateChanged.emit(itemChanged);
        });
        this.picker.rangeClicked.asObservable().subscribe(function (range) {
            _this.rangeClicked.emit(range);
        });
        this.picker.datesUpdated.asObservable().subscribe(function (range) {
            _this.datesUpdated.emit(range);
        });
        this.picker.choosedDate.asObservable().subscribe(function (change) {
            if (change) {
                var value = {};
                value[_this._startKey] = change.startDate;
                value[_this._endKey] = change.endDate;
                _this.value = value;
                _this.onChange.emit(value);
                if (typeof change.chosenLabel === 'string') {
                    _this._el.nativeElement.value = change.chosenLabel;
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
    };
    DaterangepickerDirective.prototype.ngOnChanges = function (changes) {
        for (var change in changes) {
            if (changes.hasOwnProperty(change)) {
                if (this.notForChangesProperty.indexOf(change) === -1) {
                    this.picker[change] = changes[change].currentValue;
                }
            }
        }
    };
    DaterangepickerDirective.prototype.ngDoCheck = function () {
        if (this.localeDiffer) {
            var changes = this.localeDiffer.diff(this.locale);
            if (changes) {
                this.picker.updateLocale(this.locale);
            }
        }
    };
    DaterangepickerDirective.prototype.onBlur = function () {
        this._onTouched();
    };
    DaterangepickerDirective.prototype.open = function (event) {
        var _this = this;
        if (this.disabled) {
            return;
        }
        this.picker.show(event);
        setTimeout(function () {
            _this.setPosition();
        });
    };
    DaterangepickerDirective.prototype.hide = function (e) {
        this.picker.hide(e);
    };
    DaterangepickerDirective.prototype.toggle = function (e) {
        if (this.picker.isShown) {
            this.hide(e);
        }
        else {
            this.open(e);
        }
    };
    DaterangepickerDirective.prototype.clear = function () {
        this.picker.clear();
    };
    DaterangepickerDirective.prototype.writeValue = function (value) {
        this.setValue(value);
    };
    DaterangepickerDirective.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    DaterangepickerDirective.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    DaterangepickerDirective.prototype.setDisabledState = function (state) {
        this._disabled = state;
    };
    DaterangepickerDirective.prototype.setValue = function (val) {
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
    };
    /**
     * Set position of the calendar
     */
    DaterangepickerDirective.prototype.setPosition = function () {
        var style;
        var containerTop;
        var container = this.picker.pickerContainer.nativeElement;
        var element = this._el.nativeElement;
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
            var position = element.offsetLeft + element.clientWidth / 2 - container.clientWidth / 2;
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
    };
    DaterangepickerDirective.prototype.inputChanged = function (e) {
        if (e.target.tagName.toLowerCase() !== 'input') {
            return;
        }
        if (!e.target.value.length) {
            return;
        }
        var dateString = e.target.value.split(this.picker.locale.separator);
        var start = null, end = null;
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
    };
    /**
     * For click outside of the calendar's container
     * @param event event object
     */
    DaterangepickerDirective.prototype.outsideClick = function (event) {
        if (!event.target) {
            return;
        }
        if (event.target.classList.contains('ngx-daterangepicker-action')) {
            return;
        }
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.hide();
        }
    };
    DaterangepickerDirective.ɵfac = function DaterangepickerDirective_Factory(t) { return new (t || DaterangepickerDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.KeyValueDiffers), i0.ɵɵdirectiveInject(i1.LocaleService), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    DaterangepickerDirective.ɵdir = i0.ɵɵdefineDirective({ type: DaterangepickerDirective, selectors: [["input", "ngxDaterangepickerMd", ""]], hostVars: 1, hostBindings: function DaterangepickerDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keyup.esc", function DaterangepickerDirective_keyup_esc_HostBindingHandler() { return ctx.hide(); })("blur", function DaterangepickerDirective_blur_HostBindingHandler() { return ctx.onBlur(); })("click", function DaterangepickerDirective_click_HostBindingHandler() { return ctx.open(); })("keyup", function DaterangepickerDirective_keyup_HostBindingHandler($event) { return ctx.inputChanged($event); })("click", function DaterangepickerDirective_click_HostBindingHandler($event) { return ctx.outsideClick($event); }, false, i0.ɵɵresolveDocument);
        } if (rf & 2) {
            i0.ɵɵhostProperty("disabled", ctx.disabled);
        } }, inputs: { minDate: "minDate", maxDate: "maxDate", autoApply: "autoApply", alwaysShowCalendars: "alwaysShowCalendars", showCustomRangeLabel: "showCustomRangeLabel", linkedCalendars: "linkedCalendars", dateLimit: "dateLimit", singleDatePicker: "singleDatePicker", showWeekNumbers: "showWeekNumbers", showISOWeekNumbers: "showISOWeekNumbers", showDropdowns: "showDropdowns", isInvalidDate: "isInvalidDate", isCustomDate: "isCustomDate", isTooltipDate: "isTooltipDate", showClearButton: "showClearButton", customRangeDirection: "customRangeDirection", ranges: "ranges", opens: "opens", drops: "drops", lastMonthDayClass: "lastMonthDayClass", emptyWeekRowClass: "emptyWeekRowClass", emptyWeekColumnClass: "emptyWeekColumnClass", firstDayOfNextMonthClass: "firstDayOfNextMonthClass", lastDayOfPreviousMonthClass: "lastDayOfPreviousMonthClass", keepCalendarOpeningWithRange: "keepCalendarOpeningWithRange", showRangeLabelOnInput: "showRangeLabelOnInput", showCancel: "showCancel", lockStartDate: "lockStartDate", timePicker: "timePicker", timePicker24Hour: "timePicker24Hour", timePickerIncrement: "timePickerIncrement", timePickerSeconds: "timePickerSeconds", closeOnAutoApply: "closeOnAutoApply", locale: "locale", _endKey: "_endKey", startKey: "startKey", endKey: "endKey" }, outputs: { onChange: "change", rangeClicked: "rangeClicked", datesUpdated: "datesUpdated", startDateChanged: "startDateChanged", endDateChanged: "endDateChanged" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: forms_1.NG_VALUE_ACCESSOR,
                    useExisting: core_1.forwardRef(function () { return DaterangepickerDirective; }), multi: true
                }
            ]), i0.ɵɵNgOnChangesFeature] });
    return DaterangepickerDirective;
}());
exports.DaterangepickerDirective = DaterangepickerDirective;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DaterangepickerDirective, [{
        type: core_1.Directive,
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
                        provide: forms_1.NG_VALUE_ACCESSOR,
                        useExisting: core_1.forwardRef(function () { return DaterangepickerDirective; }), multi: true
                    }
                ]
            }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: i0.ChangeDetectorRef }, { type: i0.ComponentFactoryResolver }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.KeyValueDiffers }, { type: i1.LocaleService }, { type: i0.ElementRef }]; }, { minDate: [{
            type: core_1.Input
        }], maxDate: [{
            type: core_1.Input
        }], autoApply: [{
            type: core_1.Input
        }], alwaysShowCalendars: [{
            type: core_1.Input
        }], showCustomRangeLabel: [{
            type: core_1.Input
        }], linkedCalendars: [{
            type: core_1.Input
        }], dateLimit: [{
            type: core_1.Input
        }], singleDatePicker: [{
            type: core_1.Input
        }], showWeekNumbers: [{
            type: core_1.Input
        }], showISOWeekNumbers: [{
            type: core_1.Input
        }], showDropdowns: [{
            type: core_1.Input
        }], isInvalidDate: [{
            type: core_1.Input
        }], isCustomDate: [{
            type: core_1.Input
        }], isTooltipDate: [{
            type: core_1.Input
        }], showClearButton: [{
            type: core_1.Input
        }], customRangeDirection: [{
            type: core_1.Input
        }], ranges: [{
            type: core_1.Input
        }], opens: [{
            type: core_1.Input
        }], drops: [{
            type: core_1.Input
        }], lastMonthDayClass: [{
            type: core_1.Input
        }], emptyWeekRowClass: [{
            type: core_1.Input
        }], emptyWeekColumnClass: [{
            type: core_1.Input
        }], firstDayOfNextMonthClass: [{
            type: core_1.Input
        }], lastDayOfPreviousMonthClass: [{
            type: core_1.Input
        }], keepCalendarOpeningWithRange: [{
            type: core_1.Input
        }], showRangeLabelOnInput: [{
            type: core_1.Input
        }], showCancel: [{
            type: core_1.Input
        }], lockStartDate: [{
            type: core_1.Input
        }], timePicker: [{
            type: core_1.Input
        }], timePicker24Hour: [{
            type: core_1.Input
        }], timePickerIncrement: [{
            type: core_1.Input
        }], timePickerSeconds: [{
            type: core_1.Input
        }], closeOnAutoApply: [{
            type: core_1.Input
        }], locale: [{
            type: core_1.Input
        }], _endKey: [{
            type: core_1.Input
        }], startKey: [{
            type: core_1.Input
        }], endKey: [{
            type: core_1.Input
        }], onChange: [{
            type: core_1.Output,
            args: ['change']
        }], rangeClicked: [{
            type: core_1.Output,
            args: ['rangeClicked']
        }], datesUpdated: [{
            type: core_1.Output,
            args: ['datesUpdated']
        }], startDateChanged: [{
            type: core_1.Output
        }], endDateChanged: [{
            type: core_1.Output
        }], disabled: [{
            type: core_1.HostBinding,
            args: ['disabled']
        }], outsideClick: [{
            type: core_1.HostListener,
            args: ['document:click', ['$event']]
        }] }); })();


/***/ }),

/***/ "../src/daterangepicker/daterangepicker.module.ts":
/*!********************************************************!*\
  !*** ../src/daterangepicker/daterangepicker.module.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var daterangepicker_component_1 = __webpack_require__(/*! ./daterangepicker.component */ "../src/daterangepicker/daterangepicker.component.ts");
var daterangepicker_directive_1 = __webpack_require__(/*! ./daterangepicker.directive */ "../src/daterangepicker/daterangepicker.directive.ts");
var daterangepicker_config_1 = __webpack_require__(/*! ./daterangepicker.config */ "../src/daterangepicker/daterangepicker.config.ts");
var locale_service_1 = __webpack_require__(/*! ./locale.service */ "../src/daterangepicker/locale.service.ts");
var i0 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var NgxDaterangepickerMd = /** @class */ (function () {
    function NgxDaterangepickerMd() {
    }
    NgxDaterangepickerMd.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: NgxDaterangepickerMd,
            providers: [
                { provide: daterangepicker_config_1.LOCALE_CONFIG, useValue: config },
                { provide: locale_service_1.LocaleService, useClass: locale_service_1.LocaleService, deps: [daterangepicker_config_1.LOCALE_CONFIG] }
            ]
        };
    };
    NgxDaterangepickerMd.ɵmod = i0.ɵɵdefineNgModule({ type: NgxDaterangepickerMd });
    NgxDaterangepickerMd.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxDaterangepickerMd_Factory(t) { return new (t || NgxDaterangepickerMd)(); }, providers: [], imports: [[
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ]] });
    return NgxDaterangepickerMd;
}());
exports.NgxDaterangepickerMd = NgxDaterangepickerMd;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxDaterangepickerMd, { declarations: [daterangepicker_component_1.DaterangepickerComponent,
        daterangepicker_directive_1.DaterangepickerDirective], imports: [common_1.CommonModule,
        forms_1.FormsModule,
        forms_1.ReactiveFormsModule], exports: [daterangepicker_component_1.DaterangepickerComponent,
        daterangepicker_directive_1.DaterangepickerDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxDaterangepickerMd, [{
        type: core_1.NgModule,
        args: [{
                declarations: [
                    daterangepicker_component_1.DaterangepickerComponent,
                    daterangepicker_directive_1.DaterangepickerDirective
                ],
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    forms_1.ReactiveFormsModule
                ],
                providers: [],
                exports: [
                    daterangepicker_component_1.DaterangepickerComponent,
                    daterangepicker_directive_1.DaterangepickerDirective
                ],
                entryComponents: [
                    daterangepicker_component_1.DaterangepickerComponent
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "../src/daterangepicker/index.ts":
/*!***************************************!*\
  !*** ../src/daterangepicker/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var daterangepicker_module_1 = __webpack_require__(/*! ./daterangepicker.module */ "../src/daterangepicker/daterangepicker.module.ts");
exports.NgxDaterangepickerMd = daterangepicker_module_1.NgxDaterangepickerMd;
var daterangepicker_component_1 = __webpack_require__(/*! ./daterangepicker.component */ "../src/daterangepicker/daterangepicker.component.ts");
exports.DaterangepickerComponent = daterangepicker_component_1.DaterangepickerComponent;
var daterangepicker_directive_1 = __webpack_require__(/*! ./daterangepicker.directive */ "../src/daterangepicker/daterangepicker.directive.ts");
exports.DaterangepickerDirective = daterangepicker_directive_1.DaterangepickerDirective;
var daterangepicker_config_1 = __webpack_require__(/*! ./daterangepicker.config */ "../src/daterangepicker/daterangepicker.config.ts");
exports.LOCALE_CONFIG = daterangepicker_config_1.LOCALE_CONFIG;
exports.DefaultLocaleConfig = daterangepicker_config_1.DefaultLocaleConfig;
var locale_service_1 = __webpack_require__(/*! ./locale.service */ "../src/daterangepicker/locale.service.ts");
exports.LocaleService = locale_service_1.LocaleService;


/***/ }),

/***/ "../src/daterangepicker/locale.service.ts":
/*!************************************************!*\
  !*** ../src/daterangepicker/locale.service.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var daterangepicker_config_1 = __webpack_require__(/*! ./daterangepicker.config */ "../src/daterangepicker/daterangepicker.config.ts");
var i0 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var LocaleService = /** @class */ (function () {
    function LocaleService(_config) {
        this._config = _config;
    }
    Object.defineProperty(LocaleService.prototype, "config", {
        get: function () {
            if (!this._config) {
                return daterangepicker_config_1.DefaultLocaleConfig;
            }
            return __assign(__assign({}, daterangepicker_config_1.DefaultLocaleConfig), this._config);
        },
        enumerable: true,
        configurable: true
    });
    LocaleService.ɵfac = function LocaleService_Factory(t) { return new (t || LocaleService)(i0.ɵɵinject(daterangepicker_config_1.LOCALE_CONFIG)); };
    LocaleService.ɵprov = i0.ɵɵdefineInjectable({ token: LocaleService, factory: LocaleService.ɵfac });
    return LocaleService;
}());
exports.LocaleService = LocaleService;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LocaleService, [{
        type: core_1.Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: core_1.Inject,
                args: [daterangepicker_config_1.LOCALE_CONFIG]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i0 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var _c0 = function () { return ["simple"]; };
var _c1 = function () { return ["single-datepicker"]; };
var _c2 = function () { return ["reactive-forms"]; };
var _c3 = function () { return ["with-timepicker"]; };
var _c4 = function () { return ["custom-ranges"]; };
var _c5 = function () { return ["full"]; };
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["ngx-root"]], decls: 25, vars: 12, consts: [["href", "https://github.com/gjsmith66/ngx-daterangepicker-material-dayjs", 1, "hide-on-small-only", "hidden-xs"], ["src", "https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67", "alt", "Fork me on GitHub", "data-canonical-src", "https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png", 2, "position", "absolute", "top", "0", "right", "0", "border", "0", "z-index", "2000"], ["role", "navigation", 1, "light-blue", "lighten-1"], [1, "nav-wrapper", "container"], [1, "left", "hide-on-small-only"], ["routerLinkActive", "active"], [3, "routerLink"], [1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 0);
            i0.ɵɵelement(1, "img", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "nav", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵelementStart(4, "ul", 4);
            i0.ɵɵelementStart(5, "li", 5);
            i0.ɵɵelementStart(6, "a", 6);
            i0.ɵɵtext(7, "Simple");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "li", 5);
            i0.ɵɵelementStart(9, "a", 6);
            i0.ɵɵtext(10, "Single datepicker (fr)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "li", 5);
            i0.ɵɵelementStart(12, "a", 6);
            i0.ɵɵtext(13, "Reactive forms");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "li", 5);
            i0.ɵɵelementStart(15, "a", 6);
            i0.ɵɵtext(16, "With timepicker");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "li", 5);
            i0.ɵɵelementStart(18, "a", 6);
            i0.ɵɵtext(19, "Custom ranges");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "li", 5);
            i0.ɵɵelementStart(21, "a", 6);
            i0.ɵɵtext(22, "Full options");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "div", 7);
            i0.ɵɵelement(24, "router-outlet");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(6, _c0));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(7, _c1));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(8, _c2));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(9, _c3));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(10, _c4));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(11, _c5));
        } }, directives: [i1.RouterLinkActive, i1.RouterLinkWithHref, i1.RouterOutlet], styles: ["nav[_ngcontent-%COMP%] {\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nanNtaXRoNjYvU29mdHdhcmVQcm9qZWN0cy9uZ3gtZGF0ZXJhbmdlcGlja2VyLW1hdGVyaWFsLWRheWpzL2RlbW8vc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJkZW1vL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSiIsImZpbGUiOiJkZW1vL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufSIsIm5hdiB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59Il19 */"] });
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'ngx-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var app_routing_1 = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
var button_1 = __webpack_require__(/*! @angular/material/button */ "../node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
var card_1 = __webpack_require__(/*! @angular/material/card */ "../node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
var checkbox_1 = __webpack_require__(/*! @angular/material/checkbox */ "../node_modules/@angular/material/__ivy_ngcc__/fesm5/checkbox.js");
var grid_list_1 = __webpack_require__(/*! @angular/material/grid-list */ "../node_modules/@angular/material/__ivy_ngcc__/fesm5/grid-list.js");
var input_1 = __webpack_require__(/*! @angular/material/input */ "../node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
var select_1 = __webpack_require__(/*! @angular/material/select */ "../node_modules/@angular/material/__ivy_ngcc__/fesm5/select.js");
var toolbar_1 = __webpack_require__(/*! @angular/material/toolbar */ "../node_modules/@angular/material/__ivy_ngcc__/fesm5/toolbar.js");
var daterangepicker_1 = __webpack_require__(/*! ./../../../src/daterangepicker */ "../src/daterangepicker/index.ts");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var simple_component_1 = __webpack_require__(/*! ./simple/simple.component */ "./src/app/simple/simple.component.ts");
var full_component_1 = __webpack_require__(/*! ./full/full.component */ "./src/app/full/full.component.ts");
var single_datepicker_component_1 = __webpack_require__(/*! ./single-datepicker/single-datepicker.component */ "./src/app/single-datepicker/single-datepicker.component.ts");
var custom_ranges_component_1 = __webpack_require__(/*! ./custom-ranges/custom-ranges.component */ "./src/app/custom-ranges/custom-ranges.component.ts");
var timepicker_component_1 = __webpack_require__(/*! ./timepicker/timepicker.component */ "./src/app/timepicker/timepicker.component.ts");
var reactive_form_component_1 = __webpack_require__(/*! ./reactive-form/reactive-form.component */ "./src/app/reactive-form/reactive-form.component.ts");
var i0 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i1 = __webpack_require__(/*! ../../../src/daterangepicker/daterangepicker.module */ "../src/daterangepicker/daterangepicker.module.ts");
var i2 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [app_component_1.AppComponent] });
    AppModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                platform_browser_1.BrowserModule,
                animations_1.NoopAnimationsModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                button_1.MatButtonModule,
                checkbox_1.MatCheckboxModule,
                toolbar_1.MatToolbarModule,
                card_1.MatCardModule,
                grid_list_1.MatGridListModule,
                input_1.MatInputModule,
                select_1.MatSelectModule,
                daterangepicker_1.NgxDaterangepickerMd.forRoot({
                    applyLabel: 'Okay',
                    firstDay: 3
                }),
                router_1.RouterModule.forRoot(app_routing_1.AppRoutes),
            ]] });
    return AppModule;
}());
exports.AppModule = AppModule;
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [app_component_1.AppComponent,
        simple_component_1.SimpleComponent,
        full_component_1.FullComponent,
        single_datepicker_component_1.SingleDatepickerComponent,
        custom_ranges_component_1.CustomRangesComponent,
        reactive_form_component_1.ReactiveFormComponent,
        timepicker_component_1.TimepickerComponent], imports: [platform_browser_1.BrowserModule,
        animations_1.NoopAnimationsModule,
        forms_1.FormsModule,
        forms_1.ReactiveFormsModule,
        button_1.MatButtonModule,
        checkbox_1.MatCheckboxModule,
        toolbar_1.MatToolbarModule,
        card_1.MatCardModule,
        grid_list_1.MatGridListModule,
        input_1.MatInputModule,
        select_1.MatSelectModule, i1.NgxDaterangepickerMd, i2.RouterModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AppModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [
                    app_component_1.AppComponent,
                    simple_component_1.SimpleComponent,
                    full_component_1.FullComponent,
                    single_datepicker_component_1.SingleDatepickerComponent,
                    custom_ranges_component_1.CustomRangesComponent,
                    reactive_form_component_1.ReactiveFormComponent,
                    timepicker_component_1.TimepickerComponent
                ],
                imports: [
                    platform_browser_1.BrowserModule,
                    animations_1.NoopAnimationsModule,
                    forms_1.FormsModule,
                    forms_1.ReactiveFormsModule,
                    button_1.MatButtonModule,
                    checkbox_1.MatCheckboxModule,
                    toolbar_1.MatToolbarModule,
                    card_1.MatCardModule,
                    grid_list_1.MatGridListModule,
                    input_1.MatInputModule,
                    select_1.MatSelectModule,
                    daterangepicker_1.NgxDaterangepickerMd.forRoot({
                        applyLabel: 'Okay',
                        firstDay: 3
                    }),
                    router_1.RouterModule.forRoot(app_routing_1.AppRoutes),
                ],
                providers: [],
                bootstrap: [app_component_1.AppComponent]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var simple_component_1 = __webpack_require__(/*! ./simple/simple.component */ "./src/app/simple/simple.component.ts");
var full_component_1 = __webpack_require__(/*! ./full/full.component */ "./src/app/full/full.component.ts");
var custom_ranges_component_1 = __webpack_require__(/*! ./custom-ranges/custom-ranges.component */ "./src/app/custom-ranges/custom-ranges.component.ts");
var single_datepicker_component_1 = __webpack_require__(/*! ./single-datepicker/single-datepicker.component */ "./src/app/single-datepicker/single-datepicker.component.ts");
var timepicker_component_1 = __webpack_require__(/*! ./timepicker/timepicker.component */ "./src/app/timepicker/timepicker.component.ts");
var reactive_form_component_1 = __webpack_require__(/*! ./reactive-form/reactive-form.component */ "./src/app/reactive-form/reactive-form.component.ts");
exports.AppRoutes = [
    {
        path: '',
        redirectTo: 'simple',
        pathMatch: 'full'
    },
    {
        path: 'simple',
        component: simple_component_1.SimpleComponent,
    },
    {
        path: 'single-datepicker',
        component: single_datepicker_component_1.SingleDatepickerComponent,
    },
    {
        path: 'with-timepicker',
        component: timepicker_component_1.TimepickerComponent,
    },
    {
        path: 'full',
        component: full_component_1.FullComponent,
    },
    {
        path: 'custom-ranges',
        component: custom_ranges_component_1.CustomRangesComponent,
    },
    {
        path: 'reactive-forms',
        component: reactive_form_component_1.ReactiveFormComponent,
    }
];


/***/ }),

/***/ "./src/app/custom-ranges/custom-ranges.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/custom-ranges/custom-ranges.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var _dayjs = __webpack_require__(/*! dayjs */ "../node_modules/dayjs/dayjs.min.js");
var i0 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i1 = __webpack_require__(/*! @angular/material/toolbar */ "../node_modules/@angular/material/__ivy_ngcc__/fesm5/toolbar.js");
var i2 = __webpack_require__(/*! ../../../../src/daterangepicker/daterangepicker.directive */ "../src/daterangepicker/daterangepicker.directive.ts");
var i3 = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var i4 = __webpack_require__(/*! ../../../../src/daterangepicker/daterangepicker.component */ "../src/daterangepicker/daterangepicker.component.ts");
var i5 = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var _c0 = function () { return { applyLabel: "Done" }; };
var _c1 = function () { return { applyLabel: "Done", firstDay: 1 }; };
var CustomRangesComponent = /** @class */ (function () {
    function CustomRangesComponent() {
        var _this = this;
        this.invalidDates = [];
        this.tooltips = [
            { date: _dayjs(), text: 'Today is just unselectable' },
            { date: _dayjs().add(2, 'days'), text: 'Yeeeees!!!' }
        ];
        this.ranges = {
            Today: [_dayjs(), _dayjs()],
            Yesterday: [_dayjs().subtract(1, 'days'), _dayjs().subtract(1, 'days')],
            'Last 7 Days': [_dayjs().subtract(6, 'days'), _dayjs()],
            'Last 30 Days': [_dayjs().subtract(29, 'days'), _dayjs()],
            'This Month': [_dayjs().startOf('month'), _dayjs().endOf('month')],
            'Last Month': [
                _dayjs()
                    .subtract(1, 'month')
                    .startOf('month'),
                _dayjs()
                    .subtract(1, 'month')
                    .endOf('month')
            ],
            'Last 3 Month': [
                _dayjs()
                    .subtract(3, 'month')
                    .startOf('month'),
                _dayjs()
                    .subtract(1, 'month')
                    .endOf('month')
            ]
        };
        this.isInvalidDate = function (m) {
            return _this.invalidDates.some(function (d) { return d.isSame(m, 'day'); });
        };
        this.isTooltipDate = function (m) {
            var tooltip = _this.tooltips.find(function (tt) { return tt.date.isSame(m, 'day'); });
            if (tooltip) {
                return tooltip.text;
            }
            else {
                return false;
            }
        };
        this.maxDate = _dayjs().add(2, 'weeks');
        this.minDate = _dayjs().subtract(3, 'days');
        this.alwaysShowCalendars = true;
        this.keepCalendarOpeningWithRange = true;
        this.showRangeLabelOnInput = true;
        this.selected = {
            startDate: _dayjs().subtract(1, 'days').hour(0).minute(0),
            endDate: _dayjs().subtract(1, 'days').hour(23).minute(59)
        };
    }
    CustomRangesComponent.prototype.rangeClicked = function (range) {
        console.log('[rangeClicked] range is : ', range);
    };
    CustomRangesComponent.prototype.datesUpdated = function (range) {
        console.log('[datesUpdated] range is : ', range);
    };
    CustomRangesComponent.prototype.ngOnInit = function () { };
    CustomRangesComponent.prototype.choosedDateTime = function (e) {
        this.inlineDateTime = e;
    };
    CustomRangesComponent.ɵfac = function CustomRangesComponent_Factory(t) { return new (t || CustomRangesComponent)(); };
    CustomRangesComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CustomRangesComponent, selectors: [["custom-ranges"]], decls: 51, vars: 45, consts: [[1, "row"], [1, "col", "s6"], ["type", "text", "ngxDaterangepickerMd", "", "placeholder", "Select please...", 1, "form-control", 3, "ngModel", "showCustomRangeLabel", "alwaysShowCalendars", "ranges", "showClearButton", "showCancel", "linkedCalendars", "isTooltipDate", "isInvalidDate", "locale", "keepCalendarOpeningWithRange", "showRangeLabelOnInput", "ngModelChange", "rangeClicked", "datesUpdated"], ["type", "checkbox", "name", "alwaysShowCalendars", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "keepCalendarOpeningWithRange", 3, "ngModel", "ngModelChange"], ["type", "checkbox", "name", "showRangeLabelOnInput", 3, "ngModel", "ngModelChange"], [1, "prettyprint"], [1, "html"], [1, "javascript"], [1, "col", "s12"], [3, "autoApply", "showCustomRangeLabel", "alwaysShowCalendars", "ranges", "showClearButton", "showCancel", "linkedCalendars", "isTooltipDate", "isInvalidDate", "locale", "keepCalendarOpeningWithRange", "showRangeLabelOnInput", "datesUpdated"]], template: function CustomRangesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-toolbar");
            i0.ɵɵtext(1, "Custom ranges");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 0);
            i0.ɵɵelementStart(3, "div", 1);
            i0.ɵɵelementStart(4, "input", 2);
            i0.ɵɵlistener("ngModelChange", function CustomRangesComponent_Template_input_ngModelChange_4_listener($event) { return ctx.selected = $event; })("rangeClicked", function CustomRangesComponent_Template_input_rangeClicked_4_listener($event) { return ctx.rangeClicked($event); })("datesUpdated", function CustomRangesComponent_Template_input_datesUpdated_4_listener($event) { return ctx.datesUpdated($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 1);
            i0.ɵɵelement(6, "br");
            i0.ɵɵelementStart(7, "strong");
            i0.ɵɵtext(8, "Model: ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(9, "br");
            i0.ɵɵtext(10);
            i0.ɵɵpipe(11, "json");
            i0.ɵɵelement(12, "br");
            i0.ɵɵelementStart(13, "label");
            i0.ɵɵelementStart(14, "input", 3);
            i0.ɵɵlistener("ngModelChange", function CustomRangesComponent_Template_input_ngModelChange_14_listener($event) { return ctx.alwaysShowCalendars = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "span");
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(17, "br");
            i0.ɵɵelementStart(18, "label");
            i0.ɵɵelementStart(19, "input", 4);
            i0.ɵɵlistener("ngModelChange", function CustomRangesComponent_Template_input_ngModelChange_19_listener($event) { return ctx.keepCalendarOpeningWithRange = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "span");
            i0.ɵɵtext(21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(22, "br");
            i0.ɵɵelementStart(23, "label");
            i0.ɵɵelementStart(24, "input", 5);
            i0.ɵɵlistener("ngModelChange", function CustomRangesComponent_Template_input_ngModelChange_24_listener($event) { return ctx.showRangeLabelOnInput = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "span");
            i0.ɵɵtext(26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "div", 0);
            i0.ɵɵelementStart(28, "div", 1);
            i0.ɵɵelementStart(29, "b");
            i0.ɵɵtext(30, "Html code");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "pre", 6);
            i0.ɵɵelementStart(32, "code", 7);
            i0.ɵɵtext(33);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(34, "\n    ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "div", 1);
            i0.ɵɵelementStart(36, "b");
            i0.ɵɵtext(37, "Typescript code");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "pre", 6);
            i0.ɵɵelementStart(39, "code", 8);
            i0.ɵɵtext(40);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(41, "\n    ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "div", 0);
            i0.ɵɵelementStart(43, "div", 9);
            i0.ɵɵelementStart(44, "h3");
            i0.ɵɵtext(45, "Inline daterangepicker");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "ngx-daterangepicker-material", 10);
            i0.ɵɵlistener("datesUpdated", function CustomRangesComponent_Template_ngx_daterangepicker_material_datesUpdated_46_listener($event) { return ctx.choosedDateTime($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(47, "br");
            i0.ɵɵelementStart(48, "p");
            i0.ɵɵtext(49);
            i0.ɵɵpipe(50, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.selected)("showCustomRangeLabel", true)("alwaysShowCalendars", ctx.alwaysShowCalendars)("ranges", ctx.ranges)("showClearButton", true)("showCancel", true)("linkedCalendars", true)("isTooltipDate", ctx.isTooltipDate)("isInvalidDate", ctx.isInvalidDate)("locale", i0.ɵɵpureFunction0(42, _c0))("keepCalendarOpeningWithRange", ctx.keepCalendarOpeningWithRange)("showRangeLabelOnInput", ctx.showRangeLabelOnInput);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(11, 38, ctx.selected), " ");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.alwaysShowCalendars);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("alwaysShowCalendars: ", ctx.alwaysShowCalendars, "");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.keepCalendarOpeningWithRange);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("keepCalendarOpeningWithRange: ", ctx.keepCalendarOpeningWithRange, "");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.showRangeLabelOnInput);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("showRangeLabelOnInput: ", ctx.showRangeLabelOnInput, "");
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1("<input type=\"text\"\n  ngxDaterangepickerMd\n  [(ngModel)]=\"selected\"\n  [showCustomRangeLabel]=\"true\"\n  [alwaysShowCalendars]=\"", ctx.alwaysShowCalendars, "\"\n  [ranges]=\"ranges\"\n  [linkedCalendars]=\"true\"\n  [isInvalidDate] = \"isInvalidDate\"\n  [showClearButton]=\"true\"\n\n  placeholder=\"Select please.../>");
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate4("export class CustomRangesComponent implements OnInit ", "{", "\nselected: any;\nalwaysShowCalendars: boolean;\nranges: any = ", "{", "\n  'Today': [_dayjs(), _dayjs()],\n  'Yesterday': [_dayjs().subtract(1, 'days'), _dayjs().subtract(1, 'days')],\n  'Last 7 Days': [_dayjs().subtract(6, 'days'), _dayjs()],\n  'Last 30 Days': [_dayjs().subtract(29, 'days'), _dayjs()],\n  'This Month': [_dayjs().startOf('month'), _dayjs().endOf('month')],\n  'Last Month': [_dayjs().subtract(1, 'month').startOf('month'), _dayjs().subtract(1, 'month').endOf('month')]\n}\ninvalidDates: _dayjs.Dayjs[] = [_dayjs().add(2, 'days'), _dayjs().add(3, 'days'), _dayjs().add(5, 'days')];\n\nisInvalidDate = (m: _dayjs.Dayjs) =>  ", "{", "\n  return this.invalidDates.some(d => d.isSame(m, 'day') )\n}\n\nconstructor() ", "{", "\n  this.alwaysShowCalendars = true;\n}");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("autoApply", true)("showCustomRangeLabel", true)("alwaysShowCalendars", ctx.alwaysShowCalendars)("ranges", ctx.ranges)("showClearButton", true)("showCancel", true)("linkedCalendars", true)("isTooltipDate", ctx.isTooltipDate)("isInvalidDate", ctx.isInvalidDate)("locale", i0.ɵɵpureFunction0(43, _c0))("keepCalendarOpeningWithRange", ctx.keepCalendarOpeningWithRange)("showRangeLabelOnInput", ctx.showRangeLabelOnInput)("locale", i0.ɵɵpureFunction0(44, _c1));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("Choosed date (after changes): ", i0.ɵɵpipeBind1(50, 40, ctx.inlineDateTime), "");
        } }, directives: [i1.MatToolbar, i2.DaterangepickerDirective, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i3.CheckboxControlValueAccessor, i4.DaterangepickerComponent], pipes: [i5.JsonPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vL3NyYy9hcHAvY3VzdG9tLXJhbmdlcy9jdXN0b20tcmFuZ2VzLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return CustomRangesComponent;
}());
exports.CustomRangesComponent = CustomRangesComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CustomRangesComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'custom-ranges',
                templateUrl: './custom-ranges.component.html',
                styleUrls: ['./custom-ranges.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/full/full.component.ts":
/*!****************************************!*\
  !*** ./src/app/full/full.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var _dayjs = __webpack_require__(/*! dayjs */ "../node_modules/dayjs/dayjs.min.js");
var daterangepicker_directive_1 = __webpack_require__(/*! ../../../../src/daterangepicker/daterangepicker.directive */ "../src/daterangepicker/daterangepicker.directive.ts");
var i0 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i1 = __webpack_require__(/*! @angular/material/toolbar */ "../node_modules/@angular/material/__ivy_ngcc__/fesm5/toolbar.js");
var i2 = __webpack_require__(/*! @angular/material/card */ "../node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
var i3 = __webpack_require__(/*! @angular/material/input */ "../node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
var i4 = __webpack_require__(/*! ../../../../src/daterangepicker/daterangepicker.directive */ "../src/daterangepicker/daterangepicker.directive.ts");
var i5 = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var i6 = __webpack_require__(/*! @angular/material/checkbox */ "../node_modules/@angular/material/__ivy_ngcc__/fesm5/checkbox.js");
var i7 = __webpack_require__(/*! @angular/material/form-field */ "../node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
var i8 = __webpack_require__(/*! @angular/material/select */ "../node_modules/@angular/material/__ivy_ngcc__/fesm5/select.js");
var i9 = __webpack_require__(/*! @angular/material/core */ "../node_modules/@angular/material/__ivy_ngcc__/fesm5/core.js");
var i10 = __webpack_require__(/*! @angular/material/button */ "../node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
var i11 = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var FullComponent = /** @class */ (function () {
    function FullComponent() {
        this.title = 'Pure angular daterangepicker';
        this.options = {
            autoApply: false,
            alwaysShowCalendars: false,
            showCancel: false,
            showClearButton: false,
            linkedCalendars: true,
            singleDatePicker: false,
            showWeekNumbers: false,
            showISOWeekNumbers: false,
            customRangeDirection: false,
            lockStartDate: false,
            closeOnAutoApply: true
        };
        this.minDate = _dayjs().subtract(5, 'days');
        this.maxDate = _dayjs().add(2, 'month');
        this.locale = {
            format: 'YYYY-MM-DDTHH:mm:ss.SSSSZ',
            displayFormat: 'DD MMMM YYYY HH:mm',
            separator: ' To ',
            cancelLabel: 'Cancel',
            applyLabel: 'Okay'
        };
        this.selected = { start: _dayjs().subtract(3, 'days'), end: _dayjs().add(3, 'days') };
        this.timePicker = false;
        this.opens = 'right';
        this.drops = 'down';
        this.dateLimit = 30;
    }
    FullComponent.prototype.click = function () {
    };
    FullComponent.prototype.clear = function () {
        this.daterangepicker.clear();
    };
    FullComponent.prototype.ngOnInit = function () {
    };
    FullComponent.prototype.eventClicked = function (e) {
        console.log({ 'eventClicked()': e });
    };
    FullComponent.ɵfac = function FullComponent_Factory(t) { return new (t || FullComponent)(); };
    FullComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FullComponent, selectors: [["full"]], viewQuery: function FullComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(daterangepicker_directive_1.DaterangepickerDirective, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.daterangepicker = _t.first);
        } }, decls: 123, vars: 59, consts: [[1, "row"], [1, "col", "s6"], ["type", "text", "matInput", "", "ngxDaterangepickerMd", "", "applyLabel", "Okay", "startKey", "start", "endKey", "end", "firstMonthDayClass", "first-day", "lastMonthDayClass", "last-day", "emptyWeekRowClass", "empty-week-row", "emptyWeekColumnClass", "empty-week-column", "lastDayOfPreviousMonthClass", "last-previous-day", "firstDayOfNextMonthClass", "first-next-day", "name", "daterange", 3, "autoApply", "linkedCalendars", "singleDatePicker", "locale", "showDropdowns", "ngModel", "minDate", "maxDate", "showWeekNumbers", "showCancel", "showClearButton", "showISOWeekNumbers", "customRangeDirection", "lockStartDate", "closeOnAutoApply", "opens", "drops", "timePicker", "dateLimit", "ngModelChange", "click", "startDateChanged", "endDateChanged"], [3, "ngModel", "ngModelChange"], [1, ""], [1, "col", "s12"], ["placeholder", "Choose format", 3, "ngModel", "ngModelChange"], ["value", "DD/MM/YYYY"], ["value", "MM-DD-YYYY"], ["placeholder", "Position", 3, "ngModel", "ngModelChange"], ["value", "left"], ["value", "center"], ["value", "right"], ["placeholder", "Drops", 3, "ngModel", "ngModelChange"], ["value", "down"], ["value", "up"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function FullComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-toolbar");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "mat-card");
            i0.ɵɵelementStart(3, "div", 0);
            i0.ɵɵelementStart(4, "div", 1);
            i0.ɵɵelementStart(5, "input", 2);
            i0.ɵɵlistener("ngModelChange", function FullComponent_Template_input_ngModelChange_5_listener($event) { return ctx.selected = $event; })("click", function FullComponent_Template_input_click_5_listener() { return ctx.click(); })("startDateChanged", function FullComponent_Template_input_startDateChanged_5_listener($event) { return ctx.eventClicked($event); })("endDateChanged", function FullComponent_Template_input_endDateChanged_5_listener($event) { return ctx.eventClicked($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 1);
            i0.ɵɵelementStart(7, "strong");
            i0.ɵɵtext(8, "Value: ");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(9);
            i0.ɵɵpipe(10, "json");
            i0.ɵɵelement(11, "hr");
            i0.ɵɵelementStart(12, "h4");
            i0.ɵɵtext(13, "Timepicker");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "strong");
            i0.ɵɵtext(15, "enable timepicker:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "mat-checkbox", 3);
            i0.ɵɵlistener("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_16_listener($event) { return ctx.timePicker = $event; });
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(18, "br");
            i0.ɵɵelementStart(19, "h4");
            i0.ɵɵtext(20, "Options:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "strong");
            i0.ɵɵtext(22, "autoApply:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "mat-checkbox", 3);
            i0.ɵɵlistener("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_23_listener($event) { return ctx.options.autoApply = $event; });
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(25, "br");
            i0.ɵɵelementStart(26, "strong");
            i0.ɵɵtext(27, "closeOnAutoApply:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "mat-checkbox", 3);
            i0.ɵɵlistener("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_28_listener($event) { return ctx.options.closeOnAutoApply = $event; });
            i0.ɵɵtext(29);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(30, "br");
            i0.ɵɵelementStart(31, "strong");
            i0.ɵɵtext(32, "showCancel:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "mat-checkbox", 3);
            i0.ɵɵlistener("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_33_listener($event) { return ctx.options.showCancel = $event; });
            i0.ɵɵtext(34);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(35, "br");
            i0.ɵɵelementStart(36, "strong");
            i0.ɵɵtext(37, "showClearButton:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "mat-checkbox", 3);
            i0.ɵɵlistener("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_38_listener($event) { return ctx.options.showClearButton = $event; });
            i0.ɵɵtext(39);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(40, "br");
            i0.ɵɵelementStart(41, "strong");
            i0.ɵɵtext(42, "linkedCalendars:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "mat-checkbox", 3);
            i0.ɵɵlistener("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_43_listener($event) { return ctx.options.linkedCalendars = $event; });
            i0.ɵɵtext(44);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(45, "br");
            i0.ɵɵelementStart(46, "strong");
            i0.ɵɵtext(47, "singleDatePicker:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "mat-checkbox", 3);
            i0.ɵɵlistener("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_48_listener($event) { return ctx.options.singleDatePicker = $event; });
            i0.ɵɵtext(49);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(50, "br");
            i0.ɵɵelementStart(51, "strong");
            i0.ɵɵtext(52, "showWeekNumbers:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "mat-checkbox", 3);
            i0.ɵɵlistener("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_53_listener($event) { return ctx.options.showWeekNumbers = $event; });
            i0.ɵɵtext(54);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(55, "br");
            i0.ɵɵelementStart(56, "strong");
            i0.ɵɵtext(57, "showISOWeekNumbers:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "mat-checkbox", 3);
            i0.ɵɵlistener("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_58_listener($event) { return ctx.options.showISOWeekNumbers = $event; });
            i0.ɵɵtext(59);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(60, "br");
            i0.ɵɵelementStart(61, "strong");
            i0.ɵɵtext(62, "customRangeDirection:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(63, "mat-checkbox", 3);
            i0.ɵɵlistener("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_63_listener($event) { return ctx.options.customRangeDirection = $event; });
            i0.ɵɵtext(64);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(65, "br");
            i0.ɵɵelementStart(66, "strong");
            i0.ɵɵtext(67, "lockStartDate:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(68, "mat-checkbox", 3);
            i0.ɵɵlistener("ngModelChange", function FullComponent_Template_mat_checkbox_ngModelChange_68_listener($event) { return ctx.options.lockStartDate = $event; });
            i0.ɵɵtext(69);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(70, "br");
            i0.ɵɵelementStart(71, "strong");
            i0.ɵɵtext(72, "minDate:");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(73);
            i0.ɵɵpipe(74, "date");
            i0.ɵɵelement(75, "br");
            i0.ɵɵelementStart(76, "strong");
            i0.ɵɵtext(77, "maxDate:");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(78);
            i0.ɵɵpipe(79, "date");
            i0.ɵɵelement(80, "br");
            i0.ɵɵelementStart(81, "strong");
            i0.ɵɵtext(82, "locale");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(83, " : ");
            i0.ɵɵelement(84, "br");
            i0.ɵɵelementStart(85, "div", 4);
            i0.ɵɵelementStart(86, "div", 0);
            i0.ɵɵelementStart(87, "div", 5);
            i0.ɵɵelementStart(88, "mat-form-field");
            i0.ɵɵelementStart(89, "mat-select", 6);
            i0.ɵɵlistener("ngModelChange", function FullComponent_Template_mat_select_ngModelChange_89_listener($event) { return ctx.locale.format = $event; });
            i0.ɵɵelementStart(90, "mat-option", 7);
            i0.ɵɵtext(91, "DD/MM/YYYY");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(92, "mat-option", 8);
            i0.ɵɵtext(93, "MM-DD-YYYY");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(94, "br");
            i0.ɵɵtext(95, " locale value:");
            i0.ɵɵelement(96, "br");
            i0.ɵɵtext(97);
            i0.ɵɵpipe(98, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(99, "div", 0);
            i0.ɵɵelementStart(100, "div", 1);
            i0.ɵɵelementStart(101, "mat-form-field");
            i0.ɵɵelementStart(102, "mat-select", 9);
            i0.ɵɵlistener("ngModelChange", function FullComponent_Template_mat_select_ngModelChange_102_listener($event) { return ctx.opens = $event; });
            i0.ɵɵelementStart(103, "mat-option", 10);
            i0.ɵɵtext(104, "Left");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(105, "mat-option", 11);
            i0.ɵɵtext(106, "Center");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(107, "mat-option", 12);
            i0.ɵɵtext(108, "Right");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(109, "div", 1);
            i0.ɵɵelementStart(110, "mat-form-field");
            i0.ɵɵelementStart(111, "mat-select", 13);
            i0.ɵɵlistener("ngModelChange", function FullComponent_Template_mat_select_ngModelChange_111_listener($event) { return ctx.drops = $event; });
            i0.ɵɵelementStart(112, "mat-option", 14);
            i0.ɵɵtext(113, "Down");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(114, "mat-option", 15);
            i0.ɵɵtext(115, "Up");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(116, "div", 0);
            i0.ɵɵelementStart(117, "div", 1);
            i0.ɵɵelementStart(118, "button", 16);
            i0.ɵɵlistener("click", function FullComponent_Template_button_click_118_listener() { return ctx.clear(); });
            i0.ɵɵtext(119, "Clear");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(120, "div", 0);
            i0.ɵɵelement(121, "div", 1);
            i0.ɵɵelement(122, "div", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx.title);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("autoApply", ctx.options.autoApply)("linkedCalendars", ctx.options.linkedCalendars)("singleDatePicker", ctx.options.singleDatePicker)("locale", ctx.locale)("showDropdowns", true)("ngModel", ctx.selected)("minDate", ctx.minDate)("maxDate", ctx.maxDate)("showWeekNumbers", ctx.options.showWeekNumbers)("showCancel", ctx.options.showCancel)("showClearButton", ctx.options.showClearButton)("showISOWeekNumbers", ctx.options.showISOWeekNumbers)("customRangeDirection", ctx.options.customRangeDirection)("lockStartDate", ctx.options.lockStartDate)("closeOnAutoApply", ctx.options.closeOnAutoApply)("opens", ctx.opens)("drops", ctx.drops)("timePicker", ctx.timePicker)("dateLimit", ctx.dateLimit);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(10, 49, ctx.selected), " ");
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngModel", ctx.timePicker);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Value: ", ctx.timePicker, "");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngModel", ctx.options.autoApply);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Value: ", ctx.options.autoApply, "");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.options.closeOnAutoApply);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Value: ", ctx.options.closeOnAutoApply, "");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.options.showCancel);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Value: ", ctx.options.showCancel, "");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.options.showClearButton);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Value: ", ctx.options.showClearButton, "");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.options.linkedCalendars);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Value: ", ctx.options.linkedCalendars, "");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.options.singleDatePicker);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Value: ", ctx.options.singleDatePicker, "");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.options.showWeekNumbers);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Value: ", ctx.options.showWeekNumbers, "");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.options.showISOWeekNumbers);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Value: ", ctx.options.showISOWeekNumbers, "");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.options.customRangeDirection);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Value: ", ctx.options.customRangeDirection, "");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.options.lockStartDate);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Value: ", ctx.options.lockStartDate, "");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(74, 51, ctx.minDate, "dd/MM/yyyy"), "");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(79, 54, ctx.maxDate, "dd/MM/yyyy"), "");
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngModel", ctx.locale.format);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(98, 57, ctx.locale), " ");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.opens);
            i0.ɵɵadvance(9);
            i0.ɵɵproperty("ngModel", ctx.drops);
        } }, directives: [i1.MatToolbar, i2.MatCard, i3.MatInput, i4.DaterangepickerDirective, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, i6.MatCheckbox, i7.MatFormField, i8.MatSelect, i9.MatOption, i10.MatButton], pipes: [i11.JsonPipe, i11.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vL3NyYy9hcHAvZnVsbC9mdWxsLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return FullComponent;
}());
exports.FullComponent = FullComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FullComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'full',
                templateUrl: './full.component.html',
                styleUrls: ['./full.component.scss']
            }]
    }], function () { return []; }, { daterangepicker: [{
            type: core_1.ViewChild,
            args: [daterangepicker_directive_1.DaterangepickerDirective, { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/reactive-form/reactive-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/reactive-form/reactive-form.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var _dayjs = __webpack_require__(/*! dayjs */ "../node_modules/dayjs/dayjs.min.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var i0 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i1 = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var i2 = __webpack_require__(/*! @angular/material/toolbar */ "../node_modules/@angular/material/__ivy_ngcc__/fesm5/toolbar.js");
var i3 = __webpack_require__(/*! ../../../../src/daterangepicker/daterangepicker.directive */ "../src/daterangepicker/daterangepicker.directive.ts");
var i4 = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var _c0 = function (a0, a1) { return { "red": a0, "green": a1 }; };
var ReactiveFormComponent = /** @class */ (function () {
    function ReactiveFormComponent(fb) {
        this.fb = fb;
        this.locale = {
            format: 'YYYY-MM-DDTHH:mm:ss.SSSSZ',
            displayFormat: 'YYYY-MM-DD',
        };
        this.form = this.fb.group({
            selected: [{
                    startDate: _dayjs('2015-11-24T00:00Z'),
                    endDate: _dayjs('2015-11-26T00:00Z')
                }, forms_1.Validators.required],
        });
        this.form2 = this.fb.group({
            selected: [{
                    startDate: '2019-12-11T18:30:00.000Z',
                    endDate: '2019-12-12T18:29:59.000Z',
                }, forms_1.Validators.required],
        });
    }
    ReactiveFormComponent.prototype.submit = function () {
        console.log(this.form.value);
    };
    ReactiveFormComponent.prototype.submit2 = function () {
        console.log(this.form2.value);
    };
    ReactiveFormComponent.prototype.toggleDisable = function (form) {
        if (form.disabled) {
            form.enable();
        }
        else {
            form.disable();
        }
    };
    ReactiveFormComponent.ɵfac = function ReactiveFormComponent_Factory(t) { return new (t || ReactiveFormComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    ReactiveFormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ReactiveFormComponent, selectors: [["reactive-form"]], decls: 28, vars: 11, consts: [[3, "formGroup", "ngSubmit"], [1, "row"], [1, "col", "s12"], [1, "col", "s6"], ["type", "text", "ngxDaterangepickerMd", "", "formControlName", "selected", "placeholder", "Choose date", "showCancel", "true", 1, "form-control", 3, "showDropdowns"], ["type", "button", 1, "ngx-daterangepicker-action", "waves-effect", "waves-light", "btn", 3, "ngClass", "click"], ["type", "submit", 1, "ngx-daterangepicker-action", "waves-effect", "waves-light", "btn"], ["type", "text", "ngxDaterangepickerMd", "", "formControlName", "selected", "placeholder", "Choose date", "showCancel", "true", 1, "form-control", 3, "showDropdowns", "singleDatePicker", "locale"]], template: function ReactiveFormComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-toolbar");
            i0.ɵɵtext(1, "Reactive forms");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "form", 0);
            i0.ɵɵlistener("ngSubmit", function ReactiveFormComponent_Template_form_ngSubmit_2_listener() { return ctx.submit(); });
            i0.ɵɵelementStart(3, "div", 1);
            i0.ɵɵelementStart(4, "div", 2);
            i0.ɵɵelementStart(5, "h6");
            i0.ɵɵtext(6, "Multi Select");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 3);
            i0.ɵɵelement(8, "input", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 3);
            i0.ɵɵelement(10, "br");
            i0.ɵɵelementStart(11, "button", 5);
            i0.ɵɵlistener("click", function ReactiveFormComponent_Template_button_click_11_listener() { return ctx.toggleDisable(ctx.form); });
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(13, " \u00A0 ");
            i0.ɵɵelementStart(14, "button", 6);
            i0.ɵɵtext(15, "Submit");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(16, " \u00A0 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "form", 0);
            i0.ɵɵlistener("ngSubmit", function ReactiveFormComponent_Template_form_ngSubmit_17_listener() { return ctx.submit2(); });
            i0.ɵɵelementStart(18, "div", 1);
            i0.ɵɵelementStart(19, "div", 2);
            i0.ɵɵelementStart(20, "h6");
            i0.ɵɵtext(21, "Single Select");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "div", 3);
            i0.ɵɵelement(23, "input", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "div", 3);
            i0.ɵɵelement(25, "br");
            i0.ɵɵelementStart(26, "button", 6);
            i0.ɵɵtext(27, "Submit");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("showDropdowns", true);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c0, !ctx.form.disabled, ctx.form.disabled));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx.form.disabled ? "Enable" : "Disable", " ");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("formGroup", ctx.form2);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("showDropdowns", true)("singleDatePicker", true)("locale", ctx.locale);
        } }, directives: [i2.MatToolbar, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.DaterangepickerDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i4.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vL3NyYy9hcHAvcmVhY3RpdmUtZm9ybS9yZWFjdGl2ZS1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return ReactiveFormComponent;
}());
exports.ReactiveFormComponent = ReactiveFormComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ReactiveFormComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'reactive-form',
                templateUrl: './reactive-form.component.html',
                styleUrls: ['./reactive-form.component.scss']
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();


/***/ }),

/***/ "./src/app/simple/simple.component.ts":
/*!********************************************!*\
  !*** ./src/app/simple/simple.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var _dayjs = __webpack_require__(/*! dayjs */ "../node_modules/dayjs/dayjs.min.js");
var daterangepicker_1 = __webpack_require__(/*! ../../../../src/daterangepicker */ "../src/daterangepicker/index.ts");
var i0 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i1 = __webpack_require__(/*! @angular/material/toolbar */ "../node_modules/@angular/material/__ivy_ngcc__/fesm5/toolbar.js");
var i2 = __webpack_require__(/*! ../../../../src/daterangepicker/daterangepicker.directive */ "../src/daterangepicker/daterangepicker.directive.ts");
var i3 = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var i4 = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var i5 = __webpack_require__(/*! ../../../../src/daterangepicker/daterangepicker.component */ "../src/daterangepicker/daterangepicker.component.ts");
function SimpleComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    var _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function SimpleComponent_button_9_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r2); var ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.clear($event); });
    i0.ɵɵtext(1, "Clear");
    i0.ɵɵelementEnd();
} }
var _c0 = function () { return { applyLabel: "Done", firstDay: 1 }; };
var SimpleComponent = /** @class */ (function () {
    function SimpleComponent() {
        this.selected = {
            startDate: _dayjs('2015-11-18T00:00Z'),
            endDate: _dayjs('2015-11-26T00:00Z')
        };
    }
    SimpleComponent.prototype.ngOnInit = function () {
        this.picker = this.pickerDirective.picker;
    };
    SimpleComponent.prototype.ngModelChange = function (e) {
        console.log({ 'ngModelChange()': e });
    };
    SimpleComponent.prototype.change = function (e) {
        console.log({ 'change()': e });
    };
    SimpleComponent.prototype.choosedDate = function (e) {
        this.inlineDate = e;
    };
    SimpleComponent.prototype.choosedDateTime = function (e) {
        this.inlineDateTime = e;
    };
    SimpleComponent.prototype.open = function (e) {
        this.pickerDirective.open(e);
    };
    SimpleComponent.prototype.clear = function (e) {
        // this.picker.clear(); // we can do
        this.selected = null; // now we can do
    };
    SimpleComponent.ɵfac = function SimpleComponent_Factory(t) { return new (t || SimpleComponent)(); };
    SimpleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SimpleComponent, selectors: [["simple"]], viewQuery: function SimpleComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(daterangepicker_1.DaterangepickerDirective, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pickerDirective = _t.first);
        } }, decls: 42, vars: 21, consts: [[1, "row"], [1, "col", "s6"], ["type", "text", "ngxDaterangepickerMd", "", "placeholder", "Choose date", "showCancel", "true", 1, "form-control", 3, "ngModel", "showDropdowns", "lockStartDate", "customRangeDirection", "ngModelChange", "change"], [1, "col", "s6", "right-align"], ["type", "button", 1, "ngx-daterangepicker-action", "waves-effect", "waves-light", "btn", 3, "click"], ["type", "button", "class", "ngx-daterangepicker-action waves-effect waves-light btn red", 3, "click", 4, "ngIf"], [1, "col", "s12"], [1, "prettyprint"], [1, "html"], [3, "locale", "choosedDate"], [3, "autoApply", "timePicker24Hour", "linkedCalendars", "startDate", "endDate", "timePicker", "locale", "choosedDate"], ["type", "button", 1, "ngx-daterangepicker-action", "waves-effect", "waves-light", "btn", "red", 3, "click"]], template: function SimpleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-toolbar");
            i0.ɵɵtext(1, "Simple daterangepicker2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 0);
            i0.ɵɵelementStart(3, "div", 1);
            i0.ɵɵelementStart(4, "input", 2);
            i0.ɵɵlistener("ngModelChange", function SimpleComponent_Template_input_ngModelChange_4_listener($event) { return ctx.selected = $event; })("ngModelChange", function SimpleComponent_Template_input_ngModelChange_4_listener($event) { return ctx.ngModelChange($event); })("change", function SimpleComponent_Template_input_change_4_listener($event) { return ctx.change($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 3);
            i0.ɵɵelement(6, "br");
            i0.ɵɵelementStart(7, "button", 4);
            i0.ɵɵlistener("click", function SimpleComponent_Template_button_click_7_listener($event) { return ctx.open($event); });
            i0.ɵɵtext(8, "open from a button");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, SimpleComponent_button_9_Template, 2, 0, "button", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 0);
            i0.ɵɵelementStart(11, "div", 6);
            i0.ɵɵelementStart(12, "b");
            i0.ɵɵtext(13, "Using the change event :");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "pre", 7);
            i0.ɵɵelementStart(15, "code", 8);
            i0.ɵɵtext(16, "<input type=\"text\" ngxDaterangepickerMd\n[(ngModel)]=\"selected\" placeholder=\"Choose date\" (change)=\"change($event)\"/>");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(17, "\n    ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "b");
            i0.ɵɵtext(19, "Or with ngModel :");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "pre", 7);
            i0.ɵɵelementStart(21, "code", 8);
            i0.ɵɵtext(22, "<input type=\"text\" ngxDaterangepickerMd\n        [lockStartDate]=\"false\"\n[(ngModel)]=\"selected\" placeholder=\"Choose date\"\n(ngModelChange)=\"ngModelChange($event)\"/>");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(23, "\n    ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(24, "hr");
            i0.ɵɵelementStart(25, "div", 0);
            i0.ɵɵelementStart(26, "div", 6);
            i0.ɵɵelementStart(27, "h3");
            i0.ɵɵtext(28, "Inline daterangepicker");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "ngx-daterangepicker-material", 9);
            i0.ɵɵlistener("choosedDate", function SimpleComponent_Template_ngx_daterangepicker_material_choosedDate_29_listener($event) { return ctx.choosedDate($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(30, "br");
            i0.ɵɵtext(31);
            i0.ɵɵpipe(32, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "div", 0);
            i0.ɵɵelementStart(34, "div", 6);
            i0.ɵɵelementStart(35, "h3");
            i0.ɵɵtext(36, "Inline daterangepicker with time and auto-apply");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "ngx-daterangepicker-material", 10);
            i0.ɵɵlistener("choosedDate", function SimpleComponent_Template_ngx_daterangepicker_material_choosedDate_37_listener($event) { return ctx.choosedDateTime($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(38, "br");
            i0.ɵɵelementStart(39, "p");
            i0.ɵɵtext(40);
            i0.ɵɵpipe(41, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngModel", ctx.selected)("showDropdowns", true)("lockStartDate", false)("customRangeDirection", false);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.selected && ctx.selected.startDate);
            i0.ɵɵadvance(20);
            i0.ɵɵproperty("locale", i0.ɵɵpureFunction0(19, _c0));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" Choosed date: ", i0.ɵɵpipeBind1(32, 15, ctx.inlineDate), " ");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("autoApply", true)("timePicker24Hour", true)("linkedCalendars", true)("startDate", ctx.selected == null ? null : ctx.selected.startDate)("endDate", ctx.selected == null ? null : ctx.selected.endDate)("timePicker", true)("locale", i0.ɵɵpureFunction0(20, _c0));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("Choosed date (after changes): ", i0.ɵɵpipeBind1(41, 17, ctx.inlineDateTime), "");
        } }, directives: [i1.MatToolbar, i2.DaterangepickerDirective, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i4.NgIf, i5.DaterangepickerComponent], pipes: [i4.JsonPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vL3NyYy9hcHAvc2ltcGxlL3NpbXBsZS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return SimpleComponent;
}());
exports.SimpleComponent = SimpleComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SimpleComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'simple',
                templateUrl: './simple.component.html',
                styleUrls: ['./simple.component.scss']
            }]
    }], function () { return []; }, { pickerDirective: [{
            type: core_1.ViewChild,
            args: [daterangepicker_1.DaterangepickerDirective, { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/single-datepicker/single-datepicker.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/single-datepicker/single-datepicker.component.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var _dayjs = __webpack_require__(/*! dayjs */ "../node_modules/dayjs/dayjs.min.js");
// _dayjs.locale('fr', localization);
var weekday = __webpack_require__(/*! dayjs/plugin/weekday */ "../node_modules/dayjs/plugin/weekday.js");
var i0 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i1 = __webpack_require__(/*! @angular/material/toolbar */ "../node_modules/@angular/material/__ivy_ngcc__/fesm5/toolbar.js");
var i2 = __webpack_require__(/*! ../../../../src/daterangepicker/daterangepicker.directive */ "../src/daterangepicker/daterangepicker.directive.ts");
var i3 = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
_dayjs.extend(weekday);
var SingleDatepickerComponent = /** @class */ (function () {
    function SingleDatepickerComponent() {
        this.selected = _dayjs();
        this.locale = {
            applyLabel: 'Appliquer',
            customRangeLabel: ' - ',
            daysOfWeek: _dayjs.weekdaysMin(),
            monthNames: _dayjs.monthsShort(),
            firstDay: _dayjs.localeData().firstDayOfWeek(),
        };
    }
    SingleDatepickerComponent.prototype.ngOnInit = function () {
    };
    SingleDatepickerComponent.prototype.isInvalidDate = function (date) {
        return date.weekday() === 0;
    };
    SingleDatepickerComponent.prototype.isCustomDate = function (date) {
        return (date.weekday() === 0 || date.weekday() === 6) ? 'mycustomdate' : false;
    };
    SingleDatepickerComponent.ɵfac = function SingleDatepickerComponent_Factory(t) { return new (t || SingleDatepickerComponent)(); };
    SingleDatepickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SingleDatepickerComponent, selectors: [["single-datepicker"]], decls: 20, vars: 11, consts: [[1, "row"], [1, "col", "s6"], ["type", "text", "ngxDaterangepickerMd", "", 1, "form-control", 3, "isInvalidDate", "isCustomDate", "locale", "ngModel", "singleDatePicker", "autoApply", "ngModelChange"], [1, "prettyprint"], [1, "html"], [1, "javascript"]], template: function SingleDatepickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-toolbar");
            i0.ɵɵtext(1, "Single datepicker with custom invalid date & custom class on date / with french language");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 0);
            i0.ɵɵelementStart(3, "div", 1);
            i0.ɵɵelementStart(4, "input", 2);
            i0.ɵɵlistener("ngModelChange", function SingleDatepickerComponent_Template_input_ngModelChange_4_listener($event) { return ctx.selected = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 0);
            i0.ɵɵelementStart(6, "div", 1);
            i0.ɵɵelementStart(7, "b");
            i0.ɵɵtext(8, "Html code:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "pre", 3);
            i0.ɵɵelementStart(10, "code", 4);
            i0.ɵɵtext(11, "<input type=\"text\"\n  ngxDaterangepickerMd\n  [isInvalidDate]=\"isInvalidDate\"\n  [isCustomDate]=\"isCustomDate\"\n  [locale]=\"locale\"\n  [(ngModel)]=\"selected\"\n  [singleDatePicker]=\"true\"\n  [autoApply]=\"true\"/>");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(12, "\n    ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 1);
            i0.ɵɵelementStart(14, "b");
            i0.ɵɵtext(15, "Typescript code:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "pre", 3);
            i0.ɵɵelementStart(17, "code", 5);
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(19, "\n    ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("isInvalidDate", ctx.isInvalidDate)("isCustomDate", ctx.isCustomDate)("locale", ctx.locale)("ngModel", ctx.selected)("singleDatePicker", true)("autoApply", true);
            i0.ɵɵadvance(14);
            i0.ɵɵtextInterpolate5("\nimport * as moment from 'moment';\nimport * as localization from 'moment/locale/fr';\n_dayjs.locale('fr', localization);\n...\nexport class SingleDatepickerComponent ", "{", "\n  selected: any;\n  locale: LocaleConfig = ", "{", "\n    applyLabel: 'Appliquer',\n    customRangeLabel: ' - ',\n    daysOfWeek: _dayjs.weekdaysMin(),\n    monthNames: _dayjs.monthsShort(),\n    firstDay: _dayjs.localeData().firstDayOfWeek(),\n  }\n  constructor() ", "{", "\n    this.alwaysShowCalendars = true;\n  }\n  isInvalidDate(date) ", "{", "\n    return date.weekday() === 0;\n  }\n  isCustomDate(date) ", "{", "\n    return  (\n      date.weekday() === 0 ||\n      date.weekday() === 6\n    )  ? 'mycustomdate' : false;\n  }\n}");
        } }, directives: [i1.MatToolbar, i2.DaterangepickerDirective, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZW1vL3NyYy9hcHAvc2luZ2xlLWRhdGVwaWNrZXIvc2luZ2xlLWRhdGVwaWNrZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
    return SingleDatepickerComponent;
}());
exports.SingleDatepickerComponent = SingleDatepickerComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SingleDatepickerComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'single-datepicker',
                templateUrl: './single-datepicker.component.html',
                styleUrls: ['./single-datepicker.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/timepicker/timepicker.component.ts":
/*!****************************************************!*\
  !*** ./src/app/timepicker/timepicker.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var _dayjs = __webpack_require__(/*! dayjs */ "../node_modules/dayjs/dayjs.min.js");
var i0 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var i1 = __webpack_require__(/*! @angular/material/toolbar */ "../node_modules/@angular/material/__ivy_ngcc__/fesm5/toolbar.js");
var i2 = __webpack_require__(/*! ../../../../src/daterangepicker/daterangepicker.directive */ "../src/daterangepicker/daterangepicker.directive.ts");
var i3 = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var TimepickerComponent = /** @class */ (function () {
    function TimepickerComponent() {
        this.selected = {
            startDate: _dayjs('2015-11-18T00:00Z'),
            endDate: _dayjs('2015-11-26T00:00Z')
        };
    }
    TimepickerComponent.prototype.ngOnInit = function () {
    };
    TimepickerComponent.ɵfac = function TimepickerComponent_Factory(t) { return new (t || TimepickerComponent)(); };
    TimepickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TimepickerComponent, selectors: [["timepicker"]], decls: 20, vars: 11, consts: [[1, "row"], [1, "col", "s6"], ["type", "text", "ngxDaterangepickerMd", "", 1, "form-control", 3, "timePicker", "timePickerSeconds", "timePickerIncrement", "timePicker24Hour", "ngModel", "ngModelChange"], [1, "prettyprint"], [1, "html"], [1, "javascript"]], template: function TimepickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-toolbar");
            i0.ɵɵtext(1, "Single datepicker with custom invalid date & custom class on date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 0);
            i0.ɵɵelementStart(3, "div", 1);
            i0.ɵɵelementStart(4, "input", 2);
            i0.ɵɵlistener("ngModelChange", function TimepickerComponent_Template_input_ngModelChange_4_listener($event) { return ctx.selected = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 0);
            i0.ɵɵelementStart(6, "div", 1);
            i0.ɵɵelementStart(7, "b");
            i0.ɵɵtext(8, "Html code:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "pre", 3);
            i0.ɵɵelementStart(10, "code", 4);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(12, "\n    ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 1);
            i0.ɵɵelementStart(14, "b");
            i0.ɵɵtext(15, "Typescript code:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "pre", 3);
            i0.ɵɵelementStart(17, "code", 5);
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(19, "\n    ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("timePicker", true)("timePickerSeconds", true)("timePickerIncrement", 15)("timePicker24Hour", true)("ngModel", ctx.selected);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1("<input type=\"text\"\n    ngxDaterangepickerMd\n    [timePicker]=\"true\"\n    [timePickerSeconds]=\"true\"\n    [timePickerIncrement]=\"15\"\n    [timePicker24Hour]=\"true\"\n    [locale]=\"", "{", "format: 'DD/MM/YYYY HH:mm:ss', firstDay: 1}\"\n    [(ngModel)]=\"selected\"\"/>\n    class=\"form-control\"/>");
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate5("export class SingleDatepickerComponent ", "{", "\n        selected: any;\n        \n        constructor() ", "{", "\n        ", "}", "\n        isInvalidDate(date) ", "{", "\n          return date.weekday() === 0;\n        ", "}", "");
        } }, directives: [i1.MatToolbar, i2.DaterangepickerDirective, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel], encapsulation: 2 });
    return TimepickerComponent;
}());
exports.TimepickerComponent = TimepickerComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TimepickerComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'timepicker',
                templateUrl: './timepicker.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __NgCli_bootstrap_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var __NgCli_bootstrap_2 = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
__NgCli_bootstrap_2.platformBrowser().bootstrapModule(__NgCli_bootstrap_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gjsmith66/SoftwareProjects/ngx-daterangepicker-material-dayjs/demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map