import { Component, OnInit } from '@angular/core';
import { ExamEntity } from 'src/app/Models/ExamEntity';
import { OnlineTestServiceService } from 'src/app/online-test-service.service';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent implements OnInit {

  durtion :number=40;
  exam :ExamEntity = new ExamEntity();
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

  ngOnInit(): void {
  }

  /***************************************************
	 * METHOD      : addExam
	 * PARAMETERS  : ()
	 * AUTHOR      : Vijayvenkat Reddy Kumbam
	 * DATE        : 30/09/2020
	 * DESCRIPTION : This method will collect the Exam data and it is responsible to send to transfor 
   *                Service layer. And it will show the msg which is coming from server side.
	 ***********************************************/
  addExam(){
    this.exam.minutes=this.durtion;
    this.service.addExam(this.exam).subscribe(
      data=>{
        this.exam=data;
      },
      error=>{
         this.errorInfo=error.error;
         console.log(this.errorInfo);
       }
    )
  }
}
