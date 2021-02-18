import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { MywishlistService } from 'src/app/services/mywishlist.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-mywishlist',
  templateUrl: './mywishlist.page.html',
  styleUrls: ['./mywishlist.page.scss'],
})
export class MywishlistPage implements OnInit {
  public authUser: any;
  postData = {
    token: ''
  };


  constructor(
    private modalContoller: ModalController,
    private auth: AuthService,
    private wishlistService: MywishlistService,
    private toastService: ToastService) { }

  async openModel(){
  }
  ngOnInit() {
        // tslint:disable-next-line: deprecation
        this.auth.userData$.subscribe((res: any) => {
          this.authUser = res;
          console.log(res);
          this.getWishlist(res);
        });
  }

  getWishlist(token: any){
    // this.postData.token = this.authUser;
    console.log('This is token');
    console.log(token);
    // tslint:disable-next-line: deprecation
    this.wishlistService.wishlistData(token).subscribe(
        (res: any) => {
          console.log('Wishlist response');
          console.log(res);
          this.wishlistService.changeWishlistData(res);
        },
        (error: any) => {
          this.toastService.presentToast('Loading...');
        }
      );

  }

}


