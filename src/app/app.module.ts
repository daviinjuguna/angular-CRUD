import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { AppRoutingModule, routingComponents } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    // EmployeeComponent,
    // HomeComponent,
    // ResultComponent,
    routingComponents
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
