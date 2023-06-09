import { Component, OnInit } from '@angular/core';
import { StorageServiceService } from '../storageService/storage-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { matchpassword } from './confirmpasswordvalidators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  public ChangePasswordForm: FormGroup;
  public pass: any;

  constructor(private storageService: StorageServiceService, private router: Router) {

    this.ChangePasswordForm = new FormGroup({
      password: new FormControl("", [Validators.required,]),
      confirm_password: new FormControl("", [Validators.required,]),
    },
      {
        validators: matchpassword
      })

  }
  ngOnInit(): void {
    this.getCurrentUser();
  }

  get f() {
    return this.ChangePasswordForm.controls;
  }

  onSubmit() {
    let newPassword = this.ChangePasswordForm.value.passowrd;
    this.storageService.localStorage(this.pass, newPassword);
    this.router.navigateByUrl('/home/user-profile')

  }

  public getCurrentUser(): void {
    let data = this.storageService.getLocalStorage("currentUser");
    this.pass = data.passowrd;
  }
}
