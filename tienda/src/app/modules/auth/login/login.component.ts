import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading = false;
  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder,
    private _authService: AuthService,
    private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }

  get f() { return this.loginForm.controls; }


  onSubmit() {
    if (this.loginForm.invalid)
      return;

    this.loading = true;

    const user: User = {
      ...this.loginForm.value
    }
    this._authService.login(user).subscribe((res: User) =>
      this.router.navigateByUrl('')
      , err => {
        this.loading = false;
      })
  }


}
