import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IUser } from '../interfaces/user.interface';
import { login } from '../state/actions/user.action';

import * as md5 from 'md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public header = 'Login';
  public TableName = 'Users';

  public data: IUser = {
    username: '',
    password: '',
    TableName: ''
  };

  public loginForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private store: Store<{ user: IUser }>,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public login(data: IUser): void {

    // data.password = md5(data.password);

    console.log('ENCRYPTED PASSWORD: ', md5(data.password));

    const loginData = {
      ...data,
      TableName: this.TableName
    };

    this.store.dispatch(login(loginData));
  }

  public register(): void {
    this.router.navigate(['register']);
  }

}
