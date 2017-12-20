import { AppContainerComponent } from './containers/app-container/app-container.component';
import { SimpleLayoutContainerComponent } from './containers/simple-layout-container/simple-layout-container.component';
import { FullLayoutContainerComponent } from './containers/full-layout-container/full-layout-container.component';

// components
import { DatatableComponent } from './components/datatable/datatable.component';
import { GmapsComponent } from './components/gmaps/gmaps.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FiltersPanelComponent } from './components/filters-panel/filters-panel.component';
import { SessionTimeoutComponent } from './components/session-timeout/session-timeout.component';


// services
import { ExecutiveSummaryService } from './services/executive-summary.service';
import { UsersService } from './services/users.service';
import { WorkOrdersService } from './services/work-orders.service';
import { ValidationService } from './services/validation.service';
import { FiltersService } from './services/filters.service';
import { LocalStorageService } from './services/local-storage.service';
import { AuthService } from './services/auth.service';

// pipes
import { NgForObjectPipe } from './pipes/ng-for-object.pipe';
import { UserStatusPipe } from './pipes/user-status.pipe';
import { UserRolePipe } from './pipes/user-role.pipe';
import { AlarmCountClassPipe } from './pipes/alarm-count-class.pipe';

// guards
import { AuthGuard } from './guards/auth.guard';

// for bootstrapping sherlock
export { AppContainerComponent };

export const COMMON_PROVIDERS = [
  ExecutiveSummaryService,
  UsersService,
  WorkOrdersService,
  ValidationService,
  FiltersService,
  LocalStorageService,
  AuthService,
  AuthGuard
];

export const COMMON_DECLARATIONS = [
  AppContainerComponent,
  SimpleLayoutContainerComponent,
  FullLayoutContainerComponent,
  DatatableComponent,
  GmapsComponent,
  LoadingComponent,
  NavbarComponent,
  SidenavComponent,
  WelcomeComponent,
  FiltersPanelComponent,
  SessionTimeoutComponent,
  NgForObjectPipe,
  UserStatusPipe,
  UserRolePipe,
  AlarmCountClassPipe
];
