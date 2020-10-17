import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public userForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              public toastController: ToastController,
              private router: Router) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: ['', [Validators.required], []],
      password: ['', [Validators.required], []]
    });
  }

  login(){
    if (this.userForm.invalid){
      return;
    }

    const email = this.userForm.get('email').value;
    const password = this.userForm.get('password').value;

    this.authService.login(email, password).subscribe( resp => {
      this.router.navigateByUrl('/maquinas');
    }, err => {
      this.presentToast(err.error.message);
    });

  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }
}
