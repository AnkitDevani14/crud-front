import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/Model/User';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private crud:CrudService) { }

    

    users : Users = new Users('','','','');

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id');
      if(id){
        this.crud.getUserData(id).subscribe(
          (data : Users) => {
            this.users = data;
          

          },(error) => {
            console.log("error");
          }
        )
      }
        
      
    })
  }

  onSubmit(){
    this.crud.updateUser(this.users).subscribe(
      (data) => {
        alert("data updated");
        
      },(error) => {
        alert("Error in updating");
      }
    )
  }

}
