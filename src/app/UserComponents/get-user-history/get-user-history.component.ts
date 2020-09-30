import { Component, OnInit } from '@angular/core';
import { AssignExamToUser } from 'src/app/Models/AssignExamToUser';
import { OnlineTestServiceService } from 'src/app/online-test-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-user-history',
  templateUrl: './get-user-history.component.html',
  styleUrls: ['./get-user-history.component.css']
})
export class GetUserHistoryComponent implements OnInit {

  userId:number;
  assignedObj:AssignExamToUser;
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
	 * METHOD      : historyOfUserExams
	 * PARAMETERS  : userId (any)
   * TYPE        : GET Method
 	 * AUTHOR      : Vijayvenkat Reddy Kumbam
	 * DATE        : 30/09/2020
	 * DESCRIPTION : This method is used to get all the previous and Upcoming 
   *               exams of a particular user and load into the application,
   *               Interact with the Service
	 **********************************************************************/
  historyOfUserExams(){
    this.service.historyOfUserExams(this.userId).subscribe(
      data=>{
        this.assignedObj=data;
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
