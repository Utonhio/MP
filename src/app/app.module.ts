import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PrincipalPage} from '../pages/principal/principal';
import { ProfilePage} from '../pages/profile/profile';
import { AgendarcitaPage } from '../pages/agendarcita/agendarcita';
import { NosotrosPage } from '../pages/nosotros/nosotros';
import { QuehacemosPage} from '../pages/quehacemos/quehacemos';
import { ResetPasswordPage} from '../pages/reset-password/reset-password';
import { SignupPage} from '../pages/signup/signup';
import { PrincipalPageModule } from '../pages/principal/principal.module';
import { QuehacemosPageModule } from '../pages/quehacemos/quehacemos.module';
import { AgendarcitaPageModule } from '../pages/agendarcita/agendarcita.module';
import { NosotrosPageModule } from '../pages/nosotros/nosotros.module';
import { LoginPageModule } from '../pages/login/login.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';

export const firebaseConfig = {
  apiKey: "AIzaSyCkH9zCbcAKNkGUOAH71HenPwiDzbe4OMU",
  authDomain: "martinezprado-bcd97.firebaseapp.com",
  databaseURL: "https://martinezprado-bcd97.firebaseio.com",
  storageBucket: "martinezprado-bcd97.appspot.com",
  messagingSenderId: '<868733898461>'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    PrincipalPage,
    ProfilePage,
    NosotrosPage,
    QuehacemosPage,
    ResetPasswordPage,
    SignupPage,
    AgendarcitaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{},{
      links: [
        {component:PrincipalPage,name:'principal page',segment:'principalpage'},
        {component:NosotrosPage,name:'nosotros page',segment:'nosotrospage'},
        {component:QuehacemosPage,name:'quehacemos page',segment:'quehacemospage'},
        {component:AgendarcitaPage,name:'agendarcita page',segment:'agendarcitapage'},
        {component:ResetPasswordPage,name:'reset-password page',segment:'resetpasswordpage'},
        {component:SignupPage,name:'signup page',segment:'signupage'}

      ]
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    LoginPageModule,
    PrincipalPageModule,
    NosotrosPageModule,
    QuehacemosPageModule,
    AgendarcitaPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PrincipalPage,
    ProfilePage,
    ResetPasswordPage,
    NosotrosPage,
    QuehacemosPage,
    SignupPage,
    AgendarcitaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseDbProvider
  ]
})
export class AppModule {}