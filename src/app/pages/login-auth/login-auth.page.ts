import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  qty: any;
  public postData = {
    grant_type: 'password',
    username: '',
    password: ''
  };

  constructor(
    private router: Router,
    private toastService: ToastService,
    private storageService: StorageService,
    private authService: AuthService) { }

  ngOnInit() {
  }

    // Trim the input postData
    validateInputs(){
      const username = this.postData.username.trim();
      const password = this.postData.password.trim();

      return (this.postData.username && this.postData.password && username.length > 0 && password.length > 0 && this.postData.grant_type);
    }
  firstLogin(){
    console.log(this.qty);
    if (this.qty === '011'){
      if (this.validateInputs){
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

   // alert('hello');
   // if (this.validateInput()){
   //   // this.authService.login(this.postData).subscribe([res: any] =>{

   //   // })
   // }else{

   //   console.log('Please give some information');
   // }
   }

}
