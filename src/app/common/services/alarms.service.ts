import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from "rxjs/Observable";
import {IAlarm} from "../models/alarms";
import {Headers, RequestOptions, Http} from '@angular/http';
import {LocalStorageService} from "./local-storage.service";


export const ALARM: IAlarm[] = [];
export const WARNING_THRESHOLD = 2;
export const DANGER_THRESHOLD = 30;

@Injectable()
export class AlarmsService {
  private alarmsDataTableSubject = new BehaviorSubject<IAlarm[]>(ALARM);
  alarmsDataTable$: Observable<IAlarm[]> = this.alarmsDataTableSubject.asObservable();

  private alarmsWizardSubject = new BehaviorSubject<IAlarm[]>(ALARM);
  alarmsWizard$: Observable<IAlarm[]> = this.alarmsWizardSubject.asObservable();

  private myHeaders = new Headers();
  private options: any;
  private params: any;


  constructor(private http: Http, localStorageService: LocalStorageService) {
    this.myHeaders.append('token', 'token');

    let arr = JSON.parse(localStorageService.get('filter'));

    this.params = {
      'city': arr.selectedCities || [],
      'state': arr.selectedStates || [],
      'storeNumber': arr.storeNumber || [],
      'accountID': '1'
    };

    this.options = new RequestOptions({search: this.params, headers: this.myHeaders});

  }

  getAlarmsData() {
    this.http.get(`/api/alarmsDataTable`, this.options)
      .map(res => res.json())
      .map(res => res.body.data.alarms)
      .subscribe(data => this.alarmsDataTableSubject.next(data))


  }


  getAlarmsWizardData() {
    this.http.get(`/api/alarmsWizard`, this.options)
      .map(res => res.json())
      .subscribe(data => this.alarmsWizardSubject.next(data))


  }
}


