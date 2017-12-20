import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-full-layout-container',
  templateUrl: './full-layout-container.component.html',
  styleUrls: ['./full-layout-container.component.scss']
})
export class FullLayoutContainerComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.loadIdentity();
  }
}
