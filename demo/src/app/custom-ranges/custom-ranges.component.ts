import { Component, OnInit } from '@angular/core';
import * as _dayjs from 'dayjs';

@Component({
  selector: 'custom-ranges',
  templateUrl: './custom-ranges.component.html',
  styleUrls: ['./custom-ranges.component.scss']
})
export class CustomRangesComponent implements OnInit {
  selected: any;
  alwaysShowCalendars: boolean;
  showRangeLabelOnInput: boolean;
  keepCalendarOpeningWithRange: boolean;
  maxDate: _dayjs.Dayjs;
  minDate: _dayjs.Dayjs;
  invalidDates: _dayjs.Dayjs[] = [];
  tooltips = [
    {date: _dayjs(), text: 'Today is just unselectable'},
    {date:  _dayjs().add(2, 'days'), text: 'Yeeeees!!!'}
  ];
  inlineDateTime;
  ranges: any = {
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

  isInvalidDate = (m: _dayjs.Dayjs) =>  {
    return this.invalidDates.some(d => d.isSame(m, 'day') );
  }
  isTooltipDate = (m: _dayjs.Dayjs) =>  {
    const tooltip = this.tooltips.find(tt => tt.date.isSame(m, 'day'));
    if (tooltip) {
      return tooltip.text;
    } else {
      return false;
    }
  }

  constructor() {
    this.maxDate = _dayjs().add(2,  'weeks');
    this.minDate = _dayjs().subtract(3, 'days');

    this.alwaysShowCalendars = true;
    this.keepCalendarOpeningWithRange = true;
    this.showRangeLabelOnInput = true;
    this.selected = {
      startDate: _dayjs().subtract(1, 'days').hour(0).minute(0),
      endDate: _dayjs().subtract(1, 'days').hour(23).minute(59)
    };
  }
  rangeClicked(range) {
    console.log('[rangeClicked] range is : ', range);
  }
  datesUpdated(range) {
    console.log('[datesUpdated] range is : ', range);
  }

  ngOnInit() {}
  choosedDateTime(e) {
    this.inlineDateTime = e;
  }
}
