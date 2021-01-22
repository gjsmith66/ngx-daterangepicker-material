import { Component, OnInit, ViewChild } from '@angular/core';
import * as _dayjs from 'dayjs';
import { DaterangepickerComponent, DaterangepickerDirective } from '../../../../src/daterangepicker';

@Component({
  selector: 'timepicker',
  templateUrl: './timepicker.component.html'
})
export class TimepickerComponent implements OnInit {
  selected: {startDate: _dayjs.Dayjs, endDate: _dayjs.Dayjs};
  constructor() {
    this.selected = {
      startDate: _dayjs('2015-11-18T00:00Z'),
      endDate: _dayjs('2015-11-26T00:00Z')
    }
   }

  ngOnInit() {
  }

}
