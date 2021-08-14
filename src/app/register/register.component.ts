import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IRegister } from '../interfaces/register.interface';
import { Register } from '../state/actions/user.action';

import * as md5 from 'md5';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public header = 'Register';
  public data: IRegister = {
    TableName: 'Users',
    Item: {
      TableName: '',
      username: '',
      password: '',
      email: '',
      name: '',
      retype: '',
      role: 'pleb' 
    }
  };

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
  }

  public register(data: IRegister): void {

    data.Item.password = md5(data.Item.password);

    const regData = {
      TableName: data.TableName,
      Item: {
        TableName: data.TableName,
        username: data.Item.username,
        name: data.Item.name,
        surname: data.Item.surname,
        password: data.Item.password,
        email: data.Item.email,
        role: data.Item.role
      }
    };

    this.store.dispatch(Register(regData));
    
  }

}
