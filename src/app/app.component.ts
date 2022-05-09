import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Template driven forms';
  contactForm = new FormGroup({
    firstname: new FormControl({value:"raj",disabled:false  },[Validators.required,Validators.min(3)]),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      pincode: new FormControl(),
    }),
  });

  countryList: country[] = [
    new country('1', 'India'),
    new country('2', 'USA'),
    new country('3', 'England'),
  ];

  ngOnInit(): void {
    this.contactForm.get('firstname')?.statusChanges.subscribe(status=>{
      console.log(status)
      console.log(this.contactForm.dirty);
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
    console.log(this.contactForm.dirty);
  }
}

export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
