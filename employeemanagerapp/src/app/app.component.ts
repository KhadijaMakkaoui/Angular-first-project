import {Component, OnInit} from '@angular/core';
import {Employee} from "./employee";
import {EmployeeService} from "./employee.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'employeemanagerapp';
  public employees: Employee[] = [];
  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.getEmployees();
  }
  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  /**
   * This method will open the proper modal
   * @param employee - the employee to be added
   * @param mode - the mode of the modal(Add, Edit, Delete)
   */
  public onOpenModal(employee: Employee, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    //check the mode and set the proper modal
    if (mode=='add'){
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode=='edit'){
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode=='delete'){
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    //append the button to the container
    // @ts-ignore
    container.appendChild(button);
    button.click();
  }
}
