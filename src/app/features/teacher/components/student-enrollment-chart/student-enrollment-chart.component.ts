import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-student-enrollment-chart',
  standalone: true,   // standalone since Angular 15+
  imports: [NgChartsModule],  // <--- import chart module here
  templateUrl: './student-enrollment-chart.component.html',
  styleUrls: ['./student-enrollment-chart.component.css']
})
export class StudentEnrollmentChartComponent {
  // Example subjects and student enrollments
  subjects = ['Math 101', 'Science 202', 'History 301', 'English 401'];
  enrollments = [25, 22, 20, 30];

  barChartData: ChartData<'bar'> = {
    labels: this.subjects,
    datasets: [
      {
        label: 'Enrolled Students',
        data: this.enrollments,
        backgroundColor: ['#6366f1', '#22c55e', '#f97316', '#ef4444']
      }
    ]
  };

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
}
