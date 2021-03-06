import { Component, OnInit } from "@angular/core";
import {Employee} from '../models/employee.model'

@Component({
  templateUrl: "./list-employees.component.html",
  styleUrls: ["./list-employees.component.css"]
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: "Beatriz",
      gender: "Female",
      contactPreference: "Email",
      email: "B@gmail.com",
      dateOfBirth: new Date("10/25/1998"),
      department: "Model",
      isActive: true,
      photoPath: "assets/images/Beatriz.jpg"
    },
    {
      id: 2,
      name: "Cowboy",
      gender: "Male",
      contactPreference: "Email",
      email: "Boyz@gmail.com",
      dateOfBirth: new Date("10/25/1979"),
      department: "Football",
      isActive: true,
      photoPath: "assets/images/cowboys wallpaper.jpg"
    },
    {
      id: 3,
      name: "Cowboy Team",
      gender: "Male",
      contactPreference: "Email",
      email: "Cowboyz@gmail.com",
      dateOfBirth: new Date("10/25/1908"),
      department: "Football",
      isActive: true,
      photoPath: "assets/images/cowboys.jpg"
    },
    {
      id: 4,
      name: "Eric",
      gender: "Male",
      contactPreference: "Email",
      email: "scorpio@gmail.com",
      dateOfBirth: new Date("11/08/1986"),
      department: "Developer",
      isActive: true,
      photoPath: "assets/images/eric-dummy-data.jpg"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
