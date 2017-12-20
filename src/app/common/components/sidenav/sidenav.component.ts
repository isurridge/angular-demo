import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { routes } from '../../../app.routes';
import { LOGIN_URL } from '../../services/auth.service';

/**
 * The sidenav component presents dashboard routes dynamically.
 */
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  /**
   * Presents LOGIN_URL const to the template.
   * @type {string}
   */
  public loginUrl: string = LOGIN_URL;

  /**
   * App routes for use in app navigation.
   * @type {Routes}
   */
  routes: Routes = routes;

  constructor() {
    const layoutRoutes = this.routes
      .filter(route => route.path === 'dashboard')
      .map(route => route.children)
      .shift();

    this.routes = layoutRoutes.filter(route => route.path !== '');
  }

  ngOnInit() {

  }

}
