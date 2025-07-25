import { Component, OnInit, signal } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterEvent,
  Event,
} from '@angular/router';

import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  showCart = signal<boolean>(false)
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.showCart.set(this.router.url.includes('recipes'))
    this.router.events
      .pipe(
        filter((event: Event | RouterEvent) => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        const {url} = event
        this.showCart.set(url.includes('recipes'))
        
      });
  }

  logout() {
    this.authService.onLogout();
  }
}
