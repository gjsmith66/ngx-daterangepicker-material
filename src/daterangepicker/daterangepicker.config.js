import { InjectionToken } from '@angular/core';
import * as _dayjs from 'dayjs';
import * as localeData from 'dayjs/plugin/localeData';
_dayjs.extend(localeData);
export const LOCALE_CONFIG = new InjectionToken('daterangepicker.config');
export const DefaultLocaleConfig = {
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
