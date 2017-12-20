import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HOME_URL } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public showBackButton: boolean;
  public homeUrl: string = HOME_URL;

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    this.backButtonInit();
  }

  backButtonInit() {
    this.router.events.subscribe((event: NavigationEnd) => {
      this.showBackButton = event.urlAfterRedirects !== this.homeUrl;
    });
  }

}
