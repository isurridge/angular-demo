// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// third party
import { AgmCoreModule } from '@agm/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ArchwizardModule } from '../../node_modules/ng2-archwizard/dist';
import { NgxChartsModule } from '@swimlane/ngx-charts'

// bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

// form utils
import { Daterangepicker } from 'ng2-daterangepicker';
import { SelectModule } from 'ng-select';

// app
import { AppRoutes } from './app.routes';

// declarations & providers
import { COMMON_DECLARATIONS, COMMON_PROVIDERS, AppContainerComponent } from './common';
import { ALARMS_DECLARATIONS } from './alarms';
import { EXECUTIVE_SUMMARY_DECLARATIONS } from './executive-summary';
import { MAPS_DECLARATIONS } from './maps';
import { RECOMMENDATIONS_DECLARATIONS } from './recommendations';
import { REPORTS_DECLARATIONS } from './reports';
import { USERS_DECLARATIONS } from './users';
import { WORK_ORDERS_DECLARATIONS } from './work-orders';
import { AUTH_DECLARATIONS } from './auth';


@NgModule({
  declarations: [
    COMMON_DECLARATIONS,
    ALARMS_DECLARATIONS,
    EXECUTIVE_SUMMARY_DECLARATIONS,
    MAPS_DECLARATIONS,
    RECOMMENDATIONS_DECLARATIONS,
    REPORTS_DECLARATIONS,
    USERS_DECLARATIONS,
    WORK_ORDERS_DECLARATIONS,
    AUTH_DECLARATIONS,
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBSgdq2-YdDWXFXA5iWfhAXfZpxdfGyjZE' }),
    Daterangepicker,
    SelectModule,
    BsDropdownModule.forRoot(),
    PopoverModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ArchwizardModule,
    NgxChartsModule
  ],
  providers: [
    COMMON_PROVIDERS
  ],
  bootstrap: [AppContainerComponent]
})
export class AppModule {

}
