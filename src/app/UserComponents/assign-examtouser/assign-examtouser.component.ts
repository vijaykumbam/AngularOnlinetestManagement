import { Component, OnInit } from '@angular/core';
import { OnlineTestServiceService } from 'src/app/online-test-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assign-examtouser',
  templateUrl: './assign-examtouser.component.html',
  styleUrls: ['./assign-examtouser.component.css']
})
export class AssignExamtouserComponent implements OnInit {

  userId: any;
  examId: any;
  users: any ;
  exams: any ;
  errorMsg: string;
  Rmessage: string;
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
	 * METHOD      : assignExam
	 * PARAMETERS  : userId,examId (any,any)
   * TYPE        : POST Method
 	 * AUTHOR      : Vijayvenkat Reddy Kumbam
	 * DATE        : 30/09/2020
	 * DESCRIPTION : This method is used to assign Exam to particular User by 
   *                Using the Primary keys of both and Interact with the Service
	 **********************************************************************/
  assignExamToUser() {
    console.log(this.examId +" "+this.userId);
    let repo=this.service.assignExam(this.userId, this.examId).subscribe(
      data =>{ 
        console.log("Hello data is assigned");
        this.Rmessage= data;
        console.log("your Msg :"+this.Rmessage);
    },
    error=>{
       this.errorInfo=error.error;
       setTimeout(() => {
        this.router.navigateByUrl("/admin");
      },2000);
     }
     );
      
  }

}
