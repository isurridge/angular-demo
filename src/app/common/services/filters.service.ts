import { Injectable, Inject } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import * as moment from "moment";

/**
 * The filters service is responsible for
 * maintaining, persisting and manipulating
 * data filters in the Sherlock application.
 */
@Injectable()
export class FiltersService {
  localStorageService: LocalStorageService;

  constructor(@Inject(LocalStorageService) localStorageService: LocalStorageService) {
    this.localStorageService = localStorageService;
  }

  /**
   * Responsible for persisting a collection of
   * filters by type.
   *
   * This method will first attempt to persist the
   * selected filter via an HTTP service and will
   * then cache the persisted filter in localStorage.
   *
   * Filters should be a JSON encoded string
   * representation of a filters-panel option hash.
   *
   * @param filterType
   * @param filters
   */
  persistFilters(filterType: string, filters: any) {
    // @todo integrate with a filters service endpoint
    return this.localStorageService.set(filterType, JSON.stringify(filters));
  }

  /**
   * Responsible for retrieving a colletion of
   * filters by type.
   *
   * Filters will by default be parsed from a JSON
   * encoded string representation.
   *
   * @param filterType
   * @returns {any}
   */
  loadFilters(filterType: string) {
    return JSON.parse(this.localStorageService.get(filterType));
  }
}

/**
 * The local storage key that holds the executive
 * summary filters.
 * @type {string}
 */
export const EXECUTIVE_SUMMARY_FILTERS_KEY = 'filter';

/**
 * An object literal representing the options for
 * all filter date picker form controls.
 * @type {any}
 */
export const DATE_PICKER_OPTIONS = {
  locale: { format: 'M/D/YY' },
  alwaysShowCalendars: false,
  startDate: moment().subtract(1, 'month').startOf('month'),
  endDate: moment().subtract(1, 'month').endOf('month'),
  ranges: {
    'Last Month': [
      moment().subtract(1, 'month').startOf('month'),
      moment().subtract(1, 'month').endOf('month')
    ],
    'Last 3 Months': [moment().subtract(4, 'month'), moment()],
    'Last 6 Months': [moment().subtract(6, 'month'), moment()],
    'Last 12 Months': [moment().subtract(12, 'month'), moment()],
  }
};

/**
 * A collection of object literals representing
 * the options available for a state picker form
 * control.
 * @type {{label: string; value: string}[]}
 */
export const STATE_OPTIONS = [
  {label: "Alabama", value: "AL"},
  {label: "Alaska", value: "AK"},
  {label: "Arizona", value: "AZ"},
  {label: "Arkansas", value: "AR"},
  {label: "California", value: "CA"},
  {label: "Colorado", value: "CO"},
  {label: "Connecticut", value: "CT"},
  {label: "Delaware", value: "DE"},
  {label: "District Of Columbia", value: "DC"},
  {label: "Florida", value: "FL"},
  {label: "Georgia", value: "GA"},
  {label: "Hawaii", value: "HI"},
  {label: "Idaho", value: "ID"},
  {label: "Illinois", value: "IL"},
  {label: "Indiana", value: "IN"},
  {label: "Iowa", value: "IA"},
  {label: "Kansas", value: "KS"},
  {label: "Kentucky", value: "KY"},
  {label: "Louisiana", value: "LA"},
  {label: "Maine", value: "ME"},
  {label: "Maryland", value: "MD"},
  {label: "Massachusetts", value: "MA"},
  {label: "Michigan", value: "MI"},
  {label: "Minnesota", value: "MN"},
  {label: "Mississippi", value: "MS"},
  {label: "Missouri", value: "MO"},
  {label: "Montana", value: "MT"},
  {label: "Nebraska", value: "NE"},
  {label: "Nevada", value: "NV"},
  {label: "New Hampshire", value: "NH"},
  {label: "New Jersey", value: "NJ"},
  {label: "New Mexico", value: "NM"},
  {label: "New York", value: "NY"},
  {label: "North Carolina", value: "NC"},
  {label: "North Dakota", value: "ND"},
  {label: "Ohio", value: "OH"},
  {label: "Oklahoma", value: "OK"},
  {label: "Oregon", value: "OR"},
  {label: "Pennsylvania", value: "PA"},
  {label: "Rhode Island", value: "RI"},
  {label: "South Carolina", value: "SC"},
  {label: "South Dakota", value: "SD"},
  {label: "Tennessee", value: "TN"},
  {label: "Texas", value: "TX"},
  {label: "Utah", value: "UT"},
  {label: "Vermont", value: "VT"},
  {label: "Virginia", value: "VA"},
  {label: "Washington", value: "WA"},
  {label: "West Virginia", value: "WV"},
  {label: "Wisconsin", value: "WI"},
  {label: "Wyoming", value: "WY"}
];

/**
 * A collection of object literals representing
 * the options available for a city picker form
 * control.
 * @type {{label: string; value: string}[]}
 */
export const CITY_OPTIONS = [
  {label: 'San Diego', value: '1'},
  {label: 'Oakland', value: '2'},
  {label: 'San Jose', value: '3'}
];

/**
 * A collection of object literals representing
 * the options available for an alarm picker form
 * control.
 * @type {{label: string; value: string}[]}
 */
export const ALARM_OPTIONS = [
  {label: 'Window Breach', value: '1'},
  {label: 'Door Breach', value: '2'},
  {label: 'Alarm Trigger', value: '3'}
];

/**
 * A collection of object literals representing
 * the options available for a recommendations
 * picker form control.
 * @type {{label: string; value: string}[]}
 */
export const RECOMMENDATION_OPTIONS = [
  {label: 'Do nothing', value: '1'},
  {label: 'Do something', value: '2'},
  {label: 'Do all the things', value: '3'}
];

/**
 * A collection of object literals representing
 * the options available for a police dispatch
 * picker form control.
 * @type {{label: string; value: string}[]}
 */
export const POLICE_DISPATCH_OPTIONS = [
  {label: 'TRUE', value: 'TRUE'},
  {label: 'FALSE', value: 'FALSE'},
];

/**
 * A collection of object literals representing
 * the options available for a status picker form
 * control.
 * @type {{label: string; value: string}[]}
 */
export const STATUS_OPTIONS = [
  {label: 'Requested', value: 'requested'},
  {label: 'Open', value: 'open'},
  {label: 'Closed', value: 'closed'},
];

/**
 * A collection of object literals representing
 * the options available for action picker form
 * control.
 * @type {{label: string; value: string}[]}
 */
export const ACTION_OPTIONS = [
  {label: 'Remote fix', value: '1'},
  {label: 'Technician', value: '2'},
];
