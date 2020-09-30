import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserEntity } from './Models/UserEntity';
import { ExamEntity } from './Models/ExamEntity';

@Injectable({
  providedIn: 'root'
})

export class OnlineTestServiceService {
  
   urlPath:string ="http://localhost:8051/onlineTestManagement";


  constructor(private http:HttpClient) { }
 

//Exam Module Area..............
  
  /*****************************************************************************
	 * METHOD      : addExam
	 * PARAMETERS  : exam (ExamEntity)
   * TYPE        : POST Method
 	 * AUTHOR      : Vijayvenkat Reddy Kumbam
	 * DATE        : 30/09/2020
	 * DESCRIPTION : This method is used to add the Exam into the application and
   *               Interact with the Server and components.
	 **********************************************************************/
  public addExam(exam: ExamEntity): Observable<any> {
    return this.http.post(this.urlPath+"/exam/addExam",exam,{responseType:'text' as 'json'});
  }

    
 /*****************************************************************************
	 * METHOD      : viewExams
	 * PARAMETERS  : Zero Parameters
   * TYPE        : GET Method
 	 * AUTHOR      : Vijayvenkat Reddy Kumbam
	 * DATE        : 30/09/2020
	 * DESCRIPTION : This method is used to collect the List<Exams> into application and
   *               Interact with the Server and components.
	 **********************************************************************/
  public viewExams(): Observable<any> {
    return this.http.get(this.urlPath+"/exam/getAllExams");
  }

  /*****************************************************************************
	 * METHOD      : getExamById
	 * PARAMETERS  : examId (Number)
   * TYPE        : GET Method
 	 * AUTHOR      : Vijayvenkat Reddy Kumbam
	 * DATE        : 30/09/2020
	 * DESCRIPTION : This method is used to get the Details of Particular Exam using 
   *               ExamId and load into the application and Interact with the Server
   *               and components.
	 **********************************************************************/
  getExamById(examId:number):Observable<any>{
    return this.http.get(this.urlPath+"/exam/getExam/"+examId);
  }







//User Module Area..............
 /*****************************************************************************
	 * METHOD      : addUser
	 * PARAMETERS  : userobj (UserEntity)
   * TYPE        : POST Method
 	 * AUTHOR      : Vijayvenkat Reddy Kumbam
	 * DATE        : 30/09/2020
	 * DESCRIPTION : This method is used to add the user into the application and
   *               Interact with the Server and components.
	 **********************************************************************/
  public addUser(userobj:UserEntity): Observable<any> {
    console.log("add User");
    console.log(userobj.userName);
    return this.http.post(this.urlPath+"/user/addUser", userobj,{responseType:'text' as 'json'});
  }


 /*****************************************************************************
	 * METHOD      : viewExams
	 * PARAMETERS  : Zero Parameters
   * TYPE        : GET Method
 	 * AUTHOR      : Vijayvenkat Reddy Kumbam
	 * DATE        : 30/09/2020
	 * DESCRIPTION : This method is used to collect the List<User> into application and
   *               Interact with the Server and components.
	 **********************************************************************/
  public viewUsers(): Observable<any> {
    return this.http.get(this.urlPath+"/user/getAllUsers");
  }




  /*****************************************************************************
	 * METHOD      : getUserById
	 * PARAMETERS  : userId (Number)
   * TYPE        : GET Method
 	 * AUTHOR      : Vijayvenkat Reddy Kumbam
	 * DATE        : 30/09/2020
	 * DESCRIPTION : This method is used to get the Details of Particular User using 
   *               UserID and load into the application and Interact with the Server
   *               and components.
	 **********************************************************************/
  getUserById(userId:number):Observable<any>{
    return this.http.get(this.urlPath+"/user/getUser/"+userId);
  }








//Admin Restricted Module Area..............

  /*****************************************************************************
	 * METHOD      : assignExam
	 * PARAMETERS  : userId,examId (any,any)
   * TYPE        : POST Method
 	 * AUTHOR      : Vijayvenkat Reddy Kumbam
	 * DATE        : 30/09/2020
	 * DESCRIPTION : This method is used to assign Exam to particular User by 
   *                Using the Primary keys of both and Interact with the Server
   *               and components.
	 **********************************************************************/
  public assignExam(userId:any, examId:any): Observable<any> {
    return this.http.post("http://localhost:8051/onlineTestManagement/admin/assignExam/"+userId+"/"+examId,{responseType:'text' as 'json'});
  }


  
  /*****************************************************************************
	 * METHOD      : checkDateConflict
	 * PARAMETERS  : userId,year,month,date (Number,Number,Number,Number)
   * TYPE        : GET Method
 	 * AUTHOR      : Vijayvenkat Reddy Kumbam
	 * DATE        : 30/09/2020
	 * DESCRIPTION : This method is used to check the free slots for User to assign
   *               exam. If this method found any conflict it will display a proper
   *                message and Interact with the Server and components.
	 **********************************************************************/
  public checkDateConflict(userId:number,year:number,month:number,date:number){
    console.log(userId +"/"+year+"/"+month+"/"+date  +" i am in service");
    return this.http.get(this.urlPath+"/admin/checkDateConflict/"+ userId +"/"+year+"/"+month+"/"+date,{responseType:"text"});
  }


  
  /*****************************************************************************
	 * METHOD      : historyOfUserExams
	 * PARAMETERS  : userId (any)
   * TYPE        : GET Method
 	 * AUTHOR      : Vijayvenkat Reddy Kumbam
	 * DATE        : 30/09/2020
	 * DESCRIPTION : This method is used to get all the previous and Upcoming 
   *               exams of a particular user and load into the application,
   *               Interact with the Server and components.
	 **********************************************************************/
  public historyOfUserExams(userId:any):Observable<any>{
    return this.http.get(this.urlPath+"/user/viewAllExamsOfUser/"+userId);
  }
  

  
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
  public viewAssignedExamByAssignedId(assignedId: any): Observable<any> {
    console.log("Hello");
    return this.http.get(this.urlPath+"/admin/viewAssignedExamById/"+assignedId);
  }


  
  /*****************************************************************************
	 * METHOD      : updateTheAssignedExam
	 * PARAMETERS  : examId, assignedId(any,any)
   * TYPE        : PUT Method
 	 * AUTHOR      : Vijayvenkat Reddy Kumbam
	 * DATE        : 30/09/2020
	 * DESCRIPTION : This method is used to update the Details of Particular assignedExam Object
   *               using its primary key UserID and load into the application and Interact
   *               with the Server and components.
	 **********************************************************************/
  public updateTheAssignedExam(examId:any,assignedId:any): Observable<any>{
    return this.http.put(this.urlPath+"/admin/editAssignedExam/"+examId+"/"+assignedId,{responseType:'text' as 'json'});
  }
  

}
