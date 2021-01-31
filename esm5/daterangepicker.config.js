import { InjectionToken } from '@angular/core';
import * as _dayjs from 'dayjs';
import * as localeData from 'dayjs/plugin/localeData';
_dayjs.extend(localeData);
export var LOCALE_CONFIG = new InjectionToken('daterangepicker.config');
/**
 *  DefaultLocaleConfig
 */
export var DefaultLocaleConfig = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXJhbmdlcGlja2VyLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1kYXRlcmFuZ2VwaWNrZXItbWF0ZXJpYWwtZGF5anMvIiwic291cmNlcyI6WyJkYXRlcmFuZ2VwaWNrZXIuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxLQUFLLE1BQU0sTUFBTSxPQUFPLENBQUM7QUFDaEMsT0FBTyxLQUFLLFVBQVUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RCxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBQ3pCLE1BQU0sQ0FBQyxJQUFNLGFBQWEsR0FBRyxJQUFJLGNBQWMsQ0FBZSx3QkFBd0IsQ0FBQyxDQUFDO0FBa0J4Rjs7R0FFRztBQUNILE1BQU0sQ0FBQyxJQUFNLG1CQUFtQixHQUFpQjtJQUM3QyxTQUFTLEVBQUUsS0FBSztJQUNoQixTQUFTLEVBQUUsS0FBSztJQUNoQixTQUFTLEVBQUUsR0FBRztJQUNkLFVBQVUsRUFBRSxPQUFPO0lBQ25CLFdBQVcsRUFBRSxRQUFRO0lBQ3JCLFVBQVUsRUFBRSxPQUFPO0lBQ25CLGdCQUFnQixFQUFFLGNBQWM7SUFDaEMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUU7SUFDaEMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEVBQUU7SUFDaEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxjQUFjLEVBQUU7Q0FDakQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgX2RheWpzIGZyb20gJ2RheWpzJztcbmltcG9ydCAqIGFzIGxvY2FsZURhdGEgZnJvbSAnZGF5anMvcGx1Z2luL2xvY2FsZURhdGEnO1xuX2RheWpzLmV4dGVuZChsb2NhbGVEYXRhKVxuZXhwb3J0IGNvbnN0IExPQ0FMRV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48TG9jYWxlQ29uZmlnPignZGF0ZXJhbmdlcGlja2VyLmNvbmZpZycpO1xuLyoqXG4gKiAgTG9jYWxlQ29uZmlnIEludGVyZmFjZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIExvY2FsZUNvbmZpZyB7XG4gICAgZGlyZWN0aW9uPzogc3RyaW5nO1xuICAgIHNlcGFyYXRvcj86IHN0cmluZztcbiAgICB3ZWVrTGFiZWw/OiBzdHJpbmc7XG4gICAgYXBwbHlMYWJlbD86IHN0cmluZztcbiAgICBjYW5jZWxMYWJlbD86IHN0cmluZztcbiAgICBjbGVhckxhYmVsPzogc3RyaW5nO1xuICAgIGN1c3RvbVJhbmdlTGFiZWw/OiBzdHJpbmc7XG4gICAgZGF5c09mV2Vlaz86IHN0cmluZ1tdO1xuICAgIG1vbnRoTmFtZXM/OiAgc3RyaW5nW107XG4gICAgZmlyc3REYXk/OiBudW1iZXI7XG4gICAgZm9ybWF0Pzogc3RyaW5nO1xuICAgIGRpc3BsYXlGb3JtYXQ/OiBzdHJpbmc7XG59XG4vKipcbiAqICBEZWZhdWx0TG9jYWxlQ29uZmlnXG4gKi9cbmV4cG9ydCBjb25zdCBEZWZhdWx0TG9jYWxlQ29uZmlnOiBMb2NhbGVDb25maWcgPSB7XG4gICAgZGlyZWN0aW9uOiAnbHRyJyxcbiAgICBzZXBhcmF0b3I6ICcgLSAnLFxuICAgIHdlZWtMYWJlbDogJ1cnLFxuICAgIGFwcGx5TGFiZWw6ICdBcHBseScsXG4gICAgY2FuY2VsTGFiZWw6ICdDYW5jZWwnLFxuICAgIGNsZWFyTGFiZWw6ICdDbGVhcicsXG4gICAgY3VzdG9tUmFuZ2VMYWJlbDogJ0N1c3RvbSByYW5nZScsXG4gICAgZGF5c09mV2VlazogX2RheWpzLndlZWtkYXlzTWluKCksXG4gICAgbW9udGhOYW1lczogX2RheWpzLm1vbnRoc1Nob3J0KCksXG4gICAgZmlyc3REYXk6IF9kYXlqcy5sb2NhbGVEYXRhKCkuZmlyc3REYXlPZldlZWsoKVxufTtcbiJdfQ==