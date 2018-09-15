import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCheckboxModule,
  MatInputModule,
  MatOptionModule,
  MatRadioModule,
  MatProgressBarModule,
  MatIconModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatProgressSpinnerModule,
  MatSnackBarModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { EnquiryComponent } from "./enquiry/enquiry.component";
import { LoginService } from "./services/login.service";
import { EnquiryService } from "./services/enquiry.service";
import { SchoolDetailsComponent } from "./school-details/school-details.component";
import { CollegeComponent } from "./college/college.component";
import { JobComponent } from "./job/job.component";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { LoginComponent } from "./Login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GetAllCoursesService } from "./services/getAllCourses.service";
import { SearchPipe } from "./search.pipe";

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "header",
    canActivate: [AuthGuard],
    component: HeaderComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "enquiry", component: EnquiryComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    EnquiryComponent,
    SchoolDetailsComponent,
    CollegeComponent,
    JobComponent,
    DashboardComponent,
    EnquiryComponent,
    JobComponent,
    CollegeComponent,
    SchoolDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    FlexLayoutModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatOptionModule,
    MatRadioModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [LoginService, EnquiryService, GetAllCoursesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
