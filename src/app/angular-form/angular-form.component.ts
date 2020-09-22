import { Component, OnInit } from '@angular/core';
import { SampleForm } from '../sample-form';

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class AngularFormComponent implements OnInit {

  isAngular : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  courseName = ['Angular','Java','Spring','Hibernate','REST'];
  model = new SampleForm('EshtechZ',this.courseName[0]);

  onSubmit(){
    console.log(this.model.courseName);
    if (this.model.courseName=='Angular') {
      this.isAngular = true;
    } else {
      this.isAngular = false;
    }
  }
}
