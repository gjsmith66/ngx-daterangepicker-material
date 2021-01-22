import { Component, OnInit, ViewChild } from '@angular/core';
import * as _dayjs from 'dayjs';
import { DaterangepickerDirective } from '../../../../src/daterangepicker/daterangepicker.directive';

@Component({
  selector: 'full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {

  title = 'Pure angular daterangepicker';
  options: any = {
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
  minDate: _dayjs.Dayjs = _dayjs().subtract(5, 'days');
  maxDate: _dayjs.Dayjs = _dayjs().add(2, 'month');
  locale: any = {
    format: 'YYYY-MM-DDTHH:mm:ss.SSSSZ',
    displayFormat: 'DD MMMM YYYY HH:mm',
    separator: ' To ',
    cancelLabel: 'Cancel',
    applyLabel: 'Okay'
  }
  opens: string;
  drops: string;
  timePicker: boolean;
  dateLimit: number;
  click() {
  }
  selected = {start: _dayjs().subtract(3, 'days'), end: _dayjs().add(3, 'days') };
  @ViewChild(DaterangepickerDirective, { static: true }) daterangepicker: DaterangepickerDirective;
  constructor() {
    this.timePicker = false;
    this.opens = 'right';
    this.drops = 'down';
    this.dateLimit = 30;
  }

  clear(): void {
    this.daterangepicker.clear();
  }
  ngOnInit() {
  }

  eventClicked(e): void {
    console.log({'eventClicked()': e});
  }
}
