import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../store/auth/auth.actions';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  constructor(private store$:Store, private authService:AuthService){}

  ngOnInit(): void {
    // this.store$.dispatch(login({loginData:{username:'emilys', password:'emilyspas'}}))
    // this.authService.onLogin({username:'emilys', password:'emilyspass'}).subscribe((res:any) => console.log(res)
    // )
  }

}
