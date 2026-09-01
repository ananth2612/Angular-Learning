import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./dashboard/dashboard').then(m => m.Dashboard)
    },
    {
        path: 'employees',
        loadComponent: () =>
            import('./employees/employees').then(m => m.Employees)
    },
    // {
    //     path: 'departments',
    //     loadComponent: () =>
    //         import('./departments/departments').then(m => m.Departments)
    // },
    // {
    //     path: 'settings',
    //     loadComponent: () =>
    //         import('./settings/settings').then(m => m.Settings)
    // }
];
