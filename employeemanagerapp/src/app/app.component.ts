import {Component, OnInit} from '@angular/core';
import {Employee} from "./employee";
import {EmployeeService} from "./employee.service";
import {HttpErrorResponse} from "@angular/common/http";
import { NgForm } from '@angular/forms';
import {error} from "@angular/compiler-cli/src/transformers/util";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'recepieApp';
  loadedFeature = 'recepie';
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
 /* public employees: Employee[] =[];
  constructor(private employeeService: EmployeeService) {

  }*/

  /*ngOnInit() {
    this.getEmployees();
  }*/
 /* public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }*/

  /**
   * This method will open the proper modal
   * @param employee - the employee to be added
   * @param mode - the mode of the modal(Add, Edit, Delete)
   */
 /* public onOpenModal(mode: string,employee?:Employee): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    //check the mode and set the proper modal
    if (mode==='add'){
      button.setAttribute('data-bs-target', '#addEmployeeModal');
    }
    if (mode==='edit'){
      button.setAttribute('data-bs-target', '#updateEmployeeModal');
    }
    if (mode==='delete'){
      button.setAttribute('data-bs-target', '#deleteEmployeeModal');
    }
    //append the button to the container
    container?.appendChild(button);
    button.click();

  }

  public onAddEmpoyee(addForm: NgForm):void {
    const btn=document.getElementById('add-employee-form');
    btn?.click();
    this.employeeService.addEmployee(addForm.value).subscribe({
      next: (response) => {
        console.log(response);
        this.getEmployees();
        addForm.reset();
      },
      error: (error) => {
        alert(error.message);
        addForm.reset();
      }
    }
      /!*(response : Employee) => {

      },
      //handel the error
      (error : HttpErrorResponse) => {

      }*!/
    );

  }
*/

}
