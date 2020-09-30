import { Component, OnInit } from '@angular/core';
import { OnlineTestServiceService } from 'src/app/online-test-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-date-conflict',
  templateUrl: './check-date-conflict.component.html',
  styleUrls: ['./check-date-conflict.component.css']
})
export class CheckDateConflictComponent implements OnInit {

  userId:number;
  public yeararr=[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
  public montharr =[1,2,3,4,5,6,7,8,9,10,11,12];
  public datearr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  year:number;
  date:number;
  month:number;
  msg:any;
  errorInfo: string;

  
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
	 * METHOD      : checkDateConflict
	 * PARAMETERS  : userId,year,month,date (Number,Number,Number,Number)
   * TYPE        : GET Method
 	 * AUTHOR      : Vijayvenkat Reddy Kumbam
	 * DATE        : 30/09/2020
	 * DESCRIPTION : This method is used to check the free slots for User to assign
   *               exam. If this method found any conflict it will display a proper
   *                message and Interact with the Service
	 **********************************************************************/
  checkDateConflict(){
    console.log(this.userId+"/"+this.year +"/"+this.month +"/"+ this.date);
    this.service.checkDateConflict(this.userId,this.year,this.month,this.date).subscribe(
      data=>{
        this.msg = data;
        setTimeout(() => {
          this.router.navigateByUrl("/admin/assignExam");
        },2000);
        console.log(this.msg);
      },
      error=>{
       console.log("Exception");
        this.errorInfo=error.error;
        setTimeout(() => {
          this.router.navigateByUrl("/admin");
        },2000);
        console.log(this.errorInfo);
      }
    )
  }
}
