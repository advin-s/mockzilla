import { AfterViewInit, Component } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  imports: [NgbTooltipModule, RouterLink,RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements AfterViewInit {
  ngAfterViewInit(): void {

  }

}
