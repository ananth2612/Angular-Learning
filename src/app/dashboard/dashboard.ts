import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  imports: [DecimalPipe],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  totalEmployees = 25;
  totalDepartments = 5;
  totalSalary = 1250000;
  activeEmployees = 22;
  inactiveEmployees = 3;
  
  employees = [
    {
      id: 1,
      name: 'Anand',
      department: 'IT',
      salary: 60000
    },
    {
      id: 2,
      name: 'Arun',
      department: 'HR',
      salary: 55000
    },
    {
      id: 3,
      name: 'Priya',
      department: 'Finance',
      salary: 70000
    },
    {
      id: 4,
      name: 'Kumar',
      department: 'Marketing',
      salary: 50000
    }
  ];
}
