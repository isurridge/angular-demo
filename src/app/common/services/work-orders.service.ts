import {Injectable} from '@angular/core';
import {Headers, RequestOptions, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {IWorkOrder} from "../models/work-orders";
import {LocalStorageService} from "./local-storage.service";
import * as moment from "moment";


export const WORK_ORDER: IWorkOrder[] = [{
  id: 0,
  name: 'Ian Surridge',
  gender: 'male',
  age: 42,
  address: {
    state: 'California',
    city: 'San Diego'
  }
}];

@Injectable()
export class WorkOrdersService {
  private dataSubject = new BehaviorSubject<IWorkOrder[]>(WORK_ORDER);
  chartData$: Observable<IWorkOrder[]> = this.dataSubject.asObservable();

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

  getWorkOrderDatatableData() {
    this.http.get(`/api/workOrdersDataTable`, this.options)
      .map(res => res.json())
      .map(res => res.body.data.workOrders)
      .map(res => {
        res.map((c: any) => {
          c.openDate = moment.utc(Date.parse(c.openDate)).format('MM/DD/YYYY');
          c.requestedDate = moment.utc(Date.parse(c.requestedDate)).format('MM/DD/YYYY');
          c.closedDate = moment.utc(Date.parse(c.closedDate)).format('MM/DD/YYYY');
        });
        return res;
      })
      .subscribe(data => this.dataSubject.next(data))

  }
}
