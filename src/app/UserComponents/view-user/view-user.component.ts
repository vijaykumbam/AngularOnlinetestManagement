import { Component, OnInit } from '@angular/core';
import { OnlineTestServiceService } from 'src/app/online-test-service.service';
import { UserEntity } from 'src/app/Models/UserEntity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  userId:any;
  user:UserEntity;
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
  constructor(private service:OnlineTestServiceService,private router:Router) { }

  ngOnInit(): void {
  }




  /*****************************************************************************
	 * METHOD      : getUserById
	 * PARAMETERS  : userId (Number)
   * TYPE        : GET Method
 	 * AUTHOR      : Vijayvenkat Reddy Kumbam
	 * DATE        : 30/09/2020
	 * DESCRIPTION : This method is used to get the Details of Particular User using 
   *               UserID and load into the application and Interact with the Service
	 **********************************************************************/
  getUserById(){
    console.log(this.userId);

    let repo=this.service.getUserById(this.userId).subscribe(
      data=>{
       this.user=data;
       console.log(this.user);
      },
      error=>{
        this.errorInfo=error.error;
        setTimeout(() => {
              this.router.navigateByUrl("/user");
            },2000);
        console.log(this.errorInfo);
      }
    )
  }
}
