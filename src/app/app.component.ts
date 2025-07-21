import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'mockzilla';

  constructor(private tokenService:TokenService){}

  ngOnInit(): void {
    this.tokenService.fetchToken()
  }
}
