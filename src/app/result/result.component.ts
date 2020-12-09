import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { NgForm } from '@angular/forms';
declare var M: any;

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [EmployeeService],
})
export class ResultComponent implements OnInit {
  isVisible = false;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.resetForm();
    this.refreshEmployeeList();
  }
  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employeeService.employees = res as Employee[];
    });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.employeeService.selectedEmployee = {
      _id: '',
      name: '',
      position: '',
      office: '',
      salary: null,
    };
  }

  onSubmit(form: NgForm) {
    if (form.value._id == '') {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.isVisible = false;
        this.resetForm(form);
        this.refreshEmployeeList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    } else {
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        this.isVisible = false;
        this.resetForm(form);
        this.refreshEmployeeList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  onEdit(emp: Employee) {
    this.isVisible = true;
    this.employeeService.selectedEmployee = emp;
  }

  onCancel() {
    this.isVisible = false;
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.refreshEmployeeList();
        // this.resetForm(form);
        this.isVisible = false;
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
}
