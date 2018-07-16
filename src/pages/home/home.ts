import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  myForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      company: ['', [Validators.required]],
      email: ['', [Validators.required]],
      age: ['', [Validators.required]],
      url: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  saveData(){
    alert(JSON.stringify(this.myForm.value));
  }

}
