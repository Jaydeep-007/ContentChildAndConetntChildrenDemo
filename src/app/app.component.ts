import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ContentChildAndConetntChildrenDemo';

  student1 = [
    {'Id' : 1, 'Name': 'Piysuh Deshmukh', 'Address': 'Pune', 'Age': 26}
  ] 

  student2 = [
    {'Id' : 2, 'Name': 'Vivek Patil', 'Address': 'Nashik', 'Age': 28}
  ] 

  student3 = [
    {'Id' : 2, 'Name': 'Rajeshwar Ahire', 'Address': 'Mumbai', 'Age': 25}
  ] 
  
}
