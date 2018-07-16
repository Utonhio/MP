import { Component } from '@angular/core';
import { IonicPage, NavController,LoadingController, 
  Loading, 
  AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
   myForm: FormGroup;
   public loading:Loading;
  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public afAuth: AngularFireAuth, 
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController
  ) {
    this.myForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

signup(){

  console.log("Email:" + this.myForm.value.email);
  console.log("Password:" + this.myForm.value.password);
 

  this.afAuth.auth.createUserWithEmailAndPassword(this.myForm.value.email, this.myForm.value.password)
  .then(
    res => {
      let alert = this.alertCtrl.create({

        message: "Gracias por registrarte"
      });
      alert.present();
      this.navCtrl.setRoot('principal page');
    }, error => {
      this.loading.dismiss().then( () => {
        let alert = this.alertCtrl.create({ 
          message: error.message,
          buttons: [
            {
              text: "Ok",
              role: 'cancel'
            }
          ]
        });
        alert.present();
      });
    });

    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
    });
    this.loading.present();
  
}

}
