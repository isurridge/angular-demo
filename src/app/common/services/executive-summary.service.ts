import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Headers, RequestOptions, Http} from '@angular/http';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import * as moment from "moment";
import {LocalStorageService} from "./local-storage.service";


@Injectable()
export class ExecutiveSummaryService {
  private chartSubject = new BehaviorSubject([]);
  chartData$: Observable<any> = this.chartSubject.asObservable();

  private statusSubject = new BehaviorSubject([]);
  statusData$: Observable<any> = this.statusSubject.asObservable();


  private meterSubject = new BehaviorSubject([]);
  meterData$: Observable<any> = this.meterSubject.asObservable();

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

  getLineChartData() {
    this.http.get(`/api/executiveSummaryLineChart`, this.options)
      .map(res => res.json())
      .map(res => res.body.data)
      .map(res => {
        res.map((d: any) => {
          d.series.map((c: any) => {
              c.name = moment(Date.parse(c.name)).format('MM/DD/YYYY');
            }
          )
        });
        return res;
      })
      .subscribe(data => this.chartSubject.next(data))

  }

  getStatusTablesData() {
    this.http.get(`/api/executiveSummaryStatusTables`, this.options)
      .map(res => res.json())
      .map(res => res.body.data)
      .subscribe(data => this.statusSubject.next(data))

  }

  getHealthMeterData() {
    this.http.get(`/api/executiveSummaryMeter`, this.options)
      .map(res => res.json())
      .map(res => res.body.data)
      .map(res => {
        return new Array(res);
      })
      .subscribe(data => this.meterSubject.next(data))

  }

}
