import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class WishlistAlertService {

  constructor(public alertController: AlertController) { }

  async presentAlertConfirm(header: string, message: string) {
    let choice;
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Okay',
          role: 'okay'
        }
      ]
    });

    await alert.present();
    await alert.onDidDismiss().then(data => {
      choice = data;
    });
    return choice;
  }
}
