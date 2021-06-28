import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { AuthConstants } from 'src/app/config/auth-constants';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.page.html',
  styleUrls: ['./login-auth.page.scss'],
})
export class LoginAuthPage implements OnInit {
  code: any;
  public postData = {
    grant_type: 'password',
    username: '',
    password: ''
  };

  private loading;

  constructor(
    private router: Router,
    private toastService: ToastService,
    private storageService: StorageService,
    private authService: AuthService,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

    // Trim the input postData
    validateInputs(){
      const username = this.postData.username.trim();
      const password = this.postData.password.trim();

      return (this.postData.username && this.postData.password && username.length > 0 && password.length > 0 && this.postData.grant_type);
    }
  firstLogin(){
    this.loadingCtrl.create({
      message: 'Authenticating...'
  }).then((overlay) => {
    this.loading = overlay;
    this.loading.present();
  });
    setTimeout(() => {
        this.loading.dismiss();
        console.log(this.code);
        if (this.code === '011'){
          if (this.validateInputs){
            // tslint:disable-next-line: deprecation
            this.authService.login(this.postData).subscribe((res: any) => {
              console.log('Done validate');
              console.log(res);
              // userData depend on name in API
              if (res) {
                // Storing the User data.
                this.storageService.store(AuthConstants.AUTH, res.access_token);
                this.router.navigate(['./home/search']);
              } else {
                this.toastService.presentToast('Incorrect username and password');
              }
            },
            (error: any) => {
              if (error.status === 400){
                this.toastService.presentToast('Incorrect username and password');
              }
              else {
              this.toastService.presentToast('Network Connection Error.');
              }
            });
          }
          // this.router.navigate(['./home/search']);
        }
        else{
          this.toastService.presentToast('Authorization failed! Please try again.');
        }

      }, 6000);

   }

}
