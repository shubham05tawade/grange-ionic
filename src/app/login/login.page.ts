import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  password: string ="";

  isAlertOpen = false;
  public alertButtons = ['OK'];

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(){
    if(! this.loginService.login(this.email, this.password)){
      this.showError(true);
    }
    else{
      this.router.navigate(["/home"])
    }
  }

  async onLoginWithGoogle(){
    const isLogin = await this.loginService.loginWithGoogle();
    if(isLogin){
      this.router.navigate(["/home"])
    }
    else{
      this.showError(true);
    }
  }

  async onLoginWithTwitter(){
    if(await this.loginService.loginWithTwitter()){
      this.router.navigate(["/home"])
    }
    else{
      this.showError(true);
    }
  }

  async onLoginWithFacebook(){
    if(await this.loginService.loginWithFacebook()){
      this.router.navigate(["/home"])
    }
    else{
      this.showError(true);
    }
  }

  showError(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

}
