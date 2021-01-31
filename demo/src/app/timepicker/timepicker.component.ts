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
        startDate: _dayjs().subtract(3,'week').subtract(17,'hour'),
        endDate: _dayjs().subtract(1,'week').subtract(3,'day').subtract(3,'hour')
    }
   }

  ngOnInit() {
  }

}
