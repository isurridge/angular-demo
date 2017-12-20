import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: 'app-container.component.html',
  styleUrls: ['app-container.component.scss']
})
export class AppContainerComponent implements OnInit {
  title = 'Sherlock App';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.router.events.filter((event) => {
      return event instanceof NavigationEnd;
    }).map(() => {
      return this.activatedRoute;
    }).map((route) => {
      while (route.firstChild) {
        route = route.firstChild;
      }
      return route;
    }).filter((route) => {
      return route.outlet === 'primary'
    }).mergeMap((route) => {
      return route.data;
    }).subscribe((event) => {
      this.titleService.setTitle(event['label']);
      this.title = event['label'];
    });
  }

}
