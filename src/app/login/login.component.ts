import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { login, logout } from '../store/auth/auth.actions';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup

  constructor(private store$:Store, private authService:AuthService){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password:new FormControl(null, [Validators.required])
    })
    // this.store$.dispatch(login({loginData:{username:'emilys', password:'emilyspas'}}))
    // this.authService.onLogin({username:'emilys', password:'emilyspass'}).subscribe((res:any) => console.log(res)
    // )
    this.store$.dispatch(logout())
  }

  onSubmit(){
    
  }

}
