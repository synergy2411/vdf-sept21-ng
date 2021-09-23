import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mocks';
import { IUser } from '../model/user';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private TODO_URL = "https://sk-vdf-todo-app.herokuapp.com/todos";

  constructor(
      private http : HttpClient,
      private authService : AuthService) { }

  getUserData() : IUser[]{
    return USER_DATA;
  }

  getHttpUserData(): Observable<IUser[]>{
    // return this.http.get(`./assets/data/users.json`)
    return this.http.get<IUser[]>(
      `https://vdf-users-app-default-rtdb.firebaseio.com/userdata.json`,{
        params : new HttpParams().set("auth", this.authService.getToken())
      })
  }

  getTodos(){
    return this.http.get(this.TODO_URL)
  }

  createTodo(label : string){
    return this.http.post(this.TODO_URL, {label})
  }

  deleteTodo(id : string){
    return this.http.delete(`${this.TODO_URL}/${id}`)
  }
}