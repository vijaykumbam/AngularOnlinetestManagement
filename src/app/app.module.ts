import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './UserComponents/admin/admin.component';
import { AssignExamtouserComponent } from './UserComponents/assign-examtouser/assign-examtouser.component';
import { ViewAssignedExamByAssignIdComponent } from './UserComponents/view-assigned-exam-by-assign-id/view-assigned-exam-by-assign-id.component';
import { ViewAllUserComponent } from './UserComponents/view-all-user/view-all-user.component';
import { CheckDateConflictComponent } from './UserComponents/check-date-conflict/check-date-conflict.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './UserComponents/user/user.component';
import { HomeComponent } from './UserComponents/home/home.component';
import { AddExamComponent } from './ExamComponents/add-exam/add-exam.component';
import { ViewExamComponent } from './ExamComponents/view-exam/view-exam.component';
import { AddUserComponent } from './UserComponents/add-user/add-user.component';
import { ViewUserComponent } from './UserComponents/view-user/view-user.component';
import { OnlineTestServiceService } from './online-test-service.service';
import { GetUserHistoryComponent } from './UserComponents/get-user-history/get-user-history.component';
import { SearchExamComponent } from './ExamComponents/search-exam/search-exam.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AssignExamtouserComponent,
    ViewAssignedExamByAssignIdComponent,
    ViewAllUserComponent,
    CheckDateConflictComponent,
    PagenotfoundComponent,
    UserComponent,
    HomeComponent,
    AddExamComponent,
    ViewExamComponent,
    AddUserComponent,
    ViewUserComponent,
    GetUserHistoryComponent,
    SearchExamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [OnlineTestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
