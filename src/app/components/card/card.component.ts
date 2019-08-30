import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  response = JSON.parse('{"Employees" : [{"name":"Den","gender":"m","image":"http://placehold.it/400x260&text=Den","position":"Front-End Developer"},{"name":"Monica","gender":"f","image":"http://placehold.it/400x260&text=Monica","position":"Back-End Developer"},{"name":"Sara","gender":"f","image":"http://placehold.it/400x260&text=Sara","position":"Back-End Developer"},{"name":"Mike","gender":"m","image":"http://placehold.it/400x260&text=Mike","position":"Back-End Developer"},{"name":"John","gender":"m","image":"http://placehold.it/400x260&text=John","position":"Back-End Developer"},{"name":"Ivan","gender":"m","image":"http://placehold.it/400x260&text=Ivan","position":"Back-End Developer"},{"name":"Roman","gender":"m","image":"http://placehold.it/400x260&text=Roman","position":"Front-End Developer"},{"name":"Suzi","gender":"f","image":"http://placehold.it/400x260&text=Suzi","position":"PM"},{"name":"Andrew","gender":"Developer","image":"http://placehold.it/400x260&text=Andrew","position":"Back-End Developer"},{"name":"Zoi","gender":"f","image":"http://placehold.it/400x260&text=Zoi","position":"HR"}]}');
  employees = this.response.Employees;
  shuffleEmployees;
  randomEmployees;
  currentEmployee;

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  getRandomEmployees(employees) {
    // let arr = [];
    // let randomEmp;
    // arr.push(this.currentEmployee.name);
    // for(var i = 0; arr.length < 4; i++){
    //   randomEmp = employees[Math.floor(Math.random() * employees.length)];
    //   console.log(randomEmp.name);
    //   if((arr.includes(randomEmp.name) === false) && (randomEmp.gender === this.currentEmployee.gender)){
    //     arr.push(randomEmp.name);
    //   } else {
    //     console.log('--');
    //   }
    // }
    let filteredEmp = this.shuffleEmployees.filter(function(item){
      return item.gender === this.currentEmployee.gender;
    });
    return this.shuffleArray(filteredEmp.slice(0, 3).push(this.currentEmployee));
  }

  ngOnInit() {
    this.shuffleEmployees = this.shuffleArray(this.employees);
    this.currentEmployee = this.shuffleEmployees[0];
    this.randomEmployees = this.getRandomEmployees(this.employees);
    console.log(this.randomEmployees);
  }

  onAnswerButtonClick() {

  }


}
