import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms'
 
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  
  title = 'FormArray Example in Angular Reactive forms';
 
  skillsForm:FormGroup;

  skillsItem=[
    {id:1,name:"c++"},
    {id:2,name:"c#"},
    {id:3,name:"py"},
    {id:4,name:"js"},
    {id:5,name:"js++"},
  ]
 
  constructor(private fb:FormBuilder) {
 
    this.skillsForm = this.fb.group({
      skill: null
    });
  
  }

  ngOnInit(): void {
    
  }



  onSubmit() {
    console.log(this.skillsForm.value);
  }
 
}
 
