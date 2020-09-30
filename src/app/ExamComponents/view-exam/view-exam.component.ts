import { Component, OnInit } from '@angular/core';
import { OnlineTestServiceService } from 'src/app/online-test-service.service';

@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrls: ['./view-exam.component.css']
})
export class ViewExamComponent implements OnInit {
  errorInfo: any;


    /***************************************************
	 * CONSTRUCTOR : Custom Constructor
	 * PARAMETERS  : OnlineTestServiceService
	 * AUTHOR      : Vijayvenkat Reddy Kumbam
	 * DATE        : 30/09/2020
	 * DESCRIPTION : OnlineTestService is a service were we injected in this component 
   *                to maintain the conection between the component and Service
	 ***********************************************/
  constructor(private service:OnlineTestServiceService) { }
  exams:any;
  examId:any;
  ngOnInit(): void {
  }

   /*****************************************************************************
	 * METHOD      : viewExams
	 * PARAMETERS  : Zero Parameters
   * TYPE        : GET Method
 	 * AUTHOR      : Vijayvenkat Reddy Kumbam
	 * DATE        : 30/09/2020
	 * DESCRIPTION : This method is used to collect the List<Exams> into application and
   *               Interact with the Service
	 **********************************************************************/
  viewAllExams(){
    let repo= this.service.viewExams().subscribe(
      data=>{
        this.exams=data;
      }
    )
  }


    /*****************************************************************************
	 * METHOD      : getExamById
	 * PARAMETERS  : examId (Number)
   * TYPE        : GET Method
 	 * AUTHOR      : Vijayvenkat Reddy Kumbam
	 * DATE        : 30/09/2020
	 * DESCRIPTION : This method is used to get the Details of Particular Exam using 
   *               ExamId and load into the application and Interact with the Service
	 **********************************************************************/
  getExamById(){
    this.service.getExamById(this.examId).subscribe(
      data=>{
        this.exams=data;
      },
      error=>{
         this.errorInfo=error.error;
         console.log(this.errorInfo);
       }
    )
  }
}
