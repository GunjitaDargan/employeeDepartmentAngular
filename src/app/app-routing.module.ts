import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';

const routes: Routes = [{path:'home',component:HomeComponent},
{path:'employees',component:EmployeesComponent},
{path : 'department',component:DepartmentComponent},{path:'add-department',component:DepartmentAddComponent},
{path:'add-employees',component:EmployeeAddComponent},{path:'edit-employee/:id',component:EmployeeEditComponent},
{path:'edit-department/:id',component:DepartmentEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// const routes: Routes = [
//   { path: 'first-component', component: FirstComponent },
//   { path: 'second-component', component: SecondComponent },
// ];