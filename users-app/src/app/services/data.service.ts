import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mocks';
import { IUser } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  getUserData() : IUser[]{
    return USER_DATA;
  }

  getHttpUserData(){
    return this.http.get(`./assets/data/users.json`)
  }

}
