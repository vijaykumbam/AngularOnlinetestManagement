import { Component, OnInit } from '@angular/core';
import { OnlineTestServiceService } from 'src/app/online-test-service.service';
import { AssignExamToUser } from 'src/app/Models/AssignExamToUser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-assigned-exam-by-assign-id',
  templateUrl: './view-assigned-exam-by-assign-id.component.html',
  styleUrls: ['./view-assigned-exam-by-assign-id.component.css']
})
export class ViewAssignedExamByAssignIdComponent implements OnInit {

  assignedId:any;
  AssignedUsers:AssignExamToUser;
  updatedExamId:any;
  updateStatus:boolean=false;
  msg:any;
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
  constructor(private service:OnlineTestServiceService,private route: Router) { }

  ngOnInit(): void {  }

  /*****************************************************************************
	 * METHOD      : viewAssignedExamByAssignedId
	 * PARAMETERS  : assignedId (any)
   * TYPE        : GET Method
 	 * AUTHOR      : Vijayvenkat Reddy Kumbam
	 * DATE        : 30/09/2020
	 * DESCRIPTION : This method is used to get the Details of Particular assignedExam details
   *               using its assignedId and it load into the application and Interact with the 
   *               Server and components.
	 **********************************************************************/
  viewAssignedExamByAssignedId(){
    console.log("Hello");

    let repo = this.service.viewAssignedExamByAssignedId(this.assignedId).subscribe(
      data=>{
        this.AssignedUsers=data;
      },
    )
    this.updateStatus=false;
  }
 
  //Helping Method....
  change()
  {
    this.updateStatus=true;
  }

  /*****************************************************************************
	 * METHOD      : updateTheAssignedExam
	 * PARAMETERS  : examId, assignedId(any,any)
   * TYPE        : PUT Method
 	 * AUTHOR      : Vijayvenkat Reddy Kumbam
	 * DATE        : 30/09/2020
	 * DESCRIPTION : This method is used to update the Details of Particular assignedExam Object
   *               using its primary key UserID and load into the application and Interact
   *               with the Service
	 **********************************************************************/
  updateAssigned(){
    this.service.updateTheAssignedExam(this.updatedExamId,this.assignedId).subscribe(
      data=>{
        this.msg =data;
      },
      error=>{
         this.errorInfo=error.error;
         setTimeout(() => {
          this.route.navigateByUrl("/admin");
        },2000);
         console.log(this.errorInfo);
       }
    )
  }

}
