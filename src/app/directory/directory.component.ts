import {Component, OnInit} from '@angular/core';
import {DirectoryService} from "./directory.service";
import {Employee} from "./mock-employees";

@Component({
  selector: 'app-directory',
  template: `
    <h2>Office Directory</h2>
    <ul>
      <li *ngFor="let employee of employees">{{employee.name}}</li>
    </ul>
  `,
  providers: [DirectoryService]
})
export class DirectoryComponent implements OnInit {
  private employees: Employee[];

  constructor(private directory: DirectoryService) {
    this.employees = this.directory.getEmployees();
  }

  ngOnInit() {
  }

}
