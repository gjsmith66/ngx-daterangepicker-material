import { Component, OnInit } from '@angular/core';
import * as _dayjs from 'dayjs';
import { LocaleConfig } from '../../../../src/daterangepicker';
// _dayjs.locale('fr', localization);
import * as weekday from 'dayjs/plugin/weekday';
_dayjs.extend(weekday)

@Component({
  selector: 'single-datepicker',
  templateUrl: './single-datepicker.component.html',
  styleUrls: ['./single-datepicker.component.scss']
})
export class SingleDatepickerComponent implements OnInit {
  selected = _dayjs();
  locale: LocaleConfig = {
    applyLabel: 'Appliquer',
    customRangeLabel: ' - ',
    daysOfWeek: _dayjs.weekdaysMin(),
    monthNames: _dayjs.monthsShort(),
    firstDay: _dayjs.localeData().firstDayOfWeek(),
  }
  constructor() { }
  ngOnInit() {
  }
  isInvalidDate(date) {
    return date.weekday() === 0;
  }
  isCustomDate(date) {
    return  (
      date.weekday() === 0 || date.weekday() === 6
    )  ? 'mycustomdate' : false;
  }

}
