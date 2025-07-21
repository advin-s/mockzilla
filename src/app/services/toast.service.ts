import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ToastMessage } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr:ToastrService) { }

  successToast(content:ToastMessage):void{
    this.toastr.success(content.heading, content.message)
  }
}
