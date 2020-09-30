import { Component, OnInit } from '@angular/core';
import { OnlineTestServiceService } from 'src/app/online-test-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-user',
  templateUrl: './view-all-user.component.html',
  styleUrls: ['./view-all-user.component.css']
})
export class ViewAllUserComponent implements OnInit {
  userId:any;
  users: any;
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
	 * METHOD      : viewExams
	 * PARAMETERS  : Zero Parameters
   * TYPE        : GET Method
 	 * AUTHOR      : Vijayvenkat Reddy Kumbam
	 * DATE        : 30/09/2020
	 * DESCRIPTION : This method is used to collect the List<User> into application and
   *               Interact with the Service.
	 **********************************************************************/
  viewAllUsers(){
    this.service.viewUsers().subscribe(
      data=>{
        this.users=data;
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
