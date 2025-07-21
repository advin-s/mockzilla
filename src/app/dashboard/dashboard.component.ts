import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { Store } from '@ngrx/store';
import { userName } from '../store/auth/auth.selectors';
import { AppStateInterface } from '../types';
import { first, take } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, SidebarComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit, AfterViewInit {
  userName!: string;
  constructor(
    private toastService: ToastService,
    private store$: Store<AppStateInterface>
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.store$
      .select(userName)
      .pipe(
        first((res): res is { firstName: string; lastName: string } => !!res)
      )
      .subscribe((res: Record<string, string | undefined>) => {
        if (res['firstName'] && res['lastName']) {
          this.toastService.successToast({
            heading: `Welcome ${res['firstName']} ${res['lastName']}`,
            message: '',
          });
        }
      });
  }
}
