import { Component, VERSION } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  donate: number;

  constructor(
    public toastController: ToastController,
    public alertController: AlertController
  ) {}
  async exibirToast(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }

  async alertaEntrada() {
    const alert = await this.alertController.create({
      header: 'Exemplo Input',
      inputs: [
        {
          name: 'inputNome',
          type: 'number',
          placeholder: 'Digite seu nome',
        },
      ],
      buttons: [
        {
          text: 'Ok',
          handler: (valor: any) => {
            this.donate = valor['inputNome'];
            this.exibirToast(this.donate.toString());
          },
        },
      ],
    });
    await alert.present();
  }
}
