// routing
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// containers
import { FullLayoutContainerComponent } from './common/containers/full-layout-container/full-layout-container.component';
import { SimpleLayoutContainerComponent } from './common/containers/simple-layout-container/simple-layout-container.component';
import { AlarmsContainerComponent } from './alarms/containers/alarms-container/alarms-container.component';
import { ExecutiveSummaryContainerComponent } from './executive-summary/containers/executive-summary-container/executive-summary-container.component';
import { MapsContainerComponent } from './maps/containers/maps-container/maps-container.component';
import { RecommendationsContainerComponent } from './recommendations/containers/recommendations-container/recommendations-container.component';
import { ReportsContainerComponent } from './reports/containers/reports-container/reports-container.component';
import { UsersContainerComponent } from './users/containers/users-container/users-container.component';
import { WorkOrdersContainerComponent } from './work-orders/containers/work-orders-container/work-orders-container.component';
import { LoginContainerComponent } from './auth/login/containers/login-container/login-container.component';
import { SignupContainerComponent} from './auth/signup/containers/signup-container/signup-container.component';
import { ConfirmationContainerComponent} from './auth/confirmation/containers/confirmation-container/confirmation-container.component';

// app
import { AuthGuard } from './common/guards/auth.guard';

export const routes: Routes = [

  // Routes with simple layout
  { path: '',
    component: SimpleLayoutContainerComponent,
    children: [
      { path: 'login', component: LoginContainerComponent},
      { path: 'signup', component: SignupContainerComponent},
      { path: 'confirm-signup', component: ConfirmationContainerComponent},
      { path: '', redirectTo: '/dashboard/executive-summary', pathMatch: 'full' },
    ]
  },

  // Auth protected routes with full Layout
  { path: 'dashboard',
    component: FullLayoutContainerComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'executive-summary', component: ExecutiveSummaryContainerComponent, data: { label: 'Executive Summary', materialIcon: 'assessment' } },
      { path: 'alarms', component: AlarmsContainerComponent, data: { label: 'Alarms', materialIcon: 'alarm' } },
      { path: 'maps', component: MapsContainerComponent, data: { label: 'Maps', materialIcon: 'map' } },
      { path: 'recommendations', component: RecommendationsContainerComponent, data: { label: 'Recommendations', materialIcon: 'plus_one' } },
      { path: 'reports', component: ReportsContainerComponent, data: { label: 'Reports', materialIcon: 'timeline' } },
      { path: 'users', component: UsersContainerComponent, data: { label: 'Users', materialIcon: 'account_circle' } },
      { path: 'work-orders', component: WorkOrdersContainerComponent, data: { label: 'Work Orders', materialIcon: 'assignment' } },
      { path: '', redirectTo: '/dashboard/executive-summary', pathMatch: 'full' },
    ]
  },

  // redirect all others to home
  { path: '**', redirectTo: '/dashboard/executive-summary' },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {
  enableTracing: false,
  useHash: false
});
