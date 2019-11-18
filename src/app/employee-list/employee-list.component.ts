import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../category';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>;
  category: Observable<Category[]>;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();


    
  }

  reloadData(){
    this.employees= this.employeeService.getEmployeeList();
    this.category=this.employeeService.getCategoryList();
  }

  onOptionsSelected(value:number){
       console.log("the selected value is " + value);

    if(value==0||value==null)
    {
      this.employees=this.employeeService.getEmployeeList();
    }
    else
    {
      this.employees=this.employeeService.getCategory(value);
    }

    this.category=this.employeeService.getCategoryList();
  }

  employeeDetails(id: number){
    console.log("selected ID: " +id);
    this.router.navigate(['details', id]);
  }

  deleteEmployee(id:number){
    if(confirm('Do you want to Delete this Record?'))
    {
      this.employeeService.deleteEmployee(id).subscribe(data=>{
        console.log(data);
        this.reloadData();
      })
      
    }
  
  }

}
