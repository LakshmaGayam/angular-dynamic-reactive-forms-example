import { Component, OnInit, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  addForm: FormGroup;
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.addForm = this.fb.group({
      address: this.fb.array([this.addressControls()])
    })
  }


  get addressArray() {
    return this.addForm.get('address') as FormArray;
  }

  addressControls() {
    return this.fb.group({
      city: [''],
      phone: ['']
    })
  }


  addAddress() {
    this.addressArray.push(this.addressControls());
  }


  removeAddress(i) {
    this.addressArray.removeAt(i);
  }

  submit() {
    console.log(this.addForm.value)
    console.log(this.addForm.controls.address.value)
  }
}
