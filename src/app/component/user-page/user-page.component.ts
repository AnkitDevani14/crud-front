import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Users} from './../../Model/User';
import {CrudService} from './../../service/crud.service';
import { DatePipe } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(private crudService:CrudService,public datepipe: DatePipe, private route:ActivatedRoute,
    private router:Router) { }

  users : Users = new Users('','','','');

  listUser : [] = [];

  ngOnInit(): void {
    this.crudService.getUser().subscribe(
      (data : []) => {
        this.listUser = data;
        console.log(data);
      }
    )
  }

  onSubmit(){
   
    this.crudService.registerUser(this.users).subscribe(
      (data) => {
        alert("data added");
      },(error) => {
        console.log(error);
        alert("Error in Data adding");
      }
    )
  }

  editUser(id){
    
       this.router.navigate(['/updateUser',id]);
     
  }

  deleteUser(id){
   this.crudService.deleteUser(id).subscribe(
     (data) => {
       alert("date Deleted");
     }
     ,(error) => {
       alert("data deletion error");
     }
   )
  }

}
