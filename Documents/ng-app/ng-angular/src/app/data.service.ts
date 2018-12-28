import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  users = ['sai', 'kumar', 'reddy', 'kota'];
  
  constructor() {}

  getUsers() {
    return this.users;
  }

  AddUser(arg1) {
    this.users.push(arg1);
  }

}
