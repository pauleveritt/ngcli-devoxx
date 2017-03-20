import {Injectable} from '@angular/core';
import {Employee, EMPLOYEES} from "./mock-employees";

@Injectable()
export class DirectoryService {
  title: string = 'Foo';

  constructor() {
  }

  getEmployees(): Employee[] {
    return EMPLOYEES;
  }
}
