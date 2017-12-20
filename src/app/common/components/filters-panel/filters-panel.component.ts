import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IOption } from 'ng-select';
import {
  DATE_PICKER_OPTIONS,
  STATE_OPTIONS,
  CITY_OPTIONS,
  ALARM_OPTIONS,
  RECOMMENDATION_OPTIONS,
  POLICE_DISPATCH_OPTIONS,
  STATUS_OPTIONS,
  ACTION_OPTIONS
} from '../../services/filters.service';

/**
 * The filters component is a view that represents
 * the currently selected filters for given
 * Sherlock data.
 */
@Component({
  selector: 'app-filters-panel',
  templateUrl: './filters-panel.component.html',
  styleUrls: ['./filters-panel.component.scss'],
  providers: [FormBuilder]
})
export class FiltersPanelComponent {
  @Output() applyFiltersClick = new EventEmitter();
  @Input() filterSelections: any;
  @Input() filterOptions: {
    statusSelect: false,
    ticketNumber: false,
    storeNumber: false,
    policeDispatch: false,
    stateSelect: false,
    citySelect: false,
    alarmTypesSelect: false,
    recommendationsSelect: false,
    actionSelect: false,
    dateRange: false,
    requestedDate: false
  };

  /**
   * The form group representing all controls
   * in the filters panel.
   */
  public filterForm: FormGroup;

  /**
   * Filter component option menu definitions
   */
  public datePickerOptions: any = DATE_PICKER_OPTIONS;
  public states: Array<IOption> = STATE_OPTIONS;
  public cities: Array<IOption> = CITY_OPTIONS;
  public alarms: Array<IOption> = ALARM_OPTIONS;
  public recommendations: Array<IOption> = RECOMMENDATION_OPTIONS;
  public policeDispatchBoolOptions: Array<IOption> = POLICE_DISPATCH_OPTIONS;
  public statuses: Array<IOption> = STATUS_OPTIONS;
  public actions: Array<IOption> = ACTION_OPTIONS;

  /**
   * Responsible for initializing the filters
   * panel.
   *
   * The constructor will create the component
   * form builder.
   *
   * @param builder
   */
  constructor(private builder: FormBuilder) {
    this.filterForm = builder.group({
      selectedStatus: '',
      selectedPoliceDispatchBool: [],
      selectedStates: [],
      selectedCities: [],
      selectedAlarms: [],
      selectedRecommendations: [],
      selectedActions: [],
      selectedRequestedDate: {},
      selectedDateRange: {},
      ticketNumber: '',
      storeNumber: ''
    });
  }

  /**
   * Responsible for capturing changes to the
   * filter form controls.
   *
   * This lifecycle method is used to update the
   * previously persisted control values that
   * are passed via @Input.
   *
   * @todo add all input options to this block.
   * @param changes
   */
  ngOnChanges(changes: any) {
    if (typeof changes !== 'undefined' &&
        typeof changes.filterSelections !== 'undefined' &&
        changes.filterSelections.firstChange) {
      const { currentValue } = changes.filterSelections;

      this.filterForm.controls['selectedCities'].patchValue(currentValue.selectedCities);
      this.filterForm.controls['selectedDateRange'].patchValue(currentValue.selectedDateRange);
      this.filterForm.controls['selectedStates'].patchValue(currentValue.selectedStates);
      this.filterForm.controls['storeNumber'].patchValue(currentValue.storeNumber);
    }
  }

  /**
   * Responsibl for setting the datepicker
   * widget start and end dates based on a
   * selected date or range.
   *
   * @param value
   * @param datepicker
   */
  selectedDate(value: any, datepicker?: any) {
    datepicker.start = value.start;
    datepicker.end = value.end;
  }

  /**
   * Responsible for capturing the currently
   * selected filters and emitting the
   * applyFiltersCheck output event emitter.
   * @param data
   */
  submit(data: any) {
    this.applyFiltersClick.emit(data);
  }

  /**
   * Responsible for clearing the currently
   * selected filters.
   */
  clearFilters() {
    this.filterForm.reset();
  }
}
