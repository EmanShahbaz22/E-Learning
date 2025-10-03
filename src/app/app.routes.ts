import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { AdminDashboardComponent } from './features/admin/pages/admin-dashboard/admin-dashboard.component';
import { CoursesComponent } from './features/admin/pages/courses/courses.component';
import { AdminSignupComponent } from './features/auth/pages/signups/admin-signup/admin-signup.component';
import { NotFoundComponent } from './features/not-found/not-found/not-found.component';
import { SettingsComponent } from './features/admin/pages/settings/settings.component';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { StudentSignupComponent } from './features/auth/pages/signups/student-signup/student-signup.component';
import { TeachersComponent } from './features/admin/pages/teachers/teachers.component';
import { StudentsComponent } from './features/admin/pages/students/students.component';
import { GenerateAssignmentsComponent } from './features/teacher/pages/generate-assignments/generate-assignments.component';


export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: AdminDashboardComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'teachers', component: TeachersComponent },
    { path: 'students', component: StudentsComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'adminsignup', component: AdminSignupComponent },
      { path: 'studentsignup', component: StudentSignupComponent },
      { path: 'assignments', component: GenerateAssignmentsComponent },
    { path: '**', component: NotFoundComponent },
];
