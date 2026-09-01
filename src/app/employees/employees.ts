import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-employees',
  styleUrl: './employees.css',
  templateUrl: './employees.html',
})
export class Employees {

  employees = [
    {
      id: 'EMP001',
      name: 'Anand',
      department: 'Engineering',
      designation: 'Software Developer',
      status: 'Active'
    },
    {
      id: 'EMP002',
      name: 'Arun',
      department: 'Human Resources',
      designation: 'HR Executive',
      status: 'Active'
    },
    {
      id: 'EMP003',
      name: 'Priya',
      department: 'Finance',
      designation: 'Finance Analyst',
      status: 'On Leave'
    }
  ];

  searchText = '';

  get filteredEmployees() {
    return this.employees.filter(employee =>
      employee.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      employee.id.toLowerCase().includes(this.searchText.toLowerCase()) ||
      employee.department.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  showAddEmployeeForm = false;
  selectedEmployee: any = null;
  newEmployee = {
    id: '',
    name: '',
    department: '',
    designation: '',
    status: 'Active'
  };

  addEmployee() {
    this.showAddEmployeeForm = true;
  }

  saveEmployee() {
    if (this.newEmployee.id && this.newEmployee.name) {
      this.employees.push(this.newEmployee);
      this.newEmployee = {
        id: '',
        name: '',
        department: '',
        designation: '',
        status: 'Active'
      };
      this.showAddEmployeeForm = false;
    }
  }

  viewEmployee(employee: any) {
    this.selectedEmployee = employee;
  }

  get totalEmployees() {
    return this.employees.length;
  }

  get activeEmployees() {
    return this.employees.filter(
      emp => emp.status === 'Active'
    ).length;
  }

  get employeesOnLeave() {
    return this.employees.filter(
      employee => employee.status === 'On Leave'
    ).length;
  }

}
