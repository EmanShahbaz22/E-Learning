import { Component } from '@angular/core';
//import { HeaderComponent } from '../../../landing-page/components/header/header.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CommonModule } from '@angular/common';
import { StatCardComponent } from '../../../../shared/components/stat-card/stat-card.component';
import { DataTableComponent, TableColumn } from '../../../../shared/components/data-table/data-table.component';
import { StudentEnrollmentChartComponent } from '../../components/student-enrollment-chart/student-enrollment-chart.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-dashboard',
  imports: [
    CommonModule,
    HeaderComponent,
    StatCardComponent,
    DataTableComponent,
    //ButtonComponent,
    StudentEnrollmentChartComponent,
  ],
  templateUrl: './teacher-dashboard.component.html',
  styleUrl: './teacher-dashboard.component.css'
})
export class TeacherDashboardComponent {
   teacherProfile = {
    name: 'Teacher Name',
    initials: 'TN',
    avatar: ''
  };
   constructor(private router: Router) {}
  quickLinks = [
  {
    title: 'Create Course',
    icon: 'fa fa-plus',  
    action: () => this.onCreateCourse()
  },
  {
    title: 'Generate Quizzes',
    icon: 'fa fa-edit',
    action: () => this.onGenerateQuiz()
  }
];

onCreateCourse() {
  this.router.navigate(['/teacher/courses']);
}

onGenerateQuiz() {
  this.router.navigate(['/teacher/quizzes']);   
}
 statsCards: StatCard[] = [
    {
      title: 'Courses',
      value: '12',
      icon: 'fas fa-book',
      iconBgClass: 'bg-indigo-100',
      iconColorClass: 'text-indigo-600',
    },
    {
      title: 'Students',
      value: '240',
      icon: 'fas fa-users',
      iconBgClass: 'bg-green-100',
      iconColorClass: 'text-green-600',
    },
    {
      title: 'Assignments',
      value: '36',
      icon: 'fas fa-file-alt',
      iconBgClass: 'bg-orange-100',
      iconColorClass: 'text-orange-600',
    },
    {
      title: 'Awaiting Grading',
      value: '8',
      icon: 'fas fa-tasks',
      iconBgClass: 'bg-red-100',
      iconColorClass: 'text-red-600',
    },
  ];

assignmentColumns: TableColumn[] = [
    { key: 'course', label: 'Course', type: 'text' },
    { key: 'assignment', label: 'Assignment', type: 'text' },
    { key: 'dueDate', label: 'Due Date', type: 'date' },
    { key: 'submissions', label: 'Submissions', type: 'text' },
    { key: 'actions', label: 'Actions', type: 'action' }  // for "View" button
  ];

  assignments = [
    {
      course: 'Math 101',
      assignment: 'Algebra Homework',
      dueDate: '2024-04-15',
      submissions: '15/25'
    },
    {
      course: 'Science 202',
      assignment: 'Lab Report 2',
      dueDate: '2024-04-16',
      submissions: '20/22'
    },
    {
      course: 'History 301',
      assignment: 'Essay on WWII',
      dueDate: '2024-04-17',
      submissions: '18/20'
    }
  ];

  onViewAssignment(row: any) {
    console.log('View clicked for:', row);
    // TODO: navigate to assignment detail
  }
  onViewAllAssignments() {
 this.router.navigate(['/assignments']);
}
}

  interface StatCard {
  title: string;
  value: string;
  icon: string;
  iconBgClass: string;
  iconColorClass: string;
}




