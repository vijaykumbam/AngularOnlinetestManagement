import { Component, OnInit } from '@angular/core';
import { OnlineTestServiceService } from 'src/app/online-test-service.service';
import { UserEntity } from 'src/app/Models/UserEntity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  errorInfo: any;

  /*****************************************************************************
	 * CONSTRUCTOR : Custom Constructor
	 * PARAMETERS  : OnlineTestServiceService,route
	 * AUTHOR      : Vijayvenkat Reddy Kumbam
	 * DATE        : 30/09/2020
	 * DESCRIPTION : OnlineTestService is a service were we injected in this component 
   *               to maintain the conection between the component and Service
   *               And the route is a pre-defined package in @angular/Router this is 
   *               Use to Navigate between the Components and URls
	 **********************************************************************/
  constructor( private service:OnlineTestServiceService ,private route:Router) { }
  userId:number;
  userNameI:any;
  userPassword:any;
  role:string="user";
  user: UserEntity=new UserEntity();
  msg:any;
  
  ngOnInit(): void {
  }

 /*****************************************************************************
	 * METHOD      : addUser
	 * PARAMETERS  : userobj (UserEntity)
   * TYPE        : POST Method
 	 * AUTHOR      : Vijayvenkat Reddy Kumbam
	 * DATE        : 30/09/2020
	 * DESCRIPTION : This method is used to add the user into the application and
   *               Interact with the Service.
	 **********************************************************************/
  addUser(){
    this.user.role= this.role;
    let repo =this.service.addUser(this.user).subscribe(
      data=>{
        console.log("hiiii");
        this.user=data;
        this.route.navigateByUrl("/home");
      },
      error=>{
         this.errorInfo=error.error;
         setTimeout(() => {
              this.route.navigateByUrl("/home");
            },2000);
         console.log(this.errorInfo);
       }
    )
  }
}
