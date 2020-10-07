import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }


  registerUser(userModel){
    return this.http.post(`http://localhost:8080/api/user/save-user`,userModel);
  }

  updateUser(userModel){
    return this.http.post(`http://localhost:8080/api/user/update-user`,userModel);
  }

  

  getUser(){
    return this.http.get('http://localhost:8080/api/user/list-user');
  }

  deleteUser(id){
    return this.http.delete(`http://localhost:8080/api/user/delete-user/${id}`);
  }

  getUserData(id){
    return this.http.get(`http://localhost:8080/api/user/getUser/${id}`);
  }

}

