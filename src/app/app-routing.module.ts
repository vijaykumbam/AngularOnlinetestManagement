import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './UserComponents/admin/admin.component';
import { AssignExamtouserComponent } from './UserComponents/assign-examtouser/assign-examtouser.component';
import { ViewAssignedExamByAssignIdComponent } from './UserComponents/view-assigned-exam-by-assign-id/view-assigned-exam-by-assign-id.component';
import { ViewAllUserComponent } from './UserComponents/view-all-user/view-all-user.component';
import { CheckDateConflictComponent } from './UserComponents/check-date-conflict/check-date-conflict.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './UserComponents/user/user.component';
import { AddExamComponent } from './ExamComponents/add-exam/add-exam.component';
import { ViewExamComponent } from './ExamComponents/view-exam/view-exam.component';
import { AddUserComponent } from './UserComponents/add-user/add-user.component';
import { ViewUserComponent } from './UserComponents/view-user/view-user.component';
import { HomeComponent } from './UserComponents/home/home.component';
import { GetUserHistoryComponent } from './UserComponents/get-user-history/get-user-history.component';




const routes: Routes = [

  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  
  {path:'user',
    children:[
      {path:'',component:UserComponent},
      {path:'addUser',component:AddUserComponent},
      {path:'viewUser',component:ViewUserComponent},
      {path:'viewExams',component:ViewExamComponent}, 
      {path:'userExamHistory',component:GetUserHistoryComponent}  
    ]
 },

 {path:'admin',
      children:
        [
          {path:'',component:AdminComponent},
          {path:'addExam',component:AddExamComponent},
          {path:'viewExams',component:ViewExamComponent},
          {path:'assignExam',component:AssignExamtouserComponent},
          {path:'viewAssignedExamByAssignedId',component:ViewAssignedExamByAssignIdComponent},
          {path:'viewAllUser',component:ViewAllUserComponent},
          {path:'checkDateConflict',component:CheckDateConflictComponent},
          {path:'userExamHistory',component:GetUserHistoryComponent}
        ]
      },
 {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
