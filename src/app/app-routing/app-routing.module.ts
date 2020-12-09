import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from '../result/result.component';
import { EmployeeComponent } from '../employee/employee.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'result', component: ResultComponent, },
  { path: 'employee', component: EmployeeComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  EmployeeComponent,
  ResultComponent,
  HomeComponent
];
